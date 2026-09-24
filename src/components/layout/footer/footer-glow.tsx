"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";

/**
 * Blur laranja no rodapé do footer — acompanha o cursor horizontalmente
 * com lerp (fator 0.12) via gsap.ticker + quickSetter.
 */
export function FooterGlow() {
  const ref = useRef<HTMLDivElement>(null);
  const target = useRef(50);
  const current = useRef(50);

  useEffect(() => {
    const el = ref.current;
    const footer = el?.parentElement;
    if (!el || !footer) return;

    // Anima transform em vez de `left` (sem relayout do blur de 520px a cada
    // tick). O left fica fixo em 50%; o deslocamento em px equivale ao antigo
    // left em % da largura do footer.
    // Ao ler o transform, o GSAP funde o `translate` do -translate-x-1/2 (já em
    // px) no próprio x e zera o `translate`; a centragem passa para xPercent
    // para o x ficar livre para o deslocamento.
    gsap.set(el, { xPercent: -50, x: 0 });
    const xSet = gsap.quickSetter(el, "x", "px");
    let width = footer.clientWidth;
    const apply = () => xSet(((current.current - 50) / 100) * width);

    const ticker = () => {
      const diff = target.current - current.current;
      if (Math.abs(diff) < 0.05) return;
      current.current += diff * 0.12;
      apply();
    };

    // O mousemove só grava o alvo; o ticker roda apenas com o footer na tela.
    const onMove = (event: MouseEvent) => {
      target.current = (event.clientX / window.innerWidth) * 100;
    };

    const resize = new ResizeObserver(() => {
      width = footer.clientWidth;
      apply();
    });

    let running = false;
    const visibility = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !running) {
        // Fora da tela o glow não seguiu o cursor: entra já na posição atual,
        // como se o ticker tivesse rodado o tempo todo.
        current.current = target.current;
        apply();
        gsap.ticker.add(ticker);
        running = true;
      } else if (!entry.isIntersecting && running) {
        gsap.ticker.remove(ticker);
        running = false;
      }
    });

    window.addEventListener("mousemove", onMove, { passive: true });
    resize.observe(footer);
    visibility.observe(footer);

    return () => {
      gsap.ticker.remove(ticker);
      window.removeEventListener("mousemove", onMove);
      resize.disconnect();
      visibility.disconnect();
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none absolute -bottom-60 left-1/2 size-[520px] -translate-x-1/2 rounded-full bg-primary-500/60 blur-[160px]"
    />
  );
}
