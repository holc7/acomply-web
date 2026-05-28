// [perf-audited 2026-05-28 / vercel-react-best-practices v1.0 + typescript-best-practices] audited-clean — no findings
//
// Marketing-site robots policy. Locale-agnostic (lives at /robots.txt,
// not under [locale]). Allows everything except internal API; points
// crawlers at the per-locale sitemap. Closes the SEO-TODO.md 🔴 finding.

import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
    ],
    sitemap: "https://acomply.co/sitemap.xml",
    host: "https://acomply.co",
  };
}
