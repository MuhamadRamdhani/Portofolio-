"use client";

import { useEffect, useRef } from "react";
import { animate, useInView } from "framer-motion";
import { useLang } from "./LanguageProvider";
import { SectionReveal } from "./SectionReveal";

// Animates a number from 0 up to its target the first time it scrolls into view.
// Values like "5+" or "10+" are split into a number ("5") and a suffix ("+").
function CountUp({ value }: { value: string }) {
  const match = value.match(/^(\d+)(.*)$/);
  const target = match ? parseInt(match[1], 10) : 0;
  const suffix = match ? match[2] : value;

  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  useEffect(() => {
    if (!inView || !ref.current) return;
    // Respect users who prefer reduced motion — jump straight to the value.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      ref.current.textContent = String(target);
      return;
    }
    const controls = animate(0, target, {
      duration: 1.4,
      ease: [0.16, 1, 0.3, 1], // easeOutExpo — fast start, gentle settle
      onUpdate: (v) => {
        if (ref.current) ref.current.textContent = String(Math.round(v));
      },
    });
    return () => controls.stop();
  }, [inView, target]);

  return (
    <span>
      <span ref={ref}>0</span>
      {suffix}
    </span>
  );
}

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
                <CountUp value={stat.value} />
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
