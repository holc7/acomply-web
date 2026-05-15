// Three trust pillars: Pagos · WhatsApp · Privacidad.

export default function TrustStrip() {
  return (
    <section className="trust" aria-label="Seguridad y cumplimiento">
      <div className="container trust__inner">

        <div className="trust__pillar">
          <span className="trust__pillar-eyebrow">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="6" width="18" height="13" rx="2"/><path d="M3 11h18"/></svg>
            Pagos
          </span>
          <h3 className="trust__pillar-headline">
            Cobra con <strong>Nequi, Daviplata, PSE, tarjeta y más</strong>
          </h3>
          <div className="trust__rails" aria-label="Métodos de pago disponibles">
            <span className="trust__rail trust__rail--nequi"><span className="trust__rail-dot" />Nequi</span>
            <span className="trust__rail trust__rail--davi"><span className="trust__rail-dot" />Daviplata</span>
            <span className="trust__rail trust__rail--pse"><span className="trust__rail-dot" />PSE</span>
            <span className="trust__rail trust__rail--card"><span className="trust__rail-dot" />Tarjeta</span>
            <span className="trust__rail trust__rail--card"><span className="trust__rail-dot" style={{ background: "var(--espresso-30)" }} />y más</span>
          </div>
          <div className="trust__via">Procesado de forma segura <strong>vía Wompi</strong></div>
        </div>

        <div className="trust__pillar">
          <span className="trust__pillar-eyebrow">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.5 3.5A11.5 11.5 0 002.6 17.2L1 23l5.9-1.6A11.5 11.5 0 1020.5 3.5zM12 21.2a9.2 9.2 0 01-4.7-1.3l-.3-.2-3.5.9.9-3.4-.2-.4A9.3 9.3 0 1112 21.2z"/></svg>
            WhatsApp
          </span>
          <h3 className="trust__pillar-headline">
            <strong>WhatsApp oficial de Meta.</strong> No se cae, no te bloquean.
          </h3>
          <p className="trust__pillar-sub">
            Operamos sobre la API oficial. Cero números clonados, cero riesgos de bloqueo.
          </p>
        </div>

        <div className="trust__pillar">
          <span className="trust__pillar-eyebrow">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3l8 4v6c0 4.5-3.4 8.3-8 9-4.6-.7-8-4.5-8-9V7l8-4z"/><path d="M9 12l2 2 4-4"/></svg>
            Privacidad
          </span>
          <h3 className="trust__pillar-headline">
            <strong>Habeas Data Ley 1581.</strong>
          </h3>
          <p className="trust__pillar-sub">
            Tus datos y los de tus clientes, protegidos según la ley colombiana.
            Cada mensaje de marketing requiere consentimiento.
          </p>
        </div>

      </div>
    </section>
  );
}
