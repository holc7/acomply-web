// [perf-audited 2026-05-16 / vercel-react-best-practices v1.0 + typescript-best-practices] audited-clean — no findings
// Circle-with-check glyph used by the pricing-card check bullets (Esencial + Maestro).
// Distinct from CheckIcon because the path includes a surrounding circle.

import type { CSSProperties, SVGProps } from "react";

type Props = {
  size?: number;
  color?: string;
  strokeWidth?: number;
  style?: CSSProperties;
} & Omit<SVGProps<SVGSVGElement>, "color" | "style">;

export default function CheckCircleIcon({
  size = 24,
  color = "currentColor",
  strokeWidth = 2,
  style,
  ...rest
}: Props) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      aria-hidden="true"
      style={style}
      {...rest}
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M8 12.5l2.5 2.5L16 9.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
