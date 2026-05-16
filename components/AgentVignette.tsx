// One of the 3 agent moments. Mobile: phone above copy. Desktop: alternates side-by-side.

import type { ReactNode } from "react";
import PhoneFrame from "./primitives/PhoneFrame";
import CheckIcon from "./primitives/icons/CheckIcon";

type Color = "coral" | "amber" | "mint";

type Props = {
  color?: Color;
  index?: string;
  agentLabel: string;
  nameNode: ReactNode;
  lead: string;
  features?: string[];
  screen: ReactNode;
  reverse?: boolean;
  planAvailability?: string;
};

export default function AgentVignette({
  color = "coral",
  index = "01",
  agentLabel,
  nameNode,
  lead,
  features = [],
  screen,
  reverse = false,
  planAvailability = "Disponible en Maestro y Élite",
}: Props) {
  return (
    <section className={`vign vign--${color}${reverse ? " vign--reverse" : ""}`} id={`agente-${index}`}>
      <div className="vign__atmo" aria-hidden="true" />
      <div className="container vign__inner">
        <div className="vign__phone-wrap">
          <PhoneFrame>{screen}</PhoneFrame>
        </div>
        <div className="vign__copy">
          <span className="vign__agent-tag">
            <span className="vign__agent-num"><span>{index}</span></span>
            {agentLabel}
          </span>
          <h2 className="vign__name">{nameNode}</h2>
          <p className="vign__lead">{lead}</p>

          {features.length > 0 && (
            <ul className="vign__features" role="list">
              {features.map((f, i) => (
                <li key={i} className="vign__feature">
                  <span className="vign__feature-icon"><CheckIcon variant="swoop" strokeWidth={3} /></span>
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          )}

          <div className="vign__badges">
            <span className="vign__plan">
              <span className="vign__plan-dot" />
              {planAvailability}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
