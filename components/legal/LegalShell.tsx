// Shared chrome for /privacy, /terms, /cookies. Espresso eyebrow, Sora h1, Nunito body.
// Brand-aligned with the marketing landing — same palette + type stack.

import Link from "next/link";
import type { ReactNode } from "react";

type Props = {
  title: string;
  updated: string;
  children: ReactNode;
};

export default function LegalShell({ title, updated, children }: Props) {
  return (
    <div className="legal">
      <div className="container-narrow legal__inner">
        <Link href="/" className="legal__back" aria-label="Volver al inicio de Acomply">
          ← Acomply
        </Link>
        <h1 className="legal__title">{title}</h1>
        <div className="legal__updated">Última actualización · {updated}</div>

        <article className="legal__article">{children}</article>

        <div className="legal__bottom">
          <Link href="/privacy">Privacidad</Link>
          <Link href="/terms">Términos</Link>
          <Link href="/cookies">Cookies</Link>
          <Link href="/">Inicio</Link>
        </div>
      </div>
    </div>
  );
}
