// [perf-audited 2026-06-13 / vercel-react-best-practices v1.0 + typescript-best-practices] audited-clean — no findings
// Account-deletion instructions page. Required by Google Play (Data safety →
// "Delete account URL") and a good-practice standalone page that spells out the
// deletion steps front-and-center, what gets deleted, and what we must retain.
//
// Self-contained content (not in messages/*.json) on purpose: it was added in a
// single pass while messages/en.json had unrelated uncommitted edits, so the
// copy lives inline keyed by locale to avoid entangling that work. The shell
// chrome (back link, bottom nav) still comes from the shared `legal.shell`
// namespace via LegalShell. If we later move this into messages, mirror the
// `legal.delete_account` shape used by privacy/terms.

import type { Metadata } from "next";
import type { ReactNode } from "react";
import { setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import LegalShell from "@/components/legal/LegalShell";

const ROUTE = "eliminar-cuenta";

type Copy = {
  metaTitle: string;
  metaDescription: string;
  title: string;
  updated: string;
  intro: string;
  s1h: string;
  s1body: ReactNode;
  steps: string[];
  s2h: string;
  s2li: string[];
  s3h: string;
  s3body: string;
  s3li: string[];
  s4h: string;
  s4body: ReactNode;
};

const mail = (label: string) => <a href="mailto:hola@acomply.co">{label}</a>;
const privacyLink = (label: string) => <Link href="/privacy">{label}</Link>;

const COPY: Record<"es" | "en", Copy> = {
  es: {
    metaTitle: "Eliminar tu cuenta — Acomply",
    metaDescription:
      "Cómo solicitar la eliminación de tu cuenta de Acomply y de los datos asociados, qué borramos y qué conservamos por obligación legal.",
    title: "Eliminar tu cuenta de Acomply",
    updated: "13 de junio de 2026",
    intro:
      "Esta página explica cómo solicitar la eliminación de tu cuenta de Acomply y de los datos asociados, qué información borramos y qué debemos conservar por obligación legal. Aplica tanto a los dueños y equipos de los negocios que usan Acomply como a los clientes que reservaron a través de la plataforma.",
    s1h: "Cómo solicitar la eliminación de tu cuenta",
    s1body: (
      <>
        Escríbenos a {mail("hola@acomply.co")} desde el correo asociado a tu
        cuenta, con el asunto «Eliminar mi cuenta». Incluye el nombre de tu
        negocio (o, si eres cliente, el negocio donde reservaste y tu número de
        WhatsApp) para que podamos identificarte.
      </>
    ),
    steps: [
      "Envía el correo de solicitud a hola@acomply.co.",
      "Confirmamos tu identidad respondiendo a ese mismo correo.",
      "Eliminamos tu cuenta y tus datos personales en un máximo de 30 días y te avisamos cuando esté hecho.",
    ],
    s2h: "Qué datos se eliminan",
    s2li: [
      "Correo electrónico, nombre y rol de tu cuenta.",
      "Configuración del negocio: servicios, precios, productos y comisiones.",
      "Fotos del local que hayas cargado.",
      "Clientes, reservas e historial completo de citas.",
      "Reseñas y calificaciones.",
      "Conversaciones con el asistente de WhatsApp.",
      "Fotos cargadas en el simulador de looks.",
    ],
    s3h: "Qué conservamos y por cuánto tiempo",
    s3body:
      "Por obligación legal o contable no podemos borrar de inmediato la siguiente información. Se elimina automáticamente al cumplirse su plazo:",
    s3li: [
      "Información de facturación: el plazo que exige la ley fiscal colombiana (mínimo 5 años).",
      "Registros técnicos (logs): hasta 90 días.",
    ],
    s4h: "Contacto",
    s4body: (
      <>
        Para cualquier duda sobre la eliminación de tu cuenta o el tratamiento
        de tus datos, escríbenos a {mail("hola@acomply.co")}. Respondemos en un
        máximo de 15 días hábiles. Más información en nuestra{" "}
        {privacyLink("Política de privacidad")}.
      </>
    ),
  },
  en: {
    metaTitle: "Delete your account — Acomply",
    metaDescription:
      "How to request deletion of your Acomply account and associated data, what we delete, and what we must retain for legal reasons.",
    title: "Delete your Acomply account",
    updated: "June 13, 2026",
    intro:
      "This page explains how to request deletion of your Acomply account and its associated data, what information we delete, and what we must keep for legal reasons. It applies both to the owners and teams of businesses that use Acomply and to customers who booked through the platform.",
    s1h: "How to request account deletion",
    s1body: (
      <>
        Email us at {mail("hola@acomply.co")} from the address associated with
        your account, with the subject “Delete my account”. Include your
        business name (or, if you are a customer, the business you booked with
        and your WhatsApp number) so we can identify you.
      </>
    ),
    steps: [
      "Send your request email to hola@acomply.co.",
      "We confirm your identity by replying to that same email.",
      "We delete your account and personal data within 30 days at most, and notify you when it is done.",
    ],
    s2h: "What data is deleted",
    s2li: [
      "Your account email, name and role.",
      "Business configuration: services, prices, products and commissions.",
      "Any business photos you uploaded.",
      "Customers, bookings and full appointment history.",
      "Reviews and ratings.",
      "Conversations with the WhatsApp assistant.",
      "Photos uploaded to the look simulator.",
    ],
    s3h: "What we keep, and for how long",
    s3body:
      "For legal or accounting reasons we cannot immediately delete the following. It is removed automatically once its retention period ends:",
    s3li: [
      "Billing information: for the period required by Colombian tax law (at least 5 years).",
      "Technical logs: up to 90 days.",
    ],
    s4h: "Contact",
    s4body: (
      <>
        For any question about deleting your account or how we handle your data,
        email us at {mail("hola@acomply.co")}. We respond within 15 business
        days at most. More details in our {privacyLink("Privacy policy")}.
      </>
    ),
  },
};

function resolve(locale: string): Copy {
  return locale === "en" ? COPY.en : COPY.es;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const c = resolve(locale);
  return {
    title: c.metaTitle,
    description: c.metaDescription,
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

export default async function DeleteAccountPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const c = resolve(locale);

  return (
    <LegalShell title={c.title} updated={c.updated}>
      <p>{c.intro}</p>

      <h2>{c.s1h}</h2>
      <p>{c.s1body}</p>
      <ol>
        {c.steps.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ol>

      <h2>{c.s2h}</h2>
      <ul>
        {c.s2li.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>

      <h2>{c.s3h}</h2>
      <p>{c.s3body}</p>
      <ul>
        {c.s3li.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>

      <h2>{c.s4h}</h2>
      <p>{c.s4body}</p>
    </LegalShell>
  );
}
