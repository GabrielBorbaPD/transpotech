import type { NextConfig } from "next";
import { SANITY_IMAGE_QUERY } from "./src/sanity/image";

const sanityProjectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;

const nextConfig: NextConfig = {
  images: {
    // Padrão do Next + 512 e 576: sem eles, imagens com `sizes` entre ~385 e 576px
    // efetivos (cards de 400–420px em desktop 1x, fotos de card de produto em
    // DPR ~1,75) pulavam para 640/750. Fica abaixo do menor deviceSize (640),
    // como a doc de `imageSizes` pede.
    imageSizes: [32, 48, 64, 96, 128, 256, 384, 512, 576],
    // Só as imagens do projeto do Sanity, com a query de src/sanity/image.ts,
    // passam pelo otimizador.
    remotePatterns: sanityProjectId
      ? [
          {
            protocol: "https",
            hostname: "cdn.sanity.io",
            pathname: `/images/${sanityProjectId}/**`,
            search: SANITY_IMAGE_QUERY,
          },
        ]
      : [],
  },
  async redirects() {
    return [
      // Rota antiga "usadas" → nova "seminovas" (rebrand do produto).
      {
        source: "/produtos/empilhadeiras/usadas",
        destination: "/produtos/empilhadeiras/seminovas",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
