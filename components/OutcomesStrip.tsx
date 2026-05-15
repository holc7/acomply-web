// Five owner-outcome tiles on espresso. Copy is LOCKED (per brand brief).

import type { ReactNode } from "react";

const OUTCOMES: ReadonlyArray<{ title: ReactNode; icon: ReactNode }> = [
  {
    title: <>Recupera los clientes <em>que dejaron de venir.</em></>,
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.4 8.4 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.4 8.4 0 01-3.8-.9L3 21l1.9-5.7a8.4 8.4 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.4 8.4 0 013.8-.9h.5A8.5 8.5 0 0121 11v.5z"/></svg>,
  },
  {
    title: <>Llena tus días lentos <em>automáticamente.</em></>,
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="3"/><path d="M3 10h18M8 2v4M16 2v4M8 14h4M8 18h8"/></svg>,
  },
  {
    title: <>Cobra antes de la cita,<br /><em>no después.</em></>,
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 10h18M7 15h3"/></svg>,
  },
  {
    title: <>Tu propia página de reservas <em>con tu dominio.</em></>,
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 010 18M12 3a14 14 0 000 18"/></svg>,
  },
  {
    title: <>WhatsApp oficial de Meta. <em>No se cae, no te bloquean.</em></>,
    icon: <svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.5 3.5A11.5 11.5 0 002.6 17.2L1 23l5.9-1.6A11.5 11.5 0 1020.5 3.5zM12 21.2a9.2 9.2 0 01-4.7-1.3l-.3-.2-3.5.9.9-3.4-.2-.4A9.3 9.3 0 1112 21.2z"/></svg>,
  },
];

export default function OutcomesStrip() {
  return (
    <section className="outcomes noise noise--dark" id="resultados">
      <div className="outcomes__atmo" aria-hidden="true" />
      <div className="container outcomes__inner">
        <div className="outcomes__head">
          <span className="outcomes__eyebrow">Lo que cambia en tu negocio</span>
          <h2 className="outcomes__title">
            Resultados claros,<br />
            <em>no promesas vacías.</em>
          </h2>
        </div>

        <div className="outcomes__grid">
          {OUTCOMES.map((o, i) => (
            <article key={i} className="outcome">
              <div className="outcome__icon-wrap">{o.icon}</div>
              <div className="outcome__num">{String(i + 1).padStart(2, "0")}</div>
              <h3 className="outcome__title">{o.title}</h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
