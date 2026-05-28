// [perf-audited 2026-05-15 / vercel-react-best-practices v1.0 + typescript-best-practices] audited-clean — no findings
// Verbatim port of Downloads/Asistente de Análisis Section.html.
// PhoneMockup primitive from the source isn't shipped — using project's PhoneFrame instead.

import { useTranslations } from "next-intl";
import PhoneFrame from "./primitives/PhoneFrame";
import SparkleIcon from "./primitives/SparkleIcon";
import BarChartIcon from "./primitives/icons/BarChartIcon";
import PeopleIcon from "./primitives/icons/PeopleIcon";

type DayDef = { dayKey: string; h: number; low?: boolean; tipKey?: string };

const DAYS: ReadonlyArray<DayDef> = [
  { dayKey: "mon", h: 78 },
  { dayKey: "tue", h: 32, low: true, tipKey: "tue_tip" },
  { dayKey: "wed", h: 60 },
  { dayKey: "thu", h: 70 },
  { dayKey: "fri", h: 82 },
  { dayKey: "sat", h: 92 },
  { dayKey: "sun", h: 98 },
];

function AsistenteScreen() {
  const t = useTranslations("analisis");
  const ts = useTranslations("analisis.screen");
  const td = useTranslations("analisis.days");
  return (
    <div className="asn">
      <div className="asn__top">
        <span className="asn__avatar">
          <SparkleIcon size={18} color="#0F6F5E" />
        </span>
        <div className="asn__title">
          {ts("title")}
          <small>{ts("title_sub")}</small>
        </div>
        <span className="asn__more" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="5" r="2"/><circle cx="12" cy="12" r="2"/><circle cx="12" cy="19" r="2"/></svg>
        </span>
      </div>

      <div className="asn__body">
        <div className="asn__question">{ts("question")}</div>

        <div className="asn__card">
          <p className="asn__lead">
            {ts("lead_text_a")}<strong>{ts("lead_strong")}</strong>{ts("lead_text_b")}<br />
            {ts("lead_text_c")}<em>{ts("lead_text_em")}</em>{ts("lead_text_d")}
          </p>
          <div className="asn__divider" />
          <span className="asn__chart-label">{t("chart_label")}</span>
          <div className="asn__chart">
            {DAYS.map((day, i) => (
              <div key={i} className={`asn__bar-wrap${day.low ? " is-low" : ""}`}>
                {day.tipKey && <span className="asn__bar-tip">{td(day.tipKey)}</span>}
                <span
                  className={`asn__bar${day.low ? " is-low" : ""}`}
                  style={{ height: `${day.h}%` }}
                />
                <span className="asn__bar-day">{td(day.dayKey)}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="asn__rec">
          <span className="asn__rec-label">{ts("rec_label")}</span>
          <p className="asn__rec-text">
            {ts("rec_text")}
          </p>
          <button className="asn__rec-cta" type="button">
            {ts("rec_cta")}
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6"/></svg>
          </button>
        </div>
      </div>

      <div className="asn__compose">
        <span className="asn__compose-input">{ts("compose_placeholder")}</span>
        <span className="asn__compose-btn" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="currentColor"><path d="M3 11l18-8-8 18-2-7-8-3z"/></svg>
        </span>
      </div>
    </div>
  );
}

type FeatureDef = { titleKey: string; descKey: string; icon: React.ReactNode };

const FEATURES_META: ReadonlyArray<FeatureDef> = [
  {
    titleKey: "title",
    descKey: "desc",
    icon: <BarChartIcon bars={3} />,
  },
  {
    titleKey: "title",
    descKey: "desc",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
        <path d="M7 18l-3 2 1-4a7 7 0 117 3h-2" />
        <path d="M9 10h.01M12 10h.01M15 10h.01" />
      </svg>
    ),
  },
  {
    titleKey: "title",
    descKey: "desc",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 7L9 18l-5-5" />
      </svg>
    ),
  },
  {
    titleKey: "title",
    descKey: "desc",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 19V5" />
        <path d="M6 11l6-6 6 6" />
      </svg>
    ),
  },
];

export default function AsistenteAnalisisSection() {
  const t = useTranslations("analisis");
  const features = t.raw("features") as Array<{ title: string; desc: string }>;
  return (
    <section className="ana">
      <div className="ana__atmo" aria-hidden="true" />
      <div className="ana__inner">

        <div className="ana__split">
          <div className="ana__copy">
            <span className="ana__eyebrow" aria-label={t("aria_eyebrow")}>
              <span className="ana__eyebrow-num">{t("eyebrow_num")}</span>
              <span className="ana__eyebrow-text">{t("eyebrow_text")}</span>
            </span>

            <h2 className="ana__h1">
              {t("h1_line1")}<br />
              {t.rich("h1_line2", { em: (chunks) => <em>{chunks}</em> })}
            </h2>

            <p className="ana__lead">
              {t("lead")}
            </p>

            <ul className="ana__features">
              {FEATURES_META.map((f, i) => (
                <li key={i} className="ana__feat">
                  <span className="ana__feat-icon" aria-hidden="true">{f.icon}</span>
                  <div className="ana__feat-body">
                    <h3 className="ana__feat-title">{features[i]?.title}</h3>
                    <p className="ana__feat-desc">{features[i]?.desc}</p>
                  </div>
                </li>
              ))}
            </ul>

            <span className="ana__plan">
              <span className="ana__plan-dot" aria-hidden="true" />
              {t("plan_note")}
            </span>
          </div>

          <div className="ana__phone-col">
            <div className="ana__rings" aria-hidden="true">
              <span className="ana__ring ana__ring--4" />
              <span className="ana__ring ana__ring--3" />
              <span className="ana__ring ana__ring--2" />
              <span className="ana__ring ana__ring--1" />
            </div>
            <div className="ana__phone">
              <PhoneFrame>
                <AsistenteScreen />
              </PhoneFrame>
            </div>
          </div>
        </div>

        <div className="ana__stats">
          <div className="ana__stat">
            <span className="ana__stat-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>
            </span>
            <div className="ana__stat-body">
              <span className="ana__stat-eyebrow">{t("stats.save_eyebrow")}</span>
              <span className="ana__stat-headline"><em>{t("stats.save_headline_em")}</em></span>
              <span className="ana__stat-sub">{t("stats.save_sub")}</span>
            </div>
          </div>

          <div className="ana__stat">
            <span className="ana__stat-icon" aria-hidden="true">
              <BarChartIcon bars={3} />
            </span>
            <div className="ana__stat-body">
              <span className="ana__stat-eyebrow">{t("stats.decisions_eyebrow")}</span>
              <span className="ana__stat-headline"><em>{t("stats.decisions_headline_em")}</em></span>
              <span className="ana__stat-sub">{t("stats.decisions_sub")}</span>
            </div>
          </div>

          <div className="ana__stat">
            <span className="ana__stat-icon" aria-hidden="true">
              <PeopleIcon variant="group" strokeWidth={1.8} />
            </span>
            <div className="ana__stat-body">
              <span className="ana__stat-headline" style={{ fontSize: "1rem" }}>{t("stats.results_headline")}</span>
              <span className="ana__stat-sub">{t("stats.results_sub")}</span>
            </div>
          </div>

          <p className="ana__quote">
            {t("quote")}
          </p>
        </div>
      </div>
    </section>
  );
}
