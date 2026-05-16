// [perf-audited 2026-05-16 / vercel-react-best-practices v1.0 + typescript-best-practices] audited-clean — no findings
/* ============================================================
   ClosingCTASection — final punctuation of the page
   Dark cinematic bg image + coral pill + headline + 2 CTAs

   Required asset:
     - closing-cta-bg.webp  (dark bg with coral + teal glows)
   ============================================================ */

import * as React from 'react';
import SparkleIcon from './primitives/SparkleIcon';
import CheckIcon from './primitives/icons/CheckIcon';

interface ClosingCTASectionProps {
  bgSrc?: string;
  primaryHref?: string;
  whatsappHref?: string;
}

const ClosingCTA: React.FC<ClosingCTASectionProps> = ({
  bgSrc = '/assets/closing-cta-bg.webp',
  primaryHref = '#signup',
  whatsappHref = 'https://wa.me/573000000000',
}) => (
  <section
    className="ccta"
    style={{ backgroundImage: `url(${bgSrc})` }}
  >
    <div className="ccta__inner">
      <span className="ccta__pill">
        <span className="ccta__pill-spark" aria-hidden="true">
          <SparkleIcon size={14} color="currentColor" />
        </span>
        Somos aliados de tu crecimiento.
      </span>

      <h2 className="ccta__h1">
        Agenda una<em>demo gratis.</em>
      </h2>

      <p className="ccta__sub">
        En 20 minutos te mostramos cómo se vería tu agenda, tu página de reservas
        y tus agentes de IA con la marca de tu negocio. Sin tarjeta, sin compromiso.
      </p>

      <div className="ccta__ctas">
        <a className="ccta__btn ccta__btn--primary" href={primaryHref}>
          <span className="ccta__btn-spark" aria-hidden="true">
            <SparkleIcon size={21} color="currentColor" />
          </span>
          Agenda una demo gratis
        </a>
        <a className="ccta__btn ccta__btn--secondary" href={whatsappHref}>
          Habla por WhatsApp
          <span className="ccta__btn-arrow" aria-hidden="true">→</span>
        </a>
      </div>

      <span className="ccta__micro">
        <span className="ccta__micro-check" aria-hidden="true">
          <CheckIcon strokeWidth={3} />
        </span>
        Sin tarjeta · Sin compromiso · Respuesta en menos de 24 h
      </span>
    </div>

    <style>{`
      .ccta {
        position: relative;
        overflow: hidden;
        isolation: isolate;
        padding-block: clamp(4rem, 10vw, 7rem);
        color: var(--cream, #F7F3EC);
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        background-color: #0e0704;
      }
      .ccta__inner {
        position: relative; z-index: 2;
        max-width: 880px;
        margin: 0 auto;
        padding-inline: clamp(1.25rem, 5vw, 2rem);
        text-align: center;
        display: flex; flex-direction: column;
        align-items: center;
        gap: clamp(1.25rem, 3vw, 1.75rem);
      }
      .ccta__pill {
        display: inline-flex; align-items: center; gap: 0.6rem;
        padding: 0.6rem 1.2rem 0.6rem 1rem;
        border-radius: 999px;
        border: 1.5px solid rgba(232, 108, 87, 0.45);
        background: rgba(232, 108, 87, 0.06);
        backdrop-filter: blur(8px);
        -webkit-backdrop-filter: blur(8px);
        font-family: var(--font-text, 'Nunito', system-ui, sans-serif);
        font-size: 0.78rem;
        font-weight: 800;
        letter-spacing: 0.22em;
        text-transform: uppercase;
        color: var(--coral, #E86C57);
        white-space: nowrap;
      }
      .ccta__pill-spark { display: inline-flex; color: var(--coral, #E86C57); }
      .ccta__pill-spark svg { display: block; }
      .ccta__h1 {
        font-family: var(--font-display, 'Sora', system-ui, sans-serif);
        font-weight: 700;
        font-size: clamp(2.5rem, 7vw, 5rem);
        letter-spacing: -0.03em;
        line-height: 1.0;
        color: var(--cream, #F7F3EC);
        margin: 0.25rem 0 0;
        text-wrap: balance;
        max-width: 16ch;
      }
      .ccta__h1 em {
        font-style: italic;
        color: var(--coral, #E86C57);
        font-weight: 700;
        display: block;
        margin-top: 0.12em;
      }
      .ccta__sub {
        font-family: var(--font-text, 'Nunito', system-ui, sans-serif);
        font-size: clamp(1rem, 1.6vw, 1.125rem);
        color: rgba(247, 243, 236, 0.72);
        line-height: 1.5;
        margin: 0;
        max-width: 56ch;
        text-wrap: pretty;
      }
      .ccta__ctas {
        display: flex; flex-direction: column;
        gap: 0.85rem;
        width: 100%;
        max-width: 600px;
        margin-top: 0.5rem;
      }
      .ccta__btn {
        display: inline-flex; align-items: center; justify-content: center;
        gap: 12px;
        min-height: 56px;
        padding: 0 22px;
        border-radius: 999px;
        font-family: var(--font-text, 'Nunito', system-ui, sans-serif);
        font-size: 15px;
        font-weight: 800;
        text-decoration: none;
        white-space: nowrap;
        cursor: pointer;
        transition: transform 0.2s ease, box-shadow 0.22s ease, background 0.3s ease, border-color 0.22s ease;
        position: relative;
      }
      .ccta__btn:active { transform: translateY(0); }
      .ccta__btn--primary {
        background: var(--grad-cta-90);
        color: #FFFFFF;
        border: 0;
        padding-left: 9px;
        padding-right: 22px;
        gap: 12px;
        box-shadow:
          0 16px 34px rgba(232, 108, 87, 0.24),
          inset 0 1px 0 rgba(255, 255, 255, 0.24);
      }
      .ccta__btn--primary:hover {
        background: var(--grad-cta-90-hover);
        transform: translateY(-1px);
        box-shadow:
          0 20px 42px rgba(232, 108, 87, 0.30),
          inset 0 1px 0 rgba(255, 255, 255, 0.28);
      }
      .ccta__btn-spark {
        display: grid; place-items: center;
        width: 42px; height: 42px;
        border-radius: 999px;
        background: rgba(232, 108, 87, 0.34);
        box-shadow: inset 0 1px 3px rgba(255, 255, 255, 0.34);
        color: #FFFFFF;
        flex: 0 0 auto;
      }
      .ccta__btn-spark svg {
        display: block;
        width: 21px; height: 21px;
      }
      .ccta__btn--secondary {
        background: rgba(255, 255, 255, 0.03);
        color: var(--cream, #F7F3EC);
        border: 1.5px solid rgba(247, 243, 236, 0.28);
        backdrop-filter: blur(4px);
        -webkit-backdrop-filter: blur(4px);
      }
      .ccta__btn--secondary:hover {
        background: rgba(255, 255, 255, 0.08);
        border-color: rgba(247, 243, 236, 0.45);
        transform: translateY(-1px);
      }
      .ccta__btn-arrow {
        color: var(--cream, #F7F3EC);
        transition: transform 0.2s ease;
      }
      .ccta__btn--secondary:hover .ccta__btn-arrow { transform: translateX(3px); }
      .ccta__micro {
        display: inline-flex; align-items: center; gap: 0.55rem;
        font-family: var(--font-text, 'Nunito', system-ui, sans-serif);
        font-size: 0.92rem;
        color: rgba(247, 243, 236, 0.62);
        margin-top: 0.5rem;
      }
      .ccta__micro-check {
        flex-shrink: 0;
        width: 32px; height: 32px;
        border-radius: 50%;
        background: rgba(141, 218, 203, 0.30);
        color: #0F6F5E;
        display: inline-flex; align-items: center; justify-content: center;
      }
      .ccta__micro-check svg { width: 16px; height: 16px; }

      @media (min-width: 720px) {
        .ccta__ctas { flex-direction: row; justify-content: center; }
        .ccta__btn { flex: 1; max-width: 320px; }
      }
    `}</style>
  </section>
);

export default ClosingCTA;
