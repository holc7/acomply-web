# Acomply — App + Marketing Site Handoff

Snapshot for the next agent / chat. Two repos, two Vercel projects, one brand.

---

## Repos & domains

| Repo | Path | Domain | What it is |
|---|---|---|---|
| `acomply-web` | `/Users/denisholc7/projects/webdev/personal/acomply-web` | **acomply.co** (marketing) | Next.js 16 marketing/landing site. Pure presentation. |
| `barbershop` | `/Users/denisholc7/projects/webdev/personal/barbershop` | **app.acomply.co** (admin + booking) | The actual product. Next.js 16, Postgres/Neon, NextAuth v5, AntD+Refine admin, public booking pages, super-admin panel. |

DNS: `acomply.co` + `www.acomply.co` point at acomply-web. `app.acomply.co` points at barbershop. Marketing site has a `vercel.json` rewrite that proxies `/api/*` (except `/api/contact`) through to app.acomply.co so login/auth routes work from either origin.

Both repos: `main` branch deploys to production on push.

---

## Tech stack

- Next.js 16 (App Router, Turbopack)
- React 19, TypeScript 5
- Postgres on Neon (multi-tenant via RLS + `app.current_shop_id` GUC) — barbershop only
- NextAuth v5 (JWT sessions) — barbershop only
- next-intl (`localePrefix: 'as-needed'`, default `es`)
- Resend (transactional email) — barbershop
- OpenAI (chat + image gen) — barbershop
- WhatsApp Business API (Meta) — barbershop
- Vercel deploys both projects
- Local dev: `npm run dev` from each repo. Marketing on `localhost:3000`.

The full project agent contract is in `barbershop/CLAUDE.md`. Read it.

---

## Marketing site (acomply-web)

### Sections (top-to-bottom in `app/page.tsx`)

1. **NavBar** — pill nav, locked logo, brand-name links
2. **HeroSection** — headline "Tu negocio, siempre acompañado." Painterly watercolor bg (`/hero-bg.webp`). Right column has floating cards: WhatsApp reminder + IA suggestion (and an Agenda anchor card that's currently `display: none` then un-hidden — see "current state" below).
3. **VerticalProofSection** — 5 watercolor vertical cards (Barbería, Salón, Uñas, Spa, Clínica) with concentric dotted rings behind. No "Multi-vertical" pill (removed).
4. **AgentsSectionV2** — 4-step IA agent timeline (Recepcionista / Marketing / Asistente / Crece) with an angled iPhone illustration on the left. (`/assets/agents-phone.webp`).
5. **MarketingIASection** — deep dive on Marketing IA. Headline + bullets (now numbered soft mint pills, not checkmarks) + phone mockup of the campaign approval flow.
6. **AsistenteAnalisisSection** — deep dive on Asistente de Análisis. Same bullets-as-numbered-pills pattern. Phone mockup chat with bar chart.
7. **ResultadosSection** — dark "Resultados claros, no promesas vacías." 5 cards (01-05) on dark bg with coral arc (left) and mint arc (right) decorations.
8. **PricingCards** — 3 tiers: **Esencial** $39.900 / **Maestro** $59.900 / **Élite** $79.900 COP/mo.
9. **RecargasTeaser** — WhatsApp + Look IA top-up packs.
10. **FAQ** — 7 questions, not yet wrapped in `FAQPage` JSON-LD.
11. **ClosingCTA** — final demo CTA.
12. **Footer** + **StickyMobileCTA**.

### Brand contract (locked)

- Palette: `--coral #E86C57`, `--mint #8DDACB`, `--amber #F5B44B`, `--espresso #2B211C`, `--cream #F7F3EC`
- Fonts: Sora (display), Nunito (text), Georgia/serif (occasional)
- Tagline: **"Tu negocio, siempre acompañado."** (NOT "...en orden")
- Multi-vertical (barber + salon + spa + nails + clinic). Don't bias to barbers.
- Favicon: dark espresso rounded square with white A + coral sparkle (`barbershop/app/icon.png`). Marketing site uses coral A + sparkle on transparent (`acomply-web/app/icon.png`).

### Component primitives

`acomply-web/components/primitives/` — SparkleIcon, Button, PhoneFrame, AcomplyLogo, and `icons/` folder with 11 extracted icons (CalendarIcon, WhatsAppIcon, PeopleIcon, BarChartIcon, etc.). Use these. Don't inline SVGs.

### Reuse pattern: "soft numbered pill"

For bullet/list items where each item has a number, use the same pattern as `.ana__eyebrow-num`:
```css
{
  width: 30px; height: 30px;
  border-radius: 50%;
  background: rgba(141, 218, 203, 0.30);
  border: 1px solid rgba(141, 218, 203, 0.55);
  color: #0F6F5E;
  font-family: var(--font-display);
  font-size: 12px;
  font-weight: 700;
}
```
Already applied to: `.mkt__feat-num`, `.ana__feat-num`. **Don't reinvent.**

### SEO state

- `SEO-TODO.md` in the repo has 31 prioritized findings.
- 🔴 Critical: no `og-image`, no `sitemap.ts`, no `robots.ts`, no JSON-LD, two H1s (PricingCards has one).
- 🟡 Important: title needs Colombia + vertical keywords, `lang="es-CO"` should be `lang="es"`, footer/nav links pointing to `#`.
- Quick wins doc has top 5 in under 30 min.

---

## App (barbershop)

### Multi-tenancy contract (MOST IMPORTANT)

**Every read/write touching tenant data MUST use `tenantQuery(shopId, ...)` from `lib/db.ts`.** Sets `app.current_shop_id` GUC on the connection; RLS + `block_shop_id_update` trigger rely on it. `executeQuery` is only for cross-tenant operator queries, pre-auth slug lookups, and migrations.

Tenant tables inherit the GUC default:
```sql
shop_id INTEGER NOT NULL
        DEFAULT NULLIF(current_setting('app.current_shop_id', true), '')::int
        REFERENCES shops(id) ON DELETE CASCADE
```

Migrations 045 + 064 list every tenant table.

### Auth (NextAuth v5)

Gates in `lib/api-auth.ts`:
- `getSessionUser(req)` → returns session or apikey kind
- `requireOwner(req)` → owner-only writes (403 otherwise)
- `requireOwnerOrSelfBarber(req, barberId)`
- `requireSuperAdmin(req)` → `API_SECRET_KEY` Bearer OR session in `SUPER_ADMIN_EMAILS` env allowlist

Public routes: `app/api/public/*` — slug-scoped, no session.

### Routing

- `proxy.ts` (not middleware) handles locale + auth gate + shop slug resolution
- Public paths whitelist: `['/login', '/empezar', '/book', '/probar', '/reset', '/verify', '/accept-invite', '/accept-shop-invite', '/privacy', '/terms', '/marketplace']`
- Reserved slugs (won't be looked up as shop slugs): see `RESERVED_SLUGS` set in proxy.ts
- `app/[locale]/page.tsx` — root: if session → `/dashboard`, else → `/login` (was redirecting to acomply.co, that was wrong)

### Recently shipped (this session, in order)

- Real Acomply SVG logo on `/login` (was a styled "A" div placeholder)
- Dark espresso favicons (32×32 + 180×180 + .ico) on app.acomply.co
- Coral A+sparkle favicons on acomply.co
- Watercolor login background (mobile portrait + desktop landscape WebPs)
- Marketplace "Próximamente" placeholder at `/marketplace` with its own watercolor bg (storefront illustrations)
- Login link `¿Eres cliente?` rewired from `/book` (which auto-redirected to alpha-lion) to `/marketplace`
- Install prompt A-icon swapped for real Acomply mark SVG in `_shell.tsx`
- QR code merged into the share-link pill on dashboard (was a separate sibling card, now lives in the pill's left slot)
- Hero phone removed (silver iPhone PNG) — replaced with floating-cards collage (AgendaScreen anchor + WhatsApp + IA + concentric ring backdrop)
- AgendaScreen completely redesigned: each row is now a white pill with colored vertical bar on left (coral/mint/amber), stacked-time, vertical divider, name+svc, badge — multi-layer subtle box-shadows (no blurry tailwind glow)
- IA card redesigned: mint accent, serif title "Sugerencia de tu Agente IA", 3 decorative sparkles top-right, mint gradient CTA with paper-plane icon "Enviar campaña"
- Numbered soft-pill pattern extracted to `.mkt__feat-num` + `.ana__feat-num` — replaces coral checkmark circles in MarketingIA + AsistenteAnalisis bullets

### Wompi (payments)

**Wompi sandbox env vars NOT set on Vercel.** Blocker for production billing. References: `cita-{shopId}-{appointmentId}-{nonce}` for per-appointment, `pack-{shopId}-{nonce}` for packs. Idempotency: `payments.reference` UNIQUE + `pack_purchases.applied_at` NULL→timestamp.

### Quota pattern

Per-shop monthly caps on `shops` table: `{channel}_monthly_cap`, `{channel}_used_count`, `{channel}_used_month` (YYYY-MM). Atomic increment with month rollover in `lib/{channel}-quota.ts`. Existing channels: WhatsApp (`whatsapp_*`), Look IA simulator (`look_simulator_*`), AI QR (daily cap, `qr_ai_*`).

---

## Critical conventions (LLM gotchas)

- **`Always run `npm run build` locally before pushing.** `npx tsc --noEmit` doesn't catch Next.js full-pipeline errors.
- **After every push to main, verify deploy is `● Ready`** with `vercel ls --prod`. Vercel does NOT auto-rollback failed builds.
- **Vercel kills async-after-response.** Always `await` external calls. Wrap slow calls (Resend, OpenAI, Meta) in `Promise.race(call, timeout(3000))`.
- **OpenAI models in use (verified post-Jan-2026):** `gpt-5-mini` (chat), `gpt-5.4-mini` (tool-calling), `gpt-image-2` (image gen), `gpt-4o-mini` (vision moderation), `gpt-4o-transcribe` (voice). Don't substitute without verifying with `openai.models.list()`.
- **WhatsApp Business API sends:** `sendWhatsAppOtpTemplate` (OTP, anytime), `sendWhatsAppText` (24h CS window only), marketing broadcasts must use pre-approved Meta templates outside the window.
- **`public/sw.js`** — push + notificationclick handlers ONLY. No `fetch` handler (site goes down).
- **Audit-marker header required** at the top of new lib/route/component files:
  ```ts
  // [perf-audited 2026-05-17 / vercel-react-best-practices v1.0 + typescript-best-practices] audited-clean — no findings
  ```
- **Don't seed test data for E2E** — manual clickthrough only. User requirement.
- **Don't propose phased plans / "pick up tomorrow"** — single execution block per session.
- **Use brand `--mint` var (#8DDACB), not hardcoded mint shades.** Same for all brand colors.

---

## User profile / preferences

- Senior dev, very direct, expects fast iteration.
- Strong negative reaction to: phased plans, "we'll do it tomorrow", silent failures, over-engineering, generic SaaS clichés.
- Wants: brand-owned visuals (no stock iPhones), painterly/watercolor aesthetic, multi-vertical positioning, Spanish/Colombia focus, restrained motion (no overwhelming animations).
- Frustrated by: dev server cache issues (always `rm -rf .next && npm run dev`), CSS specificity surprises (especially `@media` rules overriding base `display:none`).
- First customer: **Jair Farley** at Alpha Lion Barbería, Medellín. Currently uses WeiBook.
- Acomply Gmail: `acomplyinfo@gmail.com`. Recovery: `denisholc7@outlook.com`.
- Meta WABA verified through user's German freelancer legal entity (NOT Acomply, NOT Denis personally).

---

## What's NOT done / open threads

- Wompi env vars on Vercel
- SEO punch list (see `SEO-TODO.md`) — none of the 🔴 critical items shipped yet
- DIAN compliance / Factura Electrónica integration parked
- Marketplace is placeholder only (no shop list, no map, no search)
- Animation system on landing was attempted then removed per user request — only static reveals remain
- The Recargas painterly bg still uses the same hero-bg.webp — should be differentiated to its own image (task #148, deferred)
- AgentsSectionV2 left phone illustration could use a CSS-rendered phone instead of `/assets/agents-phone.webp` (deferred)

---

## Where to look first

```
acomply-web/
├── app/page.tsx                    # Marketing site composition
├── app/globals.css                 # Single global stylesheet (4400+ lines)
├── components/                     # All section + primitive components
├── SEO-TODO.md                     # 31 SEO findings
└── vercel.json                     # Proxy rewrite to barbershop

barbershop/
├── CLAUDE.md                       # FULL agent contract — read this first
├── app/[locale]/(admin)/_shell.tsx # Admin sidebar + install prompt
├── app/[locale]/login/             # Auth pages (uses watercolor bg)
├── app/[locale]/marketplace/       # Coming soon placeholder
├── app/api/v1/*                    # Authenticated API
├── app/api/public/*                # Public slug-scoped API
├── lib/api-auth.ts                 # Auth gates
├── lib/db.ts                       # tenantQuery, executeQuery
├── lib/whatsapp.ts                 # WABA helpers
├── proxy.ts                        # Locale + auth + slug resolution
└── migrations/                     # 069 most recent (push_subscriptions)
```

When in doubt: `barbershop/CLAUDE.md` is the canonical agent reference.
