// [perf-audited 2026-05-19 / vercel-react-best-practices v1.0 + typescript-best-practices] audited-clean — no findings
//
// MiaMascot — the friendly AI-robot character that represents Mía
// visually. Wraps the mascot PNG with three layers of life:
//
//   1. Cursor-tracking head tilt — the whole mascot subtly rotates
//      toward the cursor's horizontal offset (up to ±8°) when the
//      cursor moves anywhere in the parent section. Direct ref-based
//      DOM mutation through requestAnimationFrame; no React re-renders.
//
//   2. Idle "look around" — when the cursor is far or absent, the
//      mascot drifts through a slow CSS keyframe loop (left → right →
//      centre, 9s cycle) so she always feels awake.
//
//   3. Hover lift + click wiggle — pointer over her: she scales up
//      and shadow deepens (focused on you). Click: a one-shot wiggle
//      animation fires (3 quick head-shake oscillations).
//
// All animations respect prefers-reduced-motion via @media. On touch
// devices the cursor listener never attaches (saves CPU); idle +
// hover + tap still work via CSS.

"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  /** Image src — defaults to /assets/mia/mascot.png. */
  src?: string;
  /** Override className on the wrapper. */
  className?: string;
};

const MAX_TILT_DEG = 8;
const TRACK_RANGE_PX = 480;

export default function MiaMascot({
  src = "/assets/mia/mascot.png",
  className,
}: Props) {
  const imgRef = useRef<HTMLImageElement>(null);
  const [wiggling, setWiggling] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(hover: none)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const img = imgRef.current;
    if (!img) return;
    const section = img.closest(".agv2") as HTMLElement | null;
    if (!section) return;

    let raf = 0;
    const onMove = (e: MouseEvent) => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const rect = img.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const dx = e.clientX - cx;
        // Strength 1 (close) → 0 (far). Sign of dx drives direction.
        const norm = Math.max(-1, Math.min(1, dx / TRACK_RANGE_PX));
        const tilt = norm * MAX_TILT_DEG;
        // Pause the idle "look around" while the cursor is engaged.
        img.style.animationPlayState = "paused";
        img.style.setProperty("--mia-tilt", `${tilt.toFixed(2)}deg`);
      });
    };
    const onLeave = () => {
      img.style.animationPlayState = "running";
      img.style.setProperty("--mia-tilt", "0deg");
    };

    section.addEventListener("mousemove", onMove, { passive: true });
    section.addEventListener("mouseleave", onLeave);
    return () => {
      section.removeEventListener("mousemove", onMove);
      section.removeEventListener("mouseleave", onLeave);
      cancelAnimationFrame(raf);
    };
  }, []);

  const onTap = () => {
    if (wiggling) return;
    setWiggling(true);
    window.setTimeout(() => setWiggling(false), 600);
  };

  return (
    <>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        ref={imgRef}
        src={src}
        alt="Mía — la asistente con IA de Acomply"
        loading="lazy"
        width={720}
        height={720}
        onClick={onTap}
        className={
          ["agv2__mascot", wiggling && "agv2__mascot--wiggle", className]
            .filter(Boolean)
            .join(" ")
        }
      />
      <style>{`
        .agv2__mascot {
          display: block;
          width: 100%;
          max-width: 240px;
          height: auto;
          margin: 0 auto clamp(2rem, 5vw, 3rem);
          filter: drop-shadow(0 18px 30px rgba(43, 33, 28, 0.18));
          cursor: pointer;
          /* Two transforms compose: --mia-tilt (cursor-driven, set via JS)
             and the idle look-around keyframe (rotate + translate). */
          rotate: var(--mia-tilt, 0deg);
          transition: rotate 320ms cubic-bezier(.22, .61, .36, 1),
                      scale  280ms cubic-bezier(.22, .61, .36, 1),
                      filter 280ms ease;
          animation: agv2-mascot-idle 9s ease-in-out infinite;
        }
        .agv2__mascot:hover {
          scale: 1.04;
          filter: drop-shadow(0 22px 38px rgba(232, 108, 87, 0.32));
        }
        .agv2__mascot:active { scale: 0.97; }
        .agv2__mascot--wiggle {
          animation: agv2-mascot-wiggle 600ms ease-in-out 1,
                     agv2-mascot-idle 9s ease-in-out infinite 600ms;
        }
        @keyframes agv2-mascot-idle {
          0%   { translate: 0 0;       }
          25%  { translate: -4px -8px; }
          50%  { translate: 0 -12px;   }
          75%  { translate:  4px -8px; }
          100% { translate: 0 0;       }
        }
        @keyframes agv2-mascot-wiggle {
          0%   { rotate: var(--mia-tilt, 0deg); }
          20%  { rotate: -14deg; }
          40%  { rotate:  12deg; }
          60%  { rotate:  -8deg; }
          80%  { rotate:   6deg; }
          100% { rotate: var(--mia-tilt, 0deg); }
        }
        @media (min-width: 980px) {
          .agv2__mascot {
            position: absolute;
            left: clamp(1rem, 4vw, 4rem);
            top: 50%;
            transform: translateY(-50%);
            max-width: clamp(280px, 26vw, 380px);
            margin: 0;
            z-index: 1;
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .agv2__mascot,
          .agv2__mascot--wiggle { animation: none; transition: none; rotate: 0deg; }
        }
      `}</style>
    </>
  );
}
