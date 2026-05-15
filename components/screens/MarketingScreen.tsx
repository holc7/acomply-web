// Marketing IA agent mockup: generated promo card + segment + estimated results.

import SparkleIcon from "../primitives/SparkleIcon";

export default function MarketingScreen() {
  return (
    <div className="mkt">
      <div className="mkt__top">
        <div className="mkt__title">
          <small>Marketing IA</small>
          Campaña lista
        </div>
        <span className="mkt__chip">Borrador</span>
      </div>

      <div className="mkt__body">
        <div className="mkt__promo">
          <div className="mkt__promo-img">
            <span className="mkt__promo-sparkle">
              <SparkleIcon size={20} color="currentColor" />
            </span>
            <div>
              <div className="mkt__promo-eyebrow">Te extrañamos</div>
            </div>
            <div className="mkt__promo-title">
              Vuelve esta semana y tu próxima cita es <em style={{ color: "#FFF6EE", textDecoration: "underline", textDecorationColor: "rgba(255,255,255,0.5)", textUnderlineOffset: "3px" }}>20% menos.</em>
            </div>
            <div className="mkt__promo-foot">
              <span>Acomply · Alpha Lion</span>
              <span>Hasta 21 de mayo</span>
            </div>
          </div>
          <div className="mkt__promo-meta">
            <span>Imagen generada por IA</span>
            <span className="mkt__promo-meta-dot" />
            <strong>3 variantes</strong>
          </div>
        </div>

        <div className="mkt__row">
          <div className="mkt__row-label">Segmento</div>
          <div className="mkt__row-headline">
            <em>47 clientes</em> que no vienen hace más de 30 días
          </div>
        </div>

        <div className="mkt__row">
          <div className="mkt__row-label">Resultados estimados</div>
          <div className="mkt__row-stats">
            <div>
              <div className="mkt__stat-num"><em>12</em></div>
              <div className="mkt__stat-lbl">Reservas previstas</div>
            </div>
            <div className="vrule" style={{ background: "var(--espresso-08)" }} />
            <div>
              <div className="mkt__stat-num">$620k</div>
              <div className="mkt__stat-lbl">Ingreso recuperable</div>
            </div>
          </div>
          <div className="mkt__row-bars" aria-hidden="true">
            <span className="mkt__row-bar" style={{ height: "40%" }} />
            <span className="mkt__row-bar" style={{ height: "55%" }} />
            <span className="mkt__row-bar is-hi" style={{ height: "85%" }} />
            <span className="mkt__row-bar is-hi" style={{ height: "95%" }} />
            <span className="mkt__row-bar is-hi" style={{ height: "70%" }} />
            <span className="mkt__row-bar" style={{ height: "45%" }} />
            <span className="mkt__row-bar" style={{ height: "30%" }} />
          </div>
        </div>
      </div>
    </div>
  );
}
