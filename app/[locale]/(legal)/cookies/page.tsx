// [perf-audited 2026-05-28 / vercel-react-best-practices v1.0 + typescript-best-practices] audited-clean — no findings
// Cookie policy. Server component. Reads from `legal.cookies` namespace.
//
// generateMetadata overrides the cascade from app/[locale]/layout.tsx (which
// would otherwise point hreflang alternates at the homepage). The previous
// hardcoded `export const metadata` in Spanish leaked into /en/cookies —
// Phase 2 Reviewer HIGH finding, now fixed.

import type { Metadata } from "next";
import type { ReactNode } from "react";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import LegalShell from "@/components/legal/LegalShell";

const ROUTE = "cookies";

const richDefaults = {
  b: (chunks: ReactNode) => <strong>{chunks}</strong>,
  em: (chunks: ReactNode) => <em>{chunks}</em>,
  code: (chunks: ReactNode) => <code>{chunks}</code>,
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "legal.cookies.meta" });
  return {
    title: t("title"),
    description: t("description"),
    alternates: {
      canonical: locale === "es" ? `/${ROUTE}` : `/${locale}/${ROUTE}`,
      languages: {
        es: `/${ROUTE}`,
        en: `/en/${ROUTE}`,
        "x-default": `/${ROUTE}`,
      },
    },
  };
}

export default async function CookiesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "legal.cookies" });

  const s2LiNecessary = t.raw("s2.li_necessary") as string[];
  const s2LiOptional = t.raw("s2.li_optional") as string[];
  const s3Li = t.raw("s3.li") as string[];
  const s4Li = t.raw("s4.li") as string[];

  return (
    <LegalShell title={t("title")} updated={t("updated")}>
      <p>
        {t.rich("intro", {
          ...richDefaults,
          a: (chunks: ReactNode) => <Link href="/privacy">{chunks}</Link>,
        })}
      </p>

      <h2>{t("s1.h2")}</h2>
      <p>{t("s1.body")}</p>

      <h2>{t("s2.h2")}</h2>

      <h3>{t("s2.h3_necessary")}</h3>
      <p>{t("s2.necessary_intro")}</p>
      <ul>
        {s2LiNecessary.map((_, i) => (
          <li key={i}>{t.rich(`s2.li_necessary.${i}`, richDefaults)}</li>
        ))}
      </ul>

      <h3>{t("s2.h3_optional")}</h3>
      <p>{t.rich("s2.optional_intro", richDefaults)}</p>
      <ul>
        {s2LiOptional.map((_, i) => (
          <li key={i}>{t.rich(`s2.li_optional.${i}`, richDefaults)}</li>
        ))}
      </ul>

      <h3>{t.rich("s2.h3_not_used", richDefaults)}</h3>
      <p>
        {t.rich("s2.not_used_body", {
          ...richDefaults,
          a: (chunks: ReactNode) => <Link href="/privacy">{chunks}</Link>,
        })}
      </p>

      <h2>{t("s3.h2")}</h2>
      <p>{t("s3.intro")}</p>
      <ul>
        {s3Li.map((_, i) => (
          <li key={i}>
            {t.rich(`s3.li.${i}`, {
              ...richDefaults,
              a: (chunks: ReactNode) => (
                <a
                  href="https://policies.google.com/technologies/cookies"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {chunks}
                </a>
              ),
            })}
          </li>
        ))}
      </ul>

      <h2>{t("s4.h2")}</h2>
      <ul>
        {s4Li.map((_, i) => (
          <li key={i}>{t.rich(`s4.li.${i}`, richDefaults)}</li>
        ))}
      </ul>
      <p>{t("s4.outro")}</p>

      <h2>{t("s5.h2")}</h2>
      <p>{t("s5.body")}</p>

      <h2>{t("s6.h2")}</h2>
      <p>
        {t.rich("s6.body", {
          ...richDefaults,
          a: (chunks: ReactNode) => (
            <a href="mailto:hola@acomply.co">{chunks}</a>
          ),
        })}
      </p>
    </LegalShell>
  );
}
