// Pontos interativos sobre a ilustração da parceria — mesmo padrão do mapa
// interativo da Dematic (dematic.com/pt-br): um botão "+" sobre cada etapa da
// operação que abre um pop-up ancorado no próprio botão.
//
// Posições: `x`/`y` são percentuais da CAIXA DA ILUSTRAÇÃO (não da seção), com
// o botão centralizado no ponto. A ordem e as etapas seguem o mapa da Dematic;
// as coordenadas foram trazidas de lá e ajustadas para cair sobre o elemento
// correspondente da nossa arte, que é um fluxo diferente do desenho deles.
//
// Copy: as cinco primeiras etapas usam exatamente os itens "Sistemas" da seção
// "Soluções em automação" desta mesma página. Software e Manutenção não têm
// equivalente no site — a descrição é um resumo do texto oficial da Dematic
// (PENDENTE de aprovação do marketing).
//
// `side` define para que lado o pop-up abre a partir do botão, para não sair
// da ilustração nem cobrir o bloco de texto à esquerda.
//
// Fotos: as mesmas que a Dematic usa em cada ponto do mapa interativo,
// convertidas para .webp 960x540 em src/assets/images/automacao/.
import type { StaticImageData } from "next/image";
import imgRecebimento from "@/assets/images/automacao/recebimento.webp";
import imgTransporte from "@/assets/images/automacao/transporte.webp";
import imgArmazenagem from "@/assets/images/automacao/armazenagem.webp";
import imgSeparacao from "@/assets/images/automacao/separacao.webp";
import imgEnvio from "@/assets/images/automacao/envio.webp";
import imgSoftware from "@/assets/images/automacao/software.webp";
import imgManutencao from "@/assets/images/automacao/manutencao.webp";

export type AutomationHotspot = {
  id: string;
  title: string;
  description: string;
  /** Foto do card (16:9, como no card da Dematic). */
  image: StaticImageData;
  x: number;
  y: number;
  side: "left" | "right";
};

export const automationHotspots: AutomationHotspot[] = [
  {
    id: "recebimento",
    title: "Recebimento",
    description: "Conferência e alocação automatizadas.",
    image: imgRecebimento,
    // Círculo azul de edição 2.png. Abre para a esquerda: está na borda
    // direita da ilustração.
    x: 78.4,
    y: 50.9,
    side: "left",
  },
  {
    id: "transporte",
    title: "Transporte",
    description: "Movimentação interna entre etapas.",
    image: imgTransporte,
    // Estradinha da área verde marcada em inputs/Referência de localização
    // soluções/edição 1.png (faixa cinza de asfalto dentro dela).
    x: 37.5,
    y: 57.8,
    side: "right",
  },
  {
    id: "armazenagem",
    title: "Armazenagem",
    description: "Estocagem densa automatizada (AS/RS).",
    image: imgArmazenagem,
    // No galpão (posição que era da separação).
    x: 52,
    y: 78.8,
    side: "right",
  },
  {
    id: "separacao",
    title: "Separação",
    description: "Picking assistido, rápido e preciso.",
    image: imgSeparacao,
    // Círculo verde de edição 2.png. Abre para a esquerda pelo mesmo motivo.
    x: 65.4,
    y: 76.2,
    side: "left",
  },
  {
    id: "envio",
    title: "Envio",
    description: "Embalagem e expedição no prazo.",
    image: imgEnvio,
    // Centro da área vermelha marcada em edição 1.png. Abre para a esquerda:
    // à direita o card sairia da ilustração.
    x: 67.7,
    y: 22.4,
    side: "left",
  },
  {
    id: "software",
    title: "Software",
    description: "Controle e planejamento de toda a operação.",
    image: imgSoftware,
    // Bolinha central — ponto marcado em inputs/Referência de localização
    // soluções/edição 3.png.
    x: 53.8,
    y: 42.4,
    side: "right",
  },
  {
    id: "manutencao",
    title: "Manutenção",
    description: "Suporte para manter equipamentos e sistemas no máximo.",
    image: imgManutencao,
    // Círculo vermelho de edição 2.png (torre ao fundo).
    x: 20.7,
    y: 19.8,
    side: "right",
  },
];
