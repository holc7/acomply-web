"use client";

import { useState, type ReactNode } from "react";

const FAQ_ITEMS: ReadonlyArray<{ q: string; a: ReactNode }> = [
  {
    q: "¿Me pueden bloquear el WhatsApp?",
    a: (
      <>
        <strong>No.</strong> Usamos la API oficial de WhatsApp Business (Meta). No clonamos números ni operamos en gris.
        Tu cuenta y la de tus clientes están protegidas y cumplen con las reglas de la plataforma.
      </>
    ),
  },
  {
    q: "¿Tengo que aprender tecnología?",
    a: (
      <>
        No. Si sabes mandar un audio por WhatsApp, sabes usar Acomply.
        Te ayudamos con la configuración inicial en una llamada de 30 minutos
        y de ahí en adelante todo se maneja desde el celular.
      </>
    ),
  },
  {
    q: "¿Funciona si trabajo solo, sin equipo?",
    a: (
      <>
        Sí. <strong>Acomply Esencial</strong> está pensado exactamente para eso: una sola persona, sin IA pero con todo el sistema de reservas, recordatorios y cobros.
        Si más adelante creces o quieres que la IA conteste por ti, subes a Maestro y sigues con tus mismos datos.
      </>
    ),
  },
  {
    q: "¿Qué pasa con los datos de mis clientes?",
    a: (
      <>
        Tus datos son tuyos. Cumplimos <strong>Habeas Data (Ley 1581 de Colombia)</strong>, ciframos la información
        y solo enviamos mensajes de marketing a clientes que hayan dado consentimiento explícito.
        Puedes exportar o eliminar tus datos cuando quieras.
      </>
    ),
  },
  {
    q: "¿La IA puede inventar respuestas o números?",
    a: (
      <>
        No. La <strong>Recepcionista IA</strong> solo confirma horarios reales de tu agenda, nunca improvisa.
        El <strong>Asistente de análisis</strong> responde solo con datos que existen en tu cuenta —
        si no sabe algo, te lo dice. Cero alucinaciones.
      </>
    ),
  },
  {
    q: "¿Puedo cancelar cuando quiera?",
    a: (
      <>
        Sí, en cualquier momento, sin penalidades y sin papeleo.
        Cancelas desde la app y tus datos se conservan accesibles por 60 días si decides volver.
      </>
    ),
  },
  {
    q: "¿Cuánto se demora en estar funcionando?",
    a: (
      <>
        Configuración en <strong>15 minutos</strong>. Conectamos tu WhatsApp, cargamos tus servicios y horarios,
        y tu página de reservas queda lista. Si pasas a Maestro, la IA aprende tu tono en una sesión corta.
      </>
    ),
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section className="faq" id="faq">
      <div className="container faq__inner">
        <div className="faq__head">
          <span className="faq__eyebrow">Preguntas frecuentes</span>
          <h2 className="faq__title">Lo que casi todos<br /><em>nos preguntan primero.</em></h2>
          <p className="faq__sub">
            Si tu duda no aparece, escríbenos por WhatsApp y te respondemos en minutos
            — no un bot, una persona del equipo.
          </p>
        </div>

        <div className="faq__list">
          {FAQ_ITEMS.map((item, i) => (
            <div key={i} className={`faq__item${open === i ? " is-open" : ""}`}>
              <button
                className="faq__q"
                type="button"
                onClick={() => setOpen(open === i ? -1 : i)}
                aria-expanded={open === i}
              >
                <span>{item.q}</span>
                <span className="faq__q-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14M5 12h14"/></svg>
                </span>
              </button>
              <div className="faq__a">
                <div className="faq__a-inner">
                  <div className="faq__a-inner-pad">{item.a}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
