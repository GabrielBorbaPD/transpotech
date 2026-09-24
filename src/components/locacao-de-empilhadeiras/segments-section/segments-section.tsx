import { Section } from "@/components/ui/section";
import {
  DarkArtCard,
  type DarkArtCardArt,
} from "@/components/layout/dark-art-card";
import iconGalpao from "@/assets/images/stats/card-galpao.webp";
import iconCarrinho from "@/assets/images/stats/card-carrinho.webp";
import iconFabrica from "@/assets/images/stats/card-fabrica.webp";
import iconCaminhao from "@/assets/images/stats/card-caminhao.webp";
import iconFloco from "@/assets/images/stats/loc-icon-floco.webp";

// Geometria por card conforme o Figma (node 3603:3365). left/top alinham o
// objeto ao texto.
type Segment = { title: string; description: string; art: DarkArtCardArt };

const segments: Segment[] = [
  {
    title: "Centro de distribuição",
    description:
      "Para operações com alto volume, SLA exigente, turnos intensos e necessidade de disponibilidade.",
    art: {
      src: iconGalpao,
      width: 175.718,
      height: 131.789,
      maskX: 12.101,
      maskY: -1.04,
      left: -22,
      top: -11,
    },
  },
  {
    title: "Supermercados e atacadistas",
    description:
      "Para recebimento, armazenagem, reposição, expansão de loja, sazonalidade e picos de abastecimento.",
    art: {
      src: iconCarrinho,
      width: 204.438,
      height: 153.328,
      maskX: 25.448,
      maskY: 9.73,
      left: -36,
      top: -22,
    },
  },
  {
    title: "Indústrias e manufaturas",
    description:
      "Para almoxarifado, linha de produto, movimentação interna, expedição e apoio à manutenção.",
    art: {
      src: iconFabrica,
      width: 178.49,
      height: 133.868,
      maskX: 14.487,
      maskY: 0,
      left: -25,
      top: -12,
    },
  },
  {
    title: "Operadores logísticos e 3PLs",
    description:
      "Para contratos novos, aumento temporário de demanda e abertura de novas operações.",
    art: {
      src: iconCaminhao,
      width: 176.465,
      height: 132.349,
      maskX: 16.244,
      maskY: -0.519,
      left: -27,
      top: -12,
    },
  },
  {
    title: "Galpões e operações sazonais",
    description:
      "Para períodos de alta demanda, inventários, eventos, projetos temporários ou substituição emergencial.",
    art: {
      src: iconFloco,
      width: 178.49,
      height: 133.868,
      maskX: 14.487,
      maskY: 0,
      left: -25,
      top: -12,
    },
  },
];

export function SegmentsSection() {
  const [topRow, bottomRow] = [segments.slice(0, 3), segments.slice(3)];

  return (
    <Section className="flex flex-col gap-12 lg:gap-16">
      {/* Cabeçalho */}
      <div className="flex w-full max-w-[560px] flex-col gap-4">
        <p className="text-body font-semibold uppercase tracking-wide text-primary-500">
          Segmentos
        </p>
        <h2 className="text-h2 font-normal text-neutral-50">
          Locação para diferentes{" "}
          <span className="font-bold text-primary-500">tipos de operação</span>
        </h2>
        <p className="text-body leading-[1.35] text-neutral-400">
          A TranspoTech apoia empresas com necessidades distintas de
          movimentação, abastecimento interno, armazenagem e suporte técnico.
        </p>
      </div>

      {/* Bento — 3 cards em cima, 2 centralizados embaixo */}
      <div className="flex flex-col gap-4">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {topRow.map((segment) => (
            <DarkArtCard
              key={segment.title}
              {...segment}
              titleClassName="w-[242px] max-w-full"
            />
          ))}
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:mx-auto lg:w-2/3">
          {bottomRow.map((segment) => (
            <DarkArtCard
              key={segment.title}
              {...segment}
              titleClassName="w-[242px] max-w-full"
            />
          ))}
        </div>
      </div>
    </Section>
  );
}
