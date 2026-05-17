// [perf-audited 2026-05-15 / vercel-react-best-practices v1.0 + typescript-best-practices] audited-clean — no findings
// Verbatim port of Downloads/Asistente de Análisis Section.html.
// PhoneMockup primitive from the source isn't shipped — using project's PhoneFrame instead.

import PhoneFrame from "./primitives/PhoneFrame";
import SparkleIcon from "./primitives/SparkleIcon";
import BarChartIcon from "./primitives/icons/BarChartIcon";
import PeopleIcon from "./primitives/icons/PeopleIcon";

const DAYS: ReadonlyArray<{ d: string; h: number; low?: boolean; tip?: string }> = [
  { d: "Lun", h: 78 },
  { d: "Mar", h: 32, low: true, tip: "34% menos" },
  { d: "Mié", h: 60 },
  { d: "Jue", h: 70 },
  { d: "Vie", h: 82 },
  { d: "Sáb", h: 92 },
  { d: "Dom", h: 98 },
];

function AsistenteScreen() {
  return (
    <div className="asn">
      <div className="asn__top">
        <span className="asn__avatar">
          <SparkleIcon size={18} color="#0F6F5E" />
        </span>
        <div className="asn__title">
          Asistente de análisis
          <small>Conectado a tus datos en tiempo real</small>
        </div>
        <span className="asn__more" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="5" r="2"/><circle cx="12" cy="12" r="2"/><circle cx="12" cy="19" r="2"/></svg>
        </span>
      </div>

      <div className="asn__body">
        <div className="asn__question">¿Qué día de la semana vendo menos?</div>

        <div className="asn__card">
          <p className="asn__lead">
            Los <strong>martes</strong> son tus días más flojos.<br />
            Vendes en promedio <em>34% menos</em> que el resto de los días.
          </p>
          <div className="asn__divider" />
          <span className="asn__chart-label">Ventas por día de la semana</span>
          <div className="asn__chart">
            {DAYS.map((day, i) => (
              <div key={i} className={`asn__bar-wrap${day.low ? " is-low" : ""}`}>
                {day.tip && <span className="asn__bar-tip">{day.tip}</span>}
                <span
                  className={`asn__bar${day.low ? " is-low" : ""}`}
                  style={{ height: `${day.h}%` }}
                />
                <span className="asn__bar-day">{day.d}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="asn__rec">
          <span className="asn__rec-label">Recomendación</span>
          <p className="asn__rec-text">
            Podrías llenar tus martes con una campaña de recordatorio para clientes que no han venido en más de 30 días.
          </p>
          <button className="asn__rec-cta" type="button">
            Crear campaña para los martes
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6"/></svg>
          </button>
        </div>
      </div>

      <div className="asn__compose">
        <span className="asn__compose-input">Pregunta lo que quieras…</span>
        <span className="asn__compose-btn" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="currentColor"><path d="M3 11l18-8-8 18-2-7-8-3z"/></svg>
        </span>
      </div>
    </div>
  );
}

const FEATURES = [
  {
    title: "Conectado a tus datos en tiempo real",
    desc: "Ventas, citas, clientes, productos y más. Siempre actualizado.",
    icon: <BarChartIcon bars={3} />,
  },
  {
    title: "Responde en español, sin tecnicismos",
    desc: "Haz preguntas como si le hablaras a tu mejor empleado.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
        <path d="M7 18l-3 2 1-4a7 7 0 117 3h-2" />
        <path d="M9 10h.01M12 10h.01M15 10h.01" />
      </svg>
    ),
  },
  {
    title: "Solo usa números reales de tu negocio",
    desc: "Nada inventado. Todo basado en lo que ya pasa en tu negocio.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 7L9 18l-5-5" />
      </svg>
    ),
  },
  {
    title: "Cada respuesta trae una acción clara",
    desc: "No solo datos. También recomendaciones para actuar.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 19V5" />
        <path d="M6 11l6-6 6 6" />
      </svg>
    ),
  },
];

export default function AsistenteAnalisisSection() {
  return (
    <section className="ana">
      <div className="ana__atmo" aria-hidden="true" />
      <div className="ana__inner">

        <div className="ana__split">
          <div className="ana__copy">
            <span className="ana__eyebrow" aria-label="Asistente de análisis">
              <span className="ana__eyebrow-num">03</span>
              <span className="ana__eyebrow-text">Asistente de análisis</span>
            </span>

            <h2 className="ana__h1">
              Pregúntale lo que sea<br />
              a <em>tu propio negocio.</em>
            </h2>

            <p className="ana__lead">
              Tu asistente de análisis entiende tu negocio y te responde con
              datos reales. Sin tecnicismos, sin hojas de cálculo, sin inventos.
              Solo claridad para que tomes mejores decisiones.
            </p>

            <ul className="ana__features">
              {FEATURES.map((f, i) => (
                <li key={i} className="ana__feat">
                  <span className="ana__feat-icon" aria-hidden="true">{f.icon}</span>
                  <div className="ana__feat-body">
                    <h3 className="ana__feat-title">{f.title}</h3>
                    <p className="ana__feat-desc">{f.desc}</p>
                  </div>
                </li>
              ))}
            </ul>

            <span className="ana__plan">
              <span className="ana__plan-dot" aria-hidden="true" />
              Disponible en Maestro y Élite
            </span>
          </div>

          <div className="ana__phone-col">
            <div className="ana__rings" aria-hidden="true">
              <span className="ana__ring ana__ring--4" />
              <span className="ana__ring ana__ring--3" />
              <span className="ana__ring ana__ring--2" />
              <span className="ana__ring ana__ring--1" />
            </div>
            <div className="ana__phone">
              <PhoneFrame>
                <AsistenteScreen />
              </PhoneFrame>
            </div>
          </div>
        </div>

        <div className="ana__stats">
          <div className="ana__stat">
            <span className="ana__stat-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>
            </span>
            <div className="ana__stat-body">
              <span className="ana__stat-eyebrow">Ahorra</span>
              <span className="ana__stat-headline"><em>5-10 horas</em></span>
              <span className="ana__stat-sub">a la semana</span>
            </div>
          </div>

          <div className="ana__stat">
            <span className="ana__stat-icon" aria-hidden="true">
              <BarChartIcon bars={3} />
            </span>
            <div className="ana__stat-body">
              <span className="ana__stat-eyebrow">Decisiones</span>
              <span className="ana__stat-headline"><em>más claras</em></span>
              <span className="ana__stat-sub">y rápidas</span>
            </div>
          </div>

          <div className="ana__stat">
            <span className="ana__stat-icon" aria-hidden="true">
              <PeopleIcon variant="group" strokeWidth={1.8} />
            </span>
            <div className="ana__stat-body">
              <span className="ana__stat-headline" style={{ fontSize: "1rem" }}>Mejores resultados,</span>
              <span className="ana__stat-sub">menos esfuerzo</span>
            </div>
          </div>

          <p className="ana__quote">
            &ldquo;Es como tener un gerente que nunca duerme y siempre te dice la verdad.&rdquo;
          </p>
        </div>
      </div>
    </section>
  );
}
