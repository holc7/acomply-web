"use client";

// [perf-audited 2026-05-28 / vercel-react-best-practices v1.0 + typescript-best-practices] audited-clean — no findings
//
// Client-side composition of the single-page landing. Split from
// app/[locale]/page.tsx so the page itself can be a server component
// that calls setRequestLocale(locale) — needed to enable static
// rendering of the nested client components below that read messages
// via useTranslations.
//
// IntersectionObserver drives the .reveal class for scroll-in animations.
// Locale-agnostic; the observer targets a CSS class that exists in both.

import { useEffect } from "react";
import NavBar from "@/components/NavBar";
import HeroSection from "@/components/HeroSection";
import VerticalProofSection from "@/components/VerticalProofSection";
import AgentsSectionV2 from "@/components/AgentsSectionV2";
import MarketingIASection from "@/components/MarketingIASection";
import AsistenteAnalisisSection from "@/components/AsistenteAnalisisSection";
import ResultadosSection from "@/components/ResultadosSection";
import PricingCards from "@/components/PricingCards";
import RecargasTeaser from "@/components/RecargasTeaser";
import FAQ from "@/components/FAQ";
import ClosingCTA from "@/components/ClosingCTA";
import Footer from "@/components/Footer";
import StickyMobileCTA from "@/components/StickyMobileCTA";

export default function HomeClient() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            io.unobserve(e.target);
          }
        }
      },
      { threshold: 0.08, rootMargin: "0px 0px -8% 0px" },
    );
    document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <div className="page">
      <NavBar />
      <main>
        <HeroSection />
        <VerticalProofSection />
        <AgentsSectionV2 />
        <MarketingIASection />
        <AsistenteAnalisisSection />
        <ResultadosSection />
        <PricingCards />
        <RecargasTeaser />
        <FAQ />
        <ClosingCTA />
      </main>
      <Footer />
      <StickyMobileCTA />
    </div>
  );
}
