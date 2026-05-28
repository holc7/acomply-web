"use client";

// Inline modal — opens from ClosingCTA + (later) NavBar/StickyMobileCTA.
// Posts to /api/contact which fans out to Resend.

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import Button from "./primitives/Button";
import CheckIcon from "./primitives/icons/CheckIcon";

type Props = {
  open: boolean;
  onClose: () => void;
};

type Status = "idle" | "submitting" | "success" | "error";

export default function DemoModal({ open, onClose }: Props) {
  const t = useTranslations("demo_modal");
  const [nombre, setNombre] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [negocio, setNegocio] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  useEffect(() => {
    if (status !== "success") return;
    const t = setTimeout(() => {
      onClose();
      setStatus("idle");
      setNombre(""); setWhatsapp(""); setNegocio("");
    }, 3500);
    return () => clearTimeout(t);
  }, [status, onClose]);

  if (!open) return null;

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("submitting");
    setError(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nombre, whatsapp, negocio: negocio || undefined }),
      });
      const data = await res.json();
      if (!res.ok || !data.ok) {
        setStatus("error");
        setError(data.error === "validation"
          ? t("errors.validation")
          : t("errors.send"));
        return;
      }
      setStatus("success");
    } catch {
      setStatus("error");
      setError(t("errors.offline"));
    }
  }

  return (
    <div
      className="demomodal__backdrop"
      role="dialog"
      aria-modal="true"
      aria-labelledby="demomodal-title"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div className="demomodal">
        <button
          type="button"
          className="demomodal__close"
          onClick={onClose}
          aria-label={t("aria_close")}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"><line x1="6" y1="6" x2="18" y2="18"/><line x1="18" y1="6" x2="6" y2="18"/></svg>
        </button>

        {status === "success" ? (
          <div className="demomodal__success">
            <span className="demomodal__success-icon">
              <CheckIcon variant="swoop" strokeWidth={2.4} />
            </span>
            <div className="demomodal__success-title">{t("success.title")}</div>
            <p className="demomodal__success-sub">
              {t("success.sub")}
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <h2 id="demomodal-title" className="demomodal__title">
              {t.rich("title", { em: (chunks) => <em>{chunks}</em> })}
            </h2>
            <p className="demomodal__sub">
              {t("sub")}
            </p>

            <div className="demomodal__field">
              <label className="demomodal__label" htmlFor="dm-nombre">{t("field.name_label")}</label>
              <input
                id="dm-nombre"
                className="demomodal__input"
                type="text"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                required
                autoComplete="name"
                placeholder={t("field.name_placeholder")}
              />
            </div>

            <div className="demomodal__field">
              <label className="demomodal__label" htmlFor="dm-whatsapp">{t("field.whatsapp_label")}</label>
              <input
                id="dm-whatsapp"
                className="demomodal__input"
                type="tel"
                value={whatsapp}
                onChange={(e) => setWhatsapp(e.target.value)}
                required
                autoComplete="tel"
                placeholder={t("field.whatsapp_placeholder")}
                inputMode="tel"
              />
            </div>

            <div className="demomodal__field">
              <label className="demomodal__label" htmlFor="dm-negocio">
                {t("field.business_label")} <span className="demomodal__label-opt">{t("field.business_label_opt")}</span>
              </label>
              <input
                id="dm-negocio"
                className="demomodal__input"
                type="text"
                value={negocio}
                onChange={(e) => setNegocio(e.target.value)}
                placeholder={t("field.business_placeholder")}
              />
            </div>

            {error && <div className="demomodal__error">{error}</div>}

            <div className="demomodal__submit">
              <Button variant="primary" full sparkle>
                {status === "submitting" ? t("submit_loading") : t("submit_idle")}
              </Button>
            </div>

            <div className="demomodal__micro">
              <CheckIcon variant="tick" strokeWidth={2.4} />
              {t("micro")}
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
