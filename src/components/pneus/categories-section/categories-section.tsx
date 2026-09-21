import Image, { type StaticImageData } from "next/image";
import { TextLink } from "@/components/ui/text-link";
import { Section } from "@/components/ui/section";
// PLACEHOLDERS — artes provisórias. Substituir os arquivos mantendo os nomes
// (ver src/assets/images/pneus/README.md); nenhum ajuste de código é preciso.
import imgEmpilhadeira from "@/assets/images/pneus/pneu-empilhadeira.webp";
import imgOtr from "@/assets/images/pneus/pneu-otr.webp";
import imgAgricola from "@/assets/images/pneus/pneu-agricola.webp";
import imgFlorestal from "@/assets/images/pneus/pneu-florestal.webp";
import imgPortuario from "@/assets/images/pneus/pneu-portuario.webp";

type Category = {
  title: string;
  description: string;
  cta: string;
  /**
   * Foto do equipamento que usa a categoria de pneu (topo do card, no padrão
   * dos cards do portal de conteúdo). Pendente: aguardando as artes geradas —
   * ver `src/assets/images/pneus/README.md`.
   */
  image?: StaticImageData;
  /** Texto alternativo da foto — obrigatório junto com `image`. */
  imageAlt?: string;
};

const categories: Category[] = [
  {
    title: "Pneus para Empilhadeiras",
    description:
      "Disponíveis nos tipos press-on, pneumático e sólido, conforme a aplicação e o piso da operação.",
    cta: "Solicitar pneu para empilhadeira",
    image: imgEmpilhadeira,
    imageAlt:
      "Empilhadeira contrabalançada operando em centro de distribuição",
  },
  {
    title: "Pneus OTR (Off-The-Road)",
    description:
      "Para escavadeiras, motoniveladoras, retroescavadeiras, carregadeiras, tratores de esteira e compactação.",
    cta: "Solicitar pneu OTR",
    image: imgOtr,
    imageAlt: "Máquina de terraplenagem em obra sobre pneus off-the-road",
  },
  {
    title: "Pneus Agrícolas",
    description:
      "Para tratores, colheitadeiras, plantadeiras, pulverizadores e máquinas de henificação no campo.",
    cta: "Solicitar pneu agrícola",
    image: imgAgricola,
    imageAlt: "Trator agrícola em lavoura com pneus de garras",
  },
  {
    title: "Pneus Florestais",
    description:
      "Para skidders, fellers (derrubadoras), processadores, transportadores florestais e máquinas de exploração.",
    cta: "Solicitar pneu florestal",
    image: imgFlorestal,
    imageAlt: "Máquina florestal em área de manejo com pneus reforçados",
  },
  {
    title: "Pneus Portuários",
    description:
      "Para reach stackers, carretas portuárias, empilhadeiras de porto, empurradores e equipamentos de contêiner.",
    cta: "Solicitar pneu portuário",
    image: imgPortuario,
    imageAlt: "Reach stacker movimentando contêineres em pátio portuário",
  },
];

export function CategoriesSection() {
  return (
    <Section className="flex flex-col gap-12 lg:gap-16">
      <div className="flex max-w-[640px] flex-col gap-4">
        <h2 className="text-h2 font-normal text-neutral-800">
          Escolha a categoria mais{" "}
          <br className="hidden lg:block" />
          próxima da <span className="font-bold">sua necessidade</span>
        </h2>
        <p className="text-body leading-[1.35] text-neutral-600">
          Os pneus devem ser escolhidos conforme equipamento, ambiente,{" "}
          <br className="hidden lg:block" />
          piso, carga e intensidade de uso.
        </p>
      </div>

      <div className="flex w-full flex-wrap justify-center gap-4">
        {categories.map((category) => (
          <div
            key={category.title}
            className="group/card flex w-full flex-col overflow-hidden rounded-xl bg-primary-50 transition-shadow duration-300 hover:z-10 hover:shadow-[0_16px_48px_0_rgba(245,130,32,0.3)] sm:w-[calc(50%-0.5rem)] lg:w-[calc(33.333%-0.667rem)]"
          >
            <div className="flex flex-1 flex-col rounded-xl bg-[#fbfbfb]">
              {/* Foto com uma borda fina do card ao redor — mesmo tratamento
                  do card do portal de conteúdo. */}
              {category.image && (
                <div className="relative m-2 h-[180px] overflow-hidden rounded-lg bg-neutral-100">
                  <Image
                    src={category.image}
                    alt={category.imageAlt ?? ""}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-500 ease-out group-hover/card:scale-105"
                  />
                </div>
              )}
              <div className="flex flex-1 flex-col gap-4 p-6">
                <h3 className="font-heading text-[20px] font-semibold leading-[1.3] text-neutral-800">
                  {category.title}
                </h3>
                <p className="min-h-[2.7em] text-body leading-[1.35] text-neutral-600">
                  {category.description}
                </p>
              </div>
            </div>
            {/* Todos os CTAs levam ao formulário de lead da própria página. */}
            <TextLink
              href="#solicitar-pneus"
              className="w-full px-6 py-4 text-left"
            >
              {category.cta}
            </TextLink>
          </div>
        ))}
      </div>
    </Section>
  );
}
