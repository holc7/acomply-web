// [perf-audited 2026-05-28 / typescript-best-practices] audited-clean — no findings
//
// Sync messages/en.json with messages/es.json — translate ONLY missing
// keys via Claude. Idempotent: re-running is a no-op when in sync.
//
// Future content workflow:
//   1. Author adds a new key to messages/es.json
//   2. Run `npm run i18n:sync`
//   3. (Optional) Spawn the QA agent on the diff
//   4. Commit both files
//
// Never overwrites existing EN values (use --force-key path.to.key in a
// later version when needed). Adding new locales is a one-line change:
// extend the LOCALES array and the system-prompt locale-specific block.

import Anthropic from "@anthropic-ai/sdk";
import fs from "node:fs/promises";
import path from "node:path";

const ROOT = path.resolve(__dirname, "..");
const ES_PATH = path.join(ROOT, "messages/es.json");
const EN_PATH = path.join(ROOT, "messages/en.json");

const MODEL = "claude-opus-4-7";
const MAX_TOKENS = 1024;

const SYSTEM_PROMPT = `You are translating a single Spanish UI string from the Acomply marketing site to English.

BRAND VOICE:
- Confident, warm, slightly aspirational. Short sentences. Active voice.
- "Acompañado" → "supported" or "with you" depending on rhythm. NEVER "accompanied" (too clinical).
- Headlines stay punchy in EN. CTAs are verb-led ("Book", "Start", "Talk") not noun-led.

PRESERVE VERBATIM (do not translate, identical EN === ES):
- Brand: Acomply, Mía, Esencial, Maestro, Élite
- Verticals: Barbería, Salón de belleza, Uñas, Spa & wellness, Clínica estética
- Products: WhatsApp, Wompi, Bancolombia, Meta, Vercel, Neon, Resend, OpenAI, Google, Habeas Data
- Legal references: Ley 1581 de 2012, Decreto 1377, Superintendencia de Industria y Comercio (SIC)
  → For these, ADD an English parenthetical: "Law 1581 of 2012 (Habeas Data — Colombia's data protection law)"
- Currency literals: $39.900, $59.900, $79.900, $12.000, $25.000, $45.000 — unchanged in EN
- Period suffix: "/mes · facturación mensual" → "/mo · billed monthly"
- Placeholder names: Andrés Martínez, Alpha Lion Barbería — keep verbatim (cultural authenticity)
- Email addresses + phone numbers + URLs — unchanged

RICH-TEXT TAGS:
- Preserve <strong>, <b>, <em>, <br/>, <a>, <amp>, <code> exactly. Their text content gets translated; the tag itself does not.
- Place tags around the EQUIVALENT English emphasis. Example: "<strong>3 huecos libres</strong> mañana" → "<strong>3 open slots</strong> tomorrow"
- href values inside <a> are not translatable; leave them alone.

LENGTH:
- Button labels MUST be ≤ 1.2× ES char count (avoid breaking UI).
- Headlines: keep word count within 1 of ES.

OUTPUT:
- Return ONLY the English translation as raw text. No quotes, no markdown, no explanation, no "Here's the translation:".
- If the ES value is one of the verbatim brand/legal/currency items above, return it UNCHANGED.`;

type Json = string | number | boolean | null | Json[] | { [k: string]: Json };

function isObject(v: Json): v is { [k: string]: Json } {
  return typeof v === "object" && v !== null && !Array.isArray(v);
}

function flatten(obj: Json, prefix = ""): Map<string, string> {
  const out = new Map<string, string>();
  if (obj === null || typeof obj !== "object") return out;
  if (Array.isArray(obj)) {
    obj.forEach((v, i) => {
      if (typeof v === "string") out.set(`${prefix}[${i}]`, v);
      else if (v !== null && typeof v === "object") {
        for (const [k, val] of flatten(v, `${prefix}[${i}]`)) out.set(k, val);
      }
    });
    return out;
  }
  for (const [k, v] of Object.entries(obj)) {
    const key = prefix ? `${prefix}.${k}` : k;
    if (typeof v === "string") out.set(key, v);
    else if (v !== null && typeof v === "object") {
      for (const [k2, v2] of flatten(v, key)) out.set(k2, v2);
    }
  }
  return out;
}

// Set a value at a dotted/indexed key path. Auto-creates intermediate
// objects but throws if it would have to overwrite a non-object.
function setNested(root: Json, keyPath: string, value: string): void {
  const tokens: (string | number)[] = [];
  let i = 0;
  while (i < keyPath.length) {
    if (keyPath[i] === ".") { i++; continue; }
    if (keyPath[i] === "[") {
      const end = keyPath.indexOf("]", i);
      tokens.push(Number(keyPath.slice(i + 1, end)));
      i = end + 1;
    } else {
      const nextDot = keyPath.indexOf(".", i);
      const nextBracket = keyPath.indexOf("[", i);
      const end = [nextDot, nextBracket].filter(n => n > -1).reduce(
        (a, b) => Math.min(a, b), keyPath.length,
      );
      tokens.push(keyPath.slice(i, end));
      i = end;
    }
  }

  let cur: any = root;
  for (let j = 0; j < tokens.length - 1; j++) {
    const tok = tokens[j];
    const nextTok = tokens[j + 1];
    if (cur[tok] === undefined) {
      cur[tok] = typeof nextTok === "number" ? [] : {};
    }
    cur = cur[tok];
  }
  cur[tokens[tokens.length - 1]] = value;
}

async function translateOne(
  key: string,
  esValue: string,
  client: Anthropic,
): Promise<string> {
  const resp = await client.messages.create({
    model: MODEL,
    max_tokens: MAX_TOKENS,
    system: SYSTEM_PROMPT,
    messages: [
      {
        role: "user",
        content: `Key path: ${key}\n\nSpanish:\n${esValue}\n\nEnglish:`,
      },
    ],
  });
  const block = resp.content[0];
  if (block.type !== "text") {
    throw new Error(`Translator returned non-text response for ${key}`);
  }
  return block.text.trim();
}

async function main() {
  if (!process.env.ANTHROPIC_API_KEY) {
    console.error("ANTHROPIC_API_KEY env var required. Add to .env.local or export inline.");
    process.exit(1);
  }

  const [esRaw, enRaw] = await Promise.all([
    fs.readFile(ES_PATH, "utf8"),
    fs.readFile(EN_PATH, "utf8").catch(() => "{}"),
  ]);

  let es: Json;
  let en: Json;
  try {
    es = JSON.parse(esRaw);
  } catch (e) {
    console.error(`Invalid JSON in ${ES_PATH}:`, e);
    process.exit(1);
  }
  try {
    en = JSON.parse(enRaw);
  } catch (e) {
    console.error(`Invalid JSON in ${EN_PATH}:`, e);
    process.exit(1);
  }

  const esFlat = flatten(es);
  const enFlat = flatten(en);

  const missing: Array<[string, string]> = [];
  for (const [key, esValue] of esFlat) {
    if (!enFlat.has(key)) missing.push([key, esValue]);
  }

  if (missing.length === 0) {
    console.log("✓ en.json is in sync with es.json. No keys to translate.");
    return;
  }

  console.log(`Translating ${missing.length} missing key(s)...`);
  const client = new Anthropic();

  let done = 0;
  for (const [key, esValue] of missing) {
    try {
      const enValue = await translateOne(key, esValue, client);
      setNested(en, key, enValue);
      done++;
      const trunc = (s: string) => (s.length > 60 ? s.slice(0, 57) + "..." : s);
      console.log(`  [${done}/${missing.length}] ${key}\n      ES: ${trunc(esValue)}\n      EN: ${trunc(enValue)}`);
    } catch (e) {
      console.error(`  ✗ ${key}: ${(e as Error).message}`);
    }
  }

  await fs.writeFile(EN_PATH, JSON.stringify(en, null, 2) + "\n", "utf8");
  console.log(
    `\n✓ Wrote ${done} new translation(s) to ${path.relative(ROOT, EN_PATH)}.`,
  );
  console.log("Next step: run the QA agent on the diff before committing.");
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
