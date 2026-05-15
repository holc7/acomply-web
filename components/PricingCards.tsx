"use client";

// Section wrapper: 3 cards + team-size slider that auto-recommends a tier.
// Plans canonical from acomply-app/lib/plans.ts — do not drift.

import { useState } from "react";
import PricingCard, { type Feature } from "./PricingCard";
import SparkleIcon from "./primitives/SparkleIcon";

const fmtCOP = (n: number) => n.toLocaleString("es-CO");

const ESENCIAL_FEATURES: Feature[] = [
  { label: "Página de reservas pública" },
  { label: "Recordatorios automáticos por WhatsApp" },
  { label: "Agenda individual" },
  { label: "Reseñas y calificaciones" },
  { label: "Galería de trabajos" },
  { label: "Gestión de clientes" },
];

const MAESTRO_FEATURES: Feature[] = [
  { label: "Todo lo del plan Esencial" },
  { label: "Hasta 5 profesionales" },
  { sectionLabel: "IA incluida" },
  { label: "Recepcionista IA en WhatsApp", ai: true, note: "Reserva por ti" },
  { label: "Marketing IA", ai: true, note: "Genera promos, las envía y atribuye reservas" },
  { label: "Asistente de análisis", ai: true, note: "Chat con tu negocio" },
  { label: "QR estilizado con IA", ai: true },
  { sectionLabel: "Operaciones" },
  { label: "Control de gastos e ingresos" },
  { label: "Informes financieros" },
  { label: "Manejo de inventario" },
];

const ELITE_FEATURES: Feature[] = [
  { label: "Todo lo del plan Maestro" },
  { label: "Profesionales ilimitados" },
  { label: "Soporte prioritario" },
  { label: "Personalización avanzada de marca" },
];

const recommendTier = (teamSize: number): "esencial" | "maestro" | "elite" => {
  if (teamSize <= 1) return "esencial";
  if (teamSize <= 5) return "maestro";
  return "elite";
};

const TEAM_MAX = 15;
const formatTeamSize = (n: number) => (n >= 10 ? "10+" : String(n));

export default function PricingCards() {
  const [teamSize, setTeamSize] = useState(3);
  const recommended = recommendTier(teamSize);

  return (
    <section className="pricing" id="precios">
      <div className="pricing__atmo" aria-hidden="true" />
      <div className="container pricing__inner">

        <div className="pricing__head">
          <span className="pricing__eyebrow">Precios claros</span>
          <h2 className="pricing__title">
            Elige tu plan.<br /><em>Cancela cuando quieras.</em>
          </h2>
          <p className="pricing__sub">
            Tres planes. Sin contratos largos, sin letras chiquitas.
            La IA está disponible desde Maestro.
          </p>
        </div>

        <div className="pricing__sizer" role="group" aria-labelledby="sizer-label">
          <div className="pricing__sizer-top">
            <span id="sizer-label">¿Cuántas personas en tu equipo? <strong>{formatTeamSize(teamSize)}</strong></span>
            <span className="pricing__sizer-rec">
              <SparkleIcon size={10} color="currentColor" />
              Te queda: <strong style={{ marginLeft: 2, textTransform: "capitalize" }}>{recommended}</strong>
            </span>
          </div>
          <input
            type="range"
            min={1} max={TEAM_MAX} step={1}
            value={teamSize}
            onChange={(e) => setTeamSize(parseInt(e.target.value, 10))}
            className="pricing__sizer-range"
            aria-label="Tamaño del equipo"
          />
          <div className="pricing__sizer-ticks">
            <span>1</span><span>3</span><span>5</span><span>7</span><span>10+</span>
          </div>
        </div>

        <div className="pricing__grid">
          <PricingCard
            tier="Esencial"
            name="Acomply Esencial"
            sell="Para una sola persona. Sin sorpresas y sin IA."
            price={fmtCOP(39900)}
            features={ESENCIAL_FEATURES}
            featured={recommended === "esencial"}
            badgeText="Recomendado para ti"
            ctaLabel="Empieza con Esencial"
          />
          <PricingCard
            tier="Maestro"
            name="Acomply Maestro"
            sell="Para crecer hasta 5 personas. IA incluida."
            price={fmtCOP(59900)}
            features={MAESTRO_FEATURES}
            featured={recommended === "maestro"}
            badgeText={recommended === "maestro" ? "Recomendado para ti" : "Más popular"}
            ctaLabel="Empieza con Maestro"
          />
          <PricingCard
            tier="Élite"
            name="Acomply Élite"
            sell="Para equipos sin límite que necesitan más."
            price={fmtCOP(79900)}
            features={ELITE_FEATURES}
            featured={recommended === "elite"}
            badgeText="Recomendado para ti"
            ctaLabel="Hablar con ventas"
            ctaHref="#demo"
          />
        </div>

        <div className="pricing__foot">
          <span>Todos los planes incluyen WhatsApp oficial de Meta y cobros con Wompi.</span>
          <span>
            ¿Dudas? <a href="#faq">Mira las preguntas frecuentes</a> o <a href="#demo">agenda una demo</a>.
          </span>
        </div>
      </div>
    </section>
  );
}
