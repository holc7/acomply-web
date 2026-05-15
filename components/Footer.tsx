import SparkleIcon from "./primitives/SparkleIcon";

const FOOTER_COLS = [
  {
    head: "Producto",
    links: [
      { label: "Agentes IA", href: "#agentes" },
      { label: "Precios", href: "#precios" },
      { label: "Cómo funciona", href: "#agentes" },
      { label: "Para tu vertical", href: "#" },
    ],
  },
  {
    head: "Empresa",
    links: [
      { label: "Quiénes somos", href: "#" },
      { label: "Historias de clientes", href: "#" },
      { label: "Blog", href: "#" },
      { label: "Contacto", href: "mailto:acomplyinfo@gmail.com" },
    ],
  },
  {
    head: "Legal",
    links: [
      { label: "Términos de uso", href: "/terms" },
      { label: "Política de privacidad", href: "/privacy" },
      { label: "Habeas Data (Ley 1581)", href: "/privacy#habeas-data" },
      { label: "Política de cookies", href: "/cookies" },
    ],
  },
  {
    head: "Soporte",
    links: [
      { label: "Centro de ayuda", href: "#" },
      { label: "WhatsApp", href: "https://wa.me/573000000000" },
      { label: "acomplyinfo@gmail.com", href: "mailto:acomplyinfo@gmail.com" },
      { label: "Estado del sistema", href: "#" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand-block">
          <a className="footer__brand" href="#top">
            <span className="footer__brand-mark">
              <span>A</span>
              <span className="footer__brand-mark-spark"><SparkleIcon size={9} color="var(--coral)" /></span>
            </span>
            Acomply
          </a>
          <p className="footer__tagline">
            Tu negocio, siempre acompañado. Reservas, clientes, pagos, WhatsApp e IA en una sola plataforma.
          </p>
          <span className="footer__location">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s-8-8-8-13a8 8 0 0116 0c0 5-8 13-8 13z"/><circle cx="12" cy="9" r="3"/></svg>
            Hecho en Medellín, Colombia
          </span>
        </div>

        <div className="footer__cols">
          {FOOTER_COLS.map((col, i) => (
            <div key={i} className="footer__col">
              <div className="footer__col-head">{col.head}</div>
              <ul>
                {col.links.map((l, j) => (
                  <li key={j}><a href={l.href}>{l.label}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="container footer__bottom">
        <span className="footer__credits">
          © 2026 Acomply S.A.S.
          <span className="footer__sep">·</span>
          NIT en proceso
          <span className="footer__sep">·</span>
          Todos los derechos reservados
        </span>
        <div className="footer__bottom-row">
          <a href="/privacy">Privacidad</a>
          <a href="/terms">Términos</a>
          <a href="/cookies">Cookies</a>
        </div>
      </div>
    </footer>
  );
}
