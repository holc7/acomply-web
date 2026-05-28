// [perf-audited 2026-05-28 / vercel-react-best-practices v1.0 + typescript-best-practices] audited-clean — no findings
//
// Root layout — minimal pass-through. Next requires a root layout, but
// the actual <html> shell is owned by app/[locale]/layout.tsx so it can
// set lang={locale} + wire NextIntlClientProvider per-request.
//
// See barbershop's same pattern: locale-segment layouts work this way
// because of Next.js's nested-layout model — the deepest layout that
// returns <html> wins.

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return children;
}
