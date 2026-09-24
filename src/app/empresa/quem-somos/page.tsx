import type { Metadata } from "next";

import { QuemSomosHeroSection } from "@/components/quem-somos/hero-section/hero-section";
import { StatsSection } from "@/components/quem-somos/stats-section/stats-section";
import { UnitsGallerySection } from "@/components/quem-somos/units-gallery-section/units-gallery-section";
import { AboutSection } from "@/components/quem-somos/about-section/about-section";
import { StructureSection } from "@/components/quem-somos/structure-section/structure-section";
import { HistorySection } from "@/components/quem-somos/history-section/history-section";
import { CultureSection } from "@/components/quem-somos/culture-section/culture-section";
import { CareersSection } from "@/components/quem-somos/careers-section/careers-section";
import { EsgGovernanceSection } from "@/components/quem-somos/esg-section/esg-section";
import { WhyChooseSection } from "@/components/quem-somos/why-choose-section/why-choose-section";
import { CtaSection } from "@/components/layout/cta/cta-section";
import { HoverMesh } from "@/components/layout/hover-mesh";
import { DarkAmbient } from "@/components/layout/dark-ambient";
import { ROUTES } from "@/lib/routes";

export const metadata: Metadata = {
  title: "Quem Somos",
  description:
    "Conheça a TranspoTech: desde 2001 em soluções de intralogística, com +760 colaboradores, unidades em várias regiões e distribuição autorizada Linde, STILL e Baoli.",
  openGraph: {
    title: "Quem Somos | TranspoTech",
    description:
      "Soluções em intralogística para manter operações em movimento. Estrutura, história, cultura e ESG da TranspoTech.",
  },
};

export default function QuemSomosPage() {
  return (
    <main>
      {/* Hero com foto (padrão dos produtos/serviços) */}
      <QuemSomosHeroSection />

      {/* Grupo claro — números da estrutura */}
      <div className="relative isolate bg-[#fdfdfd]">
        <HoverMesh className="pointer-events-none absolute inset-0 -z-10" />
        <StatsSection />
      </div>

      {/* Abrangência nacional (mapa) logo após os números — bloco dark
          próprio, com o mesmo fundo/ambient das demais dark sections. */}
      <div className="relative isolate bg-[#181616]">
        <DarkAmbient />
        <StructureSection />
      </div>

      {/* Grupo claro — galeria das unidades */}
      <div className="relative isolate bg-[#fdfdfd]">
        <HoverMesh className="pointer-events-none absolute inset-0 -z-10" />
        <UnitsGallerySection />
      </div>

      {/* Bloco dark contínuo — institucional e história. Um só DarkAmbient
          para os blurs laranja/verde percorrerem as seções de forma contínua
          (mesmo padrão das dark sections das outras páginas). */}
      <div className="relative isolate bg-[#181616]">
        <DarkAmbient />
        <AboutSection />
        <HistorySection />
      </div>

      {/* Grupo claro — cultura, carreiras, ESG e por que escolher */}
      <div className="relative isolate bg-[#fdfdfd]">
        <HoverMesh className="pointer-events-none absolute inset-0 -z-10" />
        <CultureSection />
        <CareersSection />
        <EsgGovernanceSection />
        <WhyChooseSection />
      </div>

      <CtaSection
        titleRegular="Precisa de uma parceira para "
        titleAccent="sua operação intralogística?"
        description="Fale com a TranspoTech e encontre a solução ideal para compra, locação, manutenção ou melhoria da sua operação."
        ctaLabel="Falar com especialista"
        ctaHref={ROUTES.CONTATO}
        secondaryLabel="Solicitar orçamento"
        secondaryHref={`${ROUTES.CONTATO}#solicitacao`}
      />
    </main>
  );
}
