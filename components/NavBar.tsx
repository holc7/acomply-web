"use client";

import { useEffect, useState } from "react";
import { CTA_DEMO, DEMO_HREF } from "../lib/copy";
import Button from "./primitives/Button";
import SparkleIcon from "./primitives/SparkleIcon";

const NAV_LINKS = [
  { label: "Producto", href: "#producto" },
  { label: "Agentes IA", href: "#agentes" },
  { label: "Precios", href: "#precios" },
  { label: "Empresa", href: "#empresa" },
];

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <header className={`nav${scrolled ? " is-scrolled" : ""}`}>
      <div className="container nav__inner">
        <a href="#top" className="nav__brand" aria-label="Acomply — Inicio">
          <span className="nav__brand-mark" aria-hidden="true">
            <span className="nav__brand-mark-a">A</span>
            <span className="nav__brand-mark-spark">
              <SparkleIcon size={9} color="var(--coral)" />
            </span>
          </span>
          <span>Acomply</span>
        </a>

        <nav className="nav__links" aria-label="Navegación principal">
          {NAV_LINKS.map((l) => (
            <a key={l.href} href={l.href}>{l.label}</a>
          ))}
        </nav>

        <div className="nav__cta-wrap">
          <div className="nav__cta-desktop">
            <Button variant="primary" size="sm" href={DEMO_HREF}>{CTA_DEMO}</Button>
          </div>
          <button
            className="nav__menu-btn"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
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
        </div>
      </div>

      <div className={`nav__drawer${open ? " is-open" : ""}`} aria-hidden={!open}>
        {NAV_LINKS.map((l) => (
          <a key={l.href} href={l.href} onClick={() => setOpen(false)}>{l.label}</a>
        ))}
        <div className="nav__drawer-cta">
          <Button variant="primary" full href={DEMO_HREF} onClick={() => setOpen(false)}>
            {CTA_DEMO}
          </Button>
        </div>
      </div>
    </header>
  );
}
