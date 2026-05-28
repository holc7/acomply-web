"use client";

// Bottom-fixed cookie banner. Habeas-Data-friendly. localStorage persistence
// so it doesn't re-show after a choice. No analytics wired today — banner
// choice is recorded for when Plausible / Fathom is added.

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";

const STORAGE_KEY = "acomply-cookie-consent";

type Choice = "accepted" | "necessary";

export default function CookieBanner() {
  const t = useTranslations("cookies_banner");
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
    <div className="cookie-banner" role="region" aria-label={t("aria_label")}>
      <div className="cookie-banner__inner">
        <p className="cookie-banner__text">
          {t.rich("text", {
            a: (chunks) => (
              <a href="/cookies" className="cookie-banner__link">
                {chunks}
              </a>
            ),
          })}
        </p>
        <div className="cookie-banner__actions">
          <button
            type="button"
            onClick={() => record("necessary")}
            className="cookie-banner__btn cookie-banner__btn--secondary"
          >
            {t("btn_necessary")}
          </button>
          <button
            type="button"
            onClick={() => record("accepted")}
            className="cookie-banner__btn cookie-banner__btn--primary"
          >
            {t("btn_accept")}
          </button>
        </div>
      </div>
    </div>
  );
}
