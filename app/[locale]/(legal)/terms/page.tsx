// [perf-audited 2026-05-28 / vercel-react-best-practices v1.0 + typescript-best-practices] audited-clean — no findings
// Terms and conditions. Server component. Reads from `legal.terms` namespace.
//
// generateMetadata overrides the cascade from app/[locale]/layout.tsx (which
// would otherwise point hreflang alternates at the homepage). The previous
// hardcoded `export const metadata` in Spanish leaked into /en/terms — Phase
// 2 Reviewer HIGH finding, now fixed.

import type { Metadata } from "next";
import type { ReactNode } from "react";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import LegalShell from "@/components/legal/LegalShell";

const ROUTE = "terms";

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
  const t = await getTranslations({ locale, namespace: "legal.terms.meta" });
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

export default async function TermsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "legal.terms" });

  const s2Li = t.raw("s2.li") as string[];
  const s3Li = t.raw("s3.li") as string[];
  const s4Li = t.raw("s4.li") as string[];
  const s6Li = t.raw("s6.li") as string[];
  const s7Li = t.raw("s7.li") as string[];
  const s8Li = t.raw("s8.li") as string[];
  const s11Li = t.raw("s11.li") as string[];
  const s12Li = t.raw("s12.li") as string[];

  return (
    <LegalShell title={t("title")} updated={t("updated")}>
      <p>{t("intro")}</p>

      <h2>{t("s1.h2")}</h2>
      <p>{t.rich("s1.body", richDefaults)}</p>

      <h2>{t("s2.h2")}</h2>
      <p>{t("s2.intro")}</p>
      <ul>
        {s2Li.map((_, i) => (
          <li key={i}>{t.rich(`s2.li.${i}`, richDefaults)}</li>
        ))}
      </ul>
      <p>{t("s2.outro")}</p>

      <h2>{t("s3.h2")}</h2>
      <ul>
        {s3Li.map((_, i) => (
          <li key={i}>
            {t.rich(`s3.li.${i}`, {
              ...richDefaults,
              a: (chunks: ReactNode) => (
                <a href="mailto:hola@acomply.co">{chunks}</a>
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

      <h2>{t("s5.h2")}</h2>
      <p>{t("s5.body")}</p>

      <h2>{t("s6.h2")}</h2>
      <ul>
        {s6Li.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>

      <h2>{t("s7.h2")}</h2>
      <ul>
        {s7Li.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>

      <h2>{t("s8.h2")}</h2>
      <p>{t("s8.intro")}</p>
      <ul>
        {s8Li.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
      <p>{t("s8.outro")}</p>

      <h2>{t("s9.h2")}</h2>
      <p>
        {t.rich("s9.body", {
          ...richDefaults,
          a: (chunks: ReactNode) => <Link href="/privacy">{chunks}</Link>,
        })}
      </p>

      <h2>{t("s10.h2")}</h2>
      <p>{t("s10.body")}</p>

      <h2>{t("s11.h2")}</h2>
      <p>{t("s11.intro")}</p>
      <ul>
        {s11Li.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
      <p>{t("s11.outro")}</p>

      <h2>{t("s12.h2")}</h2>
      <ul>
        {s12Li.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>

      <h2>{t("s13.h2")}</h2>
      <p>{t("s13.body")}</p>

      <h2>{t("s14.h2")}</h2>
      <p>{t("s14.body")}</p>

      <h2>{t("s15.h2")}</h2>
      <p>
        {t.rich("s15.body", {
          ...richDefaults,
          a: (chunks: ReactNode) => (
            <a href="mailto:hola@acomply.co">{chunks}</a>
          ),
        })}
      </p>
    </LegalShell>
  );
}
