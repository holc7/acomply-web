"use client";

// Inline modal — opens from ClosingCTA + (later) NavBar/StickyMobileCTA.
// Posts to /api/contact which fans out to Resend.

import { useEffect, useState } from "react";
import Button from "./primitives/Button";
import CheckIcon from "./primitives/icons/CheckIcon";

type Props = {
  open: boolean;
  onClose: () => void;
};

type Status = "idle" | "submitting" | "success" | "error";

export default function DemoModal({ open, onClose }: Props) {
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
          ? "Revisa tu nombre y número de WhatsApp."
          : "No pudimos enviar tu solicitud. Inténtalo en un momento.");
        return;
      }
      setStatus("success");
    } catch {
      setStatus("error");
      setError("Sin conexión. Vuelve a intentar.");
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
          aria-label="Cerrar"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"><line x1="6" y1="6" x2="18" y2="18"/><line x1="18" y1="6" x2="6" y2="18"/></svg>
        </button>

        {status === "success" ? (
          <div className="demomodal__success">
            <span className="demomodal__success-icon">
              <CheckIcon variant="swoop" strokeWidth={2.4} />
            </span>
            <div className="demomodal__success-title">¡Recibido!</div>
            <p className="demomodal__success-sub">
              Te contactamos por WhatsApp en menos de 24&nbsp;h.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <h2 id="demomodal-title" className="demomodal__title">
              Agenda tu <em>demo gratis</em>
            </h2>
            <p className="demomodal__sub">
              Te contactamos por WhatsApp en menos de 24&nbsp;h. Sin compromiso.
            </p>

            <div className="demomodal__field">
              <label className="demomodal__label" htmlFor="dm-nombre">Tu nombre</label>
              <input
                id="dm-nombre"
                className="demomodal__input"
                type="text"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                required
                autoComplete="name"
                placeholder="Andrés Martínez"
              />
            </div>

            <div className="demomodal__field">
              <label className="demomodal__label" htmlFor="dm-whatsapp">WhatsApp</label>
              <input
                id="dm-whatsapp"
                className="demomodal__input"
                type="tel"
                value={whatsapp}
                onChange={(e) => setWhatsapp(e.target.value)}
                required
                autoComplete="tel"
                placeholder="+57 300 000 0000"
                inputMode="tel"
              />
            </div>

            <div className="demomodal__field">
              <label className="demomodal__label" htmlFor="dm-negocio">
                Negocio <span className="demomodal__label-opt">(opcional)</span>
              </label>
              <input
                id="dm-negocio"
                className="demomodal__input"
                type="text"
                value={negocio}
                onChange={(e) => setNegocio(e.target.value)}
                placeholder="Alpha Lion Barbería"
              />
            </div>

            {error && <div className="demomodal__error">{error}</div>}

            <div className="demomodal__submit">
              <Button variant="primary" full sparkle>
                {status === "submitting" ? "Enviando…" : "Agendar mi demo"}
              </Button>
            </div>

            <div className="demomodal__micro">
              <CheckIcon variant="tick" strokeWidth={2.4} />
              Sin tarjeta · Respuesta en menos de 24 h
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
