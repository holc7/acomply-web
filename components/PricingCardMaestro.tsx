// [perf-audited 2026-05-15 / vercel-react-best-practices v1.0 + typescript-best-practices] audited-clean — no findings
"use client";

import type { ReactNode } from "react";
import { useLocale, useTranslations } from "next-intl";
import { PRICING } from "@/lib/pricing";
import { PLAN_FEATURES, type IconKey } from "@/lib/plans-catalog";
import { resolveMaestroFeatures } from "@/lib/plans-catalog-resolve";
import SparkleIcon from "./primitives/SparkleIcon";
import BarChartIcon from "./primitives/icons/BarChartIcon";
import ChatBubbleIcon from "./primitives/icons/ChatBubbleIcon";
import CheckCircleIcon from "./primitives/icons/CheckCircleIcon";
import GiftIcon from "./primitives/icons/GiftIcon";
import MegaphoneIcon from "./primitives/icons/MegaphoneIcon";
import QrIcon from "./primitives/icons/QrIcon";

const ICON_BY_KEY: Record<IconKey, ReactNode> = {
  gift: <GiftIcon />,
  chat: <ChatBubbleIcon />,
  megaphone: <MegaphoneIcon />,
  barchart: <BarChartIcon />,
  qr: <QrIcon />,
};

export type MaestroFeature =
  | { section: string }
  | { label: string; note?: string; icon?: ReactNode };

type Props = {
  tier?: string;
  name?: string;
  sell?: string;
  price?: string;
  period?: string;
  badge?: string | null;
  features?: MaestroFeature[];
  ctaLabel?: string;
  ctaHref?: string;
  className?: string;
};

export default function PricingCardMaestro({
  tier,
  name,
  sell,
  price = PRICING.maestro.displayCop,
  period,
  badge,
  features,
  ctaLabel,
  ctaHref = "#demo",
  className = "",
}: Props) {
  const t = useTranslations("pricing");
  const tm = useTranslations("pricing.tier_maestro");
  const locale = useLocale();

  const resolvedTier = tier ?? t("tier_labels.maestro");
  const resolvedName = name ?? tm("name");
  const resolvedSell = sell ?? tm("sell");
  const resolvedPeriod = period ?? tm("period");
  const resolvedCta = ctaLabel ?? tm("cta");
  const resolvedBadge = badge === undefined ? t("badge_recommended") : badge;

  const defaultFeatures: MaestroFeature[] = resolveMaestroFeatures(
    PLAN_FEATURES.maestro,
    locale,
  ).map((f) =>
    "section" in f
      ? { section: f.section }
      : { label: f.label, note: f.note, icon: f.icon ? ICON_BY_KEY[f.icon] : undefined },
  );

  const feats = features ?? defaultFeatures;

  return (
    <div className={`pcm ${className}`}>
      {resolvedBadge && (
        <span className="pcm__badge">
          <span className="pcm__badge-spark"><SparkleIcon size={12} color="#FFF6EE" /></span>
          {resolvedBadge}
        </span>
      )}

      {resolvedTier && <span className="pcm__tier">{resolvedTier}</span>}

      <h3 className="pcm__name">{resolvedName}</h3>
      {resolvedSell && <p className="pcm__sell">{resolvedSell}</p>}

      <div className="pcm__price-wrap">
        <span className="pcm__price-cur">$</span>
        <span className="pcm__price-num">{price}</span>
        <span className="pcm__price-curB">COP</span>
      </div>
      {resolvedPeriod && <div className="pcm__period">{resolvedPeriod}</div>}

      <hr className="pcm__hr" />

      <ul className="pcm__features">
        {feats.map((f, i) => {
          if ("section" in f) {
            return (
              <li key={i} className="pcm__section">
                <span className="pcm__section-label">{f.section}</span>
                <span className="pcm__section-rail" />
              </li>
            );
          }
          const isCheck = !f.icon;
          return (
            <li key={i} className="pcm__feat">
              <span className={`pcm__feat-icon${isCheck ? " pcm__feat-icon--check" : ""}`}>
                {isCheck ? <CheckCircleIcon /> : f.icon}
              </span>
              <span>
                {f.label}
                {f.note && <span className="pcm__feat-note">{f.note}</span>}
              </span>
            </li>
          );
        })}
      </ul>

      <div className="pcm__cta-wrap">
        <a className="pcm__cta" href={ctaHref}>
          <span className="pcm__cta-spark" aria-hidden="true">
            <SparkleIcon size={16} color="#FFF6EE" />
          </span>
          {resolvedCta}
        </a>
      </div>
    </div>
  );
}
