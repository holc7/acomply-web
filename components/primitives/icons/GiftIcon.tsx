// [perf-audited 2026-05-16 / vercel-react-best-practices v1.0 + typescript-best-practices] audited-clean — no findings
// Stroked gift-box glyph used by Maestro plan to flag "free monthly credits".

import type { CSSProperties, SVGProps } from "react";

type Props = {
  size?: number;
  color?: string;
  strokeWidth?: number;
  style?: CSSProperties;
} & Omit<SVGProps<SVGSVGElement>, "color" | "style">;

export default function GiftIcon({
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
      <rect x="3" y="8" width="18" height="4" rx="1" />
      <path d="M12 8v13M5 12v8a1 1 0 001 1h12a1 1 0 001-1v-8" />
      <path d="M12 8S10 3 7.5 3a2.5 2.5 0 000 5H12M12 8s2-5 4.5-5a2.5 2.5 0 010 5H12" />
    </svg>
  );
}
