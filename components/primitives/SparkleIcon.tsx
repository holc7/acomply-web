// 4-point brand sparkle. Verbatim path from the official Acomply logo
// (the sparkle inside the A-mark). Do not modify the path data — it is
// the source of truth for every sparkle on the page.

import type { CSSProperties, SVGProps } from "react";

type Props = {
  size?: number;
  color?: string;
  style?: CSSProperties;
} & Omit<SVGProps<SVGSVGElement>, "color" | "style">;

export default function SparkleIcon({ size = 16, color = "currentColor", style, ...rest }: Props) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 520 513"
      fill="none"
      aria-hidden="true"
      style={style}
      {...rest}
    >
      <path
        d="m515 263.33c-38.33 6.67-73.33 18.34-105 33.34-15 6.66-33.33 18.33-53.33 33.33-15 11.67-28.34 26.67-41.67 46.67-25 40-40 85-45 130 0 1.66-1.67 5-3.33 5-3.34 1.66-6.67 1.66-8.34 0-1.66-1.67-1.66-3.34-3.33-8.34-13.33-83.33-53.33-163.33-131.67-201.66-33.33-16.67-65-28.34-98.33-35-13.33-1.67-20-3.34-20-3.34-3.33-1.66-5-3.33-5-6.66 0-5 1.67-6.67 6.67-8.34 63.33-13.33 133.33-33.33 180-83.33 15-15 23.33-33.33 31.66-51.67 6.67-11.66 13.34-25 16.67-36.66 3.33-11.67 6.67-23.34 10-33.34 1.67-8.33 5-18.33 6.67-26.66 1.66-5 1.66-16.67 10-16.67 8.33 0 10 11.67 10 16.67 3.33 21.66 8.33 41.66 15 61.66 13.33 40 35 81.67 70 106.67 43.33 31.67 98.33 53.33 155 63.33 10 3.34 10 13.34 3.33 15z"
        fill={color}
      />
    </svg>
  );
}
