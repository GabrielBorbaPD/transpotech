"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import Image, { type StaticImageData } from "next/image";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import card1 from "@/assets/images/stats/card1.png";
import card2 from "@/assets/images/stats/card2.png";
import illoCar from "@/assets/images/stats/illustration-car.webp";
import illoMap from "@/assets/images/stats/map-illustration.webp";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { ROUTES } from "@/lib/routes";

// Conta o número principal (primeiro grupo de dígitos), preservando
// prefixos/sufixos: "+3700", "+400", "+11".
const countValue = (value: string, progress: number) =>
  value.replace(/\d+/, (digits) =>
    String(Math.round(parseInt(digits, 10) * progress))
  );

type BoxArt = { width: number; height: number; right: number; top: number };

type Stat = {
  value: string;
  label: ReactNode;
  labelWidth: number;
  image: StaticImageData;
  // "contain" = ilustração ancorada à direita (padrão desta seção);
  // "map" = mapa do Brasil, deslocado e ampliado;
  // BoxArt = caixa absoluta exata do Figma, igual à seção "A estrutura que
  // sustenta cada operação" (quem somos), ancorada pela direita.
  art: "contain" | "map" | BoxArt;
};

const stats: Stat[] = [
  {
    value: "+3700",
    label: "Empilhadeiras locadas operando ativamente em diversos segmentos",
    labelWidth: 178,
    image: card1,
    art: "contain",
  },
  {
    value: "+670",
    label: "Cidades atendidas",
    labelWidth: 165,
    image: illoMap,
    art: "map",
  },
  {
    value: "+400",
    label: (
      <>
        Mecânicos (as)
        <br />
        para manutenção
        <br />
        preventiva e corretiva
      </>
    ),
    labelWidth: 157,
    image: card2,
    art: "contain",
  },
  {
    value: "+360",
    label: (
      <>
        Carros oficinas
        <br />
        em + 15 estados
      </>
    ),
    labelWidth: 163,
    image: illoCar,
    art: { width: 236.4, height: 236.08, right: -42, top: -26 },
  },
];

export function ExperienceSection() {
  const cardsRef = useRef<HTMLDivElement>(null);
  const numberRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const cardElRefs = useRef<(HTMLDivElement | null)[]>([]);
  // Card "ativo" no mobile: aquele que está passando pelo centro da viewport.
  // No desktop o blur/zoom seguem o hover (este estado é ignorado em lg+).
  const [activeCard, setActiveCard] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const idx = cardElRefs.current.indexOf(
              entry.target as HTMLDivElement
            );
            if (idx >= 0) setActiveCard(idx);
          }
        }
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    );
    cardElRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const el = cardsRef.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    // Zera todos os contadores antes de entrar na viewport
    stats.forEach((s, i) => {
      const node = numberRefs.current[i];
      if (node) node.textContent = countValue(s.value, 0);
    });

    const counters = stats.map(() => ({ progress: 0 }));
    const tweens: gsap.core.Tween[] = [];

    const trigger = ScrollTrigger.create({
      trigger: el,
      start: "top 70%",
      once: true,
      onEnter: () => {
        stats.forEach((s, i) => {
          const tween = gsap.to(counters[i], {
            progress: 1,
            duration: 1.8,
            ease: "power3.out", // equivale ao easeOut cúbico original: 1 - (1-t)^3
            onUpdate: () => {
              const node = numberRefs.current[i];
              if (node) node.textContent = countValue(s.value, counters[i].progress);
            },
          });
          tweens.push(tween);
        });
      },
    });

    return () => {
      trigger.kill();
      tweens.forEach((t) => t.kill());
    };
  }, []);

  return (
    <Section className="relative isolate flex flex-col items-start gap-10 overflow-hidden lg:gap-16">
      {/* Cabeçalho */}
      <div className="flex w-[680px] max-w-full flex-col gap-6">
        <div className="flex w-[660px] max-w-full flex-col gap-4">
          <p className="text-body font-semibold leading-[1.35] text-secondary-600">
            EXPERIÊNCIA
          </p>
          <h2 className="text-h2 font-normal text-neutral-800">
            Mais de 88% do Brasil{" "}
            <br className="hidden lg:inline" />
            já conta{" "}
            <span className="font-bold text-primary-500">
              com a TranspoTech
            </span>
          </h2>
        </div>
        <p className="w-[510px] max-w-full text-body leading-[1.35] text-neutral-600">
          Escala, equipe e infraestrutura para garantir disponibilidade,
          agilidade e suporte técnico em todo o Sul e Sudeste.
        </p>
      </div>

      {/* Cards */}
      <div ref={cardsRef} className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:flex">
        {stats.map((s, i) => (
          <div
            key={s.value}
            ref={(node) => {
              cardElRefs.current[i] = node;
            }}
            className="group relative flex min-h-[160px] flex-1 flex-col gap-1 overflow-hidden rounded-3xl bg-[#f9f9f9] p-4 lg:h-[172px] lg:p-5"
          >
            {/* Ilustração à direita — zoom no hover (desktop) / no card ativo (mobile) */}
            {typeof s.art === "object" ? (
              <div
                className={`pointer-events-none absolute select-none transition-transform duration-500 ease-out lg:scale-100 lg:group-hover:scale-105 ${
                  activeCard === i ? "scale-105" : "scale-100"
                }`}
                style={{
                  width: s.art.width,
                  height: s.art.height,
                  right: s.art.right,
                  top: s.art.top,
                }}
              >
                <Image
                  src={s.image}
                  alt=""
                  fill
                  sizes="320px"
                  className="object-cover"
                />
              </div>
            ) : (
              <Image
                src={s.image}
                alt=""
                fill
                sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                className={`pointer-events-none origin-right select-none object-contain object-right transition-transform duration-500 ease-out ${
                  s.art === "map"
                    ? `translate-x-[37%] lg:scale-[1.28] lg:group-hover:scale-[1.35] ${
                        activeCard === i ? "scale-[1.35]" : "scale-[1.28]"
                      }`
                    : `lg:scale-100 lg:group-hover:scale-105 ${
                        activeCard === i ? "scale-105" : "scale-100"
                      }`
                }`}
              />
            )}

            {/* Glow laranja radial no rodapé — hover (desktop) / card ativo (mobile) */}
            <div
              aria-hidden
              className={`pointer-events-none absolute left-1/2 top-[165px] h-[66px] w-[162px] -translate-x-1/2 rounded-full bg-primary-500 blur-[77px] transition-opacity duration-300 lg:opacity-0 lg:group-hover:opacity-100 ${
                activeCard === i ? "opacity-100" : "opacity-0"
              }`}
            />
            <div className="relative flex flex-col gap-0.5">
              <span
                ref={(node) => {
                  numberRefs.current[i] = node;
                }}
                className="font-heading text-h2 font-bold leading-[1.3] text-primary-500"
              >
                {s.value}
              </span>
              <span
                className="text-body leading-[1.35] text-neutral-600"
                style={{ maxWidth: s.labelWidth }}
              >
                {s.label}
              </span>
            </div>
          </div>
        ))}
      </div>

      <Button variant="primary" size="lg" href={ROUTES.CONTATO}>
        Quero reduzir meus custos
      </Button>
    </Section>
  );
}
