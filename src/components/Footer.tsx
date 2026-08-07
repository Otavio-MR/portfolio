"use client";

import { useLang } from "@/i18n/LanguageProvider";
import { profile } from "@/data/profile";
import { PenguinLogo } from "./PenguinLogo";

export function Footer() {
  const { t } = useLang();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--border)]">
      <div className="container-x flex flex-col items-center gap-4 py-10 text-center sm:flex-row sm:justify-between sm:text-left">
        <div className="flex items-center gap-2.5">
          <PenguinLogo size={26} />
          <span className="text-sm font-medium text-white">{profile.name}</span>
        </div>
        <p className="text-xs text-[var(--muted-2)]">
          © {year} {profile.name}. {t.footer.rights}
        </p>
        <p className="text-xs text-[var(--muted-2)]">{t.footer.builtWith}</p>
      </div>
    </footer>
  );
}
