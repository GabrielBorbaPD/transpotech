import type { Stat } from "@/components/layout/stats-grid";
import { STATE_UNITS } from "./state-units";

// Abrangência nacional (fonte: inputs/abrangencia-nacional- Transpotech.html).
// Estados com atuação TranspoTech destacados no mapa do Brasil.
export const ACTIVE_UFS = [
  "SC",
  "PR",
  "RS",
  "SP",
  "GO",
  "MG",
  "PE",
  "DF",
  "MT",
  "BA",
  "MA",
  "RJ",
  "PA",
  "AL",
  "AM",
  "CE",
  "RO",
  "ES",
  "TO",
];

/** Estados com unidade física — derivados de STATE_UNITS (fonte única). */
export const UNIT_UFS = Object.keys(STATE_UNITS);

export const COVERAGE_STATS: Stat[] = [
  { value: "23", label: "estados com atuação" },
  { value: "+660", label: "cidades atendidas" },
  { value: "11", label: "unidades físicas" },
  { value: "+3.700", label: "máquinas locadas" },
];
