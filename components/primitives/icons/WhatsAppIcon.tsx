// [perf-audited 2026-05-17 / vercel-react-best-practices v1.0 + typescript-best-practices] audited-clean — no findings
// Official WhatsApp brand glyph: speech bubble with phone receiver inside.
// Single-color path, takes currentColor — works monochrome in TrustStrip /
// ResultadosSection / RecargasTeaser, and as white-on-green in HeroSection
// where the parent provides the brand green pill background.
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
      <path d="M20.52 3.48A11.81 11.81 0 0012.06 0C5.5 0 .16 5.34.16 11.9c0 2.1.55 4.14 1.59 5.95L.06 24l6.32-1.65a11.86 11.86 0 005.68 1.45h.01c6.55 0 11.89-5.34 11.9-11.9a11.82 11.82 0 00-3.45-8.42zM12.06 21.79h-.01a9.86 9.86 0 01-5.03-1.38l-.36-.21-3.74.98 1-3.64-.24-.38a9.83 9.83 0 01-1.51-5.26C2.18 6.46 6.61 2.03 12.07 2.03c2.64 0 5.12 1.03 6.99 2.9a9.83 9.83 0 012.89 6.99c-.01 5.45-4.44 9.87-9.89 9.87zm5.42-7.4c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.16-.17.2-.34.22-.64.07-.3-.15-1.25-.46-2.39-1.47-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.34.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51l-.57-.01c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.06 2.88 1.21 3.07c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.19 1.87.12.57-.08 1.76-.72 2-1.41.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35z" />
    </svg>
  );
}
