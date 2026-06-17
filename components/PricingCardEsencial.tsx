// [perf-audited 2026-05-15 / vercel-react-best-practices v1.0 + typescript-best-practices] audited-clean — no findings
"use client";

import { useLocale, useTranslations } from "next-intl";
import { PRICING } from "@/lib/pricing";
import { PLAN_FEATURES } from "@/lib/plans-catalog";
import { resolveLabelFeatures } from "@/lib/plans-catalog-resolve";
import CheckCircleIcon from "./primitives/icons/CheckCircleIcon";

type Feature = { label: string };

type Props = {
  tier?: string;
  name?: string;
  sell?: string;
  price?: string;
  period?: string;
  features?: Feature[];
  ctaLabel?: string;
  ctaHref?: string;
  className?: string;
};

export default function PricingCardEsencial({
  tier,
  name,
  sell,
  price = PRICING.esencial.displayCop,
  period,
  features,
  ctaLabel,
  ctaHref = "#demo",
  className = "",
}: Props) {
  const t = useTranslations("pricing");
  const te = useTranslations("pricing.tier_esencial");
  const locale = useLocale();
  const resolvedTier = tier ?? t("tier_labels.esencial");
  const resolvedName = name ?? te("name");
  const resolvedSell = sell ?? te("sell");
  const resolvedPeriod = period ?? te("period");
  const resolvedCta = ctaLabel ?? te("cta");
  const feats: Feature[] = features ?? resolveLabelFeatures(PLAN_FEATURES.esencial, locale);

  return (
    <div className={`pce ${className}`}>
      <div className="pce__wave" aria-hidden="true">
        <svg viewBox="0 0 220 140" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <defs>
            <radialGradient id="pce-wash" cx="0%" cy="100%" r="90%">
              <stop offset="0%"  stopColor="#E86C57" stopOpacity="0.22" />
              <stop offset="55%" stopColor="#E86C57" stopOpacity="0.06" />
              <stop offset="100%" stopColor="#E86C57" stopOpacity="0" />
            </radialGradient>
            <linearGradient id="pce-line" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%"  stopColor="#E86C57" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#E86C57" stopOpacity="0" />
            </linearGradient>
          </defs>
          <rect width="220" height="140" fill="url(#pce-wash)" />
          <path d="M 0 96 Q 40 80 90 92 T 220 100" fill="none" stroke="url(#pce-line)" strokeWidth="1" strokeLinecap="round" opacity="0.7"/>
          <path d="M 0 112 Q 50 100 110 108 T 220 116" fill="none" stroke="url(#pce-line)" strokeWidth="1" strokeLinecap="round" opacity="0.5"/>
          <path d="M 0 126 Q 60 118 130 122 T 220 130" fill="none" stroke="url(#pce-line)" strokeWidth="1" strokeLinecap="round" opacity="0.35"/>
        </svg>
      </div>
      <span className="pce__noise" aria-hidden="true" />

      <div className="pce__inner">
        <span className="pce__tier">{resolvedTier}</span>
        <h3 className="pce__name">{resolvedName}</h3>
        {resolvedSell && <p className="pce__sell">{resolvedSell}</p>}

        <div className="pce__price-wrap">
          <span className="pce__price-cur">$</span>
          <span className="pce__price-num">{price}</span>
          <span className="pce__price-curB">COP</span>
        </div>
        {resolvedPeriod && <div className="pce__period">{resolvedPeriod}</div>}

        <hr className="pce__hr" />

        <ul className="pce__features">
          {feats.map((f, i) => (
            <li key={i} className="pce__feat">
              <span className="pce__feat-check"><CheckCircleIcon /></span>
              <span>{f.label}</span>
            </li>
          ))}
        </ul>

        <div className="pce__cta-wrap">
          <a className="pce__cta" href={ctaHref}>
            {resolvedCta}
          </a>
        </div>
      </div>
    </div>
  );
}
