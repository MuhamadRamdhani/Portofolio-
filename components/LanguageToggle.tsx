"use client";

import { useLang } from "./LanguageProvider";

// Two-language switch (ID / EN). Shows the language you'll switch TO so the
// label doubles as the action.
export function LanguageToggle() {
  const { lang, toggle } = useLang();

  return (
    <button
      type="button"
      aria-label={lang === "id" ? "Switch to English" : "Ganti ke Bahasa Indonesia"}
      onClick={toggle}
      className="flex h-9 items-center justify-center rounded-full border border-[var(--border)] px-3 text-xs font-semibold text-[var(--text-muted)] transition-colors hover:border-accent hover:text-accent"
    >
      {lang === "id" ? "EN" : "ID"}
    </button>
  );
}
