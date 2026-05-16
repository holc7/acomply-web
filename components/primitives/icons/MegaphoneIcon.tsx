// [perf-audited 2026-05-16 / vercel-react-best-practices v1.0 + typescript-best-practices] audited-clean — no findings
// Stroked megaphone glyph used by Marketing-IA cues
// (PricingCardMaestro "Marketing IA" row, AgentsSection "Marketing IA" card).

import type { CSSProperties, SVGProps } from "react";

type Props = {
  size?: number;
  color?: string;
  strokeWidth?: number;
  style?: CSSProperties;
} & Omit<SVGProps<SVGSVGElement>, "color" | "style">;

export default function MegaphoneIcon({
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
      <path d="M3 11v2a1 1 0 001 1h2l8 5V5L6 10H4a1 1 0 00-1 1z" />
      <path d="M16 8a4 4 0 010 8" />
    </svg>
  );
}
