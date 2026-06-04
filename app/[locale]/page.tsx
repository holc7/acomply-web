// [perf-audited 2026-06-04 / vercel-react-best-practices v1.0 + typescript-best-practices] audited-clean — no findings
//
// Server component wrapper. Calls setRequestLocale so nested client
// components consuming useTranslations get the right messages bundle
// AND so this route stays statically renderable per locale.
//
// Also emits Organization + WebSite + SoftwareApplication JSON-LD. This is the
// machine-readable "Acomply is a company/product that does X" that Google uses
// to build the rich result snippet and to ground its AI Overview entity
// description — the thing a plain <title>/<meta> can't express on its own.

import { setRequestLocale } from "next-intl/server";
import HomeClient from "./HomeClient";

const SITE_URL = "https://acomply.co";

// Declarative, entity-shaped descriptions ("Acomply es …") — Google's AI
// Overview prefers a clear subject-defines-itself sentence over marketing copy.
const LD_DESCRIPTION: Record<string, string> = {
  es:
    "Acomply es una plataforma todo-en-uno con inteligencia artificial para negocios de servicio en Colombia " +
    "—barberías, peluquerías, spas, estudios de uñas, centros de estética y más—. Centraliza reservas en línea, " +
    "clientes, pagos y WhatsApp, y le da a cada negocio su propia página de reservas. Su asistente de IA, Mía, es " +
    "una sola asistente que cumple tres roles: recepcionista que atiende a los clientes 24/7, equipo de marketing " +
    "que crea y envía campañas para llenar los días lentos, y analista que responde preguntas sobre los números del " +
    "negocio.",
  en:
    "Acomply is an all-in-one, AI-powered platform for service businesses in Colombia " +
    "—barbershops, hair and nail salons, spas, aesthetic clinics and more. It centralizes online booking, clients, " +
    "payments and WhatsApp, and gives every business its own booking page. Its AI assistant, Mía, is a single " +
    "assistant with three roles: a receptionist that serves customers 24/7, a marketing team that creates and sends " +
    "campaigns to fill slow days, and an analyst that answers questions about the business's numbers.",
};

const LD_FEATURES: Record<string, string[]> = {
  es: [
    "Página de reservas en línea para tu negocio",
    "Recepcionista IA en WhatsApp 24/7 (Mía)",
    "Marketing con IA: genera, envía y atribuye campañas (Mía)",
    "Asistente de análisis del negocio (Mía)",
    "Gestión de clientes e historial",
    "Pagos en línea con Wompi",
    "Recordatorios automáticos de citas",
  ],
  en: [
    "Online booking page for your business",
    "24/7 AI receptionist on WhatsApp (Mía)",
    "AI marketing: generates, sends and attributes campaigns (Mía)",
    "AI business analyst (Mía)",
    "Client management and history",
    "Online payments via Wompi",
    "Automated appointment reminders",
  ],
};

function buildJsonLd(locale: string) {
  const lang = locale === "en" ? "en" : "es";
  const homeUrl = lang === "en" ? `${SITE_URL}/en` : SITE_URL;
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${SITE_URL}/#organization`,
        name: "Acomply",
        url: SITE_URL,
        logo: `${SITE_URL}/acomply-icon.png`,
        image: `${SITE_URL}/acomply-icon.png`,
        description: LD_DESCRIPTION[lang],
        slogan: lang === "en" ? "Your business, always accompanied." : "Tu negocio, siempre acompañado.",
        areaServed: { "@type": "Country", name: "Colombia" },
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: "Acomply",
        inLanguage: ["es-CO", "en"],
        publisher: { "@id": `${SITE_URL}/#organization` },
      },
      {
        "@type": "SoftwareApplication",
        "@id": `${SITE_URL}/#software`,
        name: "Acomply",
        url: homeUrl,
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web, iOS, Android",
        description: LD_DESCRIPTION[lang],
        inLanguage: lang === "en" ? "en" : "es-CO",
        publisher: { "@id": `${SITE_URL}/#organization` },
        offers: {
          "@type": "AggregateOffer",
          priceCurrency: "COP",
          lowPrice: "39900",
          highPrice: "79900",
          offerCount: "3",
        },
        featureList: LD_FEATURES[lang],
      },
    ],
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const jsonLd = buildJsonLd(locale);
  return (
    <>
      <script
        type="application/ld+json"
        // JSON.stringify output is safe to inline here; no user data flows in.
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HomeClient />
    </>
  );
}
