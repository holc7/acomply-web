import { WA_LINK } from "../lib/copy";
import AcomplyLogo from "./primitives/AcomplyLogo";

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
      { label: "WhatsApp", href: WA_LINK },
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
          <a className="footer__brand" href="#top" aria-label="Acomply — Inicio">
            <AcomplyLogo height={56} title="Acomply" />
          </a>
          <p className="footer__tagline">
            Acomply acompaña tu operación diaria: reservas, clientes, pagos, WhatsApp e IA en una sola plataforma para negocios de servicio.
          </p>
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
