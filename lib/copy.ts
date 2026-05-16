// [perf-audited 2026-05-16 / typescript-best-practices] audited-clean — no findings
// Single source of truth for repeated marketing copy + contact endpoints
// that appear across multiple components. Update here once instead of
// chasing 5 hardcoded strings.

/** Primary CTA label used across NavBar, Hero, ClosingCTA, StickyMobileCTA. */
export const CTA_DEMO = "Agenda una demo gratis";

/** Anchor target for the demo modal trigger. */
export const DEMO_HREF = "#demo";

/**
 * Public WhatsApp business number, raw digits (Colombia +57).
 * NOTE: 573000000000 is the placeholder value used pre-launch — swap to the
 * real number here when the WABA is provisioned.
 */
export const WA_PHONE = "573000000000";

/** Pre-formatted wa.me link for use in href attributes. */
export const WA_LINK = `https://wa.me/${WA_PHONE}`;
