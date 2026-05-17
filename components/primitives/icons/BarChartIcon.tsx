// [perf-audited 2026-05-16 / vercel-react-best-practices v1.0 + typescript-best-practices] audited-clean — no findings
// Stroked bar-chart icon. Two bar-count variants in use:
//   - bars=4 → M5 21V11M10 21V7M15 21v-6M20 21V3   (Hero, Agents, PricingMaestro)
//   - bars=3 → M5 21V11M12 21V3M19 21v-7           (AsistenteAnalisis stats)

import type { CSSProperties, SVGProps } from "react";

type Bars = 3 | 4;

type Props = {
  size?: number;
  color?: string;
  strokeWidth?: number;
  bars?: Bars;
  style?: CSSProperties;
} & Omit<SVGProps<SVGSVGElement>, "color" | "style">;

const PATH: Record<Bars, string> = {
  4: "M5 21V11M10 21V7M15 21v-6M20 21V3",
  3: "M5 21V11M12 21V3M19 21v-7",
};

export default function BarChartIcon({
  size = 24,
  color = "currentColor",
  strokeWidth = 1.8,
  bars = 4,
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
      <path d={PATH[bars]} />
    </svg>
  );
}
