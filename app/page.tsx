"use client";

import { useEffect } from "react";
import NavBar from "@/components/NavBar";
import HeroSection from "@/components/HeroSection";
import VerticalRotator from "@/components/VerticalRotator";
import AgentsSection from "@/components/AgentsSection";
import OutcomesStrip from "@/components/OutcomesStrip";
import PricingCards from "@/components/PricingCards";
import RecargasTeaser from "@/components/RecargasTeaser";
import TrustStrip from "@/components/TrustStrip";
import FAQ from "@/components/FAQ";
import ClosingCTA from "@/components/ClosingCTA";
import Footer from "@/components/Footer";
import StickyMobileCTA from "@/components/StickyMobileCTA";

export default function Home() {
  // Reveal on scroll: add .is-visible to .reveal elements as they enter viewport.
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
        <VerticalRotator />
        <AgentsSection />
        <OutcomesStrip />
        <PricingCards />
        <RecargasTeaser />
        <TrustStrip />
        <FAQ />
        <ClosingCTA />
      </main>
      <Footer />
      <StickyMobileCTA />
    </div>
  );
}
