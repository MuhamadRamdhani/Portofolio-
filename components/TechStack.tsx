"use client";

import { techStack } from "@/lib/data";
import { useLang } from "./LanguageProvider";
import { SectionReveal } from "./SectionReveal";
import type { CSSProperties } from "react";

export function TechStack() {
  const { t } = useLang();
  // Duplicate the list so the track can loop without a visible gap. The CSS
  // slides the track by -50%, handing off seamlessly to the second copy.
  const loop = [...techStack, ...techStack];

  return (
    <section id="stack" className="section-divider py-16">
      <SectionReveal>
        <p className="text-xs font-medium tracking-[0.2em] text-accent">
          {t.tech.eyebrow}
        </p>
        <p className="mt-2 text-sm text-[var(--text-muted)]">
          {t.tech.subtitle}
        </p>
      </SectionReveal>

      <SectionReveal delay={80}>
        {/* marquee = mask/fade wrapper; track = the moving, doubled list */}
        <div className="marquee mt-8 overflow-hidden">
          <ul className="marquee__track gap-3">
            {loop.map((tech, i) => {
              const Icon = tech.icon;
              // Expose each tool's brand color as a CSS var for hover lighting.
              const style = { "--tech": tech.color } as CSSProperties;
              return (
                <li
                  // Indices repeat across the two copies, so include i to keep keys unique.
                  key={`${tech.name}-${i}`}
                  // aria-hidden on the duplicated half so screen readers read the list once.
                  aria-hidden={i >= techStack.length}
                  style={style}
                  className="group flex w-32 shrink-0 flex-col items-center justify-center gap-3 rounded-xl border border-[var(--border)] py-6 transition-colors duration-300 hover:border-accent"
                >
                  {/* Grayscale by default → brand color (var(--tech)) on hover */}
                  <Icon
                    size={28}
                    className="text-[var(--text-muted)] transition-colors duration-300 group-hover:text-[var(--tech)]"
                  />
                  <span className="text-xs text-[var(--text-muted)] transition-colors group-hover:text-[var(--text)]">
                    {tech.name}
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
      </SectionReveal>
    </section>
  );
}
