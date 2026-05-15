// Multi-vertical agenda mockup for the hero phone. Rotates services across
// barber/salon/nails/spa/clinic to telegraph "works for everyone."

const AGENDA_ROWS: ReadonlyArray<{
  time: string;
  name: string;
  svc: string;
  avatar: 1 | 2 | 3 | 4 | 5;
  init: string;
  badge: "wa" | "pay" | "new";
  badgeText: string;
}> = [
  { time: "9:00",  name: "Andrés M.",  svc: "Corte y barba",        avatar: 1, init: "AM", badge: "wa",  badgeText: "Confirmada" },
  { time: "10:30", name: "Camila R.",  svc: "Manicure y pedicure",  avatar: 2, init: "CR", badge: "pay", badgeText: "Pagada" },
  { time: "12:00", name: "Sofía P.",   svc: "Limpieza facial",      avatar: 3, init: "SP", badge: "wa",  badgeText: "Confirmada" },
  { time: "14:15", name: "Diego L.",   svc: "Tinte y peinado",      avatar: 4, init: "DL", badge: "new", badgeText: "Nueva" },
  { time: "16:00", name: "Marcela O.", svc: "Masaje relajante",     avatar: 5, init: "MO", badge: "pay", badgeText: "Pagada" },
];

const DAYS = [
  { d: "L", n: "12", today: false },
  { d: "M", n: "13", today: false },
  { d: "X", n: "14", today: true  },
  { d: "J", n: "15", today: false },
  { d: "V", n: "16", today: false },
  { d: "S", n: "17", today: false },
  { d: "D", n: "18", today: false },
];

export default function AgendaScreen({ withToast = true }: { withToast?: boolean }) {
  return (
    <div className="agenda">
      <div className="agenda__topbar">
        <div className="agenda__title">
          <small>Miércoles · Hoy</small>
          14 de mayo
        </div>
        <span className="agenda__chip">
          <span className="agenda__chip-dot" />
          En vivo
        </span>
      </div>

      <div className="agenda__days">
        {DAYS.map((d, i) => (
          <div key={i} className={`agenda__day${d.today ? " is-today" : ""}`}>
            {d.d}
            <span className="agenda__day-num">{d.n}</span>
          </div>
        ))}
      </div>

      <div className="agenda__list">
        {AGENDA_ROWS.map((r, i) => (
          <div key={i} className="agenda__row">
            <span className="agenda__time">{r.time}</span>
            <span className={`agenda__avatar agenda__avatar-${r.avatar}`}>{r.init}</span>
            <div className="agenda__info">
              <div className="agenda__name">{r.name}</div>
              <div className="agenda__svc">{r.svc}</div>
            </div>
            <span className={`agenda__badge agenda__badge--${r.badge}`}>
              {r.badge === "wa" && (
                <svg width="8" height="8" viewBox="0 0 12 12"><path d="M1 6.5l3 3 7-7" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>
              )}
              {r.badgeText}
            </span>
          </div>
        ))}

        {withToast && (
          <div className="agenda__toast">
            <div className="agenda__toast-icon">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="#fff"><path d="M20.5 3.5A11.5 11.5 0 002.6 17.2L1 23l5.9-1.6A11.5 11.5 0 1020.5 3.5zM12 21.2a9.2 9.2 0 01-4.7-1.3l-.3-.2-3.5.9.9-3.4-.2-.4A9.3 9.3 0 1112 21.2z"/></svg>
            </div>
            <div className="agenda__toast-text">
              <strong>Recepcionista IA</strong> agendó a Diego L. · 14:15
            </div>
          </div>
        )}
      </div>

      <div className="agenda__nav">
        <div className="agenda__nav-item is-active">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="3"/><path d="M3 10h18M8 2v4M16 2v4"/></svg>
          Agenda
        </div>
        <div className="agenda__nav-item">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="8" r="4"/><path d="M2 21a7 7 0 0114 0M17 11a3 3 0 100-6M23 21a7 7 0 00-5-6.7"/></svg>
          Clientes
        </div>
        <div className="agenda__nav-item">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M5 9h11a3 3 0 010 6H7a3 3 0 000 6h12"/></svg>
          Cobros
        </div>
        <div className="agenda__nav-item">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.4 8.4 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.4 8.4 0 01-3.8-.9L3 21l1.9-5.7a8.4 8.4 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.4 8.4 0 013.8-.9h.5A8.5 8.5 0 0121 11v.5z"/></svg>
          WhatsApp
        </div>
      </div>
    </div>
  );
}
