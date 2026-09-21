import { CircleCheck } from "lucide-react";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";

const segments = [
  "Vestuário",
  "Bens de consumo",
  "Alimentação e bebidas",
  "Mercadorias em geral",
  "Cuidados de saúde",
  "Manufatura",
  "Logística terceirizada",
  "Atacado B2B",
];

export function SegmentsSection() {
  return (
    <Section className="flex flex-col gap-10 lg:flex-row lg:gap-16">
      <div className="flex flex-1 flex-col gap-6">
        <div className="flex flex-col gap-4">
          <h2 className="text-h2 font-normal text-neutral-800">
            Operações que{" "}
            <br className="hidden lg:inline" />
            <span className="font-bold">automatizamos</span>
          </h2>
          <p className="max-w-[460px] text-body leading-[1.35] text-neutral-600">
            Adaptamos a solução ao perfil do seu negócio.
          </p>
        </div>

        {/* Desktop: botão na coluna do texto */}
        <div className="hidden lg:block">
          <Button variant="primary" size="lg" href="#avaliar-automacao">
            Avaliar minha operação
          </Button>
        </div>
      </div>

      <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:gap-3 lg:flex-[1.3]">
        {segments.map((segment) => (
          <li
            key={segment}
            // Mesma pastilha clara da seção "Por que a maior parte da nossa
            // frota é elétrica" (locação): #F7F6F6, sem borda.
            className="flex items-center gap-3 rounded-xl bg-[#F7F6F6] px-4 py-3"
          >
            <CircleCheck aria-hidden className="size-5 shrink-0 text-primary-500" />
            <span className="text-body text-neutral-800">{segment}</span>
          </li>
        ))}
      </ul>

      {/* Mobile: botão abaixo dos segmentos */}
      <div className="lg:hidden">
        <Button variant="primary" size="lg" href="#avaliar-automacao">
          Avaliar minha operação
        </Button>
      </div>
    </Section>
  );
}
