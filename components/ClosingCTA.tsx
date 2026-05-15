"use client";

// Full-bleed espresso closing section. Coral signature pill (NO script font).
// Primary CTA opens DemoModal; secondary deep-links to WhatsApp.

import { useState } from "react";
import Button from "./primitives/Button";
import SparkleIcon from "./primitives/SparkleIcon";
import DemoModal from "./DemoModal";

export default function ClosingCTA() {
  const [open, setOpen] = useState(false);

  return (
    <section className="closing noise noise--dark" id="demo">
      <div className="closing__atmo" aria-hidden="true" />
      <div className="closing__horizon" aria-hidden="true" />
      <div className="container closing__inner">
        <span className="closing__script">
          <span className="closing__script-sparkle"><SparkleIcon size={20} color="currentColor" /></span>
          Somos aliados de tu crecimiento.
        </span>

        <h2 className="closing__title">
          Empieza con una<br /><em>demo gratis.</em>
        </h2>

        <p className="closing__sub">
          En 20 minutos te mostramos cómo se vería tu agenda, tu página de reservas
          y tus agentes de IA con la marca de tu negocio.
        </p>

        <div className="closing__ctas">
          <Button variant="primary" size="lg" onClick={() => setOpen(true)}>
            Agenda una demo gratis
          </Button>
          <Button variant="secondary" size="lg" arrow href="https://wa.me/573000000000">
            Habla por WhatsApp
          </Button>
        </div>

        <div className="closing__micro">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"/></svg>
          Sin tarjeta · Sin compromiso · Respuesta en menos de 24 h
        </div>
      </div>

      <DemoModal open={open} onClose={() => setOpen(false)} />
    </section>
  );
}
