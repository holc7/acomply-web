// 4-point brand sparkle. Must match the sparkle inside the A-mark logo.
// Two concave curves between each pair of points, pulled toward center (16,16).

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
      viewBox="0 0 32 32"
      fill="none"
      aria-hidden="true"
      style={style}
      {...rest}
    >
      <path
        d="M16 1
           C 16.6 9.5, 17.2 14.6, 31 16
           C 17.2 17.4, 16.6 22.5, 16 31
           C 15.4 22.5, 14.8 17.4, 1 16
           C 14.8 14.6, 15.4 9.5, 16 1 Z"
        fill={color}
      />
    </svg>
  );
}
