"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { dictionary, type Dict, type Lang } from "./dictionary";

type Ctx = {
  lang: Lang;
  setLang: (l: Lang) => void;
  toggle: () => void;
  t: Dict;
};

const LanguageContext = createContext<Ctx | null>(null);

const STORAGE_KEY = "portfolio_lang";

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>("pt");

  // recupera preferência salva (ou idioma do navegador) no client
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY) as Lang | null;
    if (saved === "pt" || saved === "en") {
      setLangState(saved);
    } else if (typeof navigator !== "undefined" && navigator.language.startsWith("en")) {
      setLangState("en");
    }
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    localStorage.setItem(STORAGE_KEY, l);
    document.documentElement.lang = l === "pt" ? "pt-BR" : "en";
  };

  const toggle = () => setLang(lang === "pt" ? "en" : "pt");

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggle, t: dictionary[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLang deve ser usado dentro de <LanguageProvider>");
  return ctx;
}
