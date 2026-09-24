"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";

const GREEN_OFFSET = 220;
const FACTOR = 0.6;

// Perfil radial de um círculo de 520px a 25% com filter: blur(160px), calculado
// numericamente (disco ⊛ gaussiana σ=160) em passos de 10% do raio de 740px
// (260 + 3σ). Substitui o filtro: blur grande em movimento no scroll é caro no
// mobile e o Safari do iOS deixava de pintar parte do bloco dark.
const GLOW_ALPHAS = [18.3, 17.4, 14.8, 11.2, 7.4, 4.2, 2.0, 0.8, 0.3, 0.1, 0];

function glowGradient(colorVar: string): string {
  const stops = GLOW_ALPHAS.map(
    (a, i) => `color-mix(in srgb, var(${colorVar}) ${a}%, transparent) ${i * 10}%`
  );
  return `radial-gradient(circle closest-side, ${stops.join(", ")})`;
}

type DarkAmbientProps = {
  /** Deslocamento vertical inicial do blur verde (px). Padrão: 220. */
  greenOffset?: number;
};

/**
 * Ambiência das seções dark: blur laranja (direita) e verde (esquerda, abaixo)
 * que "andam" para baixo com o scroll via GSAP ScrollTrigger scrub.
 */
export function DarkAmbient({ greenOffset = GREEN_OFFSET }: DarkAmbientProps = {}) {
  const ref = useRef<HTMLDivElement>(null);
  const orangeRef = useRef<HTMLDivElement>(null);
  const greenRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const container = ref.current!;

    gsap.set(orangeRef.current, { xPercent: 25, y: 0 });
    gsap.set(greenRef.current, { xPercent: -25, y: greenOffset });

    gsap.to(orangeRef.current, {
      y: () => container.offsetHeight * FACTOR,
      ease: "none",
      scrollTrigger: {
        trigger: container,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });

    gsap.to(greenRef.current, {
      y: () => container.offsetHeight * FACTOR + greenOffset,
      ease: "none",
      scrollTrigger: {
        trigger: container,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });
  }, { scope: ref, dependencies: [greenOffset] });

  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
    >
      {/* Laranja — lado direito. A caixa de 520px segue sendo a referência
          de posição do GSAP; o gradiente transborda 480px (3σ do blur antigo). */}
      <div ref={orangeRef} className="absolute right-0 top-0 size-[520px]">
        <div
          className="absolute -inset-[480px]"
          style={{ backgroundImage: glowGradient("--color-primary-500") }}
        />
      </div>
      {/* Verde — lado esquerdo, um pouco abaixo */}
      <div ref={greenRef} className="absolute left-0 top-0 size-[520px]">
        <div
          className="absolute -inset-[480px]"
          style={{ backgroundImage: glowGradient("--color-secondary-600") }}
        />
      </div>
    </div>
  );
}
