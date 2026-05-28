// [perf-audited 2026-05-28 / vercel-react-best-practices v1.0 + typescript-best-practices] audited-clean — no findings
// Privacy policy. Server component. Reads from `legal.privacy` namespace.
//
// generateMetadata overrides the cascade from app/[locale]/layout.tsx so the
// hreflang alternates point at this specific page (privacy) instead of the
// homepage, and so /en/privacy serves English metadata (the previous
// hardcoded `export const metadata = { ... }` in Spanish leaked into the
// EN URL — Phase 2 Reviewer HIGH finding).

import type { Metadata } from "next";
import type { ReactNode } from "react";
import { getTranslations, setRequestLocale } from "next-intl/server";
import LegalShell from "@/components/legal/LegalShell";

const ROUTE = "privacy";

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
  const t = await getTranslations({ locale, namespace: "legal.privacy.meta" });
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

export default async function PrivacyPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "legal.privacy" });

  // Resolve lists once (avoids repeating the type assertion per JSX line).
  const s2Li = t.raw("s2.li") as string[];
  const s3LiBusiness = t.raw("s3.li_business") as string[];
  const s3LiClients = t.raw("s3.li_clients") as string[];
  const s3LiTech = t.raw("s3.li_tech") as string[];
  const s4Li = t.raw("s4.li") as string[];
  const s5Li = t.raw("s5.li") as string[];
  const s6Li = t.raw("s6.li") as string[];
  const s7Li = t.raw("s7.li") as string[];

  return (
    <LegalShell title={t("title")} updated={t("updated")}>
      <p>
        {t.rich("intro", richDefaults)}
      </p>

      <h2>{t("s1.h2")}</h2>
      <p>
        {t.rich("s1.body", {
          ...richDefaults,
          a: (chunks: ReactNode) => (
            <a href="mailto:hola@acomply.co">{chunks}</a>
          ),
        })}
      </p>

      <h2>{t("s2.h2")}</h2>
      <p>{t("s2.intro")}</p>
      <ul>
        {s2Li.map((_, i) => (
          <li key={i}>
            {t.rich(`s2.li.${i}`, richDefaults)}
          </li>
        ))}
      </ul>

      <h2>{t("s3.h2")}</h2>
      <h3>{t("s3.h3_business")}</h3>
      <ul>
        {s3LiBusiness.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
      <h3 id="habeas-data">{t("s3.h3_clients")}</h3>
      <ul>
        {s3LiClients.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
      <h3>{t("s3.h3_tech")}</h3>
      <ul>
        {s3LiTech.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>

      <h2>{t("s4.h2")}</h2>
      <ul>
        {s4Li.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
      <p>{t("s4.outro")}</p>

      <h2>{t("s5.h2")}</h2>
      <p>{t("s5.intro")}</p>
      <ul>
        {s5Li.map((_, i) => (
          <li key={i}>
            {t.rich(`s5.li.${i}`, richDefaults)}
          </li>
        ))}
      </ul>
      <p>{t("s5.outro")}</p>

      <h2>{t("s6.h2")}</h2>
      <ul>
        {s6Li.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>

      <h2>{t("s7.h2")}</h2>
      <p>{t("s7.intro")}</p>
      <ul>
        {s7Li.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
      <p>
        {t.rich("s7.outro", {
          ...richDefaults,
          a: (chunks: ReactNode) => (
            <a href="mailto:hola@acomply.co">{chunks}</a>
          ),
        })}
      </p>

      <h2>{t("s8.h2")}</h2>
      <p>{t("s8.body")}</p>

      <h2>{t("s9.h2")}</h2>
      <p>
        {t.rich("s9.body", {
          ...richDefaults,
          a: (chunks: ReactNode) => <a href="/cookies">{chunks}</a>,
        })}
      </p>

      <h2>{t("s10.h2")}</h2>
      <p>{t("s10.body")}</p>

      <h2>{t("s11.h2")}</h2>
      <p>{t("s11.body")}</p>

      <h2>{t("s12.h2")}</h2>
      <p>
        {t.rich("s12.body", {
          ...richDefaults,
          a: (chunks: ReactNode) => (
            <a href="mailto:hola@acomply.co">{chunks}</a>
          ),
        })}
      </p>
    </LegalShell>
  );
}
