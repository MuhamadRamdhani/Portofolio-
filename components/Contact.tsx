"use client";

import { FiMail, FiPhone, FiDownload, FiLinkedin } from "react-icons/fi";
import { contact, socials, site } from "@/lib/data";
import { useLang } from "./LanguageProvider";
import { SectionReveal } from "./SectionReveal";

export function Contact() {
  const { t } = useLang();
  return (
    <section id="contact" className="section-divider py-20 text-center">
      <SectionReveal>
        <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
          {t.contact.heading}
        </h2>

        {/* Email + phone side by side (stack on small screens) */}
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-8">
          <a
            href={`mailto:${contact.email}`}
            className="inline-flex items-center gap-2 text-sm text-[var(--text-muted)] transition-colors hover:text-accent"
          >
            <FiMail size={16} />
            {contact.email}
          </a>
          <a
            href={`tel:${contact.phoneHref}`}
            className="inline-flex items-center gap-2 text-sm text-[var(--text-muted)] transition-colors hover:text-accent"
          >
            <FiPhone size={16} />
            {contact.phone}
          </a>
        </div>

        {/* Download CV — links to a PDF in public/ */}
        <div className="mt-8">
          <a
            href={site.cvPath}
            download
            className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-2.5 text-sm font-medium text-ink transition-opacity hover:opacity-90"
          >
            <FiDownload size={16} />
            {t.contact.cta}
          </a>
        </div>

        {/* Social icons */}
        <div className="mt-10 flex items-center justify-center gap-5">
          <a
            href={socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-[var(--text-muted)] transition-colors hover:text-accent"
          >
            <FiLinkedin size={20} />
          </a>
          <a
            href={`mailto:${contact.email}`}
            aria-label="Email"
            className="text-[var(--text-muted)] transition-colors hover:text-accent"
          >
            <FiMail size={20} />
          </a>
        </div>
      </SectionReveal>
    </section>
  );
}
