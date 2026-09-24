import { ZigzagProcess, type ZigzagStep } from "@/components/layout/zigzag-process";
import { Button } from "@/components/ui/button";
import illoDocument from "@/assets/images/stats/illustration-document.webp";
import illoSearch from "@/assets/images/stats/illustration-search.webp";
import illoFolder from "@/assets/images/stats/illustration-folder.webp";
import illoToolBox from "@/assets/images/stats/illustration-tool-box.webp";
import illoShield from "@/assets/images/stats/illustration-shield.webp";

// Ilustrações provisórias — serão substituídas.
const steps: ZigzagStep[] = [
  {
    title: "Você informa a necessidade",
    description:
      "Envie cidade, tipo de equipamento, modelo, série, marca, problema ou objetivo da manutenção.",
    image: illoDocument,
  },
  {
    title: "A equipe entende o contexto",
    description:
      "A TranspoTech avalia a demanda e direciona o atendimento conforme urgência, região e tipo de serviço.",
    image: illoSearch,
  },
  {
    title: "O técnico realiza o diagnóstico",
    description:
      "O equipamento é avaliado para identificar falhas, riscos, peças necessárias e prioridade de intervenção.",
    image: illoFolder,
  },
  {
    title: "A manutenção é executada",
    description:
      "A equipe realiza o serviço corretivo, preventivo ou programado conforme escopo definido.",
    image: illoToolBox,
  },
  {
    title: "Sua frota segue acompanhada",
    description:
      "Quando necessário, a TranspoTech pode apoiar com peças, novas manutenções, contrato ou plano recorrente.",
    image: illoShield,
    imageLgHeight: "lg:h-[270px]",
  },
];

export function ProcessSection() {
  return (
    <ZigzagProcess
      gradientId="serviceProcessFill"
      steps={steps}
      header={
        <div className="flex max-w-[560px] flex-col items-center gap-4 text-center">
          <p className="text-body font-semibold uppercase tracking-wide text-secondary-600">
            Processo
          </p>
          <h2 className="text-h2 text-neutral-800">
            <span className="font-normal">Como funciona o </span>
            <span className="font-bold text-primary-500">atendimento</span>
          </h2>
        </div>
      }
      cta={
        <Button variant="primary" size="lg" href="#solicitar-servico">
          Solicitar atendimento
        </Button>
      }
    />
  );
}
