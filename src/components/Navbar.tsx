"use client";

import { useEffect, useState } from "react";
import { useLang } from "@/i18n/LanguageProvider";
import { profile } from "@/data/profile";
import { PenguinLogo } from "./PenguinLogo";
import { LangToggle } from "./LangToggle";

export function Navbar() {
  const { t } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#about", label: t.nav.about },
    { href: "#experience", label: t.nav.experience },
    { href: "#projects", label: t.nav.projects },
    { href: "#certificates", label: t.nav.certificates },
    { href: "#contact", label: t.nav.contact },
  ];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-[var(--border)] bg-black/60 backdrop-blur-xl"
          : "border-b border-transparent"
      }`}
    >
      <nav className="container-x flex h-16 items-center justify-between">
        {/* Logo */}
        <a href="#top" className="group flex items-center gap-2.5">
          <PenguinLogo size={32} className="transition-transform group-hover:scale-110" />
          <span className="text-[15px] font-semibold tracking-tight text-white">
            {profile.shortName}
          </span>
        </a>

        {/* Links desktop */}
        <div className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-lg px-3 py-2 text-sm text-[var(--muted)] transition-colors hover:text-white"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <LangToggle />
          {/* Botão menu mobile */}
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
            className="chrome-pill rounded-lg p-2 md:hidden"
          >
            <div className="flex flex-col gap-1">
              <span
                className={`h-0.5 w-5 bg-white transition-transform ${open ? "translate-y-1.5 rotate-45" : ""}`}
              />
              <span className={`h-0.5 w-5 bg-white transition-opacity ${open ? "opacity-0" : ""}`} />
              <span
                className={`h-0.5 w-5 bg-white transition-transform ${open ? "-translate-y-1.5 -rotate-45" : ""}`}
              />
            </div>
          </button>
        </div>
      </nav>

      {/* Menu mobile */}
      {open && (
        <div className="border-t border-[var(--border)] bg-black/90 backdrop-blur-xl md:hidden">
          <div className="container-x flex flex-col py-3">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-sm text-[var(--muted)] transition-colors hover:bg-white/5 hover:text-white"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
