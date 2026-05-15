// Consumable packs strip. Canonical from acomply-app/lib/packs.ts.

import SparkleIcon from "./primitives/SparkleIcon";

const fmtCOPshort = (n: number) => "$" + n.toLocaleString("es-CO");

const WA_PACKS = [
  { amt: 200,  price: 12000 },
  { amt: 500,  price: 25000 },
  { amt: 1000, price: 45000 },
];

const LOOK_PACKS = [
  { amt: 100, price: 15000 },
  { amt: 300, price: 35000 },
  { amt: 500, price: 50000 },
];

export default function RecargasTeaser() {
  return (
    <section className="recargas">
      <div className="container recargas__inner">
        <div className="recargas__head">
          <span className="recargas__eyebrow">Recargas opcionales</span>
          <h3 className="recargas__title">
            ¿Mes con más movimiento?<br /><em>Recargas, sin cambiar de plan.</em>
          </h3>
          <p className="recargas__sub">
            Solo pagas si las usas. Disponibles desde el plan Maestro.
          </p>
        </div>

        <div>
          <div className="recargas__cards">
            <div className="recargas__card recargas__card--wa">
              <div className="recargas__card-head">
                <span className="recargas__card-icon">
                  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.5 3.5A11.5 11.5 0 002.6 17.2L1 23l5.9-1.6A11.5 11.5 0 1020.5 3.5zM12 21.2a9.2 9.2 0 01-4.7-1.3l-.3-.2-3.5.9.9-3.4-.2-.4A9.3 9.3 0 1112 21.2z"/></svg>
                </span>
                <div className="recargas__card-body">
                  <div className="recargas__card-name">Mensajes WhatsApp</div>
                  <div className="recargas__card-detail">Conversaciones extra cuando tu mes se llena.</div>
                </div>
              </div>
              <div className="recargas__tiers">
                {WA_PACKS.map((p, i) => (
                  <div key={i} className="recargas__tier">
                    <span className="recargas__tier-amt">{p.amt.toLocaleString("es-CO")}</span>
                    <span className="recargas__tier-unit">msjs</span>
                    <span className="recargas__tier-price">{fmtCOPshort(p.price)}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="recargas__card recargas__card--look">
              <div className="recargas__card-head">
                <span className="recargas__card-icon">
                  <SparkleIcon size={20} color="currentColor" />
                </span>
                <div className="recargas__card-body">
                  <div className="recargas__card-name">Looks IA</div>
                  <div className="recargas__card-detail">Imágenes de marketing generadas con IA, listas para enviar.</div>
                </div>
              </div>
              <div className="recargas__tiers">
                {LOOK_PACKS.map((p, i) => (
                  <div key={i} className="recargas__tier">
                    <span className="recargas__tier-amt">{p.amt.toLocaleString("es-CO")}</span>
                    <span className="recargas__tier-unit">looks</span>
                    <span className="recargas__tier-price">{fmtCOPshort(p.price)}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <p className="recargas__foot" style={{ marginTop: "1rem" }}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"/></svg>
            Las recargas no caducan dentro del mes activo · Compra desde la app
          </p>
        </div>
      </div>
    </section>
  );
}
