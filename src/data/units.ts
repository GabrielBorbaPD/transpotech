import type { StaticImageData } from "next/image";
// Fotos das fachadas — originais em inputs/Unidades, convertidas para .webp.
import imgBlumenauHub from "@/assets/images/unidades/blumenau-hub.webp";
import imgBlumenauSeminovas from "@/assets/images/unidades/blumenau-seminovas.webp";
import imgChapeco from "@/assets/images/unidades/chapeco.webp";
import imgItajai from "@/assets/images/unidades/itajai.webp";
import imgJoinville from "@/assets/images/unidades/joinville.webp";
import imgCuritiba from "@/assets/images/unidades/curitiba.webp";
import imgMaringa from "@/assets/images/unidades/maringa.webp";
import imgCaxias from "@/assets/images/unidades/caxias-do-sul.webp";
import imgNovaSantaRita from "@/assets/images/unidades/nova-santa-rita.webp";
import imgIndaiatuba from "@/assets/images/unidades/indaiatuba.webp";
import imgAparecida from "@/assets/images/unidades/aparecida-de-goiania.webp";

export type Unit = {
  /** Cidade + UF (ex.: "Curitiba - PR"). */
  city: string;
  /** Complemento opcional da unidade (ex.: "Hub Técnico"). */
  note?: string;
  /** Telefone de contato da unidade. */
  phone: string;
  /** Endereço completo (rua, número, bairro). PENDÊNCIA: preencher com o
   *  endereço real de cada unidade. Enquanto ausente, o card exibe um aviso. */
  address?: string;
  /** Foto da fachada (seção de unidades de Quem Somos). */
  image?: StaticImageData;
  /** Perfil oficial no Google Business. PENDÊNCIA: URLs. Sem ele, os links
   *  usam a busca pelo endereço (getUnitMapsUrl). */
  googleProfileUrl?: string;
};

/** Nome exibido nos cards: "Cidade · complemento" (sem a UF). */
export function getUnitTitle(unit: Unit): string {
  const city = unit.city.split(" - ")[0].trim();
  return unit.note ? `${city} · ${unit.note}` : city;
}

/** Consulta do Google Maps: endereço + cidade/UF (ou nome da unidade). */
export function getUnitMapsQuery(unit: Unit): string {
  const [city, uf] = unit.city.split(" - ").map((s) => s.trim());
  return unit.address
    ? `${unit.address}, ${city} - ${uf}`
    : `TranspoTech ${unit.city}`;
}

/** Busca da unidade no Google Maps pelo endereço. */
export function getUnitMapsUrl(unit: Unit): string {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    getUnitMapsQuery(unit)
  )}`;
}

/** Unidades TranspoTech (11) — mesma fonte do rodapé, ordenadas por estado
 *  (SC > PR > RS > SP > GO). Fonte para a seção Estrutura. */
export const units: Unit[] = [
  {
    city: "Blumenau - SC",
    note: "Hub Adm. e Técnico",
    phone: "(47) 3331-4900",
    address: "Rua Bahia, 2291 - Salto",
    image: imgBlumenauHub,
  },
  {
    city: "Blumenau - SC",
    note: "Seminovas",
    phone: "(47) 3331-4900",
    address: "Via Expressa Paul Fritz Kuehnrich, 2.377",
    image: imgBlumenauSeminovas,
  },
  {
    city: "Chapecó - SC",
    phone: "(49) 3981-9975",
    address: "Rua Marino Finco, 110 - Bom Retiro",
    image: imgChapeco,
  },
  {
    city: "Itajaí - SC",
    phone: "(47) 3331-4901",
    address: "Rua José Rosa, 1401 - Cordeiros",
    image: imgItajai,
  },
  {
    city: "Joinville - SC",
    phone: "(47) 3419-0033",
    address: "Rua Eugênio Ernesto Kunde, 710",
    image: imgJoinville,
  },
  {
    city: "Curitiba - PR",
    phone: "(41) 3377-3303",
    address: "Estrada do Ganchinho, 640 - BR 376, Contorno Leste (Saída 114)",
    image: imgCuritiba,
  },
  {
    city: "Maringá - PR",
    phone: "(44) 3200-0414",
    address: "BR-376, 989 - Zona 19",
    image: imgMaringa,
  },
  {
    city: "Caxias do Sul - RS",
    phone: "(54) 3771-4129",
    address: "Rua Frei Pacífico, 1325",
    image: imgCaxias,
  },
  {
    city: "Nova Santa Rita - RS",
    phone: "(51) 3479-6740",
    address: "BR 386 - Acesso Berto Cirio, 1.351",
    image: imgNovaSantaRita,
  },
  {
    city: "Indaiatuba - SP",
    phone: "(19) 3825-3370",
    address: "Rua Alberto Guizo, 739 - Distrito Industrial",
    image: imgIndaiatuba,
  },
  {
    city: "Aparecida de Goiânia - GO",
    phone: "(62) 3413-8334",
    address: "Rua dos Cajueiros, Qd.46 - Lt. 09 - Retiro do Bosque",
    image: imgAparecida,
  },
];
