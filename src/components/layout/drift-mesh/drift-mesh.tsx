"use client";

import { useEffect, useRef, type CSSProperties } from "react";
import { withGsap, type Gsap } from "@/lib/load-gsap";

// Malha grande que "anda" sozinha pelo fundo (referência:
// terminal-industries.com/about). Mesmo desenho do HoverMesh (pontos +
// linhas laranja), mas em células bem maiores e revelada por blobs de
// máscara que vagam pela área — a malha aparece numa região, esvanece e
// surge em outra, sem depender do cursor.

// Célula da grade (HoverMesh usa 18px; aqui bem maior, como na referência).
const SPACING = 100;

// Blobs de revelação: raio + posição inicial (em % do container).
// Raios contidos para a união deles não cobrir a hero inteira — é o
// contraste entre região revelada e o resto que dá o efeito de "andar".
const BLOBS = [
  { r: 300, x: 22, y: 30 },
  { r: 240, x: 78, y: 22 },
  { r: 210, x: 55, y: 78 },
];

// Camada base: malha levemente visível em toda a área, mesmo fora dos blobs.
const BASE_VISIBILITY = 0.14;

// Fade vertical (mesma máscara da MeshBackground em imagem): topo visível →
// base transparente. Vai num wrapper próprio porque a máscara dos blobs é
// inline no elemento da malha — camadas extras de mask compõem por união,
// não por interseção, então o fade não pode entrar na mesma mask.
const FADE =
  "linear-gradient(to bottom, #000 0%, rgba(0,0,0,0.55) 35%, transparent 75%)";

export function DriftMesh({
  className,
  fade = false,
  speed = 1,
}: {
  className?: string;
  /** Apaga a malha de cima para baixo — para heros em wrappers altos onde a
      malha deve sumir antes do conteúdo seguinte (substitui a MeshBackground). */
  fade?: boolean;
  /** Multiplicador da velocidade dos blobs (1 = padrão das heros). */
  speed?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    // Fora da viewport os tweens ficam pausados: animar as variáveis da mask
    // repinta a área inteira a cada frame, e o footer monta uma instância em
    // toda página. Pausado, o tween não completa e não sorteia o próximo.
    // Trocar a mask por camadas movidas por transform não dá o mesmo pixel: as
    // camadas de mask compõem por união (1 − Π(1 − aᵢ)) antes de multiplicar a
    // malha, e camadas de conteúdo empilhadas somariam a malha várias vezes.
    let visible = false;
    let started = false;
    let loaded: Gsap | undefined;
    let disposeGsap: (() => void) | undefined;

    // Os tweens só nascem na primeira entrada na viewport (o do footer, na
    // maioria das visitas, nunca). Até lá valem os fallbacks do var().
    const start = () => {
      started = true;
      disposeGsap = withGsap(({ gsap }) => {
        loaded = gsap;
        // Sem valor inicial explícito o GSAP parte de 0 (canto superior
        // esquerdo), ignorando o fallback do var() — então os blobs começam nas
        // posições definidas em BLOBS.
        BLOBS.forEach((b, i) => {
          el.style.setProperty(`--bx${i}`, `${b.x}%`);
          el.style.setProperty(`--by${i}`, `${b.y}%`);
        });

        // Cada blob vagueia para um alvo aleatório e re-sorteia ao chegar.
        BLOBS.forEach((_, i) => {
          const move = () => {
            gsap.to(el, {
              paused: !visible,
              [`--bx${i}`]: `${gsap.utils.random(5, 95, 1)}%`,
              [`--by${i}`]: `${gsap.utils.random(8, 92, 1)}%`,
              duration: gsap.utils.random(3, 6) / speed,
              ease: "sine.inOut",
              onComplete: move,
            });
          };
          move();
        });
      });
    };

    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (visible && !started) {
        start();
        return;
      }
      loaded?.getTweensOf(el).forEach((t) => (visible ? t.resume() : t.pause()));
    });
    observer.observe(el);

    return () => {
      observer.disconnect();
      disposeGsap?.();
      loaded?.killTweensOf(el);
    };
  }, [speed]);

  const mask = [
    // União (default de múltiplas camadas de mask): base fraca + blobs.
    `linear-gradient(rgba(0,0,0,${BASE_VISIBILITY}), rgba(0,0,0,${BASE_VISIBILITY}))`,
    ...BLOBS.map(
      (b, i) =>
        `radial-gradient(circle ${b.r}px at var(--bx${i}, ${b.x}%) var(--by${i}, ${b.y}%), rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.5) 45%, transparent 75%)`
    ),
  ].join(", ");

  const half = SPACING / 2;
  const style: CSSProperties = {
    backgroundImage: [
      // Ponto na interseção das linhas (centro de cada célula).
      "radial-gradient(circle, rgba(255,148,72,0.5) 0 2px, transparent 3px)",
      `linear-gradient(to right, transparent 0 ${half - 0.5}px, rgba(255,148,72,0.2) ${half - 0.5}px ${half + 0.5}px, transparent ${half + 0.5}px)`,
      `linear-gradient(to bottom, transparent 0 ${half - 0.5}px, rgba(255,148,72,0.2) ${half - 0.5}px ${half + 0.5}px, transparent ${half + 0.5}px)`,
    ].join(", "),
    backgroundSize: `${SPACING}px ${SPACING}px`,
    maskImage: mask,
    WebkitMaskImage: mask,
  };

  return (
    <div
      aria-hidden
      className={className}
      style={fade ? { maskImage: FADE, WebkitMaskImage: FADE } : undefined}
    >
      <div ref={ref} className="absolute inset-0" style={style} />
    </div>
  );
}
