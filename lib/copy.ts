// [perf-audited 2026-05-16 / typescript-best-practices] audited-clean — no findings
// Single source of truth for repeated marketing copy + contact endpoints
// that appear across multiple components. Translatable strings now live
// in messages/{locale}.json via next-intl; only non-translatable
// constants (URLs, phone numbers) remain here.

/** Anchor target for the demo modal trigger. */
export const DEMO_HREF = "#demo";

/** Self-serve signup — the app's onboarding wizard (free 14-day trial). */
export const SIGNUP_HREF = "https://app.acomply.co/empezar";

/**
 * Public WhatsApp business number, raw digits (Colombia +57).
 * NOTE: 573000000000 is the placeholder value used pre-launch — swap to the
 * real number here when the WABA is provisioned.
 */
export const WA_PHONE = "573000000000";

/** Pre-formatted wa.me link for use in href attributes. */
export const WA_LINK = `https://wa.me/${WA_PHONE}`;
