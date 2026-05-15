// Full-width strip cycling the verticals. Mobile: marquee. Desktop: ticker.
// Reduced-motion respected via CSS @media query in globals.css.

const VERTICALS = ["Barbería", "Peluquería", "Estudio de uñas", "Spa", "Clínica estética", "Centro de masajes", "Estética"];

export default function VerticalRotator() {
  const items = [...VERTICALS, ...VERTICALS];
  return (
    <section className="rotator" aria-label="Verticales que atendemos">
      <div className="rotator__inner">
        <span className="rotator__label">Hecho para</span>
        <div className="rotator__track-wrap">
          <div className="rotator__track">
            {items.map((v, i) => (
              <span key={i} className="rotator__item">
                <span className="rotator__dot" aria-hidden="true" />
                {v}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
