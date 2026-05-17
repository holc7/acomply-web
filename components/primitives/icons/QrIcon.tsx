// [perf-audited 2026-05-16 / vercel-react-best-practices v1.0 + typescript-best-practices] audited-clean — no findings
// Stroked QR-code glyph (3 corner squares + bottom-right pattern).
// Used by Maestro plan to flag "QR estilizado con IA".

import type { CSSProperties, SVGProps } from "react";

type Props = {
  size?: number;
  color?: string;
  strokeWidth?: number;
  style?: CSSProperties;
} & Omit<SVGProps<SVGSVGElement>, "color" | "style">;

export default function QrIcon({
  size = 24,
  color = "currentColor",
  strokeWidth = 1.8,
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
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      style={style}
      {...rest}
    >
      <rect x="3" y="3" width="7" height="7" rx="1" />
      <rect x="14" y="3" width="7" height="7" rx="1" />
      <rect x="3" y="14" width="7" height="7" rx="1" />
      <path d="M14 14h3M14 17v4M17 21h4M21 14v3" />
    </svg>
  );
}
