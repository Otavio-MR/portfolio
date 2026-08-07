"use client";

import { useLang } from "@/i18n/LanguageProvider";
import { profile } from "@/data/profile";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

type Social = { key: string; label: string; href: string; icon: React.ReactNode };

export function Contact() {
  const { t } = useLang();
  const { links } = profile;

  const socials: Social[] = [
    links.github && { key: "gh", label: "GitHub", href: links.github, icon: <GithubIcon /> },
    links.linkedin && { key: "in", label: "LinkedIn", href: links.linkedin, icon: <LinkedinIcon /> },
    links.instagram && { key: "ig", label: "Instagram", href: links.instagram, icon: <InstagramIcon /> },
    links.discord && { key: "dc", label: "Discord", href: links.discord, icon: <DiscordIcon /> },
  ].filter(Boolean) as Social[];

  return (
    <section id="contact" className="container-x scroll-mt-24 py-24 sm:py-32">
      <SectionHeading
        eyebrow={t.contact.eyebrow}
        title={t.contact.title}
        subtitle={t.contact.subtitle}
      />

      <Reveal className="mx-auto max-w-2xl">
        <div className="chrome relative overflow-hidden p-10 text-center">
          <div className="pointer-events-none absolute inset-0 bg-glow-top opacity-60" />
          <div className="relative">
            {links.email && (
              <a href={`mailto:${links.email}`} className="btn btn-primary mx-auto">
                <MailIcon /> {t.contact.emailMe}
              </a>
            )}

            {links.email && (
              <p className="mt-4 font-mono text-sm text-[var(--muted)]">{links.email}</p>
            )}

            {socials.length > 0 && (
              <div className="mt-8 flex items-center justify-center gap-3">
                {socials.map((s) => (
                  <a
                    key={s.key}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    title={s.label}
                    className="chrome-pill flex h-11 w-11 items-center justify-center rounded-xl text-[var(--muted)] transition-all hover:-translate-y-1 hover:text-white"
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
      </Reveal>
    </section>
  );
}

function MailIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function GithubIcon() {
  return (
    <svg width="19" height="19" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 .5C5.7.5.5 5.7.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.2.8-.5v-1.7c-3.2.7-3.9-1.5-3.9-1.5-.5-1.3-1.3-1.7-1.3-1.7-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.7 1.3 3.4 1 .1-.8.4-1.3.7-1.6-2.6-.3-5.3-1.3-5.3-5.8 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.3 1.2a11.4 11.4 0 0 1 6 0C17.3 5 18.3 5.3 18.3 5.3c.6 1.6.2 2.8.1 3.1.8.8 1.2 1.8 1.2 3.1 0 4.5-2.7 5.5-5.3 5.8.4.4.8 1.1.8 2.2v3.3c0 .3.2.6.8.5 4.6-1.5 7.9-5.8 7.9-10.9C23.5 5.7 18.3.5 12 .5Z" />
    </svg>
  );
}
function LinkedinIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm6 0h3.8v1.7h.1c.5-.9 1.8-1.9 3.6-1.9 3.9 0 4.6 2.5 4.6 5.8V21h-4v-5.7c0-1.4 0-3.1-1.9-3.1s-2.2 1.5-2.2 3V21H9V9Z" />
    </svg>
  );
}
function InstagramIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}
function DiscordIcon() {
  return (
    <svg width="19" height="19" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.3 4.4A19.8 19.8 0 0 0 15.4 3l-.2.5c1.7.4 2.8 1 3.9 1.7a13.3 13.3 0 0 0-11.9 0C8.3 4.5 9.5 4 11.1 3.5L10.9 3A19.8 19.8 0 0 0 6 4.4C2.6 9.4 1.7 14.2 2.2 19a20 20 0 0 0 6 3l.8-1.4c-.9-.3-1.7-.7-2.4-1.2l.5-.4c4.5 2 9.3 2 13.7 0l.5.4c-.7.5-1.5.9-2.4 1.2l.8 1.4a20 20 0 0 0 6-3c.6-5.6-.8-10.4-3.8-14.6ZM8.9 15.8c-1 0-1.7-.9-1.7-2s.8-2 1.7-2 1.8.9 1.7 2c0 1.1-.8 2-1.7 2Zm6.2 0c-1 0-1.7-.9-1.7-2s.8-2 1.7-2 1.8.9 1.7 2c0 1.1-.7 2-1.7 2Z" />
    </svg>
  );
}
