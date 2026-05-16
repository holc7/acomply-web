// [perf-audited 2026-05-16 / vercel-react-best-practices v1.0 + typescript-best-practices] audited-clean — no findings
/* ============================================================
   MarketingIASection — deep-dive for Marketing IA agent
   Atmospheric coral/mint wash, copy left, phone right with the
   "approve campaign" mockup screen.
   ============================================================ */

"use client";

import PhoneFrame from "./primitives/PhoneFrame";
import SparkleIcon from "./primitives/SparkleIcon";
import CalendarIcon from "./primitives/icons/CalendarIcon";
import CheckIcon from "./primitives/icons/CheckIcon";
import PeopleIcon from "./primitives/icons/PeopleIcon";

const FEATURES: string[] = [
  "Segmenta clientes por frecuencia, gasto y servicio",
  "Sugiere promos según días flojos",
  "Genera mensaje e imagen con tu estilo",
  "Mide reservas e ingreso recuperado",
];

const MarketingScreen = () => (
  <div className="mia">
    <div className="mia__top">
      <span className="mia__back">‹</span>
      <span className="mia__title">Marketing IA</span>
      <span className="mia__menu">
        <svg viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="5" r="2"/><circle cx="12" cy="12" r="2"/><circle cx="12" cy="19" r="2"/></svg>
      </span>
    </div>

    <div className="mia__body">
      <div className="mia__sugg">
        <span className="mia__sugg-icon"><SparkleIcon size={11} color="currentColor" /></span>
        <span className="mia__sugg-text">
          <strong>Sugerido por Asistente de Análisis</strong>
          <small>Martes y miércoles están flojos.</small>
        </span>
        <span className="mia__sugg-arrow">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6"/></svg>
        </span>
      </div>

      <div className="mia__row">
        <span className="mia__row-title">Borrador de campaña</span>
        <span className="mia__row-chip">Lista para revisar</span>
      </div>

      <div className="mia__promo">
        <div className="mia__promo-eyebrow">Campaña</div>
        <div className="mia__promo-title">
          Vuelve esta semana y tu próxima cita tiene <em>20% menos.</em>
        </div>
        <span className="mia__promo-sparkles mia__promo-sparkle-1"><SparkleIcon size={16} color="currentColor" /></span>
        <span className="mia__promo-sparkles mia__promo-sparkle-2"><SparkleIcon size={10} color="currentColor" /></span>
      </div>

      <div className="mia__details">
        <div className="mia__detail">
          <span className="mia__detail-icon">
            <PeopleIcon variant="one" />
          </span>
          <span className="mia__detail-label">
            Segmento
            <small>Clientes inactivos 30–90 días</small>
          </span>
        </div>
        <div className="mia__detail">
          <span className="mia__detail-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="3"/></svg>
          </span>
          <span className="mia__detail-label">Tamaño del segmento</span>
          <span className="mia__detail-val">248 clientes</span>
        </div>
        <div className="mia__detail">
          <span className="mia__detail-icon">
            <CalendarIcon />
          </span>
          <span className="mia__detail-label">Reservas esperadas</span>
          <span className="mia__detail-val">26–34</span>
        </div>
        <div className="mia__detail">
          <span className="mia__detail-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v10M9 9.5h4.5a2 2 0 010 4H10a2 2 0 000 4h4.5"/></svg>
          </span>
          <span className="mia__detail-label">Ingreso recuperado (estimado)</span>
          <span className="mia__detail-val">
            $1.850.000
            <small>– $2.450.000</small>
          </span>
        </div>
      </div>

      <button className="mia__cta" type="button">
        <SparkleIcon size={12} color="#FFF6EE" />
        Aprobar campaña
      </button>
      <button className="mia__cta-edit" type="button">
        Editar mensaje e imagen
        <span className="mia__cta-edit-arrow">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6"/></svg>
        </span>
      </button>
    </div>

    <div className="mia__nav">
      <div className="mia__nav-item">
        <CalendarIcon />
        Agenda
      </div>
      <div className="mia__nav-item">
        <PeopleIcon variant="group" />
        Clientes
      </div>
      <div className="mia__nav-item is-active">
        <SparkleIcon size={16} color="currentColor" />
        Marketing IA
      </div>
      <div className="mia__nav-item">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 7h16M4 12h16M4 17h16"/></svg>
        Más
      </div>
    </div>
  </div>
);

export default function MarketingIASection() {
  return (
    <section className="mkt" id="marketing">
      <div className="mkt__atmo" aria-hidden="true" />
      <div className="mkt__inner">
        <div className="mkt__split">

          <div className="mkt__copy">
            <span className="mkt__eyebrow">
              <span className="mkt__eyebrow-num">02</span>
              Marketing IA
            </span>

            <h2 className="mkt__h1">
              Llena tus días lentos.<br/>
              <em>Recupera clientes que se fueron.</em>
            </h2>

            <p className="mkt__lead">
              Detecta huecos en tu agenda, agrupa clientes que llevan
              tiempo sin venir y arma campañas listas para enviar por
              WhatsApp. Tú apruebas; ella manda y mide qué funcionó.
            </p>

            <ul className="mkt__features">
              {FEATURES.map((f, i) => (
                <li key={i} className="mkt__feat">
                  <span className="mkt__feat-check"><CheckIcon strokeWidth={3} /></span>
                  <span className="mkt__feat-text">{f}</span>
                </li>
              ))}
            </ul>

            <span className="mkt__plan">
              <span className="mkt__plan-icon">
                <SparkleIcon size={14} color="currentColor" />
              </span>
              Personaliza el tono para tu marca y tu clientela.
            </span>
          </div>

          <div className="mkt__phone-col">
            <span className="mkt__deco mkt__deco--1" aria-hidden="true"><SparkleIcon size={18} color="currentColor" /></span>
            <span className="mkt__deco mkt__deco--2" aria-hidden="true"><SparkleIcon size={14} color="currentColor" /></span>
            <span className="mkt__deco mkt__deco--3" aria-hidden="true"><SparkleIcon size={12} color="currentColor" /></span>
            <span className="mkt__deco mkt__deco--4" aria-hidden="true"><SparkleIcon size={10} color="currentColor" /></span>
            <div className="mkt__phone">
              <PhoneFrame>
                <MarketingScreen />
              </PhoneFrame>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .mkt {
          position: relative;
          overflow: hidden;
          isolation: isolate;
          padding-block: clamp(2.5rem, 6vw, 5rem);
        }
        .mkt__atmo {
          position: absolute; inset: 0; z-index: 0; pointer-events: none;
          background:
            radial-gradient(ellipse 65% 80% at 55% 50%, rgba(232, 108, 87, 0.20), transparent 60%),
            radial-gradient(ellipse 50% 60% at 95% 50%, rgba(141, 218, 203, 0.18), transparent 55%),
            radial-gradient(ellipse 40% 60% at 5% 30%, rgba(245, 180, 75, 0.10), transparent 60%);
        }
        .mkt__inner {
          position: relative; z-index: 2;
          max-width: 1180px;
          margin: 0 auto;
          padding-inline: clamp(1.25rem, 5vw, 2rem);
        }

        .mkt__split {
          display: grid;
          grid-template-columns: 1fr;
          gap: clamp(2.5rem, 5vw, 4rem);
          align-items: center;
        }

        .mkt__copy { display: flex; flex-direction: column; gap: 1.5rem; max-width: 600px; }

        .mkt__eyebrow {
          display: inline-flex; align-items: center; gap: 0.65rem;
          align-self: flex-start;
          padding: 0.5rem 1rem 0.5rem 0.55rem;
          border-radius: 999px;
          background: #fff;
          box-shadow: 0 1px 0 rgba(255,255,255,0.7) inset, 0 6px 14px -8px rgba(43,33,28,0.10), 0 0 0 1px rgba(43,33,28,0.08);
          font-family: var(--font-text, 'Nunito', system-ui, sans-serif);
          font-size: 0.75rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.2em;
          color: var(--coral, #E86C57);
        }
        .mkt__eyebrow-num {
          width: 22px; height: 22px;
          border-radius: 50%;
          background: rgba(232, 108, 87, 0.14);
          color: var(--coral, #E86C57);
          display: inline-flex; align-items: center; justify-content: center;
          font-family: var(--font-display, 'Sora', system-ui, sans-serif);
          font-size: 11px;
          font-weight: 700;
          letter-spacing: -0.01em;
        }

        .mkt__h1 {
          font-family: var(--font-display, 'Sora', system-ui, sans-serif);
          font-weight: 700;
          font-size: clamp(2.25rem, 5.4vw, 4rem);
          letter-spacing: -0.03em;
          line-height: 1.02;
          color: var(--espresso, #2B211C);
          margin: 0;
          text-wrap: balance;
        }
        .mkt__h1 em {
          font-style: italic;
          color: var(--coral, #E86C57);
          font-weight: 700;
        }

        .mkt__lead {
          font-family: var(--font-text, 'Nunito', system-ui, sans-serif);
          font-size: 1.0625rem;
          color: rgba(43, 33, 28, 0.7);
          line-height: 1.55;
          text-wrap: pretty;
          margin: 0;
          max-width: 50ch;
        }

        .mkt__features {
          list-style: none;
          margin: 0.5rem 0 0;
          padding: 0;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.25rem 1.5rem;
        }
        .mkt__feat { display: flex; align-items: flex-start; gap: 0.75rem; }
        .mkt__feat-check {
          flex-shrink: 0;
          width: 28px; height: 28px;
          border-radius: 50%;
          background: rgba(232, 108, 87, 0.12);
          color: var(--coral, #E86C57);
          display: inline-flex; align-items: center; justify-content: center;
          margin-top: 1px;
        }
        .mkt__feat-check svg { width: 14px; height: 14px; }
        .mkt__feat-text {
          font-family: var(--font-text, 'Nunito', system-ui, sans-serif);
          font-size: 0.95rem;
          font-weight: 600;
          color: var(--espresso, #2B211C);
          line-height: 1.35;
        }

        .mkt__plan {
          display: inline-flex; align-items: center; gap: 0.55rem;
          align-self: flex-start;
          margin-top: 0.5rem;
          padding: 0.55rem 1rem 0.55rem 0.65rem;
          border-radius: 999px;
          background: rgba(141, 218, 203, 0.20);
          border: 1px solid rgba(141, 218, 203, 0.45);
          color: #0F6F5E;
          font-family: var(--font-text, 'Nunito', system-ui, sans-serif);
          font-size: 0.875rem;
          font-weight: 600;
        }
        .mkt__plan-icon { color: #0F6F5E; display: inline-flex; }

        .mkt__phone-col {
          position: relative;
          display: flex; justify-content: center; align-items: center;
          padding: clamp(1rem, 3vw, 2rem) 0;
        }
        .mkt__deco { position: absolute; z-index: 1; color: var(--coral, #E86C57); opacity: 0.55; pointer-events: none; }
        .mkt__deco--1 { top: 12%; right: 8%; }
        .mkt__deco--2 { top: 38%; left: -2%; color: var(--mint, #8DDACB); opacity: 0.8; }
        .mkt__deco--3 { bottom: 8%; right: 18%; }
        .mkt__deco--4 { bottom: 28%; left: 4%; opacity: 0.4; }
        .mkt__phone { position: relative; z-index: 2; }

        @media (min-width: 920px) {
          .mkt__split { grid-template-columns: 1fr 1fr; gap: 5rem; }
        }

        /* ===== Marketing IA phone screen ===== */
        .mia { display: flex; flex-direction: column; height: 100%; background: var(--cream, #F7F3EC); font-family: var(--font-text, 'Nunito', system-ui, sans-serif); }
        .mia__top {
          display: flex; align-items: center; gap: 10px;
          padding: 6px 14px 10px;
          flex-shrink: 0;
        }
        .mia__back { font-size: 18px; color: var(--espresso, #2B211C); width: 14px; }
        .mia__title {
          flex: 1;
          font-family: var(--font-display, 'Sora', system-ui, sans-serif);
          font-size: 15px;
          font-weight: 700;
          letter-spacing: -0.015em;
          color: var(--espresso, #2B211C);
        }
        .mia__menu { color: rgba(43, 33, 28, 0.5); }
        .mia__menu svg { width: 16px; height: 16px; }

        .mia__body {
          flex: 1 1 auto;
          overflow: hidden;
          padding: 0 12px 8px;
          display: flex; flex-direction: column; gap: 8px;
        }

        .mia__sugg {
          background: #fff;
          border: 1px solid rgba(245, 180, 75, 0.35);
          border-radius: 12px;
          padding: 8px 10px;
          display: flex; align-items: center; gap: 8px;
          box-shadow: 0 1px 0 rgba(255,255,255,0.7) inset;
        }
        .mia__sugg-icon {
          width: 22px; height: 22px;
          border-radius: 6px;
          background: rgba(245, 180, 75, 0.22);
          color: #B57810;
          display: inline-flex; align-items: center; justify-content: center;
          flex-shrink: 0;
        }
        .mia__sugg-text {
          flex: 1;
          font-size: 10.5px;
          line-height: 1.35;
          color: var(--espresso, #2B211C);
        }
        .mia__sugg-text strong { font-weight: 700; }
        .mia__sugg-text small { display: block; color: rgba(43, 33, 28, 0.5); margin-top: 1px; font-size: 9.5px; }
        .mia__sugg-arrow { color: rgba(43, 33, 28, 0.3); }
        .mia__sugg-arrow svg { width: 12px; height: 12px; }

        .mia__row {
          display: flex; align-items: center; justify-content: space-between;
          padding: 6px 2px 4px;
        }
        .mia__row-title {
          font-family: var(--font-display, 'Sora', system-ui, sans-serif);
          font-size: 12px;
          font-weight: 700;
          color: var(--espresso, #2B211C);
        }
        .mia__row-chip {
          font-size: 9px;
          font-weight: 700;
          padding: 3px 8px;
          border-radius: 999px;
          background: rgba(141, 218, 203, 0.32);
          color: #0F6F5E;
          letter-spacing: 0.02em;
        }

        .mia__promo {
          position: relative;
          aspect-ratio: 4 / 2.6;
          border-radius: 14px;
          padding: 14px 16px;
          overflow: hidden;
          background:
            radial-gradient(circle at 30% 30%, rgba(245, 180, 75, 0.55), transparent 55%),
            radial-gradient(circle at 80% 80%, rgba(232, 108, 87, 0.55), transparent 55%),
            linear-gradient(135deg, #F08A52 0%, #E86C57 50%, #F5B44B 100%);
          color: #FFF6EE;
          display: flex; flex-direction: column; justify-content: space-between;
        }
        .mia__promo-eyebrow {
          font-size: 8.5px;
          text-transform: uppercase;
          letter-spacing: 0.22em;
          font-weight: 700;
          opacity: 0.92;
        }
        .mia__promo-title {
          font-family: var(--font-display, 'Sora', system-ui, sans-serif);
          font-size: 15px;
          font-weight: 700;
          letter-spacing: -0.015em;
          line-height: 1.15;
          text-wrap: balance;
          max-width: 88%;
        }
        .mia__promo-title em { font-style: italic; }
        .mia__promo-sparkles { position: absolute; }
        .mia__promo-sparkle-1 { top: 12px; right: 14px; opacity: 0.9; color: #FFF6EE; }
        .mia__promo-sparkle-2 { bottom: 16px; right: 24px; opacity: 0.55; color: #FFF6EE; }

        .mia__details {
          background: #fff;
          border-radius: 12px;
          padding: 10px 12px;
          display: flex; flex-direction: column; gap: 6px;
          box-shadow: 0 1px 0 rgba(255,255,255,0.7) inset, 0 4px 12px -8px rgba(43,33,28,0.08);
        }
        .mia__detail {
          display: flex; align-items: center; gap: 8px;
          font-size: 10.5px;
          color: var(--espresso, #2B211C);
          padding: 4px 0;
        }
        .mia__detail + .mia__detail { border-top: 1px solid rgba(43, 33, 28, 0.08); }
        .mia__detail-icon {
          width: 22px; height: 22px;
          border-radius: 6px;
          background: rgba(43, 33, 28, 0.05);
          color: rgba(43, 33, 28, 0.7);
          display: inline-flex; align-items: center; justify-content: center;
          flex-shrink: 0;
        }
        .mia__detail-icon svg { width: 12px; height: 12px; }
        .mia__detail-label {
          flex: 1;
          font-size: 10.5px;
          color: rgba(43, 33, 28, 0.7);
        }
        .mia__detail-label small { display: block; font-size: 9.5px; color: rgba(43, 33, 28, 0.5); margin-top: 1px; }
        .mia__detail-val {
          font-weight: 700; color: var(--espresso, #2B211C);
          font-size: 10.5px;
          text-align: right;
        }
        .mia__detail-val small { display: block; font-size: 9.5px; font-weight: 600; color: rgba(43, 33, 28, 0.5); }

        .mia__cta {
          background: var(--grad-cta-90);
          color: #FFF6EE;
          font-family: var(--font-text, 'Nunito', system-ui, sans-serif);
          font-size: 12.5px;
          font-weight: 700;
          border: 0;
          border-radius: 12px;
          padding: 11px 12px;
          display: flex; align-items: center; justify-content: center; gap: 6px;
          box-shadow: 0 8px 18px -6px rgba(232, 108, 87, 0.42), inset 0 1px 0 rgba(255,255,255,0.30);
          width: 100%;
          margin-top: 2px;
          cursor: pointer;
        }
        .mia__cta-edit {
          background: transparent;
          color: var(--espresso, #2B211C);
          font-size: 11px;
          font-weight: 700;
          padding: 8px 4px 0;
          display: flex; align-items: center; justify-content: space-between;
          border: 0;
          width: 100%;
          cursor: pointer;
        }
        .mia__cta-edit-arrow { color: rgba(43, 33, 28, 0.5); }
        .mia__cta-edit-arrow svg { width: 12px; height: 12px; }

        .mia__nav {
          margin-top: auto;
          display: flex; align-items: center; justify-content: space-around;
          padding: 8px 0 6px;
          border-top: 1px solid rgba(43, 33, 28, 0.08);
          background: rgba(247, 243, 236, 0.85);
          backdrop-filter: blur(8px);
          flex-shrink: 0;
        }
        .mia__nav-item {
          display: flex; flex-direction: column; align-items: center; gap: 2px;
          font-size: 8.5px; font-weight: 600;
          color: rgba(43, 33, 28, 0.5);
        }
        .mia__nav-item.is-active { color: var(--coral, #E86C57); }
        .mia__nav-item svg { width: 16px; height: 16px; }
      `}</style>
    </section>
  );
}
