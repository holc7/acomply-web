const AGENDA_ROWS: ReadonlyArray<{
  hour: string;
  period: string;
  name: string;
  svc: string;
  accent: "coral" | "mint" | "amber";
  status?: { tone: "confirmed" | "in-progress"; text: string };
}> = [
  { hour: "10:30", period: "a. m.", name: "María Fernanda", svc: "Coloración + Corte", accent: "coral", status: { tone: "confirmed", text: "Confirmada" } },
  { hour: "01:00", period: "p. m.", name: "Ana Sofía",      svc: "Manicura semipermanente", accent: "mint",  status: { tone: "in-progress", text: "En curso" } },
  { hour: "04:30", period: "p. m.", name: "Carolina Ruiz",  svc: "Limpieza facial",         accent: "amber" },
];

export default function AgendaScreen() {
  return (
    <div className="agenda">
      <div className="agenda__topbar">
        <div className="agenda__title">Agenda de hoy</div>
        <span className="agenda__live" aria-hidden="true">
          <span className="agenda__live-dot" />
          En vivo
        </span>
      </div>

      <div className="agenda__list">
        {AGENDA_ROWS.map((r, i) => (
          <div key={i} className={`agenda__row agenda__row--${r.accent}`}>
            <span className="agenda__bar" aria-hidden="true" />
            <div className="agenda__time">
              <span className="agenda__hour">{r.hour}</span>
              <span className="agenda__period">{r.period}</span>
            </div>
            <span className="agenda__divider" aria-hidden="true" />
            <div className="agenda__info">
              <div className="agenda__name">{r.name}</div>
              <div className="agenda__svc">{r.svc}</div>
            </div>
            {r.status && (
              <span className={`agenda__badge agenda__badge--${r.status.tone}`}>
                {r.status.text}
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
