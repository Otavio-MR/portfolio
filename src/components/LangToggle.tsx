"use client";

import { useLang } from "@/i18n/LanguageProvider";

export function LangToggle() {
  const { lang, setLang } = useLang();

  return (
    <div className="chrome-pill flex items-center rounded-full p-0.5 text-xs font-medium">
      <button
        onClick={() => setLang("pt")}
        aria-pressed={lang === "pt"}
        className={`rounded-full px-2.5 py-1 transition-colors ${
          lang === "pt" ? "bg-white text-black" : "text-[var(--muted)] hover:text-white"
        }`}
      >
        PT
      </button>
      <button
        onClick={() => setLang("en")}
        aria-pressed={lang === "en"}
        className={`rounded-full px-2.5 py-1 transition-colors ${
          lang === "en" ? "bg-white text-black" : "text-[var(--muted)] hover:text-white"
        }`}
      >
        EN
      </button>
    </div>
  );
}
