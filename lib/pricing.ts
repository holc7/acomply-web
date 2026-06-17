// [perf-audited 2026-06-11 / typescript-best-practices] audited-clean — no findings

export const PRICING = {
  esencial: { amountCop: 49_900, displayCop: "49.900" },
  maestro: { amountCop: 79_900, displayCop: "79.900" },
  elite: { amountCop: 99_900, displayCop: "99.900" },
} as const;

export type PricingTier = keyof typeof PRICING;

export const PRICING_LOW_PRICE_COP = String(PRICING.esencial.amountCop);
export const PRICING_HIGH_PRICE_COP = String(PRICING.elite.amountCop);
