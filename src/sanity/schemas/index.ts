import type { SchemaTypeDefinition } from "sanity";
import { documentTypes } from "../document-types";
import { imageWithAlt } from "./objects/image-with-alt";
import { siteSettings } from "./site-settings";
import { article } from "./article";
import { forkliftNew } from "./forklift-new";
import { forkliftUsed } from "./forklift-used";
import { unit } from "./unit";
import { esgProject } from "./esg-project";
import { faqPage } from "./faq-page";

export const schemaTypes: SchemaTypeDefinition[] = [
  siteSettings,
  forkliftNew,
  forkliftUsed,
  article,
  unit,
  esgProject,
  faqPage,
  imageWithAlt,
];

/** Tipos editados como documento único (sem "criar novo" no Studio). */
export const singletonTypes = new Set<string>(["siteSettings"]);

// O webhook usa a lista leve de ../document-types; o Studio não sobe se as
// duas divergirem, para um tipo novo não ficar sem revalidação.
const documentNames = schemaTypes
  .filter((type) => type.type === "document")
  .map((type) => type.name)
  .sort()
  .join();
if (documentNames !== [...documentTypes].sort().join()) {
  throw new Error("src/sanity/document-types.ts desatualizado em relação a schemaTypes");
}
