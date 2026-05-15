"use client";

// Bottom-fixed cookie banner. Spanish, Habeas-Data-friendly. localStorage
// persistence so it doesn't re-show after a choice. No analytics wired
// today — banner choice is recorded for when Plausible / Fathom is added.

import { useEffect, useState } from "react";

const STORAGE_KEY = "acomply-cookie-consent";

type Choice = "accepted" | "necessary";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (!stored) setVisible(true);
    } catch {
      // Private mode / disabled storage — show banner anyway. Choice won't persist.
      setVisible(true);
    }
  }, []);

  function record(choice: Choice) {
    try {
      window.localStorage.setItem(STORAGE_KEY, choice);
    } catch {
      // ignore storage errors
    }
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="cookie-banner" role="region" aria-label="Aviso de cookies">
      <div className="cookie-banner__inner">
        <p className="cookie-banner__text">
          Usamos cookies para que la página funcione y para entender (de forma
          anónima) cómo se usa.{" "}
          <a href="/cookies" className="cookie-banner__link">
            Leer la política
          </a>
          .
        </p>
        <div className="cookie-banner__actions">
          <button
            type="button"
            onClick={() => record("necessary")}
            className="cookie-banner__btn cookie-banner__btn--secondary"
          >
            Solo necesarias
          </button>
          <button
            type="button"
            onClick={() => record("accepted")}
            className="cookie-banner__btn cookie-banner__btn--primary"
          >
            Aceptar
          </button>
        </div>
      </div>
    </div>
  );
}
