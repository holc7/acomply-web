// [perf-audited 2026-05-16 / vercel-react-best-practices v1.0 + typescript-best-practices] audited-clean — no findings
/* ============================================================
   VerticalProofSection — "Hecho para tu industria"

   5 watercolor cards, one per vertical (Barbería, Salón, Uñas,
   Spa, Clínica). Section sits on calm cream so the cards POP;
   per-card watercolor swatch lives INSIDE each card.

   Placeholder asset: /assets/vcard-bg-placeholder.png is used
   for all 5 cards until per-vertical swatches are generated.
   ============================================================ */

"use client";

import * as React from "react";
import { useTranslations } from "next-intl";
import SparkleIcon from "./primitives/SparkleIcon";

type Vertical = {
  key: string;
  accent: string; // hex for the chip + accents
  bg: string;     // watercolor swatch path
  icon: React.ReactNode;
};

/* ============================================================
   Vertical icons — AI-generated coral line-art (ChatGPT image-gen,
   one-by-one with style brief). PNGs live in public/assets/icons/
   vertical/. Rendered via CSS mask-image so each card's brand
   accent (--vcard-accent) paints THROUGH the silhouette via
   currentColor — keeps the espresso/coral/amber/mint/amber-gold
   rhythm working despite raster source.
   ============================================================ */

function IconMask({ name }: { name: string }) {
  const url = `url(/assets/icons/vertical/${name}.png)`;
  return (
    <span
      aria-hidden="true"
      style={{
        WebkitMaskImage: url,
        maskImage: url,
        WebkitMaskSize: "contain",
        maskSize: "contain",
        WebkitMaskRepeat: "no-repeat",
        maskRepeat: "no-repeat",
        WebkitMaskPosition: "center",
        maskPosition: "center",
        backgroundColor: "currentColor",
        width: 38,
        height: 38,
        display: "inline-block",
      }}
    />
  );
}

/* ============================================================
   Verticals data
   ============================================================ */

const VERTICALS: Vertical[] = [
  {
    key: "barberia",
    accent: "#2B211C",          // espresso (brand)
    bg: "/assets/vcard-bg-barberia.png",
    icon: <IconMask name="scissors" />,
  },
  {
    key: "salon",
    accent: "#E86C57",          // coral
    bg: "/assets/vcard-bg-salon.png",
    icon: <IconMask name="hair-dryer" />,
  },
  {
    key: "unas",
    accent: "#F5B44B",          // amber (brand)
    bg: "/assets/vcard-bg-unas.png",
    icon: <IconMask name="nail-polish" />,
  },
  {
    key: "spa",
    accent: "#5BAE96",          // mint/teal
    bg: "/assets/vcard-bg-spa.png",
    icon: <IconMask name="lotus" />,
  },
  {
    key: "clinica",
    accent: "#C58E3B",          // amber/gold
    bg: "/assets/vcard-bg-clinica.png",
    icon: <IconMask name="medical-cross" />,
  },
];

/* ============================================================
   Section
   ============================================================ */

export default function VerticalProofSection() {
  const t = useTranslations("vertical");

  return (
    <section className="vprof" id="verticales">
      <div className="vprof__inner">
        <div className="vprof__head">
          <h2 className="vprof__h1">
            {t.rich("section.h1", { em: (chunks) => <em>{chunks}</em> })}
          </h2>

          <p className="vprof__sub">
            {t("section.sub")}
          </p>
        </div>

        <div className="vprof__cards-wrap">
          <div className="vprof__rings" aria-hidden="true">
            <span className="vprof__ring vprof__ring--4" />
            <span className="vprof__ring vprof__ring--3" />
            <span className="vprof__ring vprof__ring--2" />
            <span className="vprof__ring vprof__ring--1" />
          </div>
          <ul className="vprof__cards" aria-label={t("section.aria_cards")}>
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
                <h3 className="vcard__name">{t(`${v.key}.name`)}</h3>
                <p className="vcard__services">{t(`${v.key}.services`)}</p>
                <span className="vcard__spark" aria-hidden="true">
                  <span className="vcard__spark-line" />
                  <SparkleIcon size={14} color="currentColor" />
                  <span className="vcard__spark-line" />
                </span>
                <span className="vcard__cta">{t(`${v.key}.cta`)}</span>
              </div>
            </li>
          ))}
          </ul>
        </div>

        <p className="vprof__foot">
          {t.rich("section.foot", { em: (chunks) => <em>{chunks}</em> })}
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
