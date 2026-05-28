// [perf-audited 2026-05-28 / typescript-best-practices] audited-clean — no findings
// next-intl locale config. ES first (default), EN as opt-in via /en/... URLs.
// Adding pt-BR later is a one-line append + run `npm run i18n:sync`.

export const locales = ['es', 'en'] as const;
export const defaultLocale = 'es' as const;

export type Locale = (typeof locales)[number];
