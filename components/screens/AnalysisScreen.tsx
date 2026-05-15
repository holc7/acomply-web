// Asistente de análisis chat mockup. Owner asks; assistant replies with REAL
// data + offers an action. Reflects brand promise: "never invents numbers."

import SparkleIcon from "../primitives/SparkleIcon";

const CHART_DAYS = [
  { d: "Lun", v: 7, hi: 50, lo: false },
  { d: "Mar", v: 4, hi: 30, lo: true  },
  { d: "Mié", v: 6, hi: 45, lo: false },
  { d: "Jue", v: 7, hi: 55, lo: false },
  { d: "Vie", v: 8, hi: 75, lo: false },
  { d: "Sáb", v: 9, hi: 92, lo: false },
  { d: "Dom", v: 5, hi: 38, lo: false },
];

export default function AnalysisScreen() {
  return (
    <div className="an">
      <div className="an__top">
        <span className="an__avatar">
          <SparkleIcon size={16} color="#0F6F5E" />
        </span>
        <div className="an__title">
          Asistente de análisis
          <small>Conectado a tus datos en tiempo real</small>
        </div>
      </div>

      <div className="an__body">
        <div className="an__bubble an__bubble--user">
          ¿Qué día tuve menos clientes este mes?
        </div>

        <div className="an__bubble an__bubble--ai">
          Tus <strong>martes</strong> son los más flojos. Promedio: <em>4 clientes/día</em>, vs <strong>9 los sábados</strong>.
          <div className="an__chart">
            {CHART_DAYS.map((r, i) => (
              <div key={i} className="an__chart-row">
                <span className="an__chart-day">{r.d}</span>
                <div className="an__chart-bar-wrap">
                  <div className={`an__chart-bar${r.lo ? " is-lo" : ""}`} style={{ width: `${r.hi}%` }} />
                </div>
                <span className="an__chart-val">{r.v}</span>
              </div>
            ))}
          </div>
          <div className="an__actions">
            <button className="an__action an__action--primary">
              <SparkleIcon size={11} color="#FFF6EE" />
              Llenar martes
            </button>
            <button className="an__action">Ver más</button>
          </div>
        </div>

        <div className="an__bubble an__bubble--user">Hazlo</div>
      </div>

      <div className="an__compose">
        <div className="an__compose-input">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 6h18M3 12h12M3 18h18"/></svg>
          Pregúntale a tu negocio…
        </div>
        <div className="an__compose-send">
          <svg viewBox="0 0 24 24" fill="currentColor"><path d="M3 11l18-8-8 18-2-7-8-3z"/></svg>
        </div>
      </div>
    </div>
  );
}
