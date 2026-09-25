import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Curva cubic-bezier (mesma definição do CSS) resolvida por bisseção em x.
// Substitui o plugin CustomEase, que entrava no bundle de todas as páginas só
// para registrar esta curva.
const cubicBezier = (x1: number, y1: number, x2: number, y2: number) => {
  const at = (s: number, p1: number, p2: number) =>
    3 * p1 * s * (1 - s) ** 2 + 3 * p2 * s * s * (1 - s) + s ** 3;
  return (t: number) => {
    if (t <= 0) return 0;
    if (t >= 1) return 1;
    let lo = 0;
    let hi = 1;
    let s = t;
    for (let i = 0; i < 20; i++) {
      s = (lo + hi) / 2;
      if (at(s, x1, x2) < t) lo = s;
      else hi = s;
    }
    return at(s, y1, y2);
  };
};

gsap.registerEase("gearEase", cubicBezier(0.45, 0, 0.2, 1));

export { gsap, ScrollTrigger };
