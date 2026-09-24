import { defineArrayMember, defineField, defineType } from "sanity";
import { HOME_ARTICLE_LIMIT } from "../../components/home/blog-section/home-articles";

const socialField = (name: string, title: string) =>
  defineField({
    name,
    title,
    description:
      "Link completo do perfil. Vazio, o ícone continua no rodapé sem destino.",
    type: "url",
    validation: (r) => r.uri({ scheme: ["https", "http"] }),
  });

export const siteSettings = defineType({
  name: "siteSettings",
  title: "Configurações do site",
  type: "document",
  groups: [
    { name: "links", title: "Links externos", default: true },
    { name: "social", title: "Redes sociais" },
    { name: "seo", title: "SEO padrão" },
    { name: "home", title: "Home" },
  ],
  fields: [
    defineField({
      name: "careersUrl",
      title: "Portal de carreiras (Gupy)",
      description:
        'Destino de "Trabalhe conosco" no menu e no rodapé e do botão "Ver vagas no Gupy" em Quem Somos.',
      type: "url",
      group: "links",
      validation: (r) => r.required().uri({ scheme: ["https", "http"] }),
    }),
    defineField({
      name: "ouvidorDigitalUrl",
      title: "Canal de relatos (Ouvidor Digital)",
      description:
        'Destino de "Fazer um relato" no Canal da Transparência e de "Acessar Canal da Transparência" na Ouvidoria Digital.',
      type: "url",
      group: "links",
      validation: (r) => r.required().uri({ scheme: ["https", "http"] }),
    }),
    defineField({
      name: "social",
      title: "Redes sociais",
      description: "Ícones do rodapé.",
      type: "object",
      group: "social",
      options: { collapsible: false },
      fields: [
        socialField("facebook", "Facebook"),
        socialField("instagram", "Instagram"),
        socialField("linkedin", "LinkedIn"),
        socialField("youtube", "YouTube"),
      ],
    }),
    defineField({
      name: "seo",
      title: "SEO padrão",
      description:
        "Usado pelo Google e nas pré-visualizações de links compartilhados quando a página não define os próprios.",
      type: "object",
      group: "seo",
      options: { collapsible: false },
      fields: [
        defineField({
          name: "description",
          title: "Descrição para o Google",
          description:
            "Texto que aparece abaixo do título nos resultados de busca. Ideal: até 160 caracteres.",
          type: "text",
          rows: 3,
          validation: (r) => r.required().max(200),
        }),
        defineField({
          name: "shareDescription",
          title: "Descrição ao compartilhar",
          description:
            "Texto da pré-visualização em WhatsApp, LinkedIn e outras redes.",
          type: "text",
          rows: 3,
          validation: (r) => r.required().max(200),
        }),
        defineField({
          name: "shareImage",
          title: "Imagem ao compartilhar",
          description: "Opcional. Proporção 1200 × 630 px.",
          type: "imageWithAlt",
        }),
      ],
    }),
    defineField({
      name: "homeArticles",
      title: "Artigos da home",
      description: `Artigos da seção de conteúdos da home, na ordem da lista (arraste para reordenar). O primeiro é o destaque grande; os demais viram os cards menores. Máximo de ${HOME_ARTICLE_LIMIT}.`,
      type: "array",
      group: "home",
      of: [
        defineArrayMember({
          type: "reference",
          to: [{ type: "article" }],
        }),
      ],
      validation: (r) => r.max(HOME_ARTICLE_LIMIT).unique(),
    }),
  ],
  preview: {
    prepare() {
      return { title: "Configurações do site" };
    },
  },
});
