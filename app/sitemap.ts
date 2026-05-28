// [perf-audited 2026-05-28 / vercel-react-best-practices v1.0 + typescript-best-practices] audited-clean — no findings
//
// Per-locale sitemap for acomply.co. Generates 8 entries (4 routes ×
// 2 locales), each with `alternates.languages` per Google's spec so
// search engines understand the EN/ES variants are intentional.
//
// As-needed locale prefix: ES routes stay at the bare URL (`/precios`),
// EN routes get the `/en` prefix (`/en/precios`). x-default points to
// the ES URL since `es` is our default locale.

import type { MetadataRoute } from "next";
import { locales, defaultLocale } from "@/i18n/config";

const BASE = "https://acomply.co";
const ROUTES = ["", "/privacy", "/terms", "/cookies"] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const entries: MetadataRoute.Sitemap = [];

  for (const route of ROUTES) {
    for (const locale of locales) {
      const localizedPath =
        locale === defaultLocale ? route || "/" : `/${locale}${route}`;
      entries.push({
        url: `${BASE}${localizedPath}`,
        lastModified: now,
        changeFrequency: route === "" ? "weekly" : "monthly",
        priority: route === "" ? 1.0 : 0.5,
        alternates: {
          languages: {
            es: `${BASE}${route || "/"}`,
            en: `${BASE}/en${route}`,
            "x-default": `${BASE}${route || "/"}`,
          },
        },
      });
    }
  }

  return entries;
}
