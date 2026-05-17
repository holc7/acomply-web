// [perf-audited 2026-05-16 / vercel-react-best-practices v1.0 + typescript-best-practices] audited-clean — no findings
/* ============================================================
   AgentsSectionV2 — preview port of the Codex right-side timeline.
   Sits BELOW the current AgentsSection so we can compare both
   visual treatments side-by-side. Uses brand-locked fonts
   (Sora display + Nunito text) and Acomply palette tokens.
   ============================================================ */

"use client";

import { useState, type ReactNode } from "react";

type Step = {
  num: string;
  eyebrow: string;
  title: string;
  desc: string;
  icon: ReactNode;
};

const IconChat = () => (
  <svg viewBox="0 0 64 64">
    <path className="agv2-fill" d="M13 28.5c0-10.2 8.8-18.5 19.6-18.5S52.2 18.3 52.2 28.5 43.4 47 32.6 47c-2.6 0-5.1-.5-7.4-1.4L13.6 50c-1.2.5-2.4-.6-2-1.8l3.7-10.1A17.5 17.5 0 0 1 13 28.5Z"/>
    <circle className="agv2-fill" cx="25.1" cy="29" r="2.8"/>
    <circle className="agv2-fill" cx="32.6" cy="29" r="2.8"/>
    <circle className="agv2-fill" cx="40.1" cy="29" r="2.8"/>
  </svg>
);

const IconMegaphone = () => (
  <svg viewBox="0 0 64 64">
    <path className="agv2-fill" d="M47.7 14.3c1.8-1.1 4.1.2 4.1 2.3v30.8c0 2.1-2.3 3.4-4.1 2.3L32 40.5H18.7a7.7 7.7 0 0 1 0-15.4H32l15.7-10.8Z"/>
    <path className="agv2-fill" d="M22.6 43.3h8.3l2.7 8.9c.5 1.7-.7 3.3-2.4 3.3h-3.7c-1.1 0-2.1-.7-2.4-1.8l-2.5-10.4Z"/>
    <path d="M53.6 26.8h2.7a4.3 4.3 0 0 1 0 8.6h-2.7"/>
  </svg>
);

const IconBars = () => (
  <svg viewBox="0 0 64 64">
    <rect className="agv2-fill" x="14" y="36" width="10" height="16" rx="1.7"/>
    <rect className="agv2-fill" x="28" y="27" width="10" height="25" rx="1.7"/>
    <rect className="agv2-fill" x="42" y="16" width="10" height="36" rx="1.7"/>
  </svg>
);

const IconTrend = () => (
  <svg viewBox="0 0 64 64">
    <path d="M13 47 27.5 32.5 37 42l14-19"/>
    <path d="M42 23h9v9"/>
  </svg>
);

const STEPS: Step[] = [
  {
    num: "01",
    eyebrow: "Recepcionista IA",
    title: "Contesta cada WhatsApp, incluso a las 2 a.m.",
    desc: "Responde con tus horarios reales, confirma citas y adapta el tono a cada cliente: paisa, costeño, formal o cercano.",
    icon: <IconChat />,
  },
  {
    num: "02",
    eyebrow: "Marketing IA",
    title: "Llena tus días lentos automáticamente.",
    desc: "Detecta huecos, agrupa clientes dormidos y envía promos por WhatsApp. Tú apruebas, ella manda.",
    icon: <IconMegaphone />,
  },
  {
    num: "03",
    eyebrow: "Asistente de análisis",
    title: "Pregúntale lo que sea a tu negocio.",
    desc: "Responde con datos reales: ventas, clientes, días flojos. Sin tecnicismos, sin inventos.",
    icon: <IconBars />,
  },
  {
    num: "04",
    eyebrow: "Crece tu negocio",
    title: "Más reservas, menos huecos, mejores decisiones.",
    desc: "Las 3 IAs trabajan en equipo para que tu negocio crezca solo, mientras tú atiendes.",
    icon: <IconTrend />,
  },
];

export default function AgentsSectionV2() {
  const [selectedIdx, setSelectedIdx] = useState(0);

  return (
    <section className="agv2" aria-label="Agentes IA">
      <img
        className="agv2__phone"
        src="/assets/agents-phone.webp"
        alt="Acomply en iPhone — panel de Resumen del día con ingresos, ocupación y tendencia"
        loading="lazy"
        width={1254}
        height={1254}
      />
      <div className="agv2__inner">
        <div className="agv2__timeline">
          {STEPS.map((s, i) => (
            <article
              key={i}
              className={[
                "agv2__step",
                i === selectedIdx && "is-selected",
              ].filter(Boolean).join(" ")}
              onClick={() => setSelectedIdx(i)}
            >
              <div className="agv2__connector" aria-hidden="true">
                <span className="agv2__marker" />
              </div>
              <div className="agv2__card">
                <div className="agv2__content">
                  <div className="agv2__label">
                    <span className="agv2__number">{s.num}</span>
                    <span className="agv2__eyebrow">{s.eyebrow}</span>
                  </div>
                  <h2 className="agv2__h2">{s.title}</h2>
                  <p className="agv2__p">{s.desc}</p>
                </div>
                <div className="agv2__icon-badge" aria-hidden="true">
                  {s.icon}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <style>{`
        .agv2 {
          /* Locked literal hex values — using var(--coral) here would self-reference
             since this section's scope shadows the global. Inline the brand palette. */
          --agv2-coral: #E86C57;
          --agv2-amber: #F5B44B;
          --agv2-mint: #8DDACB;
          --agv2-ink: #2B211C;
          --agv2-muted: rgba(43, 33, 28, 0.65);
          --agv2-card: rgba(255, 250, 241, 0.86);
          --agv2-shadow: 0 22px 38px rgba(63, 43, 21, 0.12), 0 4px 9px rgba(63, 43, 21, 0.08);

          position: relative;
          padding-block: clamp(3rem, 7vw, 5rem);
          background-color: #fbf4e8;
          background-image:
            radial-gradient(circle at 92% 10%, rgba(141, 218, 203, 0.18), transparent 8rem),
            radial-gradient(circle at 9% 84%, rgba(232, 108, 87, 0.14), transparent 12rem),
            linear-gradient(112deg, #fcf5e9 0%, #fdf1df 48%, #fbf4e8 100%);
        }
        .agv2__inner {
          position: relative;
          max-width: 1280px;
          margin: 0 auto;
          padding-inline: clamp(1.25rem, 5vw, 2rem);
        }

        /* Phone illustration — inline above timeline on mobile, absolute-
           positioned on the left half on desktop so the timeline column
           breathes on the right. */
        .agv2__phone {
          display: block;
          width: 100%;
          max-width: 280px;
          height: auto;
          margin: 0 auto clamp(2rem, 5vw, 3rem);
        }
        @media (min-width: 980px) {
          .agv2__phone {
            position: absolute;
            left: clamp(1rem, 4vw, 4rem);
            top: 50%;
            transform: translateY(-50%);
            max-width: clamp(320px, 30vw, 440px);
            margin: 0;
            z-index: 1;
            pointer-events: none;
          }
        }

        .agv2__timeline {
          position: relative;
          width: 100%;
          padding: 10px 0;
        }
        /* Desktop: timeline pinned to right half so it doesn't overlap the
           phone illustration on the left. */
        @media (min-width: 980px) {
          .agv2__timeline {
            margin-left: auto;
            max-width: 68%;
          }
        }

        .agv2__step {
          position: relative;
          display: grid;
          grid-template-columns: 120px minmax(0, 1fr);
          align-items: center;
          min-height: 88px;
        }
        .agv2__step + .agv2__step { margin-top: 14px; }

        .agv2__step:not(:last-child)::after {
          position: absolute;
          top: 50%;
          left: 35px;
          z-index: 0;
          width: 1.5px;
          height: calc(100% + 14px);
          content: "";
          background: linear-gradient(
            180deg,
            color-mix(in srgb, var(--accent) 66%, transparent),
            color-mix(in srgb, var(--next-accent) 54%, transparent)
          );
          border-radius: 999px;
          box-shadow: 0 0 10px color-mix(in srgb, var(--accent) 10%, transparent);
        }

        .agv2__connector {
          position: relative;
          height: 42px;
          background: transparent;
        }
        .agv2__connector::before {
          position: absolute;
          top: 50%;
          right: -1px;
          left: 50px;
          height: 1.5px;
          content: "";
          background: linear-gradient(
            90deg,
            color-mix(in srgb, var(--accent) 68%, transparent),
            color-mix(in srgb, var(--accent) 42%, transparent)
          );
          border-radius: 999px;
          box-shadow: 0 0 10px color-mix(in srgb, var(--accent) 18%, transparent);
          transform: translateY(-50%);
        }

        .agv2__marker {
          position: absolute;
          top: 50%;
          left: 20px;
          z-index: 2;
          display: grid;
          width: 32px;
          height: 32px;
          place-items: center;
          border: 1.5px solid color-mix(in srgb, var(--accent) 55%, white);
          border-radius: 50%;
          background: rgba(255, 247, 232, 0.92);
          box-shadow: 0 6px 14px color-mix(in srgb, var(--accent) 16%, transparent);
          transform: translateY(-50%);
        }
        .agv2__marker::after {
          width: 14px;
          height: 14px;
          content: "";
          border-radius: inherit;
          background: var(--accent);
          box-shadow: inset 0 1.5px 1.5px rgba(255, 255, 255, 0.4);
        }

        .agv2__card {
          position: relative;
          display: grid;
          grid-template-columns: minmax(0, 1fr) 78px;
          align-items: center;
          min-height: 88px;
          padding: 12px 22px;
          border: 1px solid rgba(217, 186, 145, 0.42);
          border-radius: 20px;
          background: var(--agv2-card);
          box-shadow: var(--agv2-shadow);
          isolation: isolate;
          overflow: hidden;
        }
        .agv2__card::before {
          position: absolute;
          inset: 0;
          z-index: -1;
          content: "";
          background: linear-gradient(180deg, rgba(255, 249, 239, 0.96), rgba(255, 249, 239, 0.9));
        }

        /* Make whole step clickable */
        .agv2__step { cursor: pointer; }

        /* Selected state — colored border + accent glow on the active card.
           Markers stay untouched in all states (per design). */
        .agv2__step.is-selected .agv2__card {
          border: 2px solid var(--accent);
          box-shadow:
            0 24px 40px color-mix(in srgb, var(--accent) 22%, transparent),
            0 8px 14px rgba(63, 43, 21, 0.1);
        }
        .agv2__card {
          transition: border-color 0.25s ease, box-shadow 0.25s ease;
        }

        .agv2__content { display: flex; flex-direction: column; }

        .agv2__label {
          display: flex;
          align-items: center;
          gap: 15px;
          margin-bottom: 7px;
          color: var(--accent);
          font-family: var(--font-text, 'Nunito', system-ui, sans-serif);
          font-weight: 800;
          letter-spacing: 0.11em;
          line-height: 1;
          text-transform: uppercase;
        }

        .agv2__number {
          position: relative;
          display: inline-grid;
          width: 52px;
          min-width: 52px;
          height: 34px;
          place-items: center;
          border-radius: 17px;
          background: rgba(255, 248, 237, 0.52);
          font-family: var(--font-display, 'Sora', system-ui, sans-serif);
          font-size: 20px;
          font-weight: 800;
          color: var(--accent);
          text-shadow: 0 2px 8px color-mix(in srgb, var(--accent) 20%, transparent);
          box-shadow:
            inset 0 0 0 1px rgba(255, 255, 255, 0.58),
            0 4px 12px color-mix(in srgb, var(--accent) 8%, transparent);
        }
        .agv2__number::before {
          position: absolute;
          inset: 0;
          padding: 2px;
          content: "";
          border-radius: inherit;
          background: conic-gradient(
            from 0deg,
            color-mix(in srgb, var(--accent) 36%, transparent) 0deg,
            color-mix(in srgb, var(--accent) 13%, transparent) 44deg,
            rgba(255, 255, 255, 0.08) 62deg,
            color-mix(in srgb, var(--accent) 33%, transparent) 128deg,
            color-mix(in srgb, var(--accent) 46%, transparent) 180deg,
            color-mix(in srgb, var(--accent) 13%, transparent) 224deg,
            rgba(255, 255, 255, 0.08) 242deg,
            color-mix(in srgb, var(--accent) 36%, transparent) 306deg,
            color-mix(in srgb, var(--accent) 36%, transparent) 360deg
          );
          pointer-events: none;
          -webkit-mask:
            linear-gradient(#000 0 0) content-box,
            linear-gradient(#000 0 0);
          -webkit-mask-composite: xor;
          mask:
            linear-gradient(#000 0 0) content-box,
            linear-gradient(#000 0 0);
          mask-composite: exclude;
        }

        .agv2__eyebrow { font-size: clamp(12px, 1vw, 16px); }

        .agv2__h2 {
          margin: 0 0 4px;
          font-family: var(--font-display, 'Sora', system-ui, sans-serif);
          font-size: clamp(17px, 1.3vw, 22px);
          font-weight: 700;
          line-height: 1.12;
          letter-spacing: -0.015em;
          color: var(--agv2-ink);
        }

        .agv2__p {
          max-width: 620px;
          margin: 0;
          font-family: var(--font-text, 'Nunito', system-ui, sans-serif);
          color: var(--agv2-muted);
          font-size: clamp(13px, 1vw, 16px);
          font-weight: 500;
          line-height: 1.35;
        }

        .agv2__icon-badge {
          position: relative;
          justify-self: end;
          display: grid;
          width: 64px;
          height: 64px;
          place-items: center;
          color: var(--accent);
          border: 4px solid rgba(255, 255, 255, 0.72);
          border-radius: 50%;
          background: rgba(255, 247, 234, 0.74);
          box-shadow:
            0 12px 22px color-mix(in srgb, var(--accent) 16%, transparent),
            inset 0 0 0 2px color-mix(in srgb, var(--accent) 18%, transparent);
        }
        /* Painterly splatter behind the icon — color wash + paper grain,
           masked into a soft circle. Localized to the icon area only. */
        .agv2__icon-badge::before {
          position: absolute;
          inset: -110px;
          z-index: -1;
          content: "";
          background:
            url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='240' height='240'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='1.1' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0.55  0 0 0 0 0.4  0 0 0 0 0.22  0 0 0 0.4 0'/></filter><rect width='100%25' height='100%25' filter='url(%23n)'/></svg>"),
            radial-gradient(
              circle at 50% 50%,
              color-mix(in srgb, var(--accent) 14%, transparent) 0%,
              color-mix(in srgb, var(--accent) 6%, transparent) 28%,
              transparent 55%
            );
          background-blend-mode: multiply, normal;
          -webkit-mask-image: radial-gradient(circle at 50% 50%, #000 0%, rgba(0, 0, 0, 0.85) 30%, transparent 60%);
          mask-image: radial-gradient(circle at 50% 50%, #000 0%, rgba(0, 0, 0, 0.85) 30%, transparent 60%);
          pointer-events: none;
        }
        .agv2__icon-badge svg {
          width: 32px;
          height: 32px;
          stroke: currentColor;
          stroke-width: 2.7;
          stroke-linecap: round;
          stroke-linejoin: round;
          fill: none;
        }
        .agv2__icon-badge .agv2-fill {
          fill: currentColor;
          stroke: none;
        }

        /* Per-step accent tokens — use --agv2-* tokens, not the global ones */
        .agv2__step:nth-child(1) {
          --accent: var(--agv2-coral);
          --next-accent: var(--agv2-amber);
        }
        .agv2__step:nth-child(2) {
          --accent: var(--agv2-amber);
          --next-accent: var(--agv2-mint);
        }
        .agv2__step:nth-child(3) {
          --accent: var(--agv2-mint);
          --next-accent: var(--agv2-coral);
        }
        .agv2__step:nth-child(4) {
          --accent: var(--agv2-coral);
          --next-accent: var(--agv2-coral);
        }

        @media (max-width: 820px) {
          .agv2__step {
            grid-template-columns: 112px minmax(0, 1fr);
            min-height: 0;
          }
          .agv2__connector { height: 36px; }
          .agv2__connector::before { left: 42px; }
          .agv2__step:not(:last-child)::after { left: 25px; }
          .agv2__marker { left: 7px; width: 36px; height: 36px; }
          .agv2__marker::after { width: 18px; height: 18px; }
          .agv2__card {
            grid-template-columns: minmax(0, 1fr);
            gap: 18px;
            min-height: 0;
            padding: 22px;
            border-radius: 20px;
          }
          .agv2__label { gap: 12px; margin-bottom: 12px; }
          .agv2__number { min-width: 54px; height: 38px; border-radius: 14px; font-size: 21px; }
          .agv2__eyebrow { font-size: 13px; line-height: 1.25; }
          .agv2__icon-badge { width: 82px; height: 82px; justify-self: start; border-width: 4px; }
          .agv2__icon-badge svg { width: 40px; height: 40px; }
          .agv2__h2 { font-size: 24px; }
          .agv2__p { font-size: 17px; }
        }

        @media (max-width: 460px) {
          .agv2__step { grid-template-columns: 96px minmax(0, 1fr); }
          .agv2__connector::before { left: 38px; }
          .agv2__step:not(:last-child)::after { left: 20px; }
          .agv2__marker { left: 2px; }
          .agv2__card { padding: 19px; border-radius: 18px; }
        }
      `}</style>
    </section>
  );
}
