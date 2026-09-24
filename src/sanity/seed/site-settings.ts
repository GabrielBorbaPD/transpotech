import { ROUTES } from "@/lib/routes";
import { defaultDescription, defaultShareDescription } from "@/lib/metadata";
import { HOME_ARTICLE_IDS } from "@/components/home/blog-section/home-articles";
import { seedKey, type SeedDocument } from "./helpers";

export function documents(): SeedDocument[] {
  return [
    {
      _id: "siteSettings",
      _type: "siteSettings",
      // PLACEHOLDER: confirmar a URL real do portal de carreiras (Gupy).
      careersUrl: ROUTES.GUPY,
      ouvidorDigitalUrl: ROUTES.OUVIDOR_DIGITAL,
      // Sem `social`: as URLs reais das redes ainda não foram fornecidas.
      seo: {
        description: defaultDescription,
        shareDescription: defaultShareDescription,
      },
      homeArticles: HOME_ARTICLE_IDS.map((id, i) => ({
        _type: "reference",
        _key: seedKey(i, "home-article"),
        _ref: `article-${id}`,
      })),
    },
  ];
}
