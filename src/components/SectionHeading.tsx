import { Reveal } from "./Reveal";

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <Reveal className="mx-auto mb-14 max-w-2xl text-center">
      <span className="chrome-pill inline-block rounded-full px-3 py-1 text-xs font-medium uppercase tracking-widest text-[var(--muted)]">
        {eyebrow}
      </span>
      <h2 className="text-chrome-soft mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base text-[var(--muted)]">{subtitle}</p>
      )}
    </Reveal>
  );
}
