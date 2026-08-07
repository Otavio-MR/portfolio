// A MARCA do Otávio: o pinguim low-poly (public/penguin.png).
// Renderiza a imagem direto, sem placeholder, pra não piscar outro ícone antes.

export function PenguinLogo({
  size = 36,
  className = "",
  priority = false,
}: {
  size?: number;
  className?: string;
  priority?: boolean;
}) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/penguin.png"
      alt="Otávio"
      width={size}
      height={size}
      decoding="async"
      fetchPriority={priority ? "high" : "auto"}
      className={className}
      style={{ width: size, height: size, objectFit: "contain" }}
    />
  );
}
