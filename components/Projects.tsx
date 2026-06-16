"use client";

import { useLang } from "./LanguageProvider";
import { SectionReveal } from "./SectionReveal";

export function Projects() {
  const { t } = useLang();
  const projects = t.projects;

  return (
    <section id="projects" className="section-divider py-16">
      <SectionReveal>
        <p className="text-xs font-medium tracking-[0.2em] text-accent">
          {projects.eyebrow}
        </p>
        <p className="mt-2 text-sm text-[var(--text-muted)]">
          {projects.subtitle}
        </p>
      </SectionReveal>

      {/* 1 column on mobile, 2 columns on desktop */}
      <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
        {projects.items.map((project, i) => (
          <SectionReveal key={project.name} delay={i * 100}>
            <div className="h-full rounded-xl border border-[var(--border)] p-6 transition-colors duration-300 hover:border-accent">
              <h3 className="text-base font-semibold md:text-lg">
                {project.name}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--text-muted)] md:text-base">
                {project.description}
              </p>
              <p className="mt-3 text-sm font-medium text-accent">
                {project.role}
              </p>

              {/* Tech stack pills */}
              <ul className="mt-4 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <li
                    key={tech}
                    className="rounded-full border border-[var(--border)] px-2.5 py-1 text-xs text-[var(--text-muted)]"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          </SectionReveal>
        ))}
      </div>
    </section>
  );
}
