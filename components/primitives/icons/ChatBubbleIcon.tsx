// [perf-audited 2026-05-16 / vercel-react-best-practices v1.0 + typescript-best-practices] audited-clean — no findings
// Stroked chat-bubble glyph (used by Maestro card "Recepcionista IA en WhatsApp"
// row and Resultados card 03 "Recordatorios 24h antes").

import type { CSSProperties, SVGProps } from "react";

type Props = {
  size?: number;
  color?: string;
  strokeWidth?: number;
  style?: CSSProperties;
} & Omit<SVGProps<SVGSVGElement>, "color" | "style">;

export default function ChatBubbleIcon({
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
      <path d="M21 11.5a8.4 8.4 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.4 8.4 0 01-3.8-.9L3 21l1.9-5.7a8.4 8.4 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.4 8.4 0 013.8-.9h.5A8.5 8.5 0 0121 11v.5z" />
    </svg>
  );
}
