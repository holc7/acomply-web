"use client";

// [perf-audited 2026-05-28 / vercel-react-best-practices v1.0 + typescript-best-practices] audited-clean — no findings
//
// Pill-shaped EN/ES toggle. Sits in the NavBar (desktop) and at the top
// of the mobile drawer. Uses next-intl's prefix-aware router so:
//   - From / (ES default, no prefix), clicking EN → /en
//   - From /en/precios, clicking ES → /precios (default-prefix strip)
//   - From /privacy, clicking EN → /en/privacy (preserves the route)
//
// The barbershop main-app's switcher does pathname.replace('/es', '/en')
// with next/navigation, which no-ops on default-locale URLs (`/dashboard`
// has no `/es` to replace). Importing useRouter from `@/i18n/navigation`
// avoids that trap — `router.replace(pathname, { locale: newLocale })`
// computes the correct destination regardless of current prefix.

import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { locales, type Locale } from "@/i18n/config";

type Variant = "pill" | "inline";

export default function LocaleSwitcher({ variant = "pill" }: { variant?: Variant }) {
  const locale = useLocale() as Locale;
  const router = useRouter();
  const pathname = usePathname();
  const t = useTranslations("locale_switcher");

  return (
    <div
      className={`locale-switcher locale-switcher--${variant}`}
      role="group"
      aria-label={t("aria")}
    >
      {locales.map((loc) => {
        const isActive = locale === loc;
        return (
          <button
            key={loc}
            type="button"
            aria-pressed={isActive}
            aria-label={t(`label_${loc}` as const)}
            className={`locale-switcher__btn${isActive ? " is-active" : ""}`}
            onClick={() => {
              if (isActive) return;
              router.replace(pathname, { locale: loc });
            }}
          >
            {loc.toUpperCase()}
          </button>
        );
      })}
      <style>{`
        .locale-switcher {
          display: inline-flex;
          gap: 2px;
          padding: 3px;
          border-radius: 999px;
          background: rgba(43, 28, 22, 0.06);
          backdrop-filter: blur(6px);
          -webkit-backdrop-filter: blur(6px);
        }
        .locale-switcher--pill {
          margin-right: 8px;
        }
        .locale-switcher--inline {
          background: transparent;
          padding: 0;
          gap: 8px;
        }
        .locale-switcher__btn {
          padding: 6px 11px;
          border-radius: 999px;
          border: 0;
          background: transparent;
          font-family: var(--font-text, 'Nunito', system-ui, sans-serif);
          font-size: 11.5px;
          font-weight: 800;
          letter-spacing: 0.1em;
          cursor: pointer;
          color: rgba(43, 28, 22, 0.55);
          transition: color 0.18s ease, background 0.18s ease;
          line-height: 1;
        }
        .locale-switcher__btn:hover {
          color: rgba(43, 28, 22, 0.78);
        }
        .locale-switcher__btn.is-active {
          background: var(--cream, #F7F3EC);
          color: rgba(43, 28, 22, 1);
          box-shadow: 0 1px 2px rgba(0, 0, 0, 0.06);
          cursor: default;
        }
        .locale-switcher--inline .locale-switcher__btn {
          padding: 4px 0;
          font-size: 12px;
          color: rgba(43, 28, 22, 0.55);
        }
        .locale-switcher--inline .locale-switcher__btn.is-active {
          background: transparent;
          box-shadow: none;
          color: rgba(43, 28, 22, 0.95);
          text-decoration: underline;
          text-decoration-thickness: 1.5px;
          text-underline-offset: 4px;
        }
        /* Hide on smallest mobile to keep nav clean — switcher reappears
           inside the drawer at this breakpoint. */
        @media (max-width: 520px) {
          .acnav .locale-switcher--pill {
            display: none;
          }
        }
      `}</style>
    </div>
  );
}
