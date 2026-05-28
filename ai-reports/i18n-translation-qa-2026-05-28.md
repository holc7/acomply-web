# i18n translation QA — acomply-web — 2026-05-28

## Summary

- **Total keys reviewed:** 489 leaves across 18 namespaces (parity confirmed: both `es.json` and `en.json` flatten to 489 keys, zero key drift).
- **Findings by severity:** 🔴 0 critical · 🟡 2 warning · 🟢 4 note
- **Recommendation:** **SHIP**

The translation is in excellent shape. Coverage is perfect (every ES key has an EN counterpart), every rich-text tag count matches one-for-one, no `<a href="…">` URL drift, no decimal-comma swap in pricing, "Habeas Data" is correctly preserved with the EN parenthetical, "Ley 1581" is consistently rendered as "Law 1581", and the forbidden translation "accompanied" appears nowhere. No Spanish word bleed in EN outside the verbatim allowlist. All UI-constrained button/nav/pill keys are within the 1.4× length budget. Brand voice (punchy, active, verb-led CTAs) is honored throughout. Only two minor consistency issues and a handful of stylistic observations remain.

---

## Critical findings (🔴)

None.

---

## Warnings (🟡)

### W1. `marketing_ia.screen.sugg_strong` — inconsistent rendering of "Asistente de análisis"

- **Key:** `marketing_ia.screen.sugg_strong`
- **ES:** `"Sugerido por Asistente de Análisis"`
- **EN:** `"Suggested by Analyst"`
- **Issue:** Every other occurrence of "Asistente de análisis" (5 sibling keys: `analisis.aria_eyebrow`, `analisis.eyebrow_text`, `analisis.screen.title`, `pricing.tier_maestro.features.analyst_label`, `faq.items.4.a` body) is rendered as **"Analyst assistant"** in EN. This one key drops `assistant` and reads just "Analyst", which fragments the product-name. A user reading the marketing-IA screen mock and then the FAQ would see two different agent names.
- **Proposed fix:** `"Suggested by Analyst assistant"` (length 27, within UI budget; the surrounding screen mock has room).

### W2. `app.description` / `footer.tagline` — "acompaña" rendered as "runs" drifts from the Translator brief

- **Keys:** `app.description`, `footer.tagline` (duplicate ES value)
- **ES:** `"Acomply acompaña tu operación diaria: reservas, clientes, pagos, WhatsApp e IA en una sola plataforma para negocios de servicio."`
- **EN:** `"Acomply runs your day-to-day: bookings, customers, payments, WhatsApp and AI in one platform for service businesses."`
- **Issue:** The Translator brief defines `acompaña / acompañado` → `supports / supported` (the core brand promise — "Tu negocio, siempre acompañado." → "Your business, always supported." — is correctly rendered everywhere else, including `app.title`, `hero.h1_line2`, `closing.pill`). Switching to "runs" in two flagship description fields breaks the metaphor — Acomply is not the operator, it's the accompanier. This is the head meta-description Google indexes and the footer tagline visible on every page.
- **Proposed fix:** `"Acomply supports your day-to-day: bookings, customers, payments, WhatsApp and AI in one platform for service businesses."` (matches `hero.sub` which already renders "te acompaña" as "supports you").
- **Confidence:** medium — "runs" is punchy and not wrong English, but it diverges from the Translator's own brief and from the rest of the file. Needs Denis confirmation.

---

## Notes (🟢)

### N1. `pricing.suggestion.label` — semantic leap from "Te queda:" to "Best fit:"

- **ES:** `"Te queda:"` (lit. "It fits you:")
- **EN:** `"Best fit:"`
- The Spanish is informal/colloquial and reads like the slider whispering "this is your size". "Best fit:" is the marketing-correct English equivalent and aligns with the EN landing-page register. **No change recommended** — calling out only because the translation is non-literal.

### N2. `footer.copyright.nit_status` — "NIT" expanded to "Tax ID" in EN

- **ES:** `"NIT en proceso"`
- **EN:** `"Tax ID pending"`
- The verbatim allowlist includes NIT, so a strict reading would expect `"NIT pending"`. The Translator chose to localize for EN-reader comprehension (most non-Colombian EN visitors don't know NIT = Número de Identificación Tributaria). This is a reasonable liberty for a footer micro-string. **No change recommended.**

### N3. `hero.wa_card.time` — Colombian "10:30 a. m." rendered as US "10:30 AM"

- **ES:** `"10:30 a. m."` (Colombian convention, lowercase + spaces)
- **EN:** `"10:30 AM"` (US convention, uppercase, no periods)
- AGENTS.md states the lowercase `a. m.` / `p. m.` convention applies to the Colombian Spanish locale; for EN we'd expect US convention. The EN rendering is correct for its locale. **No change recommended.**

### N4. Two ES literal-text placeholders inside `'{'…'}'` got translated (`negocio` → `business`)

- **Keys:** `legal.privacy.s2.li[1]`, `legal.terms.s2.li[1]`
- **ES:** `acomply.co/'{'negocio'}'`
- **EN:** `acomply.co/'{'business'}'`
- These are next-intl ICU literal escapes used to render the literal text `{negocio}` (illustrative URL slug) inside the rendered string. In production the actual URL pattern is the shop slug (e.g. `acomply.co/alpha-lion`), so this is purely illustrative. Translating the placeholder text to `{business}` for EN reads more naturally to EN audiences. **No change recommended** — both are valid stylistic choices.

---

## Out-of-scope finding (not a translation bug)

### OOS1. ES typo in `hero.wa_card.body` — `"Se envio"` should be `"Se envió"`

- **Key:** `hero.wa_card.body`
- **ES:** `"Se envio recordatorio por<br/>WhatsApp a Camila R."`
- The Spanish verb form is past-tense `envió` (with acute accent on the `ó`); the file has `envio` (no accent), which in Spanish would parse as the noun "envío" minus its tilde — incorrect grammar. EN side reads cleanly (`"WhatsApp reminder sent to Camila R."`), so the translation did not propagate the typo, but the ES side should be fixed independently. This is a Spanish-authoring bug, not a translation QA finding. **Flagged for Denis to fix in `es.json` directly.**

---

## Verbatim check

44 leaf keys have EN === ES. **All 44 are on the verbatim allowlist** — zero untranslated-content bugs.

Classification:

| Category | Keys | Count |
|---|---|---|
| Brand tokens (Acomply, WhatsApp, Mía-adjacent) | `footer.links.whatsapp`, `demo_modal.field.whatsapp_label`, `footer.copyright.entity`, `legal.shell.back`, `legal.privacy.s9.h2` | 5 |
| Tier names (Esencial/Maestro/Élite — must stay Spanish per brief) | `pricing.suggestion.{esencial,maestro,elite}`, `pricing.tier_labels.{esencial,maestro,elite}`, `pricing.tier_{esencial,maestro,elite}.name` | 9 |
| Vertical names (Barbería/Salón/Uñas/Spa/Clínica — must stay Spanish per brief) | `vertical.{barberia,clinica,salon,spa,unas}.name` | 5 |
| Placeholder names (Andrés Martínez, Alpha Lion Barbería) | `demo_modal.field.{name,business}_placeholder` | 2 |
| Phone number | `demo_modal.field.whatsapp_placeholder` | 1 |
| Currency literals ($1.850.000, $25.000, etc. — Colombian dot format intentional) | `marketing_ia.screen.detail_revenue_value{,_range}`, all 6 `recargas.packs.*.tiers.*.price` | 8 |
| Pack tier amount numbers / nav numbers | `recargas.packs.*.tiers.*.amt` (6), `marketing_ia.eyebrow_num`, `analisis.eyebrow_num`, `marketing_ia.screen.detail_expected_value` | 9 |
| Generic English/Spanish-cognate words that don't change | `footer.legal_head` ("Legal"), `footer.links.blog` ("Blog"), `footer.bottom_links.cookies` ("Cookies"), `legal.shell.bottom.cookies` ("Cookies"), `recargas.packs.looks.unit` ("looks") | 5 |

No `UNTRANSLATED-BUG` matches.

---

## Length-constrained key char counts

All keys within the 1.4× tolerance — zero UI overflow risk.

| Key | ES chars | EN chars | EN/ES ratio | Flag |
|---|---:|---:|---:|---|
| `nav.producto` | 8 | 7 | 0.88 | |
| `nav.precios` | 7 | 7 | 1.00 | |
| `nav.empresa` | 7 | 7 | 1.00 | |
| `nav.cta` | 22 | 16 | 0.73 | |
| `hero.cta_primary` | 22 | 16 | 0.73 | |
| `hero.trust.no_card` | 11 | 14 | 1.27 | |
| `hero.trust.setup_time` | 23 | 15 | 0.65 | |
| `hero.trust.secure_data` | 13 | 11 | 0.85 | |
| `closing.cta_primary` | 22 | 16 | 0.73 | |
| `closing.cta_whatsapp` | 18 | 16 | 0.89 | |
| `demo_modal.submit_idle` | 15 | 12 | 0.80 | |
| `demo_modal.submit_loading` | 9 | 8 | 0.89 | |
| `pricing.tier_esencial.cta` | 20 | 19 | 0.95 | |
| `pricing.tier_maestro.cta` | 19 | 18 | 0.95 | |
| `pricing.tier_elite.cta` | 17 | 16 | 0.94 | |
| `sticky.cta` | 22 | 16 | 0.73 | |
| `locale_switcher.label_es` | 17 | 17 | 1.00 | |
| `locale_switcher.label_en` | 16 | 17 | 1.06 | |

The only key where EN exceeds ES meaningfully is `hero.trust.no_card` ("Sin tarjeta" 11 → "No credit card" 14, ratio 1.27). Still well under 1.4×.

---

## Rich-text tag integrity

Scanned every leaf containing `<strong>`, `<b>`, `<em>`, `<amp>`, `<code>`, `<br/>`, `<a>`. **Zero mismatches.** Opening-tag count, closing-tag count, and self-closing-tag count are identical in ES vs EN for every key. Placement was inspected on the rich keys (`hero.ai_card.body`, `faq.items.3.a`, `legal.privacy.s2.li`, `marketing_ia.screen.promo_title`, `resultados.cards.*`) — every `<strong>` / `<em>` wraps the equivalent English emphasis (e.g., `<strong>3 huecos libres</strong>` → `<strong>3 open slots</strong>`).

No `<a href="…">` attributes exist anywhere in the catalog — the codebase uses the next-intl `<a>chunks</a>` callback pattern, so URL drift is structurally impossible.

---

## Coverage parity

- ES leaf count: **489**
- EN leaf count: **489**
- Key paths diff (sorted): **empty**
- ES keys missing in EN: **0** (no `MISSING_MESSAGE` runtime risk)
- EN keys missing in ES: **0** (no vestigial keys)

---

## Pricing & currency

- Tier names `Esencial` / `Maestro` / `Élite` preserved in Spanish across both files (9 keys). ✅
- Vertical names `Barbería` / `Salón de belleza` / `Uñas` / `Spa & wellness` / `Clínica estética` preserved in Spanish across both files (5 keys). ✅
- Currency literals: every `$39.900`, `$59.900`, `$79.900`, `$12.000`, `$25.000`, `$45.000`, `$15.000`, `$35.000`, `$50.000`, `$1.850.000`, `$2.450.000` reads identically in EN. ✅ **No decimal-comma swap detected.** No `USD` suffix anywhere.
- Period suffix `"/mes · facturación mensual"` correctly translated to `"/mo · billed monthly"` across all three `pricing.tier_*.period` keys. ✅

---

## Cultural / legal accuracy

- **Habeas Data:** present in `footer.links.habeas_data`, `faq.items.3.a`, `legal.privacy.intro`, `legal.terms.s15.body`, `legal.cookies.intro`. EN parenthetical `(Habeas Data — Colombia's data protection law)` is added on first introduction in `faq.items.3.a`, `legal.privacy.intro`, `legal.cookies.intro` as briefed. ✅
- **Ley 1581:** translated to **"Law 1581"** consistently (`footer.links.habeas_data`, `faq.items.3.a`, `legal.privacy.intro` + `s7.intro`, `legal.cookies.intro`). ✅
- **paisa / costeño:** rendered as `"regional Colombian tones from coastal to highland, formal to casual"` in `mia.steps.step1.desc`. ✅ Matches Translator brief — no transliteration.
- **SIC / Superintendencia de Industria y Comercio:** rendered as `"Superintendence of Industry and Commerce (SIC)"` in `legal.privacy.s7.li[4]`. ✅
- **Wompi, Bancolombia, Meta, Vercel, Neon, Resend, OpenAI, Google:** preserved verbatim in `legal.privacy.s5.li`, `legal.cookies.s3.li`, `legal.terms.s11.li`. ✅
- **NIT:** softened to "Tax ID" in `footer.copyright.nit_status` (see N2 — acceptable liberty).

---

## Decision rule applied

0 critical findings + 2 warnings (1 actionable inconsistency, 1 voice-drift on a head meta description) → **SHIP**, with the option to apply W1 + W2 as one-line fixes before deploy if time permits. Neither blocks a clean launch — both are stylistic/consistency improvements rather than correctness bugs.
