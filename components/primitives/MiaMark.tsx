// [perf-audited 2026-05-19 / vercel-react-best-practices v1.0 + typescript-best-practices] audited-clean — no findings
//
// MiaMark — brand icon for "Mía".
//
// Composition: central coral 4-point Acomply sparkle + a clean solid
// coral ring (tilted ellipse) wrapping around it. No dashes, no
// gradient fade, no extra sparkles — kept deliberately simple so the
// mark reads at any size. Optional gentle rotation animation gives it
// the "AI in motion" feel without distorting at small sizes.
//
// Sizing: `size` accepts number or any valid SVG length ("1em",
// "100%"). The whole composition sits inside a 120×120 viewBox with
// the sparkle anchored at the centre — so rotation never clips at the
// edges.

import type { CSSProperties } from "react";

type Props = {
  /** Pixel or CSS length. Default 32. */
  size?: number | string;
  /** Mark color. Default coral via CSS variable. */
  color?: string;
  /** Gentle rotation around the centre. Default true. */
  animated?: boolean;
  className?: string;
  style?: CSSProperties;
};

const SPARKLE_PATH =
  "m515 263.33c-38.33 6.67-73.33 18.34-105 33.34-15 6.66-33.33 18.33-53.33 33.33-15 11.67-28.34 26.67-41.67 46.67-25 40-40 85-45 130 0 1.66-1.67 5-3.33 5-3.34 1.66-6.67 1.66-8.34 0-1.66-1.67-1.66-3.34-3.33-8.34-13.33-83.33-53.33-163.33-131.67-201.66-33.33-16.67-65-28.34-98.33-35-13.33-1.67-20-3.34-20-3.34-3.33-1.66-5-3.33-5-6.66 0-5 1.67-6.67 6.67-8.34 63.33-13.33 133.33-33.33 180-83.33 15-15 23.33-33.33 31.66-51.67 6.67-11.66 13.34-25 16.67-36.66 3.33-11.67 6.67-23.34 10-33.34 1.67-8.33 5-18.33 6.67-26.66 1.66-5 1.66-16.67 10-16.67 8.33 0 10 11.67 10 16.67 3.33 21.66 8.33 41.66 15 61.66 13.33 40 35 81.67 70 106.67 43.33 31.67 98.33 53.33 155 63.33 10 3.34 10 13.34 3.33 15z";

export default function MiaMark({
  size = 32,
  color,
  animated = true,
  className,
  style,
}: Props) {
  const fill = color || "var(--agv2-coral, #E86C57)";

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      fill="none"
      aria-hidden="true"
      className={className}
      style={style}
    >
      {/* Orbit ring — solid coral ellipse, tilted -22°. Lives in its
          own group so it can rotate around the SVG centre without
          carrying the central sparkle with it. */}
      <g className={animated ? "mia-mark-orbit mia-mark-orbit--spin" : "mia-mark-orbit"}>
        <ellipse
          cx="60"
          cy="60"
          rx="48"
          ry="24"
          transform="rotate(-22 60 60)"
          stroke={fill}
          strokeWidth="3.2"
          fill="none"
        />
      </g>

      {/* Central sparkle — sits on top of the ring, so the ring visually
          passes BEHIND the sparkle (the sparkle obscures the ring's
          centre crossing). Source viewBox 520×513 scaled 0.1 to fit a
          ~52px footprint centred in the 120×120 frame. */}
      <g transform="translate(34 34) scale(0.1)">
        <path d={SPARKLE_PATH} fill={fill} />
      </g>

      <style>{`
        .mia-mark-orbit { transform-origin: 60px 60px; transform-box: fill-box; }
        .mia-mark-orbit--spin { animation: mia-mark-spin 9s linear infinite; }
        @keyframes mia-mark-spin {
          from { transform: rotate(0deg);   }
          to   { transform: rotate(360deg); }
        }
        @media (prefers-reduced-motion: reduce) {
          .mia-mark-orbit--spin { animation: none; }
        }
      `}</style>
    </svg>
  );
}
