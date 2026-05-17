# Acomply.co — SEO Punch List

Source: full SEO audit run 2026-05-17 against `app/`, `components/`, `public/`, `vercel.json`, `next.config.ts`. Live URL: https://acomply.co.

Each item: `file:line — finding — one-line fix.`

---

## 🔴 Critical (do first)

- [ ] **`public/` — no `og-image.png` exists.** WhatsApp/Slack/Twitter shares of acomply.co render as blank cards. Fix: create `app/opengraph-image.png` (1200×630) and `app/twitter-image.png`; Next 16 auto-wires them.
- [ ] **`app/layout.tsx:25-32` — `openGraph.images` not declared.** Fix: add `images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Acomply — reservas + IA' }]`.
- [ ] **`app/layout.tsx:33-38` — `twitter.images` missing + no `@site` handle.** Fix: add `images: ['/og-image.png']` and `site: '@acomply'` once handle exists.
- [ ] **`app/layout.tsx:20-39` — no `alternates.canonical`.** Vercel preview URLs leak into Google. Fix: `alternates: { canonical: 'https://acomply.co' }`.
- [ ] **`app/layout.tsx:20-39` — no `robots` field.** Fix: `robots: { index: true, follow: true, googleBot: { 'max-image-preview': 'large', 'max-snippet': -1 } }`.
- [ ] **`app/` — no `sitemap.ts`.** Create returning `/`, `/privacy`, `/terms`, `/cookies` with `lastModified: new Date()`.
- [ ] **`app/` — no `robots.ts`.** Create returning `{ rules: { userAgent: '*', allow: '/' }, sitemap: 'https://acomply.co/sitemap.xml' }`.
- [ ] **No JSON-LD anywhere on site.** Add `Organization` + `SoftwareApplication` + `WebSite` JSON-LD `<script type="application/ld+json">` in `app/layout.tsx`.
- [ ] **`components/FAQ.tsx` — 7 questions not wrapped in `FAQPage` schema.** Massive missed opportunity for rich SERP results. Emit JSON-LD from this file using `FAQ_ITEMS.map(...)`.
- [ ] **`components/PricingCards.tsx:60` — second `<h1>` on the homepage.** Combined with `components/HeroSection.tsx:17`, that's two H1s. Fix: change `ppage__h1` to `<h2>`.
- [ ] **`components/HeroSection.tsx:77` — raw `<img>` instead of `next/image`.** LCP image unoptimized (no AVIF, no responsive `srcset`). Swap to `import Image from 'next/image'` with `priority` + `sizes`.

## 🟡 Important

- [ ] **`app/layout.tsx:22` — title lacks keywords.** Currently "Acomply — Tu negocio, siempre acompañado." (45 chars). Fix: `"Acomply — Software de agenda y WhatsApp para barberías, salones y spa en Colombia"` (≤85 chars).
- [ ] **`app/layout.tsx:23-24` — description generic.** Add Colombia + a vertical: `"Acomply es el software de agenda y WhatsApp con IA para barberías, salones, spa, uñas y clínicas en Colombia. Prueba gratis sin tarjeta."` (155 chars).
- [ ] **`app/layout.tsx:52` — `lang="es-CO"` is non-standard.** Google wants `lang="es"` + separate hreflang. Fix: change to `lang="es"`.
- [ ] **`app/layout.tsx` — no `authors`/`publisher`.** Fix: add `authors: [{ name: 'Acomply' }], publisher: 'Acomply'`.
- [ ] **`app/page.tsx:1` — `"use client"` on the homepage.** Whole page client-rendered; lose RSC streaming. Fix: move the `IntersectionObserver` into a tiny `<ScrollReveal />` client component; keep `page.tsx` as server component.
- [ ] **`components/HeroSection.tsx:101` — `<a href="#">` in floating WhatsApp card.** Google flags empty anchors. Fix: change to `<span>` since it's decorative.
- [ ] **`components/Footer.tsx:9,11,17,18,19,35,38` — 7 footer links point to `"#"`.** Dilutes link equity + scrolls to top. Fix: build the page or remove the link.
- [ ] **`components/NavBar.tsx:9,12` — `#producto` and `#empresa` anchors don't exist.** Clicking does nothing. Fix: rename to `#verticales`/`#faq` or remove.
- [ ] **`app/(legal)/privacy/page.tsx:3-8` — no canonical, OG, or robots.** Add per-page metadata including `alternates.canonical: 'https://acomply.co/privacy'`.
- [ ] **`app/(legal)/cookies/page.tsx` + `terms/page.tsx` — same missing fields.**
- [ ] **`vercel.json:5` — rewrite excludes `/sitemap.xml`/`/robots.txt` (good) but NOT `/opengraph-image*` or `/icon*`.** Add them or social shares break once OG image lands.
- [ ] **`components/HeroSection.tsx:79` — alt missing vertical keyword.** Add "barbería" or "salón" for image search.
- [ ] **`components/VerticalProofSection.tsx:169` — watercolor washes set via CSS `background-image`.** Decorative is fine but Google can't index. Optional: swap one per card to an `<img alt="Servicios de barbería">`.
- [ ] **`public/assets/hero-phone.webp` — only one size served.** With `next/image` (above) this auto-fixes; without, add 512w `srcset`.
- [ ] **No `app/manifest.ts`.** Lighthouse PWA + "Add to home screen" missing. Create with name, short_name, theme_color, icons referencing `public/acomply-icon.png`.

## 🟢 Polish

- [ ] **`components/HeroSection.tsx:17-20` — H1 has `<br>` + `<em>`.** Optional: add visually-hidden vertical keyword span: `<span className="sr-only">para barberías, salones, spa, uñas y clínicas en Colombia</span>`.
- [ ] **`components/PricingCards.tsx` — pricing not exposed as `Product`/`Offer` JSON-LD.** Adding `Product` schema for each tier (Esencial $39.900, Maestro $59.900, Élite $79.900 COP/mo) enables price-rich snippets.
- [ ] **No `<link rel="alternate" hreflang>` block.** Spanish-only — add `<link rel="alternate" hreflang="x-default" href="https://acomply.co" />`.
- [ ] **`app/page.tsx:21-35` — IntersectionObserver on every load.** Negligible perf, but `requestIdleCallback` is cleaner.

---

## Quick wins (under 30 min total, ranked by impact/effort)

1. Create `app/opengraph-image.png` (1200×630) + add `openGraph.images` to `app/layout.tsx:25`. **Fixes blank social cards site-wide. ~10 min.**
2. Create `app/sitemap.ts` + `app/robots.ts`. **Unlocks Google indexing of legal pages. ~5 min.**
3. Change `<h1>` in `components/PricingCards.tsx:60` to `<h2>`. **Fixes duplicate H1. ~30s.**
4. Rewrite `app/layout.tsx:22-24` title+description with Colombia + vertical keywords. **Biggest single SERP win. ~3 min.**
5. Add `FAQPage` JSON-LD to `components/FAQ.tsx` for rich results. **~10 min.**
