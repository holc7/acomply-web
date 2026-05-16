// [perf-audited 2026-05-15 / vercel-react-best-practices v1.0 + typescript-best-practices] audited-clean — no findings
// Ported from Downloads/Resultados Dark Section.html. Visual reference: Image #14
// (left-aligned head, no brand wordmark, no subtitle, no bottom footer, mint eyebrow + numbers).

import SparkleIcon from "./primitives/SparkleIcon";
import CalendarIcon from "./primitives/icons/CalendarIcon";
import ChatBubbleIcon from "./primitives/icons/ChatBubbleIcon";
import WhatsAppIcon from "./primitives/icons/WhatsAppIcon";
import type { ReactNode } from "react";

type Card = {
  num: string;
  icon: ReactNode;
  headline: ReactNode;
};

const CARDS: Card[] = [
  {
    num: "01",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="9" cy="8" r="4"/>
        <path d="M2 21a7 7 0 0114 0"/>
        <path d="M18 8v6M15 11h6"/>
      </svg>
    ),
    headline: <>Recupera <em>clientes</em> que dejaron de venir.</>,
  },
  {
    num: "02",
    icon: <CalendarIcon strokeWidth={1.8} />,
    headline: <>Llena tus <em>días lentos</em> automáticamente.</>,
  },
  {
    num: "03",
    icon: <ChatBubbleIcon />,
    headline: <>Recordatorios <em>24h antes</em>. Cero ausencias.</>,
  },
  {
    num: "04",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="9"/>
        <path d="M3 12h18M12 3a14 14 0 010 18M12 3a14 14 0 000 18"/>
      </svg>
    ),
    headline: <>Tu <em>página de reservas</em>, con tu marca.</>,
  },
  {
    num: "05",
    icon: <WhatsAppIcon />,
    headline: <><em>WhatsApp</em> oficial de Meta. Sin bloqueos ni improvisación.</>,
  },
];

export default function ResultadosSection() {
  return (
    <section className="res">
      <div className="res__arc-left" aria-hidden="true" />
      <div className="res__arc-right" aria-hidden="true" />

      <div className="res__inner">
        <div className="res__head">
          <span className="res__eyebrow">
            <SparkleIcon size={12} color="currentColor" />
            Crece tu negocio
            <SparkleIcon size={12} color="currentColor" />
          </span>
          <h2 className="res__h1">
            Resultados claros,<br />
            <em>no promesas vacías.</em>
          </h2>
        </div>

        <div className="res__grid">
          {CARDS.map((c) => (
            <article key={c.num} className="res-card">
              <div className="res-card__top">
                <span className="res-card__icon">{c.icon}</span>
                <span className="res-card__num">{c.num}</span>
                <span className="res-card__rail" />
                <span className="res-card__spark" aria-hidden="true">
                  <SparkleIcon size={12} color="currentColor" />
                </span>
              </div>
              <h3 className="res-card__headline">{c.headline}</h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
