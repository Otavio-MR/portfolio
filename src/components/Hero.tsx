"use client";

import { useLang } from "@/i18n/LanguageProvider";
import { profile } from "@/data/profile";
import { PenguinLogo } from "./PenguinLogo";

export function Hero() {
  const { t, lang } = useLang();

  return (
    <section id="top" className="relative overflow-hidden">
      {/* fundos */}
      <div className="pointer-events-none absolute inset-0 bg-glow-top" />
      <div className="pointer-events-none absolute inset-0 bg-grid" />

      <div className="container-x relative flex min-h-[92vh] flex-col items-center justify-center py-28 text-center">
        {/* pinguim com halo */}
        <div className="relative mb-8">
          <div
            className="absolute inset-0 -z-10 scale-125 blur-3xl"
            style={{ background: "var(--glow-strong)", borderRadius: "50%" }}
          />
          <PenguinLogo size={168} priority className="drop-shadow-[0_0_40px_rgba(140,190,255,0.45)]" />
        </div>

        {/* badge de disponibilidade */}
        <div className="chrome-pill mb-8 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium text-[var(--muted)]">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-green-400" />
          </span>
          {t.hero.badge}
        </div>

        {/* nome */}
        <h1 className="shine text-chrome text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl">
          {profile.name}
        </h1>

        {/* headline */}
        <p className="mt-5 max-w-2xl text-lg text-[var(--foreground)] sm:text-xl">
          {profile.headline[lang]}
        </p>

        {/* tagline */}
        <p className="mt-3 max-w-xl text-base text-[var(--muted)]">
          {profile.tagline[lang]}
        </p>

        {/* CTAs */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <a href="#projects" className="btn btn-primary">
            {t.hero.ctaProjects}
            <ArrowIcon />
          </a>
          <a href="#contact" className="btn btn-ghost">
            {t.hero.ctaContact}
          </a>
        </div>
      </div>

      {/* indicador de scroll */}
      <div className="pointer-events-none absolute bottom-8 left-1/2 -translate-x-1/2 text-xs text-[var(--muted-2)]">
        <div className="flex flex-col items-center gap-2">
          <span>{t.hero.scroll}</span>
          <span className="h-8 w-px animate-pulse bg-gradient-to-b from-[var(--muted-2)] to-transparent" />
        </div>
      </div>
    </section>
  );
}

function ArrowIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
      <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
