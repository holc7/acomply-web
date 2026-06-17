// [perf-audited 2026-06-17 / typescript-best-practices] audited-clean — no findings
// Locale resolvers that turn a CatalogFeature[] into the plain-string shapes
// each pricing card consumes. Keeps PLAN_FEATURES the single source of truth.

import type { CatalogFeature, IconKey, Loc } from "./plans-catalog";

const pickLoc = (loc: Loc, locale: string): string =>
  locale === "en" ? loc.en : loc.es;

/** Cards that only render a flat list of `{ label }` (Esencial + Élite). */
export function resolveLabelFeatures(
  features: CatalogFeature[],
  locale: string,
): { label: string }[] {
  const out: { label: string }[] = [];
  for (const f of features) {
    if ("label" in f) out.push({ label: pickLoc(f.label, locale) });
  }
  return out;
}

/** Resolved Maestro feature: sections and labelled rows with optional note + icon key. */
export type ResolvedMaestroFeature =
  | { section: string }
  | { label: string; note?: string; icon?: IconKey };

/** Maestro card — preserves sections, notes, and icon keys. */
export function resolveMaestroFeatures(
  features: CatalogFeature[],
  locale: string,
): ResolvedMaestroFeature[] {
  return features.map((f) => {
    if ("section" in f) return { section: pickLoc(f.section, locale) };
    return {
      label: pickLoc(f.label, locale),
      ...(f.note ? { note: pickLoc(f.note, locale) } : {}),
      ...(f.icon ? { icon: f.icon } : {}),
    };
  });
}
