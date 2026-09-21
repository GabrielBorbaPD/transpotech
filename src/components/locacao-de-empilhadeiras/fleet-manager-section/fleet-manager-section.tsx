import {
  UserCheck,
  ShieldAlert,
  Weight,
  Timer,
  type LucideIcon,
} from "lucide-react";
import { Section } from "@/components/ui/section";

type Module = {
  title: string;
  description: string;
  Icon: LucideIcon;
};

// Os quatro módulos combináveis do STILL FleetManager 4.x.
const modules: Module[] = [
  {
    title: "Autorização de operador",
    description:
      "Acesso liberado por cartão, chip ou PIN, com perfil de uso próprio para cada operador.",
    Icon: UserCheck,
  },
  {
    title: "Registro de impactos",
    description:
      "Sensor de aceleração detecta choques e registra data, hora, equipamento e operador.",
    Icon: ShieldAlert,
  },
  {
    title: "Reconhecimento de carga",
    description:
      "Sensores de pressão registram as cargas movimentadas por cada equipamento.",
    Icon: Weight,
  },
  {
    title: "Horas e relatórios",
    description:
      "Horas de operação e turnos alimentam diários de bordo e relatórios de eficiência.",
    Icon: Timer,
  },
];

function ModuleCard({ title, description, Icon }: Module) {
  // Mesma superfície dos cards de "Onde a empilhadeira seminova entrega mais
  // valor": bg-neutral-50, ícone em círculo laranja e sombra esverdeada no hover.
  return (
    <div className="flex min-h-[280px] flex-1 flex-col rounded-xl bg-neutral-50 p-6 transition-shadow duration-300 hover:z-10 hover:shadow-[0_16px_48px_0_rgba(33,143,115,0.18)]">
      <div className="flex size-10 items-center justify-center rounded-full bg-primary-500 lg:size-12">
        <Icon className="size-6 text-white lg:size-7" aria-hidden />
      </div>
      {/* Bloco de texto ancorado na base do card (mt-auto) */}
      <div className="mt-auto flex flex-col gap-4">
        <h3 className="font-heading text-[20px] font-semibold leading-[1.3] text-neutral-800">
          {title}
        </h3>
        <p className="text-body leading-[1.35] text-neutral-600">
          {description}
        </p>
      </div>
    </div>
  );
}

export function FleetManagerSection() {
  return (
    <Section className="flex flex-col gap-10 lg:gap-12">
      {/* Cabeçalho */}
      <div className="flex w-full max-w-[720px] flex-col gap-4">
        <p className="text-body font-semibold uppercase tracking-wide text-secondary-600">
          Gestão de frota
        </p>
        {/* Duas linhas fixas no desktop: "Sua frota locada conectada" /
            "com o FleetManager". No mobile o título flui natural. */}
        <h2 className="text-h2 font-normal text-neutral-800">
          <span className="lg:block">Sua frota locada conectada</span>{" "}
          <span className="lg:block">
            com o <span className="font-bold text-primary-500">FleetManager</span>
          </span>
        </h2>
        <p className="text-body leading-[1.35] text-neutral-600">
          O sistema de gestão de frota da STILL mostra quem operou cada
          equipamento, para quê,{" "}
          <br className="hidden lg:inline" />
          quando e se houve impacto. Tudo em um aplicativo web, sem instalação.
        </p>
      </div>

      {/* Módulos combináveis */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {modules.map((item) => (
          <ModuleCard key={item.title} {...item} />
        ))}
      </div>
    </Section>
  );
}
