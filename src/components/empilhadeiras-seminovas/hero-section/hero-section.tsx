import { getImageProps } from "next/image";
import { preload } from "react-dom";
import { Button } from "@/components/ui/button";
import { BlurRevealTitle } from "@/components/ui/blur-reveal-title";
import forklift from "@/assets/images/hero-image-empilhadeiras-seminovas.webp";
import forkliftMobile from "@/assets/images/hero-image-empilhadeiras-seminovas-mobile.webp";

// Mesmo ponto de corte do `md:` do Tailwind (48rem).
const DESKTOP_MEDIA = "(min-width: 48rem)";

export function SeminovasHeroSection() {
  // Art direction com <picture>: o navegador baixa só a versão da viewport.
  // Duas <Image preload> gerariam dois preloads sem media e a versão
  // escondida por CSS disputaria banda com o LCP.
  const common = {
    alt: "",
    fill: true,
    sizes: "100vw",
    loading: "eager",
    fetchPriority: "high",
  } as const;
  const {
    props: { srcSet: desktopSrcSet, src: desktopSrc },
  } = getImageProps({ ...common, src: forklift });
  const { props: mobileProps } = getImageProps({
    ...common,
    src: forkliftMobile,
  });

  // Um preload por viewport, cada um restrito à sua media.
  preload(mobileProps.src, {
    as: "image",
    imageSrcSet: mobileProps.srcSet,
    imageSizes: common.sizes,
    fetchPriority: "high",
    media: `not all and ${DESKTOP_MEDIA}`,
  });
  preload(desktopSrc, {
    as: "image",
    imageSrcSet: desktopSrcSet,
    imageSizes: common.sizes,
    fetchPriority: "high",
    media: DESKTOP_MEDIA,
  });

  return (
    <section data-header-hero className="relative w-full bg-background md:p-4">
      {/* Card de imagem — full-bleed no mobile; de md em diante, 16px de padding em volta e bordas de 20px */}
      <div className="relative flex h-svh md:h-[calc(100svh-2rem)] min-h-[560px] w-full overflow-hidden md:rounded-[20px]">
        {/* Imagem de fundo. Mobile: mesma cena em versão clara, corte do
            Figma na empilhadeira da esquerda (object-position ≈ 44%).
            Desktop: frota de empilhadeiras em operação. */}
        <picture className="contents">
          <source
            media={DESKTOP_MEDIA}
            srcSet={desktopSrcSet}
            sizes={common.sizes}
          />
          <img
            {...mobileProps}
            alt=""
            className="object-cover object-[44%_center] md:scale-[1.15] md:object-[72%_center]"
          />
        </picture>

        {/* Gradiente escuro (#01120E) da base para o topo, concentrado na base */}
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, #01120E 0%, rgba(1,18,14,0.85) 28%, rgba(1,18,14,0) 72%)",
          }}
        />

        {/* Conteúdo — parte inferior da hero (80px de padding inferior) */}
        <div className="relative z-10 mx-auto flex w-full max-w-[1440px] flex-col items-center justify-end gap-10 px-5 pb-20 text-center sm:px-6 lg:gap-8 lg:px-16">
          <div className="flex max-w-[563px] flex-col gap-4">
            <BlurRevealTitle
              tone="dark"
              className="text-h2 text-neutral-50"
              segments={[
                // Mobile: "Empilhadeiras" / "seminovas revisadas" / "e com
                // garantia". Desktop mantém as duas linhas de antes (os <br>
                // responsivos trocam o ponto de quebra por breakpoint).
                {
                  text: "Empilhadeiras ",
                  className: "font-normal",
                  br: "lg:hidden",
                },
                {
                  text: "seminovas ",
                  className: "font-normal",
                  br: "hidden lg:inline",
                },
                {
                  text: "revisadas ",
                  className: "font-bold text-primary-500",
                  br: "lg:hidden",
                },
                {
                  text: "e com garantia",
                  className: "font-bold text-primary-500",
                },
              ]}
            />
            <p className="mx-auto max-w-[420px] text-h6 font-normal leading-[1.3] text-neutral-50">
              Inspeção completa, procedência e suporte pós-venda, pronta entrega
              com confiança.
            </p>
          </div>

          {/* Leva à lista de classificados, na própria página. */}
          <Button
            variant="primary"
            size="lg"
            href="#disponiveis-agora"
            className="w-full lg:w-auto"
          >
            Solicitar cotação
          </Button>
        </div>
      </div>
    </section>
  );
}
