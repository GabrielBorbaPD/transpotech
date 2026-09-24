import { Section } from "@/components/ui/section";
import {
  DarkArtCard,
  type DarkArtCardArt,
} from "@/components/layout/dark-art-card";
import iconSelo from "@/assets/images/stats/card-selo.webp";
import iconEscudo from "@/assets/images/stats/ct-icon-escudo.webp";
import iconPessoa from "@/assets/images/stats/ct-icon-pessoa.webp";
import iconCadeado from "@/assets/images/stats/ct-icon-cadeado.webp";

// Geometria por card conforme o Figma (node 3616:3178). left/top alinham o
// objeto verticalmente ao texto.
type Commitment = {
  title: string;
  description: string;
  art: DarkArtCardArt;
};

const commitments: Commitment[] = [
  {
    title: "Tratamento responsável",
    description:
      "Os relatos são avaliados com seriedade e encaminhados conforme sua natureza.",
    art: {
      src: iconSelo,
      width: 204.438,
      height: 153.328,
      maskX: 26.78,
      maskY: 10.819,
      left: -37,
      top: -23,
      flip: false,
    },
  },
  {
    title: "Confidencialidade",
    description:
      "As informações são tratadas com confidencialidade conforme políticas internas e requisitos aplicáveis.",
    art: {
      src: iconEscudo,
      width: 188.604,
      height: 141.453,
      maskX: 21.556,
      maskY: -2.145,
      left: -28,
      top: -10,
      flip: true,
    },
  },
  {
    title: "Possibilidade de anonimato",
    description:
      "O usuário pode optar por não se identificar, quando essa opção estiver disponível no formulário.",
    art: {
      src: iconPessoa,
      width: 176.409,
      height: 132.307,
      maskX: 13.446,
      maskY: -7.414,
      left: -24,
      top: -5,
      flip: false,
    },
  },
  {
    title: "Não retaliação",
    description:
      "A empresa deve tratar relatos de boa-fé com responsabilidade e sem tolerância a retaliações.",
    art: {
      src: iconCadeado,
      width: 176.465,
      height: 132.349,
      maskX: 16.244,
      maskY: -0.519,
      left: -27,
      top: -12,
      flip: false,
    },
  },
];

export function CommitmentsSection() {
  return (
    <Section
      data-header-dark
      className="flex flex-col items-start gap-10 lg:gap-14"
    >
      <div className="flex flex-col gap-4">
        <h2 className="text-h3 font-normal text-neutral-50">
          Nossos <span className="font-bold">compromissos</span>
        </h2>
      </div>

      <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {commitments.map((item) => (
          <DarkArtCard key={item.title} {...item} />
        ))}
      </div>
    </Section>
  );
}
