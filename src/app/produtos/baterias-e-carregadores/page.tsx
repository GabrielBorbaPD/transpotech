import type { Metadata } from "next";
import { baseOpenGraph } from "@/lib/metadata";

import { BateriasHeroSection } from "@/components/baterias-e-carregadores/hero-section/hero-section";
import { LeadFormSection } from "@/components/layout/lead-form-section/lead-form-section";
import { TechSection } from "@/components/baterias-e-carregadores/tech-section/tech-section";
import { NeedsSection } from "@/components/baterias-e-carregadores/needs-section/needs-section";
import { BatteryTypesSection } from "@/components/baterias-e-carregadores/battery-types-section/battery-types-section";
import { RequestStepsSection } from "@/components/baterias-e-carregadores/request-steps-section/request-steps-section";
import { WhyTranspotechSection } from "@/components/baterias-e-carregadores/why-transpotech-section/why-transpotech-section";
import { FaqSection } from "@/components/layout/faq/faq-section";
import { getFaqItems } from "@/sanity/queries/faq";
import { CtaSection } from "@/components/layout/cta/cta-section";
import { HoverMesh } from "@/components/layout/hover-mesh";
import { DarkAmbient } from "@/components/layout/dark-ambient";

export const metadata: Metadata = {
  title: "Baterias e Carregadores para Empilhadeiras",
  description:
    "Baterias de tração e carregadores para empilhadeiras elétricas. Soluções de alto desempenho para operações contínuas e eletrificação da frota.",
  openGraph: {
    ...baseOpenGraph,
    title: "Baterias e Carregadores | TranspoTech",
    description:
      "Baterias de tração e carregadores para empilhadeiras elétricas.",
  },
};

export default async function BateriasPage() {
  const faqItems = await getFaqItems("baterias");

  return (
    <main>
      <BateriasHeroSection />

      {/* Grupo claro 1 — Especialistas em baterias (Tecnologia) + Captação +
          O que sua operação precisa. Uma única malha cobre tudo, sem cortes. */}
      <div className="relative isolate bg-background">
        <HoverMesh className="pointer-events-none absolute inset-0 -z-10" />
        <TechSection />
        <LeadFormSection
          id="solicitar-baterias"
          titleTop="Energia para a frota"
          titleBottom="trabalhar sem parar"
          description="Baterias de lítio e carregadores para manter sua frota operando em todos os turnos. Conte sobre a sua operação e a TranspoTech recomenda a solução ideal, com cotação."
          messagePlaceholder="Modelo do equipamento, turnos de trabalho e tipo de bateria/carregador."
          submitLabel="Solicitar cotação"
        />
        <NeedsSection />
      </div>

      {/* Bloco dark — Tipos de baterias */}
      <div className="relative isolate bg-[#181616]">
        <DarkAmbient />
        <BatteryTypesSection />
      </div>

      {/* Grupo claro 3 — Como funciona + Por que TranspoTech + FAQ (malha só até
          o Por que) */}
      <div className="relative isolate bg-background">
        <div className="relative">
          <HoverMesh className="pointer-events-none absolute inset-0 -z-10" />
          <RequestStepsSection />
          <WhyTranspotechSection />
        </div>
        <FaqSection
          titleRegular="Dúvidas frequentes sobre "
          titleAccent="baterias e carregadores"
          items={faqItems}
        />
      </div>

      <CtaSection
        titleRegular="Precisa melhorar a disponibilidade dos seus "
        titleAccent="equipamentos elétricos?"
        description="Fale com a TranspoTech e receba orientação para cotar baterias, carregadores ou avaliar a rotina de energia da operação."
        descriptionWidth="560px"
        ctaLabel="Solicitar cotação"
        ctaHref="#solicitar-baterias"
      />
    </main>
  );
}
