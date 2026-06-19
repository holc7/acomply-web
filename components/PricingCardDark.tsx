// [perf-audited 2026-05-15 / vercel-react-best-practices v1.0 + typescript-best-practices] audited-clean — no findings
// Verbatim port of Downloads/PricingCardDark.jsx from Claude Design.
// Do not invent decoration here — match the JSX exactly.
"use client";

import type { ReactNode } from "react";
import { PRICING } from "@/lib/pricing";
import type { IconKey } from "@/lib/plans-catalog";
import SparkleIcon from "./primitives/SparkleIcon";
import CheckIcon from "./primitives/icons/CheckIcon";
import BarChartIcon from "./primitives/icons/BarChartIcon";
import ChatBubbleIcon from "./primitives/icons/ChatBubbleIcon";
import GiftIcon from "./primitives/icons/GiftIcon";
import MegaphoneIcon from "./primitives/icons/MegaphoneIcon";
import QrIcon from "./primitives/icons/QrIcon";

// Same per-feature glyphs Maestro uses, so the Élite list shows meaningful
// icons (chat / megaphone / qr …) instead of plain checkmarks. Rows without a
// key fall back to the check, exactly like Maestro.
const ICON_BY_KEY: Record<IconKey, ReactNode> = {
  gift: <GiftIcon />,
  chat: <ChatBubbleIcon />,
  megaphone: <MegaphoneIcon />,
  barchart: <BarChartIcon />,
  qr: <QrIcon />,
};

type Accent = "mint" | "coral" | "amber";
type GlowDirection =
  | "right" | "left" | "top" | "bottom"
  | "top-right" | "top-left" | "bottom-right" | "bottom-left";

// Accepts the same resolved shape Maestro consumes. Élite is a flat list today
// (no sections), but accept the section variant defensively and skip it at
// render — the dark card has no section styling.
type Feature = { section: string } | { label: string; note?: string; icon?: IconKey };

type Props = {
  tier?: string;
  name?: string;
  italicWord?: string;
  sell?: string;
  price?: string;
  period?: string;
  features?: Feature[];
  ctaLabel?: string;
  ctaHref?: string;
  accent?: Accent;
  glowDirection?: GlowDirection;
  sparkles?: boolean;
  hairlines?: boolean;
  className?: string;
};

/**
 * Splits the display name into prefix + italic-last-word.
 * "Acomply Élite" → ["Acomply", "Élite"]
 */
const splitName = (name: string, italicWord?: string): [string, string] => {
  if (italicWord) {
    const idx = name.lastIndexOf(italicWord);
    if (idx >= 0) return [name.slice(0, idx).trim(), italicWord];
  }
  const parts = name.trim().split(/\s+/);
  if (parts.length <= 1) return [name, ""];
  return [parts.slice(0, -1).join(" "), parts[parts.length - 1]];
};

export default function PricingCardDark({
  tier = "Élite",
  name = "Acomply Élite",
  italicWord,
  sell = "Para equipos sin límite que necesitan más.",
  price = PRICING.elite.displayCop,
  period = "/mes · facturación mensual",
  features = [],
  ctaLabel = "Hablar con ventas",
  ctaHref = "#",
  accent = "mint",
  glowDirection = "right",
  sparkles = true,
  hairlines = true,
  className = "",
}: Props) {
  const [prefix, italicLast] = splitName(name, italicWord);
  const cls = [
    "pcd",
    accent && `pcd--${accent}`,
    glowDirection && `pcd--glow-${glowDirection}`,
    className,
  ].filter(Boolean).join(" ");

  return (
    <div className={cls}>
      {hairlines && (
        <>
          <span className="pcd__sweep pcd__sweep--tr" aria-hidden="true" />
          <span className="pcd__sweep pcd__sweep--br" aria-hidden="true" />
        </>
      )}

      {sparkles && (
        <span className="pcd__sparkles" aria-hidden="true">
          <span className="s-big"><SparkleIcon size={18} color="currentColor" /></span>
          <span className="s-small"><SparkleIcon size={10} color="currentColor" /></span>
        </span>
      )}

      <div className="pcd__inner">
        {tier && <span className="pcd__tier">{tier}</span>}

        <h3 className="pcd__name">
          {prefix}{italicLast && " "}
          {italicLast && <em>{italicLast}</em>}
        </h3>

        {sell && <p className="pcd__sell">{sell}</p>}

        <div className="pcd__price-wrap">
          <span className="pcd__price-cur">$</span>
          <span className="pcd__price-num">{price}</span>
          <span className="pcd__price-curB">COP</span>
        </div>
        {period && <div className="pcd__period">{period}</div>}

        <hr className="pcd__hr" />

        {features.length > 0 && (
          <ul className="pcd__features">
            {features.map((f, i) => {
              if ("section" in f) return null; // dark card has no section styling
              return (
                <li key={i} className="pcd__feat">
                  <span className="pcd__feat-check">
                    {f.icon ? ICON_BY_KEY[f.icon] : <CheckIcon strokeWidth={2.6} />}
                  </span>
                  <span>
                    {f.label}
                    {f.note && <span className="pcd__feat-note">{f.note}</span>}
                  </span>
                </li>
              );
            })}
          </ul>
        )}

        <div className="pcd__cta-wrap">
          <a className="pcd__cta" href={ctaHref}>
            <span className="pcd__cta-spark" aria-hidden="true">
              <SparkleIcon size={16} color="currentColor" />
            </span>
            {ctaLabel}
          </a>
        </div>
      </div>
    </div>
  );
}
