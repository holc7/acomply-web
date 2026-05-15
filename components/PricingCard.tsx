"use client";

import { Fragment } from "react";
import Button from "./primitives/Button";
import SparkleIcon from "./primitives/SparkleIcon";

const PCardCheck = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12l5 5 9-11"/></svg>
);

export type Feature = {
  label?: string;
  ai?: boolean;
  note?: string;
  sectionLabel?: string;
};

type Props = {
  tier: string;
  name: string;
  sell: string;
  price: string;
  period?: string;
  featured?: boolean;
  badgeText?: string;
  features?: Feature[];
  ctaLabel?: string;
  ctaHref?: string;
  ctaVariant?: "primary" | "secondary";
  onCtaClick?: () => void;
};

export default function PricingCard({
  tier,
  name,
  sell,
  price,
  period = "/mes · facturación mensual",
  featured = false,
  badgeText = "Más popular",
  features = [],
  ctaLabel = "Empieza ahora",
  ctaHref = "#demo",
  ctaVariant,
  onCtaClick,
}: Props) {
  const resolvedCtaVariant = ctaVariant ?? (featured ? "primary" : "secondary");

  return (
    <div className={`pcard${featured ? " pcard--featured" : ""}`}>
      {featured && (
        <span className="pcard__badge">
          <SparkleIcon size={11} color="currentColor" />
          {badgeText}
        </span>
      )}

      <div className="pcard__head">
        <span className="pcard__tier">{tier}</span>
        <h3 className="pcard__name">{name}</h3>
        <p className="pcard__sell">{sell}</p>
      </div>

      <div className="pcard__price">
        <span className="pcard__price-cur">$</span>
        <span className="pcard__price-num">{price}</span>
        <span className="pcard__price-cur">COP</span>
      </div>
      <div className="pcard__price-period">{period}</div>

      <ul className="pcard__features">
        {features.map((f, i) => (
          <Fragment key={i}>
            {f.sectionLabel && (
              <>
                <li className="pcard__divider" aria-hidden="true" />
                <li>
                  <span className="pcard__divider-label">
                    <SparkleIcon size={10} color="currentColor" />
                    {f.sectionLabel}
                  </span>
                </li>
              </>
            )}
            {f.label && (
              <li className={`pcard__feature${f.ai ? " pcard__feature--ai" : ""}`}>
                <span className="pcard__feature-icon"><PCardCheck /></span>
                <span>
                  {f.label}
                  {f.note && <span className="pcard__feature-note">{f.note}</span>}
                </span>
              </li>
            )}
          </Fragment>
        ))}
      </ul>

      <div className="pcard__cta">
        <Button variant={resolvedCtaVariant} full href={onCtaClick ? undefined : ctaHref} onClick={onCtaClick} sparkle={featured}>
          {ctaLabel}
        </Button>
      </div>
    </div>
  );
}
