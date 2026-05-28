"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { DEMO_HREF } from "../lib/copy";
import Button from "./primitives/Button";

export default function StickyMobileCTA() {
  const t = useTranslations("sticky");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const shouldShow = window.scrollY > window.innerHeight * 0.6;
      const closing = document.getElementById("demo");
      const nearClosing = closing && closing.getBoundingClientRect().top < window.innerHeight * 0.85;
      setVisible(shouldShow && !nearClosing);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className={`stickycta${visible ? " is-visible" : ""}`}>
      <div className="stickycta__row">
        <Button variant="primary" href={DEMO_HREF} sparkle>
          {t("cta")}
        </Button>
      </div>
    </div>
  );
}
