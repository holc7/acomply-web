// [perf-audited 2026-05-28 / vercel-react-best-practices v1.0 + typescript-best-practices] audited-clean — no findings
//
// Locale-aware layout. Owns <html lang={locale}>, NextIntlClientProvider,
// fonts, OG metadata, and the cookie banner. The root app/layout.tsx is
// a thin pass-through.
//
// generateStaticParams produces both locales at build time so the static
// shell is prerendered for each. setRequestLocale enables static
// rendering of nested client components that consume useTranslations.

import type { Metadata, Viewport } from "next";
import { Sora, Nunito } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import CookieBanner from "@/components/CookieBanner";
import { locales, type Locale } from "@/i18n/config";
import "../globals.css";

const sora = Sora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-sora",
  display: "swap",
});

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-nunito",
  display: "swap",
});

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

const OG_LOCALE: Record<Locale, string> = {
  es: "es_CO",
  en: "en_US",
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "app" });
  return {
    metadataBase: new URL("https://acomply.co"),
    title: t("title"),
    description: t("description"),
    alternates: {
      canonical: locale === "es" ? "/" : `/${locale}`,
      languages: {
        es: "/",
        en: "/en",
        "x-default": "/",
      },
    },
    openGraph: {
      title: t("title"),
      description: t("og.description"),
      locale: OG_LOCALE[locale as Locale],
      alternateLocale: Object.entries(OG_LOCALE)
        .filter(([loc]) => loc !== locale)
        .map(([, ogLoc]) => ogLoc),
      type: "website",
      siteName: "Acomply",
    },
    twitter: {
      card: "summary_large_image",
      title: t("title"),
      description: t("twitter.description"),
    },
  };
}

export const viewport: Viewport = {
  themeColor: "#F7F3EC",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!locales.includes(locale as Locale)) notFound();
  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html lang={locale} className={`${sora.variable} ${nunito.variable}`}>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
          <CookieBanner />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
