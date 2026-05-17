// [perf-audited 2026-05-15 / vercel-react-best-practices v1.0 + typescript-best-practices] audited-clean — no findings
"use client";

// 3-card pricing surface with a tick-snapped team-size slider that lifts
// the matching card. Plans canonical from acomply-app/lib/plans.ts — do not drift.

import { useState } from "react";
import PricingCardEsencial from "./PricingCardEsencial";
import PricingCardMaestro from "./PricingCardMaestro";
import PricingCardDark from "./PricingCardDark";
import SparkleIcon from "./primitives/SparkleIcon";
import PeopleIcon from "./primitives/icons/PeopleIcon";

type Tier = "esencial" | "maestro" | "elite";

const TICK_VALUES = [1, 3, 5, 7, 10] as const;
const fmtTeamSize = (n: number) => (n >= 10 ? "10+" : String(n));

const recommendTier = (n: number): Tier => {
  if (n <= 1) return "esencial";
  if (n <= 5) return "maestro";
  return "elite";
};

const TIER_LABEL: Record<Tier, string> = {
  esencial: "Esencial",
  maestro: "Maestro",
  elite: "Élite",
};

export default function PricingCards() {
  const [team, setTeam] = useState<number>(3);
  const tier = recommendTier(team);

  const tickIndex = TICK_VALUES.reduce<number>(
    (best, v, i) =>
      Math.abs(v - team) < Math.abs(TICK_VALUES[best] - team) ? i : best,
    0,
  );
  const visualPct = (tickIndex / (TICK_VALUES.length - 1)) * 100;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = parseInt(e.target.value, 10);
    const closest = TICK_VALUES.reduce(
      (best, v) => (Math.abs(v - raw) < Math.abs(best - raw) ? v : best),
      TICK_VALUES[0] as number,
    );
    setTeam(closest);
  };

  const tierColorClass = `ppslider__suggestion-tier--${
    tier === "esencial" ? "coral" : tier === "maestro" ? "amber" : "mint"
  }`;

  return (
    <section className="ppage" id="precios">
      <div className="ppage__inner">

        <div className="ppage__hero">
          <h1 className="ppage__h1">
            Elige tu plan.<br />
            <em>Cancela cuando quieras.</em>
            <span className="ppage__h1-spark">
              <SparkleIcon size={28} color="currentColor" />
            </span>
          </h1>
          <p className="ppage__sub">
            Tres planes. Sin contratos largos, sin letras chiquitas.
            La IA está disponible desde Maestro.
          </p>
        </div>

        <div className="ppslider">
          <div className="ppslider__row">
            <div className="ppslider__label">¿Cuántas personas en tu equipo?</div>
            <div className="ppslider__track-wrap">
              <div className="ppslider__track" />
              <div className="ppslider__fill" style={{ width: `${visualPct}%` }} />
              <div className="ppslider__ticks">
                {TICK_VALUES.map((_v, i) => (
                  <span
                    key={i}
                    className={`ppslider__tick-dot${
                      i < tickIndex ? " is-passed" : ""
                    }${i === tickIndex ? " is-current" : ""}`}
                  />
                ))}
              </div>
              <div className="ppslider__labels">
                {TICK_VALUES.map((v, i) => (
                  <span
                    key={i}
                    className={`ppslider__tick-label${i === tickIndex ? " is-current" : ""}`}
                  >
                    {fmtTeamSize(v)}
                  </span>
                ))}
              </div>
              <span className="ppslider__thumb" style={{ left: `${visualPct}%` }} aria-hidden="true">
                <SparkleIcon size={14} color="currentColor" />
              </span>
              <input
                type="range"
                min={1}
                max={10}
                step={1}
                value={team}
                onChange={handleChange}
                className="ppslider__range"
                aria-label="Tamaño del equipo"
              />
            </div>
          </div>
          <span className="ppslider__suggestion">
            <span className="ppslider__suggestion-icon">
              <PeopleIcon variant="group" strokeWidth={1.8} />
            </span>
            Te queda:&nbsp;
            <span className={`ppslider__suggestion-tier ${tierColorClass}`}>
              {TIER_LABEL[tier]}
            </span>
          </span>
        </div>

        <div className="ppage__row-wrap">
          <div className="prow">
            <PricingCardEsencial
              className={tier === "esencial" ? "is-recommended" : ""}
            />
            <PricingCardMaestro
              className={tier === "maestro" ? "is-recommended" : ""}
              badge={tier === "maestro" ? "Recomendado para ti" : "Recomendado"}
            />
            <PricingCardDark
              tier="Élite"
              name="Acomply Élite"
              sell="Para equipos sin límite que necesitan más."
              price="79.900"
              features={[
                { label: "Todo lo del plan Maestro" },
                { label: "Profesionales ilimitados" },
                { label: "Soporte prioritario" },
                { label: "Personalización avanzada de marca" },
              ]}
              accent="mint"
              glowDirection="top-right"
              ctaLabel="Empieza con Élite"
              ctaHref="#demo"
              className={tier === "elite" ? "is-recommended" : ""}
            />
          </div>
        </div>

        <div className="ppage__trust">
          <div className="pptrust__item">
            <span className="pptrust__icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M12 3l8 4v6c0 4.5-3.4 8.3-8 9-4.6-.7-8-4.5-8-9V7l8-4z" />
                <path d="M9 12l2 2 4-4" />
              </svg>
            </span>
            <div className="pptrust__body">
              <div className="pptrust__name">Sin contratos largos</div>
              <div className="pptrust__desc">Cancela cuando quieras.</div>
            </div>
          </div>
          <div className="pptrust__item">
            <span className="pptrust__icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x="5" y="11" width="14" height="10" rx="2" />
                <path d="M8 11V7a4 4 0 018 0v4" />
              </svg>
            </span>
            <div className="pptrust__body">
              <div className="pptrust__name">Tus datos, siempre tuyos</div>
              <div className="pptrust__desc">Seguridad de nivel empresarial.</div>
            </div>
          </div>
          <div className="pptrust__item">
            <span className="pptrust__icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M3 11a9 9 0 0118 0v3a2 2 0 01-2 2h-1v-5h3M3 11v3a2 2 0 002 2h1v-5H3" />
              </svg>
            </span>
            <div className="pptrust__body">
              <div className="pptrust__name">Soporte real</div>
              <div className="pptrust__desc">Personas que te entienden.</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
