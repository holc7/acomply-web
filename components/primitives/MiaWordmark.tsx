// [perf-audited 2026-05-19 / vercel-react-best-practices v1.0 + typescript-best-practices] audited-clean — no findings
//
// MiaWordmark — brand name "MIA" where the A is the Acomply A-mark
// (the same coral A + sparkle that's the company logo). The A
// serves double duty: it's the letterform AND the brand mark in one
// shape, so every "MIA" mention carries Acomply's identity natively.
//
// Layout: M and I render as the surrounding font; the A is an inline
// SVG sized to the cap-height of the text via `1em`-relative units, so
// it scales from a 14px nav link to a 52px hero headline without any
// manual tuning. The A's natural aspect ratio (86×78) is preserved.
//
// Accessibility: the visual decomposition (M + I + A-mark) is hidden
// from assistive tech; the parent span exposes aria-label="Mía" so
// screen readers read the canonical brand name.
//
// SVG paths are verbatim from public/acomply-mark.svg (and identical
// to the user's `Acomply-logo copy (1).svg`) — kept inline so the
// wordmark renders without any network/asset request.

type Props = {
  /** Override the A-mark color. Defaults to the brand coral CSS var. */
  color?: string;
  /** Extra className on the outer span. */
  className?: string;
};

// Acomply A-mark — A shape + sparkle inside, coral fill. Source viewBox
// is 86×78. Both paths verbatim from the official Acomply logo file.
const A_PATH =
  "m85.3 77.2c-1.3 0-3.7 0-6.9 0-1.5 0-2.5-0.1-3-0.4-1.2-0.5-2.2-1.1-3.1-2-0.5-0.5-1.1-1.5-1.8-2.9-1.9-3.9-3.8-8-5.8-12.1q-1.05-2.25-1.5-3.3c-0.8-1.7-1.4-2.8-2-4.4-0.7-1.7-1.7-3.6-2.7-5.7-3.8-8.2-6.4-13.8-8-17-1.8-3.8-2.9-6.1-3.3-7-0.3-0.7-0.7-1.5-1.3-2.7-0.7-1.3-1.2-2.8-2-4.3-0.1-0.1-0.1-0.2-0.2-0.2-0.7-0.3-1.2 0-1.6 0.8-1.3 2.8-2.1 4.5-2.3 5.1-8.4 17.9-16.2 34.3-24.2 51.5-0.9 1.9-2.5 3.4-4.4 4.1-0.7 0.3-2 0.4-3.9 0.4-2.3 0-4.4 0-6.4 0-0.1 0-0.2-0.1-0.1-0.2 0.2-0.5 0.3-0.9 0.5-1.2 12.9-27.1 22.6-47.7 29.1-61.6 1.3-2.8 2.2-4.9 2.8-6.3 0.8-1.9 1.5-3.2 2.2-3.9 2.5-2.8 6.3-4 9.9-3.3 2.3 0.4 4.2 1.5 5.6 3.2 0.6 0.8 1.4 2.1 2.3 4.1q2.25 5.25 3.6 7.8c0.4 0.7 0.7 1.6 1 2.3 0.8 1.6 1.4 2.9 1.9 4 1.4 3 2.2 4.6 3.6 7.8 0.5 1.2 1.1 2.4 1.8 3.7 0.4 0.8 1.2 2.4 2.3 5 0.4 0.9 1.2 2.5 2.3 4.9 2.9 6.1 5.3 11.3 7.4 15.7 1.1 2.3 2.5 5.2 4.2 8.8 1.3 2.7 2.7 5.7 4.1 8.9 0.2 0.2 0.1 0.4-0.1 0.4z";
const SPARKLE_PATH =
  "m58.3 61.3c-2.3 0.4-4.4 1.1-6.3 2-0.9 0.4-2 1.1-3.2 2-0.9 0.7-1.7 1.6-2.5 2.8-1.5 2.4-2.4 5.1-2.7 7.8 0 0.1-0.1 0.3-0.2 0.3-0.2 0.1-0.4 0.1-0.5 0-0.1-0.1-0.1-0.2-0.2-0.5-0.8-5-3.2-9.8-7.9-12.1-2-1-3.9-1.7-5.9-2.1-0.8-0.1-1.2-0.2-1.2-0.2-0.2-0.1-0.3-0.2-0.3-0.4 0-0.3 0.1-0.4 0.4-0.5 3.8-0.8 8-2 10.8-5 0.9-0.9 1.4-2 1.9-3.1 0.4-0.7 0.8-1.5 1-2.2 0.2-0.7 0.4-1.4 0.6-2 0.1-0.5 0.3-1.1 0.4-1.6 0.1-0.3 0.1-1 0.6-1 0.5 0 0.6 0.7 0.6 1 0.2 1.3 0.5 2.5 0.9 3.7 0.8 2.4 2.1 4.9 4.2 6.4 2.6 1.9 5.9 3.2 9.3 3.8 0.6 0.2 0.6 0.8 0.2 0.9z";

export default function MiaWordmark({ color, className }: Props) {
  const fill = color || "var(--agv2-coral, #E86C57)";
  return (
    <span
      aria-label="Mía"
      className={["mia-wm", className].filter(Boolean).join(" ")}
      style={{ whiteSpace: "nowrap", display: "inline" }}
    >
      <span aria-hidden="true">Mí</span>
      <svg
        aria-hidden="true"
        viewBox="0 0 86 78"
        preserveAspectRatio="xMidYMid meet"
        className="mia-wm__a"
        // Explicit em-relative width AND height. width = height * 86/78
        // so the A's intrinsic aspect is preserved without depending on
        // the browser auto-sizing inline SVG (which wrapped the A to its
        // own line and blew it up). display: inline-block keeps it
        // flowing with the M and I instead of behaving like a block.
        style={{
          height: "0.62em",       // ←  matches x-height of lowercase í so A reads as
          width: "0.683em",       //    a lowercase letter. Width = HEIGHT × 86/78.
          display: "inline-block",
          // ↓↓↓ TWEAK THIS to move the A up or down ↓↓↓
          //   positive  =  A moves UP   (0.10em = lots up)
          //   zero      =  A bottom sits on text baseline
          //   negative  =  A moves DOWN (-0.04em = sinks below baseline)
          verticalAlign: "0.0em",
          marginLeft: "0em",      // ←  A nudged tight against the í per design notes.
          flexShrink: 0,
        }}
      >
        <path d={A_PATH} fill={fill} />
        <path className="mia-wm__a-spark" d={SPARKLE_PATH} fill={fill} />
      </svg>

      {/* Interactivity — hover the whole MIA word and the A grows
          gently from its baseline + the sparkle inside spins 180°.
          Pure CSS, no React state, no client component needed.
          Reduced-motion users get a static A. */}
      <style>{`
        .mia-wm { cursor: default; }
        .mia-wm__a {
          transform-origin: 50% 100%;
          transition: transform 280ms cubic-bezier(.2,.7,.3,1),
                      filter    280ms ease;
          will-change: transform;
        }
        .mia-wm__a-spark {
          transform-origin: 50% 50%;
          transform-box: fill-box;
          /* Sparkle is smaller + nudged up so it reads as a quiet accent
             inside the A, not a dominant logo glyph. Uses individual
             transform properties so the hover rotation composes
             cleanly on top of the base scale/translate. */
          scale: 0.78;
          translate: 0 -3px;
          rotate: 0deg;
          transition: rotate 460ms cubic-bezier(.2,.7,.3,1);
        }
        .mia-wm:hover .mia-wm__a {
          transform: scale(1.08);
          filter: drop-shadow(0 4px 10px color-mix(in srgb, var(--agv2-coral, #E86C57) 30%, transparent));
        }
        .mia-wm:hover .mia-wm__a-spark {
          rotate: 180deg;
        }
        @media (prefers-reduced-motion: reduce) {
          .mia-wm__a,
          .mia-wm__a-spark { transition: none; }
          .mia-wm:hover .mia-wm__a,
          .mia-wm:hover .mia-wm__a-spark { transform: none; filter: none; }
        }
      `}</style>
    </span>
  );
}
