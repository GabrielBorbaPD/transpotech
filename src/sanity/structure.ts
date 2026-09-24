import type { StructureResolver } from "sanity/structure";
import { schemaTypes, singletonTypes } from "./schemas";

// Singleton abre direto no documento de _id igual ao nome do tipo; os demais
// tipos de documento viram listas, na ordem em que estão em schemaTypes.
export const structure: StructureResolver = (S) =>
  S.list()
    .title("Conteúdo")
    .items(
      schemaTypes
        .filter((type) => type.type === "document")
        .map((type) =>
          singletonTypes.has(type.name)
            ? S.listItem()
                .title(type.title ?? type.name)
                .id(type.name)
                .child(S.document().schemaType(type.name).documentId(type.name))
            : S.documentTypeListItem(type.name),
        ),
    );
