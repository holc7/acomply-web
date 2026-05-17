// [perf-audited 2026-05-15 / vercel-react-best-practices v1.0 + typescript-best-practices] audited-clean — no findings
"use client";

import CheckCircleIcon from "./primitives/icons/CheckCircleIcon";

type Feature = { label: string };

type Props = {
  tier?: string;
  name?: string;
  sell?: string;
  price?: string;
  period?: string;
  features?: Feature[];
  ctaLabel?: string;
  ctaHref?: string;
  className?: string;
};

const DEFAULT_FEATURES: Feature[] = [
  { label: "Página de reservas pública" },
  { label: "Recordatorios automáticos por WhatsApp" },
  { label: "Agenda individual" },
  { label: "Reseñas y calificaciones" },
  { label: "Galería de trabajos" },
  { label: "Gestión de clientes" },
];

export default function PricingCardEsencial({
  tier = "Esencial",
  name = "Acomply Esencial",
  sell = "Para una sola persona. Sin sorpresas y sin IA.",
  price = "39.900",
  period = "/mes · facturación mensual",
  features,
  ctaLabel = "Empieza con Esencial",
  ctaHref = "#demo",
  className = "",
}: Props) {
  const feats = features ?? DEFAULT_FEATURES;

  return (
    <div className={`pce ${className}`}>
      <div className="pce__wave" aria-hidden="true">
        <svg viewBox="0 0 220 140" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <defs>
            <radialGradient id="pce-wash" cx="0%" cy="100%" r="90%">
              <stop offset="0%"  stopColor="#E86C57" stopOpacity="0.22" />
              <stop offset="55%" stopColor="#E86C57" stopOpacity="0.06" />
              <stop offset="100%" stopColor="#E86C57" stopOpacity="0" />
            </radialGradient>
            <linearGradient id="pce-line" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%"  stopColor="#E86C57" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#E86C57" stopOpacity="0" />
            </linearGradient>
          </defs>
          <rect width="220" height="140" fill="url(#pce-wash)" />
          <path d="M 0 96 Q 40 80 90 92 T 220 100" fill="none" stroke="url(#pce-line)" strokeWidth="1" strokeLinecap="round" opacity="0.7"/>
          <path d="M 0 112 Q 50 100 110 108 T 220 116" fill="none" stroke="url(#pce-line)" strokeWidth="1" strokeLinecap="round" opacity="0.5"/>
          <path d="M 0 126 Q 60 118 130 122 T 220 130" fill="none" stroke="url(#pce-line)" strokeWidth="1" strokeLinecap="round" opacity="0.35"/>
        </svg>
      </div>
      <span className="pce__noise" aria-hidden="true" />

      <div className="pce__inner">
        <span className="pce__tier">{tier}</span>
        <h3 className="pce__name">{name}</h3>
        {sell && <p className="pce__sell">{sell}</p>}

        <div className="pce__price-wrap">
          <span className="pce__price-cur">$</span>
          <span className="pce__price-num">{price}</span>
          <span className="pce__price-curB">COP</span>
        </div>
        {period && <div className="pce__period">{period}</div>}

        <hr className="pce__hr" />

        <ul className="pce__features">
          {feats.map((f, i) => (
            <li key={i} className="pce__feat">
              <span className="pce__feat-check"><CheckCircleIcon /></span>
              <span>{f.label}</span>
            </li>
          ))}
        </ul>

        <div className="pce__cta-wrap">
          <a className="pce__cta" href={ctaHref}>
            {ctaLabel}
          </a>
        </div>
      </div>
    </div>
  );
}
