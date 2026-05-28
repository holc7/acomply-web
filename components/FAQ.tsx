"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";

type FAQItem = { q: string; a: string };

export default function FAQ() {
  const [open, setOpen] = useState(0);
  const t = useTranslations("faq");
  const items = t.raw("items") as FAQItem[];

  return (
    <section className="faq" id="faq">
      <div className="container faq__inner">
        <div className="faq__head">
          <span className="faq__eyebrow">{t("eyebrow")}</span>
          <h2 className="faq__title">
            {t("title.line1")}<br />
            {t.rich("title.line2", { em: (chunks) => <em>{chunks}</em> })}
          </h2>
          <p className="faq__sub">
            {t("sub")}
          </p>
        </div>

        <div className="faq__list">
          {items.map((item, i) => (
            <div key={i} className={`faq__item${open === i ? " is-open" : ""}`}>
              <button
                className="faq__q"
                type="button"
                onClick={() => setOpen(open === i ? -1 : i)}
                aria-expanded={open === i}
              >
                <span>{item.q}</span>
                <span className="faq__q-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14M5 12h14"/></svg>
                </span>
              </button>
              <div className="faq__a">
                <div className="faq__a-inner">
                  <div className="faq__a-inner-pad">
                    {t.rich(`items.${i}.a`, {
                      strong: (chunks) => <strong>{chunks}</strong>,
                      br: () => <br />,
                    })}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
