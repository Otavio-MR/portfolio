"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { useLang } from "@/i18n/LanguageProvider";

// Galeria de prints em tela cheia (lightbox). Abre sem sair do site,
// sem login e sem instalar nada. Navega por setas, teclado e swipe.
export function Lightbox({
  images,
  title,
  startIndex = 0,
  onClose,
}: {
  images: string[];
  title?: string;
  startIndex?: number;
  onClose: () => void;
}) {
  const { t } = useLang();
  const [i, setI] = useState(startIndex);
  const touchX = useRef<number | null>(null);

  const prev = useCallback(
    () => setI((v) => (v - 1 + images.length) % images.length),
    [images.length]
  );
  const next = useCallback(
    () => setI((v) => (v + 1) % images.length),
    [images.length]
  );

  // teclado + trava o scroll do fundo
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      else if (e.key === "ArrowLeft") prev();
      else if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [onClose, prev, next]);

  const multiple = images.length > 1;

  return createPortal(
    <div
      className="fixed inset-0 z-[100] flex flex-col bg-black/90 backdrop-blur-xl"
      role="dialog"
      aria-modal="true"
      aria-label={title ?? "Galeria de imagens"}
      onClick={onClose}
    >
      {/* topo: título + contador + fechar */}
      <div
        className="flex items-center justify-between px-5 py-4"
        onClick={(e) => e.stopPropagation()}
      >
        <span className="text-sm font-medium text-white">
          {title}
          {multiple && (
            <span className="ml-2 font-mono text-xs text-[var(--muted)]">
              {i + 1} / {images.length}
            </span>
          )}
        </span>
        <button
          onClick={onClose}
          aria-label={t.projects.close}
          className="chrome-pill flex items-center gap-2 rounded-lg px-3.5 py-2 text-sm font-semibold text-white transition-all hover:bg-white/10 hover:text-[var(--glow-strong)]"
        >
          {t.projects.close}
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
            <path d="M6 6l12 12M18 6 6 18" strokeLinecap="round" />
          </svg>
        </button>
      </div>

      {/* imagem */}
      <div
        className="relative flex flex-1 items-center justify-center overflow-hidden px-4 pb-4 sm:px-16"
        onClick={(e) => e.stopPropagation()}
        onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
        onTouchEnd={(e) => {
          if (touchX.current === null) return;
          const dx = e.changedTouches[0].clientX - touchX.current;
          if (dx > 50) prev();
          else if (dx < -50) next();
          touchX.current = null;
        }}
      >
        {multiple && (
          <button
            onClick={prev}
            aria-label="Anterior"
            className="chrome-pill absolute left-2 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full text-white transition-transform hover:scale-110 sm:left-5"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 6l-6 6 6 6" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </button>
        )}

        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          key={images[i]}
          src={images[i]}
          alt={`${title ?? "Tela"} ${i + 1}`}
          className="max-h-full max-w-full rounded-xl border border-[var(--border)] object-contain shadow-[0_30px_80px_-20px_rgba(0,0,0,0.9)]"
          style={{ animation: "lb-fade .35s ease" }}
        />

        {multiple && (
          <button
            onClick={next}
            aria-label="Próxima"
            className="chrome-pill absolute right-2 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full text-white transition-transform hover:scale-110 sm:right-5"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </button>
        )}
      </div>

      {/* dots */}
      {multiple && (
        <div className="flex items-center justify-center gap-2 pb-6" onClick={(e) => e.stopPropagation()}>
          {images.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setI(idx)}
              aria-label={`Ir para a tela ${idx + 1}`}
              className={`h-2 rounded-full transition-all ${
                idx === i ? "w-6 bg-white" : "w-2 bg-white/30 hover:bg-white/60"
              }`}
            />
          ))}
        </div>
      )}

      {/* dica de como fechar */}
      <div className="pointer-events-none pb-5 text-center text-xs text-[var(--muted-2)]">
        {t.projects.closeHint}
      </div>

      <style>{`@keyframes lb-fade{from{opacity:0;transform:scale(.98)}to{opacity:1;transform:none}}`}</style>
    </div>,
    document.body
  );
}
