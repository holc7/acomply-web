"use client";

import type { ReactNode, MouseEventHandler } from "react";
import SparkleIcon from "./SparkleIcon";

type Variant = "primary" | "secondary" | "whatsapp" | "text";
type Size = "sm" | "md" | "lg";

type Props = {
  variant?: Variant;
  size?: Size;
  full?: boolean;
  href?: string;
  onClick?: MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>;
  children: ReactNode;
  arrow?: boolean;
  /** null = auto (sparkle on primary, none otherwise); true/false force */
  sparkle?: boolean | null;
  target?: string;
  rel?: string;
  "aria-label"?: string;
};

export default function Button({
  variant = "primary",
  size = "md",
  full = false,
  href,
  onClick,
  children,
  arrow = false,
  sparkle = null,
  ...rest
}: Props) {
  const showSparkle = sparkle === null ? variant === "primary" : sparkle;
  const cls = [
    "btn",
    `btn--${variant}`,
    size !== "md" && `btn--${size}`,
    full && "btn--full",
  ].filter(Boolean).join(" ");

  const inner = (
    <>
      {showSparkle && (
        <span className="btn__sparkle" aria-hidden="true">
          <SparkleIcon size={18} color="#FFF6EE" />
        </span>
      )}
      <span className="btn__label">{children}</span>
      {arrow && <span className="btn__arrow" aria-hidden="true">→</span>}
    </>
  );

  if (href) {
    return (
      <a className={cls} href={href} onClick={onClick} {...rest}>{inner}</a>
    );
  }
  return (
    <button className={cls} type="button" onClick={onClick} {...rest}>{inner}</button>
  );
}
