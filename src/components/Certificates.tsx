"use client";

import { useLang } from "@/i18n/LanguageProvider";
import { certificates } from "@/data/certificates";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

export function Certificates() {
  const { t } = useLang();

  return (
    <section id="certificates" className="container-x scroll-mt-24 py-24 sm:py-32">
      <SectionHeading
        eyebrow={t.certificates.eyebrow}
        title={t.certificates.title}
        subtitle={t.certificates.subtitle}
      />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {certificates.map((c, i) => (
          <Reveal key={c.id} delay={(i % 3) * 100}>
            <div className="chrome chrome-hover group flex h-full items-start gap-4 p-5">
              <div className="chrome-pill flex h-11 w-11 shrink-0 items-center justify-center rounded-xl">
                <CertIcon />
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="text-[15px] font-semibold leading-snug text-white">
                  {c.title}
                </h3>
                <p className="mt-1 text-sm text-[var(--muted)]">{c.issuer}</p>
                <div className="mt-2 flex items-center gap-3">
                  {c.year && (
                    <span className="font-mono text-xs text-[var(--muted-2)]">{c.year}</span>
                  )}
                  {c.url && (
                    <a
                      href={c.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-[var(--glow-strong)] opacity-0 transition-opacity group-hover:opacity-100"
                    >
                      {t.certificates.view} →
                    </a>
                  )}
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function CertIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="url(#cert-g)" strokeWidth="1.8">
      <defs>
        <linearGradient id="cert-g" x1="0" y1="0" x2="24" y2="24">
          <stop stopColor="#ffffff" />
          <stop offset="1" stopColor="#8aa8ff" />
        </linearGradient>
      </defs>
      <circle cx="12" cy="9" r="6" />
      <path d="M8.5 13.5 7 22l5-3 5 3-1.5-8.5" strokeLinejoin="round" />
    </svg>
  );
}
