// [perf-audited 2026-05-15 / vercel-react-best-practices v1.0 + typescript-best-practices] audited-clean — no findings
// Two-column hero. Phone in right column with two floating cards layered around it:
// WhatsApp reminder (top-left) + IA de Acomply suggestion (bottom-right).
"use client";

import { useTranslations } from "next-intl";
import { DEMO_HREF } from "../lib/copy";
import Button from "./primitives/Button";
import SparkleIcon from "./primitives/SparkleIcon";
import WhatsAppIcon from "./primitives/icons/WhatsAppIcon";
import AgendaScreen from "./screens/AgendaScreen";

export default function HeroSection() {
  const t = useTranslations("hero");
  return (
    <section className="hero noise" id="top">
      <div className="hero__atmo" aria-hidden="true" />
      <div className="container hero__inner">
        <div className="hero__copy">
          <h1 className="hero__h1">
            {t("h1_line1")}<br />
            {t.rich("h1_line2", { em: (chunks) => <em>{chunks}</em> })}
          </h1>

          <p className="hero__sub">
            {t.rich("sub", {
              amp: (chunks) => <span className="hero__amp">{chunks}</span>,
            })}
          </p>

          <div className="hero__ctas">
            <Button variant="primary" size="lg" href={DEMO_HREF}>{t("cta_primary")}</Button>
            <a className="hero__demo-link" href="#agentes">
              <span className="hero__demo-play" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                  <circle cx="12" cy="12" r="11" vectorEffect="non-scaling-stroke" />
                  <path d="M10 8l6 4-6 4z" fill="currentColor" stroke="none" />
                </svg>
              </span>
              <span className="hero__demo-text">
                <strong>{t("demo_link.title")}</strong>
                <small>{t("demo_link.sub")}</small>
              </span>
            </a>
          </div>

          <ul className="hero__trust">
            <li>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x="5" y="11" width="14" height="10" rx="2" />
                <path d="M8 11V7a4 4 0 018 0v4" />
              </svg>
              {t("trust.no_card")}
            </li>
            <li>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <circle cx="12" cy="12" r="9" />
                <path d="M12 7v5l3 2" />
              </svg>
              {t("trust.setup_time")}
            </li>
            <li>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M12 3l8 4v6c0 4.5-3.4 8.3-8 9-4.6-.7-8-4.5-8-9V7l8-4z" />
                <path d="M9 12l2 2 4-4" />
              </svg>
              {t("trust.secure_data")}
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
            <AgendaScreen />
          </div>

          {/* Floating WhatsApp reminder card — top-left of phone */}
          <div className="hero__floating hero__floating--wa" aria-hidden="true">
            <div className="hero__floating-head">
              <span className="hero__wa-icon">
                <WhatsAppIcon size={18} color="#fff" />
              </span>
              <div className="hero__wa-copy">
                <div className="hero__wa-title">{t("wa_card.title")}</div>
                <div className="hero__wa-body">
                  {t.rich("wa_card.body", { br: () => <br /> })}
                </div>
              </div>
            </div>
            <div className="hero__wa-meta">
              <span className="hero__wa-status">
                <span className="hero__wa-check" aria-hidden="true">✓</span>
                {t("wa_card.status_delivered")}
              </span>
              <span className="hero__wa-time">{t("wa_card.time")}</span>
            </div>
          </div>

          {/* Floating Agente IA suggestion card — bottom-right of phone */}
          <div className="hero__floating hero__floating--ai" aria-hidden="true">
            <div className="hero__ai-head">
              <span className="hero__ai-mark">
                <SparkleIcon size={22} color="currentColor" />
              </span>
              <h3 className="hero__ai-title">
                {t("ai_card.title_line1")}
                <br />{t("ai_card.title_line2")}
              </h3>
              <span className="hero__ai-deco" aria-hidden="true">
                <SparkleIcon size={14} color="currentColor" />
                <SparkleIcon size={10} color="currentColor" />
                <SparkleIcon size={8} color="currentColor" />
              </span>
            </div>
            <p className="hero__ai-body">
              {t.rich("ai_card.body", {
                strong: (chunks) => <strong>{chunks}</strong>,
                br: () => <br />,
              })}
            </p>
            <button className="hero__ai-cta" type="button">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M22 2L11 13" />
                <path d="M22 2l-7 20-4-9-9-4 20-7z" />
              </svg>
              {t("ai_card.cta")}
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
