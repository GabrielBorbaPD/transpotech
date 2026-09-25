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

    // O ticker só fica registrado enquanto o glow está a caminho do alvo; ao
    // chegar, sai e volta no próximo mousemove.
    let ticking = false;
    const stopTicking = () => {
      if (!ticking) return;
      gsap.ticker.remove(ticker);
      ticking = false;
    };
    function ticker() {
      const diff = target.current - current.current;
      if (Math.abs(diff) < 0.05) {
        stopTicking();
        return;
      }
      current.current += diff * 0.12;
      apply();
    }

    let visible = false;
    // O mousemove sempre grava o alvo; o ticker roda apenas com o footer na tela.
    const onMove = (event: MouseEvent) => {
      target.current = (event.clientX / window.innerWidth) * 100;
      if (visible && !ticking) {
        gsap.ticker.add(ticker);
        ticking = true;
      }
    };

    const resize = new ResizeObserver(() => {
      width = footer.clientWidth;
      apply();
    });

    const visibility = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !visible) {
        // Fora da tela o glow não seguiu o cursor: entra já na posição atual,
        // como se o ticker tivesse rodado o tempo todo.
        current.current = target.current;
        apply();
        visible = true;
      } else if (!entry.isIntersecting && visible) {
        stopTicking();
        visible = false;
      }
    });

    window.addEventListener("mousemove", onMove, { passive: true });
    resize.observe(footer);
    visibility.observe(footer);

    return () => {
      stopTicking();
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
