"use client";

import type { MouseEvent } from "react";
import { FiArrowUpRight } from "react-icons/fi";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "framer-motion";
import type { Project } from "@/lib/content";
import { useLang } from "./LanguageProvider";
import { SectionReveal } from "./SectionReveal";

// A single project card that tilts toward the cursor and lights up a soft glow
// beneath the pointer. Springs keep the motion smooth instead of jumpy.
function ProjectCard({ project, delay }: { project: Project; delay: number }) {
  // Raw pointer position (0..1) within the card, springed for smoothness.
  const px = useSpring(0.5, { stiffness: 150, damping: 20 });
  const py = useSpring(0.5, { stiffness: 150, damping: 20 });

  // Map pointer position → small rotation. Max tilt ~6deg keeps it tasteful.
  const rotateX = useSpring(0, { stiffness: 150, damping: 20 });
  const rotateY = useSpring(0, { stiffness: 150, damping: 20 });

  // Glow follows the raw cursor coordinates in px.
  const glowX = useMotionValue(0);
  const glowY = useMotionValue(0);
  const glow = useMotionTemplate`radial-gradient(180px circle at ${glowX}px ${glowY}px, rgba(93,202,165,0.14), transparent 70%)`;

  function handleMove(e: MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    px.set(x);
    py.set(y);
    rotateY.set((x - 0.5) * 12); // left/right
    rotateX.set((0.5 - y) * 12); // up/down
    glowX.set(e.clientX - rect.left);
    glowY.set(e.clientY - rect.top);
  }

  function handleLeave() {
    rotateX.set(0);
    rotateY.set(0);
  }

  return (
    <SectionReveal delay={delay} className="h-full [perspective:1000px]">
      <motion.div
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        whileHover={{ y: -4 }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
        className="group relative h-full overflow-hidden rounded-xl border border-[var(--border)] p-6 transition-colors duration-300 hover:border-accent hover:shadow-[0_12px_40px_-12px_rgba(93,202,165,0.35)]"
      >
        {/* Cursor-following glow */}
        <motion.span
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{ background: glow }}
        />

        {/* Arrow that slides in on hover */}
        <FiArrowUpRight
          aria-hidden
          className="absolute right-5 top-5 text-[var(--text-muted)] opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent group-hover:opacity-100"
          size={18}
        />

        <h3 className="pr-6 text-base font-semibold md:text-lg">
          {project.name}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-[var(--text-muted)] md:text-base">
          {project.description}
        </p>
        <p className="mt-3 text-sm font-medium text-accent">{project.role}</p>

        {/* Tech stack pills */}
        <ul className="mt-4 flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <li
              key={tech}
              className="rounded-full border border-[var(--border)] px-2.5 py-1 text-xs text-[var(--text-muted)] transition-colors group-hover:border-accent/40"
            >
              {tech}
            </li>
          ))}
        </ul>
      </motion.div>
    </SectionReveal>
  );
}

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
          <ProjectCard key={project.name} project={project} delay={i * 100} />
        ))}
      </div>
    </section>
  );
}
