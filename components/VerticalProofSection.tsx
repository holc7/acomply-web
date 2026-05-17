// [perf-audited 2026-05-16 / vercel-react-best-practices v1.0 + typescript-best-practices] audited-clean — no findings
/* ============================================================
   VerticalProofSection — "Hecho para tu industria"

   5 watercolor cards, one per vertical (Barbería, Salón, Uñas,
   Spa, Clínica). Section sits on calm cream so the cards POP;
   per-card watercolor swatch lives INSIDE each card.

   Placeholder asset: /assets/vcard-bg-placeholder.png is used
   for all 5 cards until per-vertical swatches are generated.
   ============================================================ */

import * as React from "react";
import SparkleIcon from "./primitives/SparkleIcon";

type Vertical = {
  key: string;
  name: string;
  services: string;
  cta: string;
  accent: string; // hex for the chip + accents
  bg: string;     // watercolor swatch path
  icon: React.ReactNode;
};

/* ============================================================
   Vertical icons — Phosphor Regular (MIT) hand-tuned glyphs.
   Source: @phosphor-icons/core v2, viewBox 256x256, currentColor
   fill — inherits the .vcard__icon color (which is set from
   --vcard-accent per card). Phosphor "regular" matches Acomply's
   warm painterly brand better than the previous amateur stroke
   icons. Icons8 Carbon Copy was the first choice but SVG access
   is paywalled ($15); Phosphor delivers the same hand-drawn feel
   free + open source.

   Mapping:
     IconScissors  → Phosphor "scissors"
     IconHairDryer → Phosphor "hair-dryer"   (Salón)
     IconPaintBrush→ Phosphor "paint-brush"  (Uñas — reads as nail-art brush)
     IconLotus     → Phosphor "flower-lotus" (Spa)
     IconSyringe   → Phosphor "syringe"      (Clínica)
   ============================================================ */

const IconScissors = () => (
  <svg viewBox="0 0 256 256" fill="currentColor" aria-hidden="true">
    <path d="M157.73,113.13A8,8,0,0,1,159.82,102L227.48,55.7a8,8,0,0,1,9,13.21l-67.67,46.3a7.92,7.92,0,0,1-4.51,1.4A8,8,0,0,1,157.73,113.13Zm80.87,85.09a8,8,0,0,1-11.12,2.08L136,137.7,93.49,166.78a36,36,0,1,1-9-13.19L121.83,128,84.44,102.41a35.86,35.86,0,1,1,9-13.19l143,97.87A8,8,0,0,1,238.6,198.22ZM80,180a20,20,0,1,0-5.86,14.14A19.85,19.85,0,0,0,80,180ZM74.14,90.13a20,20,0,1,0-28.28,0A19.85,19.85,0,0,0,74.14,90.13Z"/>
  </svg>
);

const IconHairDryer = () => (
  <svg viewBox="0 0 256 256" fill="currentColor" aria-hidden="true">
    <path d="M200,88a32,32,0,1,0-32,32A32,32,0,0,0,200,88Zm-32,16a16,16,0,1,1,16-16A16,16,0,0,1,168,104Zm9.42,102.62L209,137.07A64,64,0,0,0,168,24a8.4,8.4,0,0,0-1.32.11L29.37,47A16,16,0,0,0,16,62.78v50.44A16,16,0,0,0,29.37,129L128,145.44V200a16,16,0,0,0,16,16,40,40,0,0,0,40,40h16a8,8,0,0,0,0-16H184a24,24,0,0,1-24-24h2.85A16,16,0,0,0,177.42,206.62ZM32,62.78,168.64,40a48,48,0,0,1,0,96L32,113.23Zm134.68,89.11A8.4,8.4,0,0,0,168,152a63.9,63.9,0,0,0,17.82-2.54l-23,50.54H144V148.11Z"/>
  </svg>
);

const IconPaintBrush = () => (
  <svg viewBox="0 0 256 256" fill="currentColor" aria-hidden="true">
    <path d="M232,32a8,8,0,0,0-8-8c-44.08,0-89.31,49.71-114.43,82.63A60,60,0,0,0,32,164c0,30.88-19.54,44.73-20.47,45.37A8,8,0,0,0,16,224H92a60,60,0,0,0,57.37-77.57C182.3,121.31,232,76.08,232,32ZM92,208H34.63C41.38,198.41,48,183.92,48,164a44,44,0,1,1,44,44Zm32.42-94.45q5.14-6.66,10.09-12.55A76.23,76.23,0,0,1,155,121.49q-5.9,4.94-12.55,10.09A60.54,60.54,0,0,0,124.42,113.55Zm42.7-2.68a92.57,92.57,0,0,0-22-22c31.78-34.53,55.75-45,69.9-47.91C212.17,55.12,201.65,79.09,167.12,110.87Z"/>
  </svg>
);

const IconLotus = () => (
  <svg viewBox="0 0 256 256" fill="currentColor" aria-hidden="true">
    <path d="M245.83,121.63a15.53,15.53,0,0,0-9.52-7.33,73.51,73.51,0,0,0-22.17-2.22c4-19.85,1-35.55-2.06-44.86a16.15,16.15,0,0,0-18.79-10.88,85.53,85.53,0,0,0-28.55,12.12,94.58,94.58,0,0,0-27.11-33.25,16.05,16.05,0,0,0-19.26,0A94.48,94.48,0,0,0,91.26,68.46,85.53,85.53,0,0,0,62.71,56.34,16.15,16.15,0,0,0,43.92,67.22c-3,9.31-6,25-2.06,44.86a73.51,73.51,0,0,0-22.17,2.22,15.53,15.53,0,0,0-9.52,7.33,16,16,0,0,0-1.6,12.27c3.39,12.57,13.8,36.48,45.33,55.32S113.13,208,128.05,208s42.67,0,74-18.78c31.53-18.84,41.94-42.75,45.33-55.32A16,16,0,0,0,245.83,121.63ZM59.14,72.14a.2.2,0,0,1,.23-.15A70.43,70.43,0,0,1,85.18,83.66,118.65,118.65,0,0,0,80,119.17c0,18.74,3.77,34,9.11,46.28A123.59,123.59,0,0,1,69.57,140C51.55,108.62,55.3,84,59.14,72.14Zm3,103.35C35.47,159.57,26.82,140.05,24,129.7a59.82,59.82,0,0,1,22.5-1.17,129.08,129.08,0,0,0,9.15,19.41,142.28,142.28,0,0,0,34,39.56A114.92,114.92,0,0,1,62.1,175.49ZM128,190.4c-9.33-6.94-32-28.23-32-71.23C96,76.7,118.38,55.24,128,48c9.62,7.26,32,28.72,32,71.19C160,162.17,137.33,183.46,128,190.4ZM170.82,83.66A70.43,70.43,0,0,1,196.63,72a.2.2,0,0,1,.23.15C200.7,84,204.45,108.62,186.43,140a123.32,123.32,0,0,1-19.54,25.48c5.34-12.26,9.11-27.54,9.11-46.28A118.65,118.65,0,0,0,170.82,83.66ZM232,129.72c-2.77,10.25-11.4,29.81-38.09,45.77a114.92,114.92,0,0,1-27.55,12,142.28,142.28,0,0,0,34-39.56,129.08,129.08,0,0,0,9.15-19.41A59.69,59.69,0,0,1,232,129.71Z"/>
  </svg>
);

const IconSyringe = () => (
  <svg viewBox="0 0 256 256" fill="currentColor" aria-hidden="true">
    <path d="M237.66,66.34l-48-48a8,8,0,0,0-11.32,11.32L196.69,48,168,76.69,133.66,42.34a8,8,0,0,0-11.32,11.32L128.69,60l-84,84A15.86,15.86,0,0,0,40,155.31v49.38L18.34,226.34a8,8,0,0,0,11.32,11.32L51.31,216h49.38A15.86,15.86,0,0,0,112,211.31l84-84,6.34,6.35a8,8,0,0,0,11.32-11.32L179.31,88,208,59.31l18.34,18.35a8,8,0,0,0,11.32-11.32ZM100.69,200H56V155.31l18-18,20.34,20.35a8,8,0,0,0,11.32-11.32L85.31,126,98,113.31l20.34,20.35a8,8,0,0,0,11.32-11.32L109.31,102,140,71.31,184.69,116Z"/>
  </svg>
);

/* ============================================================
   Verticals data
   ============================================================ */

const VERTICALS: Vertical[] = [
  {
    key: "barberia",
    name: "Barbería",
    services: "Corte y barba · Afeitada clásica",
    cta: "Agenda lista",
    accent: "#2B211C",          // espresso (brand)
    bg: "/assets/vcard-bg-barberia.png",
    icon: <IconScissors />,
  },
  {
    key: "salon",
    name: "Salón de belleza",
    services: "Tinte y peinado · Mechas",
    cta: "Agenda lista",
    accent: "#E86C57",          // coral
    bg: "/assets/vcard-bg-salon.png",
    icon: <IconHairDryer />,
  },
  {
    key: "unas",
    name: "Uñas",
    services: "Manicure · Uñas en gel",
    cta: "Agenda lista",
    accent: "#F5B44B",          // amber (brand)
    bg: "/assets/vcard-bg-unas.png",
    icon: <IconPaintBrush />,
  },
  {
    key: "spa",
    name: "Spa & wellness",
    services: "Masaje relajante · Limpieza facial",
    cta: "Agenda lista",
    accent: "#5BAE96",          // mint/teal
    bg: "/assets/vcard-bg-spa.png",
    icon: <IconLotus />,
  },
  {
    key: "clinica",
    name: "Clínica estética",
    services: "Botox · Rellenos",
    cta: "Agenda lista",
    accent: "#C58E3B",          // amber/gold
    bg: "/assets/vcard-bg-clinica.png",
    icon: <IconSyringe />,
  },
];

/* ============================================================
   Section
   ============================================================ */

export default function VerticalProofSection() {
  return (
    <section className="vprof" id="verticales">
      <div className="vprof__inner">
        <div className="vprof__head">
          <h2 className="vprof__h1">
            Hecho para <em>tu industria.</em>
          </h2>

          <p className="vprof__sub">
            Barbería, salón, uñas, spa o clínica — Acomply adapta reservas,
            servicios, clientes y WhatsApp al ritmo de cada negocio.
          </p>
        </div>

        <div className="vprof__cards-wrap">
          <div className="vprof__rings" aria-hidden="true">
            <span className="vprof__ring vprof__ring--4" />
            <span className="vprof__ring vprof__ring--3" />
            <span className="vprof__ring vprof__ring--2" />
            <span className="vprof__ring vprof__ring--1" />
          </div>
          <ul className="vprof__cards" aria-label="Verticales soportados">
          {VERTICALS.map((v) => (
            <li
              key={v.key}
              className={`vcard vcard--${v.key}`}
              style={{ ["--vcard-accent" as string]: v.accent }}
            >
              <div
                className="vcard__bg"
                style={{ backgroundImage: `url(${v.bg})` }}
                aria-hidden="true"
              />
              <div className="vcard__inner">
                <span className="vcard__icon" aria-hidden="true">{v.icon}</span>
                <h3 className="vcard__name">{v.name}</h3>
                <p className="vcard__services">{v.services}</p>
                <span className="vcard__spark" aria-hidden="true">
                  <span className="vcard__spark-line" />
                  <SparkleIcon size={14} color="currentColor" />
                  <span className="vcard__spark-line" />
                </span>
                <span className="vcard__cta">{v.cta}</span>
              </div>
            </li>
          ))}
          </ul>
        </div>

        <p className="vprof__foot">
          Una sola plataforma. <em>Cada negocio</em> con su propio lenguaje.
        </p>
      </div>

      <style>{`
        .vprof {
          position: relative;
          padding-block: clamp(3rem, 7vw, 5.5rem);
          background: var(--cream, #F7F3EC);
          overflow: hidden;
        }

        /* Cards wrapper — acts as positioning context for the rings */
        .vprof__cards-wrap {
          position: relative;
          isolation: isolate;
          --vprof-rings-center-y: 50%;
        }

        /* Concentric dotted rings centered behind the cards row */
        .vprof__rings {
          position: absolute;
          left: 50%;
          top: var(--vprof-rings-center-y);
          width: 0;
          height: 0;
          z-index: 0;
          pointer-events: none;
          transform: translate(-50%, -50%);
        }
        .vprof__ring {
          position: absolute;
          left: 50%;
          top: 50%;
          border-radius: 50%;
          border: 1px dotted rgba(43, 33, 28, 0.14);
          aspect-ratio: 1 / 1;
          transform: translate(-50%, -50%);
        }
        .vprof__ring--1 { width: clamp(280px, 28vw, 420px); }
        .vprof__ring--2 { width: clamp(420px, 42vw, 620px); border-color: rgba(43, 33, 28, 0.10); }
        .vprof__ring--3 { width: clamp(580px, 60vw, 880px); border-color: rgba(43, 33, 28, 0.06); }
        .vprof__ring--4 { width: clamp(760px, 80vw, 1180px); border-color: rgba(43, 33, 28, 0.04); }
        .vprof__inner {
          position: relative;
          z-index: 1;
          max-width: 1280px;
          margin: 0 auto;
          padding-inline: clamp(1.25rem, 5vw, 2rem);
        }

        /* ===== HEAD ===== */
        .vprof__head {
          display: flex; flex-direction: column;
          align-items: center;
          gap: 1.25rem;
          text-align: center;
          margin-bottom: clamp(2.5rem, 5vw, 4rem);
        }
        .vprof__pill {
          display: inline-flex; align-items: center; gap: 0.55rem;
          padding: 0.5rem 1rem 0.5rem 0.85rem;
          border-radius: 999px;
          background: rgba(232, 108, 87, 0.10);
          border: 1px solid rgba(232, 108, 87, 0.28);
          font-family: var(--font-text, 'Nunito', system-ui, sans-serif);
          font-size: 0.72rem;
          font-weight: 800;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: var(--coral, #E86C57);
          white-space: nowrap;
        }
        .vprof__pill svg { color: var(--coral, #E86C57); }

        .vprof__h1 {
          font-family: var(--font-display, 'Sora', system-ui, sans-serif);
          font-weight: 800;
          font-size: clamp(2.25rem, 6vw, 4.25rem);
          letter-spacing: -0.028em;
          line-height: 1.04;
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
          font-size: clamp(1rem, 1.4vw, 1.125rem);
          color: rgba(43, 33, 28, 0.7);
          line-height: 1.5;
          margin: 0;
          max-width: 64ch;
          text-wrap: pretty;
        }

        /* ===== CARD GRID ===== */
        .vprof__cards {
          position: relative;
          z-index: 1;
          list-style: none;
          margin: 0;
          padding: 0;
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.25rem;
        }
        @media (min-width: 560px) {
          .vprof__cards { grid-template-columns: 1fr 1fr; }
        }
        @media (min-width: 900px) {
          .vprof__cards { grid-template-columns: repeat(5, 1fr); gap: 1rem; }
        }

        /* ===== CARD ===== */
        .vcard {
          position: relative;
          isolation: isolate;
          aspect-ratio: 4 / 5.2;
          border-radius: 24px;
          overflow: hidden;
          background: #FFFCF6;
          box-shadow:
            0 1px 0 rgba(255, 255, 255, 0.7) inset,
            0 18px 32px -18px rgba(43, 33, 28, 0.18),
            0 6px 12px -8px rgba(43, 33, 28, 0.10),
            0 0 0 1px rgba(43, 33, 28, 0.06);
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }
        .vcard:hover {
          transform: translateY(-3px);
          box-shadow:
            0 1px 0 rgba(255, 255, 255, 0.7) inset,
            0 24px 40px -18px rgba(43, 33, 28, 0.22),
            0 8px 16px -8px rgba(43, 33, 28, 0.14),
            0 0 0 1px rgba(43, 33, 28, 0.08);
        }
        /* Watercolor wash background — scaled to crop the white border
           that the source image came with. Positioned bottom-right so
           the splatter sits where the design expects. */
        .vcard__bg {
          position: absolute;
          inset: 0;
          z-index: -1;
          background-position: center;
          background-size: 115% 115%;
          background-repeat: no-repeat;
          opacity: 0.95;
        }
        .vcard__inner {
          position: relative;
          height: 100%;
          padding: 2.25rem 1.5rem 1.75rem;
          display: flex; flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 0.7rem;
        }

        /* ===== CARD ICON — matches AgentsSectionV2 badge style.
           Thick white border ring + cream disc + inset accent line +
           soft accent glow. Solid + locked aspect = guaranteed circle. */
        .vcard__icon {
          position: relative;
          display: grid; place-items: center;
          flex: 0 0 76px;
          width: 76px; height: 76px;
          aspect-ratio: 1 / 1;
          border-radius: 50%;
          background: rgba(255, 247, 234, 0.74);
          color: var(--vcard-accent);
          border: 4px solid rgba(255, 255, 255, 0.85);
          box-shadow:
            0 12px 22px color-mix(in srgb, var(--vcard-accent) 16%, transparent),
            inset 0 0 0 2px color-mix(in srgb, var(--vcard-accent) 18%, transparent);
          margin-bottom: 0.35rem;
        }
        .vcard__icon svg { width: 32px; height: 32px; stroke-width: 2.4; }

        /* ===== CARD TEXT (centered) ===== */
        .vcard__name {
          margin: 0;
          font-family: var(--font-display, 'Sora', system-ui, sans-serif);
          font-size: clamp(1.125rem, 1.4vw, 1.4rem);
          font-weight: 700;
          letter-spacing: -0.018em;
          color: var(--espresso, #2B211C);
          line-height: 1.15;
        }
        .vcard__services {
          margin: 0;
          font-family: var(--font-text, 'Nunito', system-ui, sans-serif);
          font-size: 0.82rem;
          color: rgba(43, 33, 28, 0.65);
          line-height: 1.35;
          max-width: 22ch;
        }

        /* ===== SPARKLE divider — line + sparkle + line.
           Same warm taupe across all cards (neutral on every wash). */
        .vcard__spark {
          margin-top: auto;
          margin-bottom: 0.5rem;
          color: rgba(112, 89, 55, 0.55);
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          width: 80%;
          max-width: 180px;
          justify-content: center;
        }
        .vcard__spark-line {
          flex: 1;
          height: 1px;
          background: currentColor;
          opacity: 0.55;
          max-width: 48px;
        }

        /* ===== CTA pill ===== */
        .vcard__cta {
          display: inline-flex; align-items: center; justify-content: center;
          padding: 0.55rem 1.2rem;
          border-radius: 999px;
          background: var(--vcard-accent);
          color: #FFFCF6;
          font-family: var(--font-text, 'Nunito', system-ui, sans-serif);
          font-size: 0.85rem;
          font-weight: 700;
          letter-spacing: 0.005em;
          box-shadow: 0 6px 14px -5px color-mix(in srgb, var(--vcard-accent) 55%, transparent);
        }

        /* ===== FOOT ===== */
        .vprof__foot {
          margin: clamp(2.5rem, 5vw, 4rem) auto 0;
          text-align: center;
          font-family: var(--font-display, 'Sora', system-ui, sans-serif);
          font-size: clamp(1rem, 1.4vw, 1.25rem);
          font-weight: 500;
          color: var(--espresso, #2B211C);
          letter-spacing: -0.01em;
        }
        .vprof__foot em {
          font-style: italic;
          color: var(--coral, #E86C57);
          font-weight: 600;
        }
      `}</style>
    </section>
  );
}
