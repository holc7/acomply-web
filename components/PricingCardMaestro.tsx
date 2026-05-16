// [perf-audited 2026-05-15 / vercel-react-best-practices v1.0 + typescript-best-practices] audited-clean — no findings
"use client";

import type { ReactNode } from "react";
import SparkleIcon from "./primitives/SparkleIcon";
import BarChartIcon from "./primitives/icons/BarChartIcon";
import ChatBubbleIcon from "./primitives/icons/ChatBubbleIcon";
import CheckCircleIcon from "./primitives/icons/CheckCircleIcon";
import GiftIcon from "./primitives/icons/GiftIcon";
import MegaphoneIcon from "./primitives/icons/MegaphoneIcon";
import QrIcon from "./primitives/icons/QrIcon";

export type MaestroFeature =
  | { section: string }
  | { label: string; note?: string; icon?: ReactNode };

type Props = {
  tier?: string;
  name?: string;
  sell?: string;
  price?: string;
  period?: string;
  badge?: string | null;
  features?: MaestroFeature[];
  ctaLabel?: string;
  ctaHref?: string;
  className?: string;
};

const DEFAULT_FEATURES: MaestroFeature[] = [
  { label: "Todo lo del plan Esencial" },
  { label: "Hasta 5 profesionales" },
  { section: "IA incluida" },
  { label: "500 mensajes WhatsApp + 200 Looks IA", note: "Gratis cada mes", icon: <GiftIcon /> },
  { label: "Recepcionista IA en WhatsApp", note: "Reserva por ti", icon: <ChatBubbleIcon /> },
  { label: "Marketing IA", note: "Genera promos, las envía y atribuye reservas", icon: <MegaphoneIcon /> },
  { label: "Asistente de análisis", note: "Chat con tu negocio", icon: <BarChartIcon /> },
  { label: "QR estilizado con IA", icon: <QrIcon /> },
  { section: "Operaciones" },
  { label: "Control de gastos e ingresos" },
  { label: "Informes financieros" },
  { label: "Manejo de inventario" },
];

export default function PricingCardMaestro({
  tier = "Maestro",
  name = "Acomply Maestro",
  sell = "Para crecer hasta 5 personas. IA incluida.",
  price = "59.900",
  period = "/mes · facturación mensual",
  badge = "Recomendado",
  features,
  ctaLabel = "Empieza con Maestro",
  ctaHref = "#demo",
  className = "",
}: Props) {
  const feats = features ?? DEFAULT_FEATURES;

  return (
    <div className={`pcm ${className}`}>
      {badge && (
        <span className="pcm__badge">
          <span className="pcm__badge-spark"><SparkleIcon size={12} color="#FFF6EE" /></span>
          {badge}
        </span>
      )}

      {tier && <span className="pcm__tier">{tier}</span>}

      <h3 className="pcm__name">{name}</h3>
      {sell && <p className="pcm__sell">{sell}</p>}

      <div className="pcm__price-wrap">
        <span className="pcm__price-cur">$</span>
        <span className="pcm__price-num">{price}</span>
        <span className="pcm__price-curB">COP</span>
      </div>
      {period && <div className="pcm__period">{period}</div>}

      <hr className="pcm__hr" />

      <ul className="pcm__features">
        {feats.map((f, i) => {
          if ("section" in f) {
            return (
              <li key={i} className="pcm__section">
                <span className="pcm__section-label">{f.section}</span>
                <span className="pcm__section-rail" />
              </li>
            );
          }
          const isCheck = !f.icon;
          return (
            <li key={i} className="pcm__feat">
              <span className={`pcm__feat-icon${isCheck ? " pcm__feat-icon--check" : ""}`}>
                {isCheck ? <CheckCircleIcon /> : f.icon}
              </span>
              <span>
                {f.label}
                {f.note && <span className="pcm__feat-note">{f.note}</span>}
              </span>
            </li>
          );
        })}
      </ul>

      <div className="pcm__cta-wrap">
        <a className="pcm__cta" href={ctaHref}>
          <span className="pcm__cta-spark" aria-hidden="true">
            <SparkleIcon size={16} color="#FFF6EE" />
          </span>
          {ctaLabel}
        </a>
      </div>
    </div>
  );
}
