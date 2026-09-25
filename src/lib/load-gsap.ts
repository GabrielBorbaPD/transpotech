// GSAP + ScrollTrigger (~117KB) fora do bundle inicial: nenhum componente
// importa "@/lib/gsap" estaticamente, então o chunk só baixa quando a primeira
// animação é preparada. Memoizado: um download e um registro de plugin/eases.
export type GsapModule = typeof import("./gsap");
export type Gsap = GsapModule["gsap"];

let pending: Promise<GsapModule> | null = null;

export function loadGsap(): Promise<GsapModule> {
  pending ??= import("./gsap").catch((error: unknown) => {
    // Permite nova tentativa (ex.: rede instável) na próxima animação.
    pending = null;
    throw error;
  });
  return pending;
}

/**
 * Roda `setup` quando o GSAP estiver carregado e devolve o cleanup para o
 * efeito: se o componente desmontar antes do download, `setup` não roda.
 * Falha no download: `setup` não roda e a animação não acontece.
 */
export function withGsap(
  setup: (mod: GsapModule) => (() => void) | void,
): () => void {
  let disposed = false;
  let cleanup: (() => void) | void;
  loadGsap().then(
    (mod) => {
      if (!disposed) cleanup = setup(mod);
    },
    () => {},
  );
  return () => {
    disposed = true;
    cleanup?.();
  };
}
