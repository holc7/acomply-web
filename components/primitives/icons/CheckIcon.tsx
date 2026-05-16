// [perf-audited 2026-05-16 / vercel-react-best-practices v1.0 + typescript-best-practices] audited-clean — no findings
// Stroked checkmark. Three glyph variants in use across the codebase:
//   - "v"     → M5 12l5 5L19 7        (open V, used in Recargas/Closing/Marketing/Asistente)
//   - "swoop" → M5 12l5 5 9-11        (broader swoop tail, used in AgentVignette/DemoModal success)
//   - "tick"  → M20 6L9 17l-5-5       (forward slash style, DemoModal micro-foot)
// Stroke width is configurable so each callsite preserves its original weight.
// Render is identical to the inline SVGs it replaces.

import type { CSSProperties, SVGProps } from "react";

type Variant = "v" | "swoop" | "tick";

type Props = {
  size?: number;
  color?: string;
  strokeWidth?: number;
  variant?: Variant;
  style?: CSSProperties;
} & Omit<SVGProps<SVGSVGElement>, "color" | "style">;

const PATH: Record<Variant, string> = {
  v: "M5 12l5 5L19 7",
  swoop: "M5 12l5 5 9-11",
  tick: "M20 6L9 17l-5-5",
};

export default function CheckIcon({
  size = 24,
  color = "currentColor",
  strokeWidth = 2,
  variant = "v",
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
      <path d={PATH[variant]} />
    </svg>
  );
}
