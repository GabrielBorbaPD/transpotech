import type { Metadata } from "next";

import { AutomacaoHeroSection } from "@/components/automacao/hero-section/hero-section";
import { LeadFormSection } from "@/components/layout/lead-form-section/lead-form-section";
import { PartnershipSection } from "@/components/automacao/partnership-section/partnership-section";
import { BenefitsSection } from "@/components/automacao/benefits-section/benefits-section";
import { SolutionsSection } from "@/components/automacao/solutions-section/solutions-section";
import { ProcessSection } from "@/components/automacao/process-section/process-section";
import { SegmentsSection } from "@/components/automacao/segments-section/segments-section";
// Seção "O que nossos clientes dizem" temporariamente oculta a pedido do cliente.
// import { CasesSection } from "@/components/automacao/cases-section/cases-section";
import { FaqSection } from "@/components/layout/faq/faq-section";
import { faqAutomacao } from "@/data/faq-automacao";
import { CtaSection } from "@/components/layout/cta/cta-section";
import { HoverMesh } from "@/components/layout/hover-mesh";
import { DarkAmbient } from "@/components/layout/dark-ambient";
import { ROUTES } from "@/lib/routes";

export const metadata: Metadata = {
  title: "Automação Intralogística",
  description:
    "Soluções de automação intralogística com a Dematic. Sistemas automatizados de movimentação, armazenagem e distribuição para centros de distribuição e indústrias.",
  openGraph: {
    title: "Automação Intralogística | TranspoTech",
    description:
      "Soluções de automação intralogística com a Dematic para CD e indústrias.",
  },
};

export default function AutomacaoPage() {
  return (
    <main>
      <AutomacaoHeroSection />

      {/* Grupo claro 1 — Parceria TranspoTech + Dematic + Captação.
          Uma única malha cobre tudo, sem cortes (fundo #FBFBFB). */}
      <div className="relative isolate bg-[#fbfbfb]">
        <HoverMesh className="pointer-events-none absolute inset-0 -z-10" />
        <PartnershipSection />
        <LeadFormSection
          id="avaliar-automacao"
          titleTop="Avalie automatizar"
          titleBottom="a sua operação"
          description="Conte sobre sua operação intralogística e avaliamos o melhor caminho de automação para o seu negócio."
          messagePlaceholder="Tipo de operação (indústria, CD, e-commerce), volume e principais gargalos."
          submitLabel="Avaliar minha operação"
        />
      </div>

      {/* Bloco dark — Números */}
      <div className="relative isolate bg-[#181616]">
        <DarkAmbient />
        <BenefitsSection />
      </div>

      {/* Grupo claro 2 — Soluções/Sistemas/AGV + Processo + Segmentos.
          Uma única malha cobre as três, sem cortes. */}
      <div className="relative isolate bg-[#fdfdfd]">
        <HoverMesh className="pointer-events-none absolute inset-0 -z-10" />
        <SolutionsSection />
        <ProcessSection />
        <SegmentsSection />
      </div>

      {/* CasesSection segue oculta. Ela é dark (data-header-dark + cards com
          glow), então ao voltar precisa do próprio bloco #181616 com
          DarkAmbient — não cabe neste grupo claro. */}
      {/* <CasesSection /> */}

      {/* Grupo claro 4 — FAQ (sem malha) */}
      <div className="bg-[#fdfdfd]">
        <FaqSection
          titleRegular="Perguntas que sempre recebemos "
          titleAccent="sobre automação"
          items={faqAutomacao}
        />
      </div>

      <CtaSection
        titleRegular="Vamos avaliar a automação certa "
        titleAccent="para sua operação?"
        description="Resposta em até 1 dia útil. Sem compromisso. Confidencialidade garantida."
        ctaLabel="Avaliar minha operação"
        ctaHref="#avaliar-automacao"
        secondaryLabel="Falar com especialista"
        secondaryHref={ROUTES.CONTATO}
      />
    </main>
  );
}
