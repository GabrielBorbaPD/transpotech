import { PhotoHero } from "@/components/layout/photo-hero";
import heroImage from "@/assets/images/hero-sustentabilidade.webp";

export function SustentabilidadeHeroSection() {
  return (
    <PhotoHero
      image={heroImage}
      // Gradiente sobe além do título para garantir a legibilidade sobre a imagem
      shadeStops={[40, 94]}
      contentClassName="max-w-[900px]"
      titleClassName="text-h2 text-neutral-50"
      // Duas linhas: quebra forçada antes de "responsabilidade..."
      titleSegments={[
        {
          text: "Sustentabilidade, inclusão e",
          className: "font-normal",
          br: true,
        },
        {
          text: "responsabilidade na intralogística",
          className: "font-bold text-primary-500 lg:whitespace-nowrap",
        },
      ]}
      descriptionClassName="max-w-[480px]"
      description="Iniciativas de sustentabilidade, inclusão, comunidade e governança para um futuro mais responsável."
      cta={{ href: "#destaques", label: "Conhecer iniciativas ESG" }}
    />
  );
}
