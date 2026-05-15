// Recepcionista IA chat mockup. Realistic WhatsApp UI; AI books, confirms,
// replies in tú-voice. Inside the agent vignette phone frame.

const checkIcon = (
  <svg viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 9.5l3 3 6-6M8 9.5l3 3 6-6"/>
  </svg>
);

export default function WhatsAppScreen() {
  return (
    <div className="wa">
      <div className="wa__header">
        <span className="wa__back">‹</span>
        <span className="wa__avatar">A</span>
        <div className="wa__name-block">
          <div className="wa__name">Acomply · Alpha Lion</div>
          <div className="wa__status">en línea</div>
        </div>
        <span className="wa__icons">
          <svg viewBox="0 0 24 24" fill="currentColor"><path d="M15 10.5V7a3 3 0 00-6 0v3.5L4 15h16l-5-4.5z"/></svg>
          <svg viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="12" r="2"/><circle cx="12" cy="5" r="2"/><circle cx="12" cy="19" r="2"/></svg>
        </span>
      </div>

      <div className="wa__body">
        <div className="wa__date-chip">HOY</div>

        <div className="wa__msg wa__msg--in">
          Hola, quiero agendar corte y barba para mañana
          <span className="wa__msg-time">9:14</span>
        </div>

        <div className="wa__msg wa__msg--out">
          ¡Hola Andrés! 👋 Tenemos disponibles mañana a las <strong>10:00</strong> o <strong>14:30</strong>. ¿Cuál prefieres?
          <span className="wa__msg-time">9:14 {checkIcon}</span>
        </div>

        <div className="wa__msg wa__msg--in">
          10:00 perfecto
          <span className="wa__msg-time">9:15</span>
        </div>

        <div className="wa__msg wa__msg--card">
          <div className="wa__card-banner">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4z"/></svg>
            Cita confirmada
          </div>
          <div className="wa__card-body">
            <div className="wa__card-row"><span>Servicio</span><strong>Corte y barba</strong></div>
            <div className="wa__card-row"><span>Cuándo</span><strong>Jueves 15, 10:00</strong></div>
            <div className="wa__card-row"><span>Profesional</span><strong>Jair F.</strong></div>
          </div>
        </div>

        <div className="wa__typing" aria-label="escribiendo">
          <span className="wa__typing-dot" />
          <span className="wa__typing-dot" />
          <span className="wa__typing-dot" />
        </div>
      </div>

      <div className="wa__compose">
        <div className="wa__compose-input">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2M9 9h.01M15 9h.01"/></svg>
          Escribe un mensaje
        </div>
        <div className="wa__compose-btn">
          <svg viewBox="0 0 24 24" fill="currentColor"><path d="M3 11v2a9 9 0 0018 0v-2"/><circle cx="12" cy="6" r="4"/><path d="M12 14v6"/></svg>
        </div>
      </div>
    </div>
  );
}
