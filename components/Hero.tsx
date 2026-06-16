"use client";

import Image from "next/image";
import { site } from "@/lib/data";
import { useLang } from "./LanguageProvider";
import { SectionReveal } from "./SectionReveal";

export function Hero() {
  const { t } = useLang();
  const hero = t.hero;
  return (
    <section id="top" className="py-20 md:py-28">
      <SectionReveal>
        <div className="flex flex-col items-center gap-10 md:flex-row md:items-center md:gap-12">
          {/* Profile photo — circular. Replace public/profile.jpg with your own. */}
          <div className="relative h-32 w-32 shrink-0 overflow-hidden rounded-full border border-[var(--border)] md:h-40 md:w-40">
            <Image
              src={site.profileImage}
              alt="Muhamad Ramdhani"
              fill
              sizes="160px"
              className="object-cover object-[center_60%]"
              priority
            />
          </div>

          {/* Intro text */}
          <div className="text-center md:text-left">
            {/* Availability badge */}
            <span className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] px-3 py-1 text-xs text-[var(--text-muted)]">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              {hero.availability}
            </span>

            <h1 className="mt-5 text-3xl font-bold leading-tight tracking-tight md:text-4xl">
              {hero.headingLead}{" "}
              <span className="text-accent">{hero.name}</span>
              {" — "}
              {hero.role}
            </h1>

            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-[var(--text-muted)] md:mx-0">
              {hero.subheading}
            </p>
          </div>
        </div>
      </SectionReveal>
    </section>
  );
}
