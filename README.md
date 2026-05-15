# acomply-web

Marketing site for Acomply (acomply.co). Single-page Next.js 16 app, Tailwind v4, Sora + Nunito, Resend for the demo form.

## Quick start

```bash
cp .env.local.example .env.local      # then paste your RESEND_API_KEY
npm run dev                            # http://localhost:3000
```

## Deploy

```bash
vercel link                            # holc7's projects → name: acomply-web
vercel env add RESEND_API_KEY production       # paste interactively
vercel env add RESEND_TO_EMAIL production      # paste interactively
git push origin main                   # auto-deploy via Vercel
```

After every push: `sleep 120 && vercel ls --prod | head -6` — confirm `● Ready`.

## Structure

- `app/` — Next.js App Router. Layout wires Sora + Nunito via `next/font`.
- `app/api/contact/route.ts` — Resend POST handler for the demo form.
- `components/` — All UI sections (NavBar, Hero, Pricing, FAQ, ClosingCTA, etc.).
- `components/primitives/` — Button, PhoneFrame, SparkleIcon (the locked 4-point brand sparkle).
- `components/screens/` — Phone-frame mockups (Agenda, WhatsApp, Marketing, Analysis).
- `lib/resend.ts` — Resend client + `sendDemoLead` helper.
- `app/globals.css` — Tailwind v4 import + brand tokens (`--coral`/`--amber`/`--mint`/`--espresso`/`--cream`) + `@theme` Tailwind bindings + all section styles consolidated.

## Brand contract

Locked. Don't drift.

- 5 colors: espresso `#2B211C`, coral `#E86C57`, amber `#F5B44B`, mint `#8DDACB`, cream `#F7F3EC`.
- 2 fonts: Sora (display) + Nunito (body). Loaded via `next/font/google`.
- Tagline: "Tu negocio, siempre acompañado." (never "en orden.")
- 3 pricing tiers (canonical from acomply-app/lib/plans.ts): Esencial $39.900 / Maestro $59.900 / Élite $79.900 COP/mo. AI agents are Maestro+ only.
- Sparkle is the 4-point shape, not a teardrop.

## Companion repo

Product / admin / booking lives in [`acomply-app`](https://github.com/holc7/acomply-app).
