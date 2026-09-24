// Tipos de documento do Studio, sem importar os schemas (que puxam o pacote
// `sanity` inteiro). Mantenha em sincronia com schemaTypes em ./schemas: o
// webhook de revalidação recusa tipo fora desta lista.
export const documentTypes = [
  "siteSettings",
  "forkliftNew",
  "forkliftUsed",
  "article",
  "unit",
  "esgProject",
  "faqPage",
] as const;
