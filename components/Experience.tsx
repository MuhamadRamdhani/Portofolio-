"use client";

import { useLang } from "./LanguageProvider";
import { SectionReveal } from "./SectionReveal";

export function Experience() {
  const { t } = useLang();
  const experience = t.experience;
  return (
    <section id="experience" className="section-divider py-16">
      <SectionReveal>
        <p className="text-xs font-medium tracking-[0.2em] text-accent">
          EXPERIENCE
        </p>
      </SectionReveal>

      {/* Vertical timeline: a line runs down the left, each entry has a dot */}
      <div className="mt-8 border-l border-[var(--border)] pl-8">
        {experience.map((item, i) => (
          <SectionReveal key={`${item.company}-${i}`} delay={i * 100}>
            <div className="relative pb-10 last:pb-0">
              {/* Timeline dot — green & glowing when active */}
              <span
                className={`absolute -left-[39px] top-1.5 flex h-3 w-3 items-center justify-center rounded-full ${
                  item.active
                    ? "bg-accent ring-4 ring-accent/20"
                    : "bg-[var(--text-muted)]"
                }`}
              >
                {item.active && (
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
                )}
              </span>

              <p className="text-sm text-[var(--text-muted)]">{item.period}</p>
              <h3 className="mt-1 text-base font-semibold md:text-lg">
                {item.role}{" "}
                <span className="text-accent">· {item.company}</span>
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--text-muted)] md:text-base">
                {item.description}
              </p>
            </div>
          </SectionReveal>
        ))}
      </div>
    </section>
  );
}
