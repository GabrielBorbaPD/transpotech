import { ZigzagProcess, type ZigzagStep } from "@/components/layout/zigzag-process";
import illoDocument from "@/assets/images/stats/illustration-document.webp";
import illoMotor from "@/assets/images/stats/illustration-motor.webp";
import illoBattery from "@/assets/images/stats/illustration-battery.webp";
import illoToolBox from "@/assets/images/stats/illustration-tool-box.webp";
import illoShield from "@/assets/images/stats/illustration-shield.webp";

// Ilustrações provisórias — serão substituídas.
const steps: ZigzagStep[] = [
  {
    title: "Avaliação de chegada",
    description:
      "Histórico, documentação, número de série e horímetro são auditados.",
    image: illoDocument,
  },
  {
    title: "Inspeção mecânica e hidráulica",
    description: "Motor, transmissão, mastro, cilindros, vazamentos e folgas.",
    image: illoMotor,
  },
  {
    title: "Inspeção elétrica e eletrônica",
    description: "Bateria, carregador, comandos, sensores e chicotes.",
    image: illoBattery,
  },
  {
    title: "Reparos e substituições",
    description:
      "Peças de desgaste trocadas e ajustes feitos pelo time técnico TranspoTech.",
    image: illoToolBox,
  },
  {
    title: "Laudo e teste operacional",
    description:
      "Equipamento liberado com laudo técnico assinado e teste de operação.",
    image: illoShield,
    imageLgHeight: "lg:h-[270px]",
  },
];

export function EvaluationSection() {
  return (
    <ZigzagProcess
      gradientId="evaluationFill"
      steps={steps}
      header={
        <div className="flex max-w-[560px] flex-col gap-4 text-center">
          <h2 className="text-h2 text-neutral-800">
            <span className="font-normal">Como avaliamos</span>{" "}
            <br className="hidden lg:inline" />
            <span className="font-bold text-primary-500">cada equipamento</span>
          </h2>
          <p className="text-body leading-[1.35] text-neutral-600">
            Antes de entrar no estoque, cada equipamento passa por inspeção
            técnica e laudo TranspoTech.
          </p>
        </div>
      }
    />
  );
}
