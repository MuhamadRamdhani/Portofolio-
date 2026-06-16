"use client";

import { useLang } from "./LanguageProvider";
import { SectionReveal } from "./SectionReveal";

export function About() {
  const { t } = useLang();
  const about = t.about;
  return (
    <section id="about" className="section-divider py-16">
      <SectionReveal>
        <p className="text-xs font-medium tracking-[0.2em] text-accent">
          {about.label}
        </p>
        <p className="mt-5 text-lg leading-relaxed text-[var(--text)] md:text-xl">
          {about.paragraph}
        </p>
      </SectionReveal>
    </section>
  );
}
