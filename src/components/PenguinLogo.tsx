"use client";

import { useEffect, useState } from "react";

// A MARCA do Otávio: o pinguim low-poly (public/penguin.png).
// Começa mostrando o SVG de fallback e só troca pela imagem real
// quando ela existir e carregar (evita ícone quebrado enquanto o
// arquivo não é adicionado).
export function PenguinLogo({
  size = 36,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  const [hasImage, setHasImage] = useState(false);

  useEffect(() => {
    const img = new window.Image();
    img.onload = () => setHasImage(true);
    img.onerror = () => setHasImage(false);
    img.src = "/penguin.png";
  }, []);

  if (hasImage) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src="/penguin.png"
        alt="Otávio"
        width={size}
        height={size}
        className={className}
        style={{ width: size, height: size, objectFit: "contain" }}
      />
    );
  }

  return <PenguinFallback size={size} className={className} />;
}

// Fallback vetorial (some assim que a imagem oficial é adicionada).
function PenguinFallback({ size, className }: { size: number; className: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="peng-body" x1="32" y1="4" x2="32" y2="60" gradientUnits="userSpaceOnUse">
          <stop stopColor="#3a3a42" />
          <stop offset="0.55" stopColor="#17171b" />
          <stop offset="1" stopColor="#060608" />
        </linearGradient>
        <linearGradient id="peng-rim" x1="32" y1="4" x2="32" y2="60" gradientUnits="userSpaceOnUse">
          <stop stopColor="#ffffff" stopOpacity="0.9" />
          <stop offset="0.4" stopColor="#ffffff" stopOpacity="0.15" />
          <stop offset="1" stopColor="#ffffff" stopOpacity="0.05" />
        </linearGradient>
        <linearGradient id="peng-beak" x1="32" y1="34" x2="32" y2="46" gradientUnits="userSpaceOnUse">
          <stop stopColor="#ffb347" />
          <stop offset="1" stopColor="#f0850e" />
        </linearGradient>
      </defs>
      <path
        d="M32 4c13 0 22 9.5 22 24 0 16-9.8 28-22 28S10 44 10 28C10 13.5 19 4 32 4Z"
        fill="url(#peng-body)"
        stroke="url(#peng-rim)"
        strokeWidth="1.5"
      />
      <path d="M32 20c8 0 13 6.5 13 16 0 11-6 19-13 19s-13-8-13-19c0-9.5 5-16 13-16Z" fill="#f4f5f7" />
      <circle cx="25.5" cy="27" r="3.1" fill="#0a0a0c" />
      <circle cx="38.5" cy="27" r="3.1" fill="#0a0a0c" />
      <circle cx="26.4" cy="26" r="1" fill="#ffffff" />
      <circle cx="39.4" cy="26" r="1" fill="#ffffff" />
      <path d="M32 33.5 38 40 32 44 26 40Z" fill="url(#peng-beak)" />
    </svg>
  );
}
