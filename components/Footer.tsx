"use client";

import type { ReactNode } from "react";
import { useTranslations } from "next-intl";
import { WA_LINK } from "../lib/copy";
import AcomplyLogo from "./primitives/AcomplyLogo";
import MiaWordmark from "./primitives/MiaWordmark";

export default function Footer() {
  const t = useTranslations("footer");

  const FOOTER_COLS: { head: string; links: { label: ReactNode; href: string }[] }[] = [
    {
      head: t("producto_head"),
      links: [
        { label: <MiaWordmark />, href: "#agentes" },
        { label: t("links.precios"), href: "#precios" },
        { label: t("links.como_funciona"), href: "#agentes" },
        { label: t("links.para_tu_vertical"), href: "#" },
      ],
    },
    {
      head: t("empresa_head"),
      links: [
        { label: t("links.quienes_somos"), href: "#" },
        { label: t("links.historias"), href: "#" },
        { label: t("links.blog"), href: "#" },
        { label: t("links.contacto"), href: "mailto:acomplyinfo@gmail.com" },
      ],
    },
    {
      head: t("legal_head"),
      links: [
        { label: t("links.terminos"), href: "/terms" },
        { label: t("links.privacidad"), href: "/privacy" },
        { label: t("links.habeas_data"), href: "/privacy#habeas-data" },
        { label: t("links.cookies"), href: "/cookies" },
      ],
    },
    {
      head: t("soporte_head"),
      links: [
        { label: t("links.ayuda"), href: "#" },
        { label: t("links.whatsapp"), href: WA_LINK },
        { label: "acomplyinfo@gmail.com", href: "mailto:acomplyinfo@gmail.com" },
        { label: t("links.estado"), href: "#" },
      ],
    },
  ];

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand-block">
          <a className="footer__brand" href="#top" aria-label={t("aria.home")}>
            <AcomplyLogo height={56} title="Acomply" />
          </a>
          <p className="footer__tagline">
            {t("tagline")}
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
          {t("copyright.entity")}
          <span className="footer__sep">·</span>
          {t("copyright.nit_status")}
          <span className="footer__sep">·</span>
          {t("copyright.rights")}
        </span>
        <div className="footer__bottom-row">
          <a href="/privacy">{t("bottom_links.privacy")}</a>
          <a href="/terms">{t("bottom_links.terms")}</a>
          <a href="/cookies">{t("bottom_links.cookies")}</a>
        </div>
      </div>
    </footer>
  );
}
