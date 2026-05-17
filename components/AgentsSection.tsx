// [perf-audited 2026-05-15 / vercel-react-best-practices v1.0 + typescript-best-practices] audited-clean — no findings
// Verbatim port of Downloads/Agentes IA Section.html.
// PhoneMockup primitive from the source isn't shipped — using project's PhoneFrame.
"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import PhoneFrame from "./primitives/PhoneFrame";
import SparkleIcon from "./primitives/SparkleIcon";
import BarChartIcon from "./primitives/icons/BarChartIcon";
import MegaphoneIcon from "./primitives/icons/MegaphoneIcon";
import TrendingUpIcon from "./primitives/icons/TrendingUpIcon";
import WhatsAppIcon from "./primitives/icons/WhatsAppIcon";
import WhatsAppScreen from "./screens/WhatsAppScreen";

type Card = {
  num: string;
  eyebrow: string;
  title: string;
  desc: string;
  icon: ReactNode;
};

const CARDS: Card[] = [
  {
    num: "01",
    eyebrow: "Recepcionista IA",
    title: "Contesta cada WhatsApp, incluso a las 2 a.m.",
    desc: "Responde con tus horarios reales, confirma citas y adapta el tono a cada cliente: paisa, costeño, formal o cercano.",
    icon: <WhatsAppIcon />,
  },
  {
    num: "02",
    eyebrow: "Marketing IA",
    title: "Llena tus días lentos automáticamente.",
    desc: "Detecta huecos, agrupa clientes dormidos y envía promos por WhatsApp. Tú apruebas, ella manda.",
    icon: <MegaphoneIcon />,
  },
  {
    num: "03",
    eyebrow: "Asistente de análisis",
    title: "Pregúntale lo que sea a tu negocio.",
    desc: "Responde con datos reales: ventas, clientes, días flojos. Sin tecnicismos, sin inventos.",
    icon: <BarChartIcon />,
  },
  {
    num: "04",
    eyebrow: "Crece tu negocio",
    title: "Más reservas, menos huecos, mejores decisiones.",
    desc: "Las 3 IAs trabajan en equipo para que tu negocio crezca solo, mientras tú atiendes.",
    icon: <TrendingUpIcon />,
  },
];

export default function AgentsSection() {
  const [active, setActive] = useState(0);
  const [revealed, setRevealed] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el || typeof IntersectionObserver === "undefined") {
      setRevealed(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          setRevealed(entry.isIntersecting);
        }
      },
      { threshold: 0.18 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`agentes${revealed ? " is-revealed" : ""}`}
      id="agentes"
    >
      <div className="agentes__inner">

        <div className="agentes__intro">
          <h2 className="agentes__h1">
            La IA que trabaja por ti<br />mientras tú <em>atiendes a tu cliente.</em>
          </h2>
          <p className="agentes__sub">
            No es un chatbot genérico. Son asistentes que responden, confirman citas
            y <strong>personalizan el tono para cada cliente</strong> mientras estás ocupado.
          </p>
        </div>

        <div className="agentes__split">
          <div className="agentes__phone-col">
            <span className="agentes__phone-atmo" aria-hidden="true" />

            <span className="agentes__deco agentes__deco--big-coral" aria-hidden="true"><SparkleIcon color="currentColor" size={28} /></span>
            <span className="agentes__deco agentes__deco--mid-coral" aria-hidden="true"><SparkleIcon color="currentColor" size={14} /></span>
            <span className="agentes__deco agentes__deco--tiny-coral" aria-hidden="true"><SparkleIcon color="currentColor" size={10} /></span>
            <span className="agentes__deco agentes__deco--small-mint" aria-hidden="true"><SparkleIcon color="currentColor" size={14} /></span>
            <span className="agentes__deco agentes__deco--big-mint" aria-hidden="true"><SparkleIcon color="currentColor" size={22} /></span>

            <div className="agentes__phone">
              <PhoneFrame>
                <WhatsAppScreen />
              </PhoneFrame>
            </div>
          </div>

          <div className="agentes__features">
            <span className="agentes__rail" aria-hidden="true" />
            {CARDS.map((_, i) => (
              <span
                key={i}
                className={`agentes__rail-dot agentes__rail-dot--${i === active ? "active" : "inactive"}`}
                style={{ top: `${32 + i * 136}px` }}
                aria-hidden="true"
              />
            ))}

            {CARDS.map((card, i) => (
              <article
                key={card.num}
                className={`agente-card${i === active ? " is-active" : ""}`}
                onClick={() => setActive(i)}
              >
                <span className="agente-card__num">{card.num}</span>
                <div className="agente-card__body">
                  <span className="agente-card__eyebrow">{card.eyebrow}</span>
                  <h3 className="agente-card__title">{card.title}</h3>
                  <p className="agente-card__desc">{card.desc}</p>
                </div>
                <span className="agente-card__icon" aria-hidden="true">{card.icon}</span>
              </article>
            ))}
          </div>
        </div>

        <div className="agentes__cta-row">
          <a href="#demo" className="agentes__cta">
            <span className="agentes__cta-icon" aria-hidden="true">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7S1 12 1 12z"/>
                <circle cx="12" cy="12" r="3"/>
              </svg>
            </span>
            Ver demo interactiva
            <span className="agentes__cta-arrow" aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
