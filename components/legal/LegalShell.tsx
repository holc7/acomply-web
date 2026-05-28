// [perf-audited 2026-05-28 / vercel-react-best-practices v1.0 + typescript-best-practices] audited-clean — no findings
// Shared chrome for /privacy, /terms, /cookies. Espresso eyebrow, Sora h1, Nunito body.
// Brand-aligned with the marketing landing — same palette + type stack.
//
// Server component — reads its own shell labels (back link, footer bottom row,
// updated label) via getTranslations so callers only pass the per-page title
// and updated date. The locale-prefixed home/legal links are emitted as bare
// paths because next-intl's middleware rewrites them client-side at navigation
// based on the current locale; rendering them with `/privacy` etc. keeps the
// HTML output identical for both locales (only the URL prefix differs at the
// browser layer via the LocaleSwitcher and proxy).

import Link from "next/link";
import type { ReactNode } from "react";
import { getTranslations } from "next-intl/server";

type Props = {
  title: string;
  updated: string;
  children: ReactNode;
};

export default async function LegalShell({ title, updated, children }: Props) {
  const t = await getTranslations("legal.shell");
  return (
    <div className="legal">
      <div className="container-narrow legal__inner">
        <Link href="/" className="legal__back" aria-label={t("back_aria")}>
          {t("back")}
        </Link>
        <h1 className="legal__title">{title}</h1>
        <div className="legal__updated">
          {t("updated_label")} · {updated}
        </div>

        <article className="legal__article">{children}</article>

        <div className="legal__bottom">
          <Link href="/privacy">{t("bottom.privacy")}</Link>
          <Link href="/terms">{t("bottom.terms")}</Link>
          <Link href="/cookies">{t("bottom.cookies")}</Link>
          <Link href="/">{t("bottom.home")}</Link>
        </div>
      </div>
    </div>
  );
}
