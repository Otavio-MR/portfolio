"use client";

import { useLang } from "@/i18n/LanguageProvider";
import { profile } from "@/data/profile";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

export function About() {
  const { t, lang } = useLang();
  const paragraphs = profile.bio[lang].split("\n\n");

  return (
    <section id="about" className="container-x scroll-mt-24 py-24 sm:py-32">
      <SectionHeading eyebrow={t.about.eyebrow} title={t.about.title} />

      <div className="grid gap-6 md:grid-cols-5">
        {/* bio */}
        <Reveal className="md:col-span-3">
          <div className="chrome chrome-hover h-full p-8">
            <div className="space-y-4 text-justify text-[15px] leading-relaxed text-[var(--muted)]">
              {paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
        </Reveal>

        {/* stack */}
        <Reveal delay={120} className="md:col-span-2">
          <div className="chrome chrome-hover h-full p-8">
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-widest text-[var(--muted-2)]">
              {t.about.stackTitle}
            </h3>
            <div className="flex flex-wrap gap-2">
              {profile.stack.map((tech) => (
                <span
                  key={tech}
                  className="chrome-pill rounded-lg px-3 py-1.5 text-sm text-[var(--foreground)] transition-colors hover:text-white"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
