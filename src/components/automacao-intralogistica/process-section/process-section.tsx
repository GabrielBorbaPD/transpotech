import { ZigzagProcess, type ZigzagStep } from "@/components/layout/zigzag-process";
import { Button } from "@/components/ui/button";
import illoDocument from "@/assets/images/stats/illustration-document.webp";
import illoLamp from "@/assets/images/stats/illustration-lamp.webp";
import illoFolder from "@/assets/images/stats/illustration-folder.webp";
import illoToolBox from "@/assets/images/stats/illustration-tool-box.webp";
import illoShield from "@/assets/images/stats/illustration-shield.webp";
import illoGear from "@/assets/images/stats/illustration-engrenagem.webp";

// Ilustrações provisórias — serão substituídas.
const steps: ZigzagStep[] = [
  {
    title: "Diagnóstico",
    description: "Visita técnica, análise de dados e mapeamento de fluxos atuais.",
    image: illoDocument,
  },
  {
    title: "Concepção",
    description:
      "Modelagem da solução, simulações e business case com TIR e payback.",
    image: illoLamp,
    flip: true,
  },
  {
    title: "Engenharia",
    description:
      "Projeto detalhado, especificação de equipamentos, software e integrações.",
    image: illoFolder,
  },
  {
    title: "Implantação",
    description:
      "Fabricação, instalação e comissionamento com mínimo impacto à operação.",
    image: illoToolBox,
  },
  {
    title: "Go-live",
    description: "Treinamento, ramp-up assistido e estabilização da operação.",
    image: illoGear,
  },
  {
    title: "Operação contínua",
    description: "Manutenção, evolução e otimização ao longo do ciclo de vida.",
    image: illoShield,
    flip: true,
    scale: 0.85,
  },
];

export function ProcessSection() {
  return (
    <ZigzagProcess
      gradientId="automacaoProcessFill"
      steps={steps}
      header={
        <div className="flex max-w-[560px] flex-col items-center gap-4 text-center">
          <p className="text-body font-semibold uppercase tracking-wide text-secondary-600">
            Como entregamos
          </p>
          <h2 className="text-h2 text-neutral-800">
            <span className="font-normal">O processo do projeto, </span>
            <span className="font-bold text-primary-500">da ideia à operação</span>
          </h2>
          <p className="text-body leading-[1.35] text-neutral-600">
            Etapas claras para reduzir risco e acelerar a captura de valor. A
            TranspoTech implementa conforme a necessidade de cada cliente, em fases
            que se adequam à sua operação, da automação parcial à completa.
          </p>
        </div>
      }
      cta={
        <Button variant="primary" size="lg" href="#avaliar-automacao">
          Avaliar minha operação
        </Button>
      }
    />
  );
}
