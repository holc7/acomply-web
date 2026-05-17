// Multi-vertical agenda widget for the hero. Keep it product-real, but less
// literal than a full phone screen so it reads as a premium hero card first.

import CalendarIcon from "../primitives/icons/CalendarIcon";

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
        <div className="agenda__title-wrap">
          <span className="agenda__title-icon" aria-hidden="true">
            <CalendarIcon />
          </span>
          <div className="agenda__title">
            Agenda de hoy
            <small>20 de mayo, 2024</small>
          </div>
        </div>
        <span className="agenda__chip">
          <span className="agenda__chip-dot" />
          En vivo
        </span>
      </div>

      <div className="agenda__list">
        {AGENDA_ROWS.slice(0, 3).map((r, i) => (
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
            <div className="agenda__toast-icon">IA</div>
            <div className="agenda__toast-text">
              <strong>Recepcionista IA</strong> confirmó la mañana automáticamente
            </div>
          </div>
        )}
      </div>

      <div className="agenda__footer">
        Ver más citas
      </div>
    </div>
  );
}
