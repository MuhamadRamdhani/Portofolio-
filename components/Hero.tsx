"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import { site } from "@/lib/data";
import { useLang } from "./LanguageProvider";

// Parent orchestrates a gentle top-down stagger for its children.
const container: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

// Each child fades + slides up. Spring gives it a soft, natural settle.
const item: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 90, damping: 18 },
  },
};

export function Hero() {
  const { t } = useLang();
  const hero = t.hero;

  return (
    <section id="top" className="relative py-20 md:py-28">
      {/* ---------------------------------------------------------------- */}
      {/* Ambient background — a soft accent glow that breathes, plus a     */}
      {/* faint dot grid that fades out toward the edges. Purely decorative */}
      {/* and non-interactive.                                             */}
      {/* ---------------------------------------------------------------- */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <motion.div
          className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-accent/20 blur-3xl md:h-96 md:w-96"
          animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.75, 0.5] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle,var(--border)_1px,transparent_1px)] [background-size:22px_22px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_40%,transparent_100%)]" />
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="flex flex-col items-center gap-10 md:flex-row md:items-center md:gap-12"
      >
        {/* Profile photo — circular. Replace public/profile.jpg with your own. */}
        <motion.div
          variants={item}
          className="group relative h-32 w-32 shrink-0 overflow-hidden rounded-full border border-[var(--border)] md:h-40 md:w-40"
        >
          {/* Rotating accent ring on hover for a subtle lift */}
          <span className="absolute -inset-0.5 -z-10 rounded-full bg-gradient-to-tr from-accent/60 to-transparent opacity-0 blur transition-opacity duration-500 group-hover:opacity-100" />
          <Image
            src={site.profileImage}
            alt="Muhamad Ramdhani"
            fill
            sizes="160px"
            className="object-cover object-[center_60%] transition-transform duration-500 group-hover:scale-105"
            priority
          />
        </motion.div>

        {/* Intro text */}
        <div className="text-center md:text-left">
          {/* Availability badge */}
          <motion.span
            variants={item}
            className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] px-3 py-1 text-xs text-[var(--text-muted)]"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            {hero.availability}
          </motion.span>

          <motion.h1
            variants={item}
            className="mt-5 text-3xl font-bold leading-tight tracking-tight md:text-4xl"
          >
            {hero.headingLead}{" "}
            <span className="bg-gradient-to-r from-accent to-accent-dark bg-clip-text text-transparent">
              {hero.name}
            </span>
            {" — "}
            {hero.role}
          </motion.h1>

          <motion.p
            variants={item}
            className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-[var(--text-muted)] md:mx-0"
          >
            {hero.subheading}
          </motion.p>
        </div>
      </motion.div>
    </section>
  );
}
