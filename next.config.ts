import type { NextConfig } from "next";

const sanityProjectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;

const nextConfig: NextConfig = {
  images: {
    // Só as imagens do projeto do Sanity passam pelo otimizador.
    remotePatterns: sanityProjectId
      ? [
          {
            protocol: "https",
            hostname: "cdn.sanity.io",
            pathname: `/images/${sanityProjectId}/**`,
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
