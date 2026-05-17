// [perf-audited 2026-05-15 / vercel-react-best-practices v1.0 + typescript-best-practices] audited-clean — no findings
// Two-column hero. Phone in right column with two floating cards layered around it:
// WhatsApp reminder (top-left) + IA de Acomply suggestion (bottom-right).

import { CTA_DEMO, DEMO_HREF } from "../lib/copy";
import Button from "./primitives/Button";
import SparkleIcon from "./primitives/SparkleIcon";
import BarChartIcon from "./primitives/icons/BarChartIcon";
import WhatsAppIcon from "./primitives/icons/WhatsAppIcon";
import AgendaScreen from "./screens/AgendaScreen";

export default function HeroSection() {
  return (
    <section className="hero noise" id="top">
      <div className="hero__atmo" aria-hidden="true" />
      <div className="container hero__inner">
        <div className="hero__copy">
          <h1 className="hero__h1">
            Tu negocio,<br />
            <em>siempre acompañado.</em>
          </h1>

          <p className="hero__sub">
            Acomply te acompaña para que tu negocio fluya y crezca.
            Reservas, clientes, pagos, WhatsApp <span className="hero__amp">e IA</span> en una sola plataforma.
          </p>

          <div className="hero__ctas">
            <Button variant="primary" size="lg" href={DEMO_HREF}>{CTA_DEMO}</Button>
            <a className="hero__demo-link" href="#agentes">
              <span className="hero__demo-play" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                  <circle cx="12" cy="12" r="11" vectorEffect="non-scaling-stroke" />
                  <path d="M10 8l6 4-6 4z" fill="currentColor" stroke="none" />
                </svg>
              </span>
              <span className="hero__demo-text">
                <strong>Ver cómo funciona</strong>
                <small>Demo interactivo · 2 min</small>
              </span>
            </a>
          </div>

          <ul className="hero__trust">
            <li>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x="5" y="11" width="14" height="10" rx="2" />
                <path d="M8 11V7a4 4 0 018 0v4" />
              </svg>
              Sin tarjeta
            </li>
            <li>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <circle cx="12" cy="12" r="9" />
                <path d="M12 7v5l3 2" />
              </svg>
              Configuración en 15 min
            </li>
            <li>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M12 3l8 4v6c0 4.5-3.4 8.3-8 9-4.6-.7-8-4.5-8-9V7l8-4z" />
                <path d="M9 12l2 2 4-4" />
              </svg>
              Datos seguros
            </li>
          </ul>
        </div>

        <div className="hero__phone-wrap">
          {/* Concentric dotted rings — focal "target" backdrop */}
          <div className="hero__rings" aria-hidden="true">
            <span className="hero__ring hero__ring--4" />
            <span className="hero__ring hero__ring--3" />
            <span className="hero__ring hero__ring--2" />
            <span className="hero__ring hero__ring--1" />
          </div>

          <div className="hero__phone-deco hero__phone-deco--coral" aria-hidden="true">
            <SparkleIcon size={28} color="currentColor" />
          </div>
          <div className="hero__phone-deco hero__phone-deco--mint" aria-hidden="true">
            <SparkleIcon size={18} color="currentColor" />
          </div>

          {/* Anchor card — full agenda screen rendered as a floating card */}
          <div className="hero__card-agenda">
            <AgendaScreen withToast={false} />
          </div>

          {/* Floating WhatsApp reminder card — top-left of phone */}
          <div className="hero__floating hero__floating--wa" aria-hidden="true">
            <div className="hero__floating-head">
              <span className="hero__wa-icon">
                <WhatsAppIcon size={18} color="#fff" />
              </span>
              <span className="hero__floating-app">WhatsApp</span>
              <span className="hero__floating-when">Ahora</span>
            </div>
            <div className="hero__floating-title">Hola Andrés <span aria-hidden="true">👋</span></div>
            <div className="hero__floating-body">
              Te recordamos tu cita hoy a las <strong>9:00 a. m.</strong>
            </div>
            <a className="hero__wa-reply" href="#">Responder</a>
          </div>

          {/* Floating IA suggestion card — bottom-right of phone */}
          <div className="hero__floating hero__floating--ai" aria-hidden="true">
            <div className="hero__floating-head">
              <span className="hero__ai-icon">
                <SparkleIcon size={14} color="currentColor" />
              </span>
              <span className="hero__floating-app">IA de Acomply</span>
            </div>
            <div className="hero__ai-eyebrow">Sugerencia</div>
            <div className="hero__floating-body">
              Tienes <strong>2 espacios libres</strong> esta tarde.
              <br />¿Deseas activar promoción automática?
            </div>
            <div className="hero__ai-actions">
              <button className="hero__ai-btn" type="button">Activar sugerencia</button>
              <span className="hero__ai-stat" aria-hidden="true">
                <BarChartIcon />
              </span>
            </div>
          </div>

          {/* Floating stat card — Recordatorios IA enviados hoy */}
          <div className="hero__floating hero__floating--stat" aria-hidden="true">
            <div className="hero__stat-head">
              <span className="hero__stat-icon">
                <BarChartIcon />
              </span>
              <span className="hero__stat-label">Recordatorios IA · hoy</span>
            </div>
            <div className="hero__stat-row">
              <span className="hero__stat-num">47</span>
              <span className="hero__stat-delta">↑ 18%</span>
            </div>
            <svg className="hero__stat-spark" viewBox="0 0 100 24" preserveAspectRatio="none" aria-hidden="true">
              <path
                d="M0 18 L14 14 L28 16 L42 10 L56 12 L70 6 L84 8 L100 2"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle cx="100" cy="2" r="2.5" fill="currentColor" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
