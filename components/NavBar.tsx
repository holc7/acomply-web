// [perf-audited 2026-05-15 / vercel-react-best-practices v1.0 + typescript-best-practices] audited-clean — no findings
"use client";

import { useEffect, useState } from "react";
import { CTA_DEMO, DEMO_HREF } from "../lib/copy";
import AcomplyLogo from "./primitives/AcomplyLogo";

const NAV_LINKS: { label: string; href: string; key: string }[] = [
  { label: "Producto", href: "#producto", key: "producto" },
  { label: "Mía", href: "#agentes", key: "agentes" },
  { label: "Precios", href: "#precios", key: "precios" },
  { label: "Empresa", href: "#empresa", key: "empresa" },
];

type Props = { active?: string };

export default function NavBar({ active }: Props) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <header className="acnav">
      <nav className="acnav__inner container" aria-label="Navegación principal">
        <a className="acnav__brand" href="#top" aria-label="Acomply — Inicio">
          <AcomplyLogo height={56} title="Acomply" />
        </a>

        <div className="acnav__links">
          {NAV_LINKS.map((l) => (
            <a
              key={l.key}
              className={`acnav__link${active === l.key ? " is-active" : ""}`}
              href={l.href}
            >
              {l.label}
            </a>
          ))}
        </div>

        <a className="acnav__cta" href={DEMO_HREF}>
          {CTA_DEMO}
        </a>

        <button
          className="acnav__hamburger"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {open ? (
              <>
                <line x1="6" y1="6" x2="18" y2="18" />
                <line x1="18" y1="6" x2="6" y2="18" />
              </>
            ) : (
              <>
                <line x1="4" y1="8" x2="20" y2="8" />
                <line x1="4" y1="16" x2="20" y2="16" />
              </>
            )}
          </svg>
        </button>
      </nav>

      <div className={`acnav__drawer${open ? " is-open" : ""}`} aria-hidden={!open}>
        {NAV_LINKS.map((l) => (
          <a key={l.key} href={l.href} onClick={() => setOpen(false)}>{l.label}</a>
        ))}
        <a className="acnav__drawer-cta" href={DEMO_HREF} onClick={() => setOpen(false)}>
          {CTA_DEMO}
        </a>
      </div>
    </header>
  );
}
