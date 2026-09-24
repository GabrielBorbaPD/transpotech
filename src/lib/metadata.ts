import type { Metadata } from "next";

type OpenGraph = NonNullable<Metadata["openGraph"]>;

// O Next faz merge raso do metadata: um `openGraph` na página substitui por
// inteiro o do layout. Cada página espalha esta base no próprio openGraph
// para não perder type, locale e siteName.
export const baseOpenGraph = {
  type: "website",
  locale: "pt_BR",
  siteName: "TranspoTech",
} as const satisfies OpenGraph;
