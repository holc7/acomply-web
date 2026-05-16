// Multi-vertical agenda mockup for the hero phone. Rotates services across
// barber/salon/nails/spa/clinic to telegraph "works for everyone."
// Bottom-nav promotes Marketing IA (our differentiator) — owners don't pick
// Acomply for a clients-list tab; they pick it for the AI agents.

import SparkleIcon from "../primitives/SparkleIcon";
import CalendarIcon from "../primitives/icons/CalendarIcon";
import PeopleIcon from "../primitives/icons/PeopleIcon";
import WhatsAppIcon from "../primitives/icons/WhatsAppIcon";

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
              <WhatsAppIcon size={14} color="#fff" />
            </div>
            <div className="agenda__toast-text">
              <strong>Recepcionista IA</strong> agendó a Diego L. · 14:15
            </div>
          </div>
        )}
      </div>

      <div className="agenda__nav">
        <div className="agenda__nav-item is-active">
          <CalendarIcon />
          Agenda
        </div>
        <div className="agenda__nav-item">
          <PeopleIcon variant="group" />
          Clientes
        </div>
        <div className="agenda__nav-item agenda__nav-item--marketing">
          <SparkleIcon size={18} color="currentColor" />
          Marketing IA
        </div>
        <div className="agenda__nav-item">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
          Más
        </div>
      </div>
    </div>
  );
}
