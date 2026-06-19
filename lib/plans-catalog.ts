// [perf-audited 2026-06-17 / typescript-best-practices] audited-clean — no findings
// Single source of truth for pricing-card feature lists, localized inline.
// Tier gating mirrors acomply-app/lib/plans.ts — do not drift.
//   esencial: no gallery (gallery is Élite)
//   maestro:  no Marketing IA (Marketing IA is Élite-only)
//   elite:    gallery + Marketing IA + premium ops

export type Loc = { es: string; en: string };

export type IconKey = "gift" | "chat" | "megaphone" | "barchart" | "qr";

export type CatalogFeature =
  | { section: Loc }
  | { label: Loc; note?: Loc; icon?: IconKey };

export const PLAN_FEATURES: Record<
  "esencial" | "maestro" | "elite",
  CatalogFeature[]
> = {
  esencial: [
    { label: { es: "Página de reservas pública", en: "Public booking page" } },
    {
      label: {
        es: "Recordatorios automáticos por WhatsApp",
        en: "Automatic WhatsApp reminders",
      },
    },
    { label: { es: "Agenda individual", en: "Individual calendar" } },
    { label: { es: "Reseñas y calificaciones", en: "Reviews and ratings" } },
    { label: { es: "Gestión de clientes", en: "Customer management" } },
  ],
  maestro: [
    { label: { es: "Todo lo del plan Esencial", en: "Everything in Esencial" } },
    { label: { es: "Hasta 10 profesionales", en: "Up to 10 professionals" } },
    { section: { es: "IA incluida", en: "AI included" } },
    {
      label: {
        es: "500 mensajes WhatsApp + 50 Looks IA",
        en: "500 WhatsApp messages + 50 AI Looks",
      },
      note: { es: "Gratis cada mes", en: "Free every month" },
      icon: "gift",
    },
    {
      label: {
        es: "Recepcionista IA en WhatsApp",
        en: "AI Receptionist on WhatsApp",
      },
      note: { es: "Reserva por ti", en: "Books for you" },
      icon: "chat",
    },
    {
      label: { es: "Asistente de análisis", en: "Analyst assistant" },
      note: { es: "Chat con tu negocio", en: "Chat with your business" },
      icon: "barchart",
    },
    { section: { es: "Operaciones", en: "Operations" } },
    {
      label: {
        es: "Control de gastos e ingresos",
        en: "Income & expense tracking",
      },
    },
    { label: { es: "Informes financieros", en: "Financial reports" } },
    { label: { es: "Manejo de inventario", en: "Inventory management" } },
  ],
  elite: [
    { label: { es: "Todo lo del plan Maestro", en: "Everything in Maestro" } },
    {
      label: {
        es: "Profesionales ilimitados",
        en: "Unlimited professionals",
      },
    },
    {
      label: { es: "Mía: agente administrativo IA", en: "Mía: AI admin agent" },
      note: { es: "Gestiona tu negocio por chat", en: "Run your business by chat" },
      icon: "chat",
    },
    {
      label: { es: "Marketing IA", en: "Marketing AI" },
      note: { es: "Reactiva clientes dormidos", en: "Win back dormant clients" },
      icon: "megaphone",
    },
    {
      label: { es: "QR estilizado con IA", en: "AI-styled QR code" },
      note: { es: "Con tu logo y diseño", en: "With your logo & design" },
      icon: "qr",
    },
    {
      label: {
        es: "Tu propio WhatsApp verificado con Meta",
        en: "Your own WhatsApp, verified with Meta",
      },
    },
    { label: { es: "Galería de trabajos", en: "Work gallery" } },
    {
      label: {
        es: "Correos y comprobantes con tu marca",
        en: "Branded emails & receipts",
      },
    },
    { label: { es: "Temas de color para tu panel", en: "Dashboard color themes" } },
    { label: { es: "Soporte prioritario", en: "Priority support" } },
  ],
};
