// [perf-audited 2026-05-16 / vercel-react-best-practices v1.0 + typescript-best-practices] audited-clean — no findings
// WhatsApp speech-bubble-with-tail glyph. Filled-mark variant used everywhere
// the "WhatsApp" channel is cued (Hero floating card, TrustStrip pillar,
// Resultados card 05, Recargas pack, Agents card 01, Agenda toast, etc.).
// Mirrors the SparkleIcon API: `size`, `color`, `style`, plus SVG props.

import type { CSSProperties, SVGProps } from "react";

type Props = {
  size?: number;
  color?: string;
  style?: CSSProperties;
} & Omit<SVGProps<SVGSVGElement>, "color" | "style">;

export default function WhatsAppIcon({
  size = 24,
  color = "currentColor",
  style,
  ...rest
}: Props) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      aria-hidden="true"
      style={style}
      {...rest}
    >
      <path d="M20.5 3.5A11.5 11.5 0 002.6 17.2L1 23l5.9-1.6A11.5 11.5 0 1020.5 3.5zM12 21.2a9.2 9.2 0 01-4.7-1.3l-.3-.2-3.5.9.9-3.4-.2-.4A9.3 9.3 0 1112 21.2z" />
    </svg>
  );
}
