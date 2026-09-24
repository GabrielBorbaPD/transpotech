import { ZigzagProcess, type ZigzagStep } from "@/components/layout/zigzag-process";
import illoDocument from "@/assets/images/stats/illustration-document.webp";
import illoSearch from "@/assets/images/stats/illustration-search.webp";
import illoFolder from "@/assets/images/stats/illustration-folder.webp";
import illoTruck from "@/assets/images/stats/illustration-truck.webp";
import illoShield from "@/assets/images/stats/illustration-shield.webp";

const steps: ZigzagStep[] = [
  {
    title: "Você informa sua necessidade",
    description:
      "Cidade, tipo de operação, carga, altura, ambiente, prazo e quantidade aproximada de equipamentos.",
    image: illoDocument,
  },
  {
    title: "Um especialista avalia sua operação",
    description:
      "A TranspoTech entende o contexto e recomenda o tipo de equipamento e o plano mais adequado.",
    image: illoSearch,
  },
  {
    title: "Você recebe uma proposta",
    description:
      "A proposta considera modelo, prazo, disponibilidade, manutenção, transporte e acessórios necessários.",
    image: illoFolder,
  },
  {
    title: "O equipamento é entregue",
    description:
      "A implantação pode incluir orientações de uso, apoio técnico e ajustes conforme a operação.",
    image: illoTruck,
  },
  {
    title: "A TranspoTech acompanha",
    description:
      "O suporte técnico ajuda sua operação a manter disponibilidade, segurança e produtividade.",
    image: illoShield,
    imageLgHeight: "lg:h-[270px]",
  },
];

export function ProcessSection() {
  return (
    <ZigzagProcess
      gradientId="processFill"
      steps={steps}
      header={
        <div className="flex max-w-[560px] flex-col gap-4 text-center">
          <h2 className="text-h2 text-neutral-800">
            <span className="font-normal">Processo estruturado para </span>
            <span className="font-bold text-primary-500">
              garantir eficiência máxima
            </span>
          </h2>
          <p className="text-body leading-[1.35] text-neutral-600">
            Escala, equipe e infraestrutura para garantir disponibilidade,
            agilidade e suporte técnico em todo o Sul e Sudeste.
          </p>
        </div>
      }
    />
  );
}
