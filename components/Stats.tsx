"use client";

import { useLang } from "./LanguageProvider";
import { SectionReveal } from "./SectionReveal";

export function Stats() {
  const { t } = useLang();
  const stats = t.stats;
  return (
    <section className="section-divider py-12">
      <SectionReveal>
        <div className="grid grid-cols-3 gap-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl font-bold text-accent md:text-4xl">
                {stat.value}
              </div>
              <div className="mt-1 text-xs text-[var(--text-muted)] md:text-sm">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </SectionReveal>
    </section>
  );
}
