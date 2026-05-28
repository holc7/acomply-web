// [perf-audited 2026-05-28 / typescript-best-practices] audited-clean — no findings
//
// Next 16 proxy (formerly middleware.ts) for the marketing site.
//
// Single responsibility here: locale resolution via next-intl's
// createMiddleware. No auth gate (the marketing site is fully public);
// the only protected-ish path is /api/contact which the matcher
// excludes.
//
// localeDetection is OFF deliberately: a Colombian visitor on an
// English-language Chrome should still land on the Spanish default.
// Users opt into English via /en/... URLs (or the locale switcher in
// the navbar).

import createIntlMiddleware from 'next-intl/middleware';
import { locales, defaultLocale } from './i18n/config';

export default createIntlMiddleware({
  locales,
  defaultLocale,
  localePrefix: 'as-needed',
  localeDetection: false,
});

export const config = {
  // Skip _next/internals, api routes, and any path with a file extension
  // (static assets). Everything else flows through the i18n middleware.
  matcher: ['/((?!api|_next|.*\\..*).*)'],
};
