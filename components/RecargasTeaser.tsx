// [perf-audited 2026-05-16 / vercel-react-best-practices v1.0 + typescript-best-practices] audited-clean — no findings
/* ============================================================
   RecargasTeaser — "Recargas y Extras" painterly section
   2-column on desktop: copy left, two dark pack cards right.
   Painterly bg image swaps per breakpoint (mobile / tablet / desktop).
   Required assets:
     - /assets/recargas-bg.webp         (desktop ≥1280)
     - /assets/recargas-bg-tablet.webp  (≥720)
     - /assets/recargas-bg-mobile.webp  (default)
     - /assets/card-dark-bg.webp        (dark pack card texture)
   ============================================================ */

import * as React from 'react';
import { useTranslations } from 'next-intl';
import SparkleIcon from './primitives/SparkleIcon';
import CheckIcon from './primitives/icons/CheckIcon';
import WhatsAppIcon from './primitives/icons/WhatsAppIcon';

type PackTier = { amt: string; price: string };

export default function RecargasTeaser() {
  const t = useTranslations('recargas');
  const messagesTiers = t.raw('packs.messages.tiers') as PackTier[];
  const looksTiers = t.raw('packs.looks.tiers') as PackTier[];
  return (
    <section className="rec">
      <div className="rec__inner">

        {/* LEFT — copy */}
        <div className="rec__copy">
          <span className="rec__eyebrow">
            <SparkleIcon size={12} color="currentColor" />
            {t('eyebrow')}
          </span>

          <h2 className="rec__h1">
            {t('h1.line1')}<br/>
            {t.rich('h1.line2', { em: (chunks) => <em>{chunks}</em> })}
          </h2>

          <p className="rec__lead">
            {t('lead')}
          </p>

          <span className="rec__micro">
            <span className="rec__micro-check" aria-hidden="true">
              <CheckIcon strokeWidth={3} />
            </span>
            {t('micro')}
          </span>
        </div>

        {/* RIGHT — 2 dark pack cards */}
        <div className="rec__packs">

          <article className="rpack rpack--wa">
            <div className="rpack__inner">
              <div className="rpack__head">
                <span className="rpack__icon">
                  <WhatsAppIcon />
                </span>
                <div className="rpack__title-block">
                  <h3 className="rpack__name">{t('packs.messages.title')}</h3>
                  <p className="rpack__desc">{t('packs.messages.sub')}</p>
                </div>
              </div>
              <hr className="rpack__hr"/>
              <div className="rpack__tiers">
                {messagesTiers.map((tier, i) => (
                  <div key={i} className="rpack__tier">
                    <span className="rpack__tier-amt">{tier.amt} <small>{t('packs.messages.unit')}</small></span>
                    <span className="rpack__tier-price">{tier.price}</span>
                  </div>
                ))}
              </div>
            </div>
          </article>

          <article className="rpack rpack--look">
            <div className="rpack__inner">
              <div className="rpack__head">
                <span className="rpack__icon">
                  <SparkleIcon size={26} color="currentColor" />
                </span>
                <div className="rpack__title-block">
                  <h3 className="rpack__name">{t('packs.looks.title')}</h3>
                  <p className="rpack__desc">{t('packs.looks.sub')}</p>
                </div>
              </div>
              <hr className="rpack__hr"/>
              <div className="rpack__tiers">
                {looksTiers.map((tier, i) => (
                  <div key={i} className="rpack__tier">
                    <span className="rpack__tier-amt">{tier.amt} <small>{t('packs.looks.unit')}</small></span>
                    <span className="rpack__tier-price">{tier.price}</span>
                  </div>
                ))}
              </div>
            </div>
          </article>

        </div>
      </div>

      <style>{`
        .rec {
          position: relative;
          overflow: hidden;
          isolation: isolate;
          padding-block: clamp(3rem, 7vw, 5.5rem);
          background-image: url("/assets/recargas-bg-mobile.webp");
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          background-color: #FBF3E6;
        }
        @media (min-width: 720px) {
          .rec { background-image: url("/assets/recargas-bg-tablet.webp"); }
        }
        @media (min-width: 1280px) {
          .rec { background-image: url("/assets/recargas-bg.webp"); }
        }

        .rec__inner {
          position: relative; z-index: 2;
          max-width: 1180px;
          margin: 0 auto;
          padding-inline: clamp(1.25rem, 5vw, 2rem);
          display: grid;
          grid-template-columns: 1fr;
          gap: clamp(2.5rem, 5vw, 4rem);
          align-items: center;
        }

        /* ========== LEFT: COPY ========== */
        .rec__copy {
          display: flex; flex-direction: column; gap: 1.25rem;
          max-width: 520px;
        }
        .rec__eyebrow {
          display: inline-flex; align-items: center; gap: 0.55rem;
          align-self: flex-start;
          font-family: var(--font-text, 'Nunito', system-ui, sans-serif);
          font-size: 0.78rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.24em;
          color: var(--coral, #E86C57);
        }
        .rec__eyebrow svg { color: var(--coral, #E86C57); }

        .rec__h1 {
          font-family: var(--font-display, 'Sora', system-ui, sans-serif);
          font-weight: 700;
          font-size: clamp(2.25rem, 5.5vw, 3.875rem);
          letter-spacing: -0.028em;
          line-height: 1.05;
          color: var(--espresso, #2B211C);
          margin: 0;
          text-wrap: balance;
        }
        .rec__h1 em {
          font-style: italic;
          color: var(--coral, #E86C57);
          font-weight: 700;
        }

        .rec__lead {
          font-family: var(--font-text, 'Nunito', system-ui, sans-serif);
          font-size: 1.0625rem;
          color: rgba(43, 33, 28, 0.7);
          line-height: 1.5;
          margin: 0;
          text-wrap: pretty;
          max-width: 38ch;
        }

        .rec__micro {
          display: inline-flex; align-items: flex-start; gap: 0.7rem;
          align-self: flex-start;
          margin-top: 0.5rem;
          font-family: var(--font-text, 'Nunito', system-ui, sans-serif);
          font-size: 0.9rem;
          color: rgba(43, 33, 28, 0.7);
          line-height: 1.4;
          max-width: 28ch;
        }
        .rec__micro-check {
          flex-shrink: 0;
          width: 32px; height: 32px;
          border-radius: 50%;
          background: rgba(141, 218, 203, 0.30);
          color: #0F6F5E;
          display: inline-flex; align-items: center; justify-content: center;
          margin-top: 1px;
        }
        .rec__micro-check svg { width: 16px; height: 16px; }

        /* ========== RIGHT: 2 DARK PACK CARDS ========== */
        .rec__packs {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.25rem;
          width: 100%;
        }

        .rpack {
          position: relative;
          border-radius: 22px;
          padding: 1.5rem 1.4rem 1.5rem;
          overflow: hidden;
          isolation: isolate;
          color: var(--cream, #F7F3EC);
          background:
            url("/assets/card-dark-bg.webp") center center / cover no-repeat,
            linear-gradient(180deg, #2A1F18 0%, #1E1611 60%, #15100B 100%);
          border: 1px solid rgba(255, 255, 255, 0.04);
          box-shadow:
            inset 0 1px 0 rgba(255,255,255,0.06),
            0 24px 50px -24px rgba(0,0,0,0.55),
            0 12px 24px -12px rgba(43, 33, 28, 0.35);
        }
        .rpack--look::before {
          content: "";
          position: absolute; inset: 0;
          background: url("/assets/card-dark-bg.webp") center center / cover no-repeat;
          transform: scaleX(-1);
          z-index: 0;
          pointer-events: none;
        }

        .rpack__inner {
          position: relative;
          z-index: 2;
          display: flex; flex-direction: column;
          gap: 1.25rem;
        }

        .rpack__head {
          display: flex; align-items: center; gap: 0.85rem;
        }
        .rpack__icon {
          flex-shrink: 0;
          width: 56px; height: 56px;
          border-radius: 14px;
          display: inline-flex; align-items: center; justify-content: center;
          box-shadow: inset 0 1px 0 rgba(255,255,255,0.18), 0 6px 14px -4px rgba(0,0,0,0.4);
        }
        .rpack--wa .rpack__icon {
          background: linear-gradient(160deg, rgba(141,218,203,0.40), rgba(141,218,203,0.18));
          color: #8DDACB;
          border: 1px solid rgba(141,218,203,0.32);
        }
        .rpack--look .rpack__icon {
          background: linear-gradient(160deg, rgba(232,108,87,0.45), rgba(232,108,87,0.20));
          color: #FFB7A8;
          border: 1px solid rgba(232,108,87,0.40);
        }
        .rpack__icon svg { width: 26px; height: 26px; }

        .rpack__title-block { display: flex; flex-direction: column; gap: 0.25rem; }
        .rpack__name {
          font-family: var(--font-display, 'Sora', system-ui, sans-serif);
          font-size: 1.0625rem;
          font-weight: 700;
          letter-spacing: -0.02em;
          line-height: 1.15;
          color: var(--cream, #F7F3EC);
          margin: 0;
          white-space: nowrap;
        }
        .rpack__desc {
          font-family: var(--font-text, 'Nunito', system-ui, sans-serif);
          font-size: 0.85rem;
          color: rgba(247, 243, 236, 0.65);
          line-height: 1.4;
          margin: 0;
        }

        .rpack__hr {
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(247, 243, 236, 0.14), transparent);
          border: 0;
          margin: 0;
        }

        .rpack__tiers {
          display: flex; flex-direction: column;
          gap: 0.55rem;
        }
        .rpack__tier {
          display: flex; align-items: center; justify-content: space-between;
          padding: 0.85rem 1rem;
          border-radius: 12px;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.06);
          transition: background 0.18s ease, border-color 0.18s ease, transform 0.18s ease;
        }
        .rpack__tier:hover {
          background: rgba(255, 255, 255, 0.06);
          border-color: rgba(255, 255, 255, 0.12);
          transform: translateY(-1px);
        }
        .rpack__tier-amt {
          font-family: var(--font-text, 'Nunito', system-ui, sans-serif);
          font-size: 0.95rem;
          font-weight: 600;
          color: rgba(247, 243, 236, 0.85);
          letter-spacing: -0.005em;
        }
        .rpack__tier-amt small { color: rgba(247, 243, 236, 0.55); font-weight: 500; }
        .rpack__tier-price {
          font-family: var(--font-display, 'Sora', system-ui, sans-serif);
          font-size: 1.1875rem;
          font-weight: 700;
          letter-spacing: -0.015em;
        }
        .rpack--wa .rpack__tier-price { color: #6EE0C7; }
        .rpack--look .rpack__tier-price { color: #FFB7A8; }

        @media (min-width: 720px) {
          .rec__packs { grid-template-columns: 1fr 1fr; }
        }
        @media (min-width: 1024px) {
          .rec__inner {
            grid-template-columns: 0.95fr 1.4fr;
            gap: 5rem;
          }
        }
      `}</style>
    </section>
  );
}
