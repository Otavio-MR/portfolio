"use client";

import { useLang } from "@/i18n/LanguageProvider";
import { projects } from "@/data/projects";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

export function Projects() {
  const { t, lang } = useLang();

  return (
    <section id="projects" className="scroll-mt-24 py-24 sm:py-32">
      <div className="container-x">
        <SectionHeading
          eyebrow={t.projects.eyebrow}
          title={t.projects.title}
          subtitle={t.projects.subtitle}
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <Reveal
              key={p.id}
              delay={(i % 3) * 100}
              className={p.featured ? "sm:col-span-2 lg:col-span-2" : ""}
            >
              <article className="chrome chrome-hover group flex h-full flex-col p-6">
                {/* topo: ano + destaque + status */}
                <div className="mb-4 flex items-center justify-between gap-2">
                  <span className="font-mono text-xs text-[var(--muted-2)]">
                    {p.year}
                  </span>
                  <div className="flex items-center gap-2">
                    {p.featured && (
                      <span className="chrome-pill rounded-full px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-wider text-[var(--glow-strong)]">
                        {t.projects.featured}
                      </span>
                    )}
                    <StatusBadge
                      online={p.status === "online"}
                      label={p.status === "online" ? t.projects.online : t.projects.offline}
                    />
                  </div>
                </div>

                <h3 className="text-xl font-semibold tracking-tight text-white transition-colors group-hover:text-white">
                  {p.title}
                </h3>

                <p className="mt-3 flex-1 text-justify text-sm leading-relaxed text-[var(--muted)]">
                  {p.description[lang]}
                </p>

                {/* tags */}
                <div className="mt-5 flex flex-wrap gap-1.5">
                  {p.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md border border-[var(--border)] px-2 py-0.5 font-mono text-[11px] text-[var(--muted)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* links */}
                {(p.repo || p.live) && (
                  <div className="mt-6 flex items-center gap-4 border-t border-[var(--border)] pt-4">
                    {p.repo && (
                      <a
                        href={p.repo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-sm text-[var(--muted)] transition-colors hover:text-white"
                      >
                        <GithubIcon /> {t.projects.viewCode}
                      </a>
                    )}
                    {p.live && (
                      <a
                        href={p.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center gap-1.5 text-sm transition-colors ${
                          p.status === "online"
                            ? "font-medium text-white hover:text-[var(--glow-strong)]"
                            : "text-[var(--muted)] hover:text-white"
                        }`}
                      >
                        <ExternalIcon /> {t.projects.viewLive}
                      </a>
                    )}
                  </div>
                )}
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function StatusBadge({ online, label }: { online: boolean; label: string }) {
  return (
    <span className="chrome-pill flex items-center gap-1.5 rounded-full px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-[var(--muted)]">
      {online ? (
        <span className="relative flex h-1.5 w-1.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
          <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-green-400" />
        </span>
      ) : (
        <span className="h-1.5 w-1.5 rounded-full bg-[var(--muted-2)]" />
      )}
      {label}
    </span>
  );
}

function GithubIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 .5C5.7.5.5 5.7.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.2.8-.5v-1.7c-3.2.7-3.9-1.5-3.9-1.5-.5-1.3-1.3-1.7-1.3-1.7-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.7 1.3 3.4 1 .1-.8.4-1.3.7-1.6-2.6-.3-5.3-1.3-5.3-5.8 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.3 1.2a11.4 11.4 0 0 1 6 0C17.3 5 18.3 5.3 18.3 5.3c.6 1.6.2 2.8.1 3.1.8.8 1.2 1.8 1.2 3.1 0 4.5-2.7 5.5-5.3 5.8.4.4.8 1.1.8 2.2v3.3c0 .3.2.6.8.5 4.6-1.5 7.9-5.8 7.9-10.9C23.5 5.7 18.3.5 12 .5Z" />
    </svg>
  );
}

function ExternalIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14 21 3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
