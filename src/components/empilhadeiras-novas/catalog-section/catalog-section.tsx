import { Section } from "@/components/ui/section";
import { Catalog } from "@/components/empilhadeiras-novas/catalog-section/catalog/catalog";
import { forkliftsNovas } from "@/data/forklifts-novas";
import { BrandLogoFilters } from "./brand-logo-filters";

export function CatalogSection() {
  return (
    <Section className="flex flex-col gap-10 lg:gap-12">
      {/* Cabeçalho da página */}
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between lg:gap-10">
        <div className="flex flex-col gap-4">
          <h1 className="text-h2 text-neutral-800">
            <span className="font-normal">Empilhadeiras </span>
            <span className="font-bold text-primary-500">novas</span>
          </h1>
          <p className="max-w-[384px] text-body leading-[1.35] text-neutral-600">
            Equipamentos zero-hora com garantia de fábrica e configuração sob
            medida.
          </p>
        </div>

        {/* Logos clicáveis: filtram o catálogo pela marca (Client Component;
            esta seção segue no servidor, com forkliftsNovas fora do bundle). */}
        <BrandLogoFilters />
      </div>

      <Catalog forklifts={forkliftsNovas} />
    </Section>
  );
}
