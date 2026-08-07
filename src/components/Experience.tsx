"use client";

import { useLang } from "@/i18n/LanguageProvider";
import { experiences } from "@/data/experience";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

export function Experience() {
  const { t, lang } = useLang();

  return (
    <section id="experience" className="container-x scroll-mt-24 py-24 sm:py-32">
      <SectionHeading
        eyebrow={t.experience.eyebrow}
        title={t.experience.title}
        subtitle={t.experience.subtitle}
      />

      <div className="relative mx-auto max-w-3xl">
        {/* linha vertical da timeline */}
        <div
          className="absolute left-[19px] top-2 bottom-2 w-px sm:left-1/2 sm:-translate-x-1/2"
          style={{
            background:
              "linear-gradient(to bottom, transparent, var(--border-strong) 12%, var(--border-strong) 88%, transparent)",
          }}
        />

        <div className="space-y-6">
          {experiences.map((exp, i) => (
            <Reveal key={exp.id} delay={i * 120}>
              <div className="relative pl-12 sm:pl-0">
                {/* ponto na linha */}
                <span
                  className={`absolute left-[13px] top-6 z-10 h-3 w-3 rounded-full sm:left-1/2 sm:-translate-x-1/2 ${
                    exp.highlight ? "bg-white shadow-[0_0_16px_4px_var(--glow-strong)]" : "bg-[var(--muted-2)]"
                  }`}
                />

                {/* card (alterna lados no desktop) */}
                <div className={`sm:w-1/2 ${i % 2 === 0 ? "sm:pr-10" : "sm:ml-auto sm:pl-10"}`}>
                  <div
                    className={`chrome chrome-hover p-6 ${
                      exp.highlight ? "shadow-[0_0_40px_-16px_var(--glow-strong)]" : ""
                    }`}
                  >
                    <div className="mb-2 flex flex-wrap items-center gap-2">
                      <span className="font-mono text-xs text-[var(--muted-2)]">
                        {exp.period[lang]}
                      </span>
                      {exp.current && (
                        <span className="chrome-pill flex items-center gap-1.5 rounded-full px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-[var(--foreground)]">
                          <span className="relative flex h-1.5 w-1.5">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-green-400" />
                          </span>
                          {t.experience.current}
                        </span>
                      )}
                    </div>

                    <h3 className="text-lg font-semibold leading-snug text-white">
                      {exp.role[lang]}
                    </h3>
                    <p className="mt-1 text-sm font-medium text-[var(--foreground)]">{exp.org}</p>
                    {exp.location && (
                      <p className="mt-0.5 text-xs text-[var(--muted-2)]">{exp.location}</p>
                    )}

                    <p className="mt-3 text-justify text-sm leading-relaxed text-[var(--muted)]">
                      {exp.description[lang]}
                    </p>

                    {exp.tags && exp.tags.length > 0 && (
                      <div className="mt-4 flex flex-wrap gap-1.5">
                        {exp.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-md border border-[var(--border)] px-2 py-0.5 font-mono text-[11px] text-[var(--muted)]"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
