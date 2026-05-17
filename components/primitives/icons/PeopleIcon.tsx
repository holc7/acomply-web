// [perf-audited 2026-05-16 / vercel-react-best-practices v1.0 + typescript-best-practices] audited-clean — no findings
// People / community icon. Two flavors:
//   - "one"   → single person (used in Marketing-IA segment row)
//   - "group" → group of people (used in nav/clientes, ResultadosSection note)
//
// Note: ResultadosSection has a "solo with a +" variant — that one stays inline
// because the +-mark differs structurally. Don't force-unify.

import type { CSSProperties, SVGProps } from "react";

type Variant = "one" | "group";

type Props = {
  size?: number;
  color?: string;
  strokeWidth?: number;
  variant?: Variant;
  style?: CSSProperties;
} & Omit<SVGProps<SVGSVGElement>, "color" | "style">;

export default function PeopleIcon({
  size = 24,
  color = "currentColor",
  strokeWidth = 2,
  variant = "group",
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
      <circle cx="9" cy="8" r="4" />
      {variant === "one" ? (
        <path d="M2 21a7 7 0 0114 0" />
      ) : (
        <path d="M2 21a7 7 0 0114 0M17 11a3 3 0 100-6M23 21a7 7 0 00-5-6.7" />
      )}
    </svg>
  );
}
