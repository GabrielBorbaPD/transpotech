import type { MetadataRoute } from "next";
import { articles } from "@/data/articles";
import { forkliftsNovas } from "@/data/forklifts-novas";
import { forkliftsSeminovas } from "@/data/forklifts-seminovas";
import { env } from "@/lib/env";
import { ROUTES } from "@/lib/routes";

const url = (path: string) => `${env.siteUrl}${path}`;

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: url(ROUTES.HOME), lastModified: new Date(), changeFrequency: "weekly", priority: 1.0 },

    // Produtos. /produtos/empilhadeiras fica de fora enquanto renderizar
    // UnderConstruction.
    { url: url(ROUTES.LOCACAO), lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: url(ROUTES.EMPILHADEIRAS_NOVAS), lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
    ...forkliftsNovas.map((forklift) => ({
      url: url(`${ROUTES.EMPILHADEIRAS_NOVAS}/${forklift.id}`),
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    { url: url(ROUTES.EMPILHADEIRAS_SEMINOVAS), lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
    ...forkliftsSeminovas.map((forklift) => ({
      url: url(`${ROUTES.EMPILHADEIRAS_SEMINOVAS}/${forklift.id}`),
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.7,
    })),
    { url: url(ROUTES.PNEUS), lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: url(ROUTES.BATERIAS), lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: url(ROUTES.PECAS), lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },

    // Serviços
    { url: url(ROUTES.SERVICOS), lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },

    // Automação
    { url: url(ROUTES.AUTOMACAO), lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },

    // Empresa. /empresa/trabalhe-conosco fica de fora enquanto renderizar
    // UnderConstruction (a navegação já leva ao Gupy).
    { url: url(ROUTES.QUEM_SOMOS), lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: url(ROUTES.SUSTENTABILIDADE), lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { url: url(ROUTES.CANAL_TRANSPARENCIA), lastModified: new Date(), changeFrequency: "monthly", priority: 0.5 },
    { url: url(ROUTES.OUVIDORIA), lastModified: new Date(), changeFrequency: "monthly", priority: 0.5 },
    { url: url(ROUTES.PORTAL_CONTEUDO), lastModified: new Date(), changeFrequency: "weekly", priority: 0.7 },
    ...articles.map((article) => ({
      url: url(`${ROUTES.PORTAL_CONTEUDO}/${article.id}`),
      lastModified: new Date(article.dateISO),
      changeFrequency: "yearly" as const,
      priority: 0.6,
    })),

    // Conversão
    { url: url(ROUTES.CONTATO), lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: url(ROUTES.SIMULADOR), lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
  ];
}
