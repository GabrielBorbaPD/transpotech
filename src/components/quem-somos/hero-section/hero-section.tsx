import { PhotoHero } from "@/components/layout/photo-hero";
import { ROUTES } from "@/lib/routes";
import heroImage from "@/assets/images/hero-quem-somos.webp";

export function QuemSomosHeroSection() {
  return (
    <PhotoHero
      image={heroImage}
      contentClassName="max-w-[820px]"
      titleClassName="text-balance text-h2 text-neutral-50"
      titleSegments={[
        {
          text: "Especialistas em empilhadeiras para ",
          className: "font-normal",
        },
        {
          text: "operações em movimento",
          className: "font-bold text-primary-500",
        },
      ]}
      descriptionClassName="max-w-[520px]"
      description="Desde 2001, a TranspoTech atua com soluções para movimentação de materiais, apoiando empresas que precisam de disponibilidade, segurança, eficiência e suporte técnico especializado."
      cta={{ href: ROUTES.CONTATO, label: "Fale com um especialista" }}
    />
  );
}
