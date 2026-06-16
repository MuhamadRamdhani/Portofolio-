"use client";

import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { site } from "@/lib/data";
import { useLang } from "./LanguageProvider";
import { ThemeToggle } from "./ThemeToggle";
import { LanguageToggle } from "./LanguageToggle";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const { t } = useLang();
  const navLinks = t.nav;

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[var(--bg)]/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-3xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <a href="#top" className="text-sm font-semibold tracking-tight">
          {site.logo}
        </a>

        {/* Right side — controls render once; nav links & menu button are responsive */}
        <div className="flex items-center gap-3 md:gap-7">
          {/* Desktop links */}
          <ul className="hidden items-center gap-7 text-sm text-[var(--text-muted)] md:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="transition-colors hover:text-accent"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Single language + theme toggle, visible on every breakpoint */}
          <div className="flex items-center gap-3">
            <LanguageToggle />
            <ThemeToggle />
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border)] text-[var(--text-muted)] transition-colors hover:border-accent hover:text-accent md:hidden"
          >
            {open ? <FiX size={18} /> : <FiMenu size={18} />}
          </button>
        </div>
      </nav>

      {/* Mobile dropdown menu */}
      {open && (
        <div className="border-t border-[var(--border)] md:hidden">
          <ul className="flex flex-col px-6 py-2 text-sm text-[var(--text-muted)]">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 transition-colors hover:text-accent"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
