// [perf-audited 2026-05-28 / typescript-best-practices] audited-clean — no findings
// Server-side message loader for next-intl. Falls back to defaultLocale
// on an unknown/missing locale so cold paths never 500.

import { getRequestConfig } from 'next-intl/server';
import { locales, defaultLocale, type Locale } from './config';

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale;

  if (!locale || !locales.includes(locale as Locale)) {
    locale = defaultLocale;
  }

  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default,
  };
});
