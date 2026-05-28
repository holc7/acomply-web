// [perf-audited 2026-05-28 / typescript-best-practices] audited-clean — no findings
//
// Prefix-aware navigation helpers for next-intl. Import Link / useRouter
// / usePathname FROM HERE (not from `next/navigation` or `next/link`)
// for any in-app navigation that crosses or preserves a locale boundary.
//
// Why this file exists: the barbershop main-app's locale switcher
// (`app/[locale]/(admin)/settings/components/LanguageSection.tsx:17`)
// does `pathname.replace('/' + locale, '/' + newLocale)` with
// next/navigation's plain useRouter. With localePrefix: 'as-needed' and
// default 'es', browsing `/dashboard` (no prefix) and clicking "English"
// produces `pathname.replace('/es', '/en')` on `/dashboard` → no-op.
// Using createNavigation here gives us a router that understands the
// as-needed prefix and computes the right destination URL regardless of
// whether the current path has a prefix.

import { createNavigation } from 'next-intl/navigation';
import { locales, defaultLocale } from './config';

export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation({
    locales,
    defaultLocale,
    localePrefix: 'as-needed',
  });
