import { Section } from "@/components/ui/section";
import { StatsGrid, type Stat } from "@/components/layout/stats-grid";

const stats: Stat[] = [
  { value: "+60%", label: "produtividade média" },
  { value: "−70%", label: "erros de separação" },
  { value: "+40%", label: "uso do espaço vertical" },
  { value: "24/7", label: "operação contínua" },
  { value: "−30%", label: "custo operacional" },
  { value: "100%", label: "rastreabilidade do pedido" },
];

export function BenefitsSection() {
  return (
    <Section data-header-dark className="flex flex-col gap-12 lg:gap-16">
      <div className="flex max-w-[640px] flex-col gap-4">
        <p className="text-body font-semibold uppercase tracking-wide text-primary-400">
          Benefícios
        </p>
        <h2 className="text-h2 font-normal text-neutral-50">
          O que muda quando a{" "}
          <br className="hidden lg:inline" />
          <span className="font-bold text-primary-500">
            operação é automatizada
          </span>
        </h2>
        <p className="text-body leading-[1.35] text-neutral-400">
          Indicadores típicos observados em projetos Dematic ao redor do mundo.
          <br />
          Resultados variam por operação.
        </p>
      </div>

      <StatsGrid stats={stats} />
    </Section>
  );
}
