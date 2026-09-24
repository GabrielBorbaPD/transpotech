import type { StaticImageData } from "next/image";

/**
 * Projeção GROQ de um campo `imageWithAlt`. O resultado tem o mesmo formato de
 * StaticImageData (src, width, height, blurDataURL), então os componentes
 * recebem a imagem do CMS pelo mesmo tipo das importadas de src/assets.
 *
 * Uso: `*[_type == "x"]{ "image": image${imageProjection} }`
 */
export const imageProjection = `{
  "src": asset->url,
  "width": asset->metadata.dimensions.width,
  "height": asset->metadata.dimensions.height,
  "blurDataURL": asset->metadata.lqip,
  alt
}`;

export type CmsImage = StaticImageData & { alt?: string };
