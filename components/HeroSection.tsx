// Mobile-first split hero. NO HUMAN PHOTO (multi-vertical reasoning) —
// phone mockup carries warmth; atmosphere via radial gradients + noise.

import Button from "./primitives/Button";
import PhoneFrame from "./primitives/PhoneFrame";
import SparkleIcon from "./primitives/SparkleIcon";
import AgendaScreen from "./screens/AgendaScreen";

export default function HeroSection() {
  return (
    <section className="hero noise" id="top">
      <div className="hero__atmo" aria-hidden="true" />
      <div className="container hero__inner">
        <div className="hero__copy">
          <span className="hero__eyebrow">
            <span className="hero__eyebrow-dot" />
            Hecho en Medellín · Para Colombia
          </span>

          <h1 className="hero__h1">
            Tu negocio,<br />
            <em>siempre acompañado.</em>
          </h1>

          <p className="hero__sub">
            Acomply te acompaña para que tu negocio fluya y crezca.
            Reservas, clientes, pagos, WhatsApp <span className="hero__amp">e IA</span> en una sola plataforma.
          </p>

          <div className="hero__ctas">
            <Button variant="primary" size="lg" href="#demo">Agenda una demo gratis</Button>
            <Button variant="text" arrow href="#agentes">Ver cómo funciona</Button>
          </div>

          <div className="hero__cta-row">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"/></svg>
            Sin tarjeta · Configuración en 15 minutos
          </div>
        </div>

        <div className="hero__phone-wrap">
          <div className="hero__phone-deco hero__phone-deco--coral">
            <SparkleIcon size={28} color="currentColor" />
          </div>
          <div className="hero__phone-deco hero__phone-deco--mint">
            <SparkleIcon size={18} color="currentColor" />
          </div>
          <div className="hero__phone">
            <PhoneFrame>
              <AgendaScreen />
            </PhoneFrame>
          </div>
        </div>
      </div>
    </section>
  );
}
