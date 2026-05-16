// [perf-audited 2026-05-16 / vercel-react-best-practices v1.0 + typescript-best-practices] audited-clean — no findings
/* ============================================================
   VerticalProofSection — "Hecho para tu industria"
   Calm cream section with centered title block + full-bleed
   multi-vertical phones image. Single asset, scales at all viewports.

   Required asset:
     - /assets/vertical-proof-desktop.webp  (5 phones, landscape)
   ============================================================ */

import * as React from 'react';
import SparkleIcon from './primitives/SparkleIcon';

interface VerticalProofSectionProps {
  desktopSrc?: string;
  mobileSrc?: string;
}

export const VerticalProofSection: React.FC<VerticalProofSectionProps> = ({
  desktopSrc = '/assets/vertical-proof-desktop.webp',
  mobileSrc  = '/assets/vertical-proof-mobile.webp',
}) => (
  <section className="vprof">
    <div className="vprof__inner">
      <div className="vprof__head">
        <span className="vprof__pill">
          <span className="vprof__pill-spark" aria-hidden="true">
            <SparkleIcon size={14} color="currentColor" />
          </span>
          Multi-vertical
        </span>

        <h2 className="vprof__h1">
          Hecho para <em>tu industria.</em>
        </h2>

        <p className="vprof__sub">
          Barbería, salón, spa, nails o clínica — Acomply habla el lenguaje
          de cada negocio.
        </p>
      </div>

      <div className="vprof__visual">
        <img
          className="vprof__visual--desktop"
          src={desktopSrc}
          alt="Cinco iPhones mostrando la app de Acomply configurada para barbería, salón de belleza, estudio de uñas, spa y clínica estética."
        />
        <img
          className="vprof__visual--mobile"
          src={mobileSrc}
          alt="iPhones mostrando la app de Acomply configurada para múltiples industrias."
        />
      </div>
    </div>

    <style>{`
      .vprof {
        position: relative;
        overflow: hidden;
        isolation: isolate;
        padding-block: clamp(3rem, 7vw, 5.5rem) clamp(2rem, 5vw, 3.5rem);
        background: var(--cream, #F7F3EC);
      }
      .vprof__inner {
        max-width: 1180px;
        margin: 0 auto;
        padding-inline: clamp(1.25rem, 5vw, 2rem);
      }

      .vprof__head {
        display: flex; flex-direction: column;
        align-items: center;
        gap: 1.25rem;
        text-align: center;
        margin-bottom: clamp(2.5rem, 5vw, 4rem);
      }

      .vprof__pill {
        display: inline-flex; align-items: center; gap: 0.55rem;
        padding: 0.55rem 1.1rem 0.55rem 0.85rem;
        border-radius: 999px;
        background: rgba(232, 108, 87, 0.10);
        border: 1px solid rgba(232, 108, 87, 0.28);
        font-family: var(--font-text, 'Nunito', system-ui, sans-serif);
        font-size: 0.78rem;
        font-weight: 800;
        letter-spacing: 0.22em;
        text-transform: uppercase;
        color: var(--coral, #E86C57);
        white-space: nowrap;
      }
      .vprof__pill-spark { display: inline-flex; color: var(--coral, #E86C57); }
      .vprof__pill-spark svg { display: block; }

      .vprof__h1 {
        font-family: var(--font-display, 'Sora', system-ui, sans-serif);
        font-weight: 800;
        font-size: clamp(2.5rem, 7vw, 5rem);
        letter-spacing: -0.028em;
        line-height: 1.02;
        color: var(--espresso, #2B211C);
        margin: 0;
        text-wrap: balance;
        max-width: 22ch;
      }
      .vprof__h1 em {
        font-style: italic;
        color: var(--coral, #E86C57);
        font-weight: 800;
      }

      .vprof__sub {
        font-family: var(--font-text, 'Nunito', system-ui, sans-serif);
        font-size: clamp(1rem, 1.5vw, 1.125rem);
        color: rgba(43, 33, 28, 0.7);
        line-height: 1.5;
        margin: 0;
        max-width: 60ch;
        text-wrap: pretty;
      }

      /* Full-bleed image — breaks out of the .vprof__inner padding */
      .vprof__visual {
        position: relative;
        width: 100vw;
        margin-left: calc(50% - 50vw);
        margin-right: calc(50% - 50vw);
      }
      .vprof__visual img {
        width: 100%;
        height: auto;
      }
      .vprof__visual img.vprof__visual--desktop { display: block; }
      .vprof__visual img.vprof__visual--mobile  { display: none; }

      @media (max-width: 719px) {
        .vprof__visual img.vprof__visual--desktop { display: none; }
        .vprof__visual img.vprof__visual--mobile  { display: block; }
      }
    `}</style>
  </section>
);

export default VerticalProofSection;
