import { ZigzagProcess, type ZigzagStep } from "@/components/layout/zigzag-process";
import illoDocument from "@/assets/images/stats/illustration-document.webp";
import illoSearch from "@/assets/images/stats/illustration-search.webp";
import illoBattery from "@/assets/images/stats/illustration-battery.webp";
import illoFolder from "@/assets/images/stats/illustration-folder.webp";

// Ilustrações provisórias — serão substituídas.
const steps: ZigzagStep[] = [
  {
    title: "Você informa a necessidade",
    description: "Bateria, carregador, autonomia, modernização ou dúvida técnica.",
    image: illoDocument,
  },
  {
    title: "A equipe entende a operação",
    description:
      "Equipamento, rotina de uso, turnos e necessidade de disponibilidade.",
    image: illoSearch,
  },
  {
    title: "A compatibilidade é analisada",
    description:
      "A solicitação é direcionada conforme equipamento, aplicação e disponibilidade.",
    image: illoBattery,
  },
  {
    title: "Você recebe orientação ou cotação",
    description: "O time retorna com informações e próximos passos.",
    image: illoFolder,
    flip: true,
  },
];

export function RequestStepsSection() {
  return (
    <ZigzagProcess
      gradientId="requestStepsFill"
      steps={steps}
      header={
        <div className="flex max-w-[560px] flex-col gap-4 text-center">
          <h2 className="text-h2 text-neutral-800">
            <span className="font-normal">Como funciona</span>{" "}
            <br className="hidden lg:inline" />
            <span className="font-bold text-primary-500">a solicitação</span>
          </h2>
          <p className="text-body leading-[1.35] text-neutral-600">
            Um processo simples e rápido, você informa a necessidade e a equipe
            da TranspoTech indica a melhor solução de energia para a sua operação.
          </p>
        </div>
      }
    />
  );
}
