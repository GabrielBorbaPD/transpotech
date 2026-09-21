"use client";

import { useRef, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Section } from "@/components/ui/section";
import { ProductCard } from "@/components/catalog/product-card/product-card";
import { QuoteModal } from "@/components/catalog/quote-modal/quote-modal";
import { forkliftsSeminovas } from "@/data/forklifts-seminovas";
import { ROUTES } from "@/lib/routes";
import type { Forklift } from "@/types/forklift.types";

type ClassifiedsSectionProps = {
  /** Equipamentos exibidos. Default: todos os classificados. */
  items?: Forklift[];
  eyebrow?: string;
  title?: string;
  /** id de âncora — usado por links que apontam direto para a lista. */
  id?: string;
};

// Mesmo card e cabeçalho da seção "Outras opções que podem servir" (detalhe de
// novas), em trilho horizontal: o estoque de seminovas cresce, então os cards
// rolam com setas (padrão das unidades em /contato) em vez de grid fixo.
// No desktop cada card ocupa 1/4 da largura — visualmente igual ao grid de 4.
export function ClassifiedsSection({
  items = forkliftsSeminovas,
  eyebrow = "Classificados",
  title = "Seminovas disponíveis agora",
  id,
}: ClassifiedsSectionProps) {
  const [quoteForId, setQuoteForId] = useState<string | null>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  const scrollByCard = (dir: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;
    // Desloca ~1 card (largura do primeiro filho + gap de 24px).
    const first = track.firstElementChild as HTMLElement | null;
    const step = first ? first.offsetWidth + 24 : track.clientWidth * 0.8;
    track.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  if (items.length === 0) return null;

  return (
    <Section id={id} className="flex flex-col gap-10 lg:gap-12">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div className="flex flex-col gap-4">
          <p className="text-body font-semibold uppercase leading-[1.1] text-secondary-600">
            {eyebrow}
          </p>
          <h2 className="max-w-[408px] text-h2 font-normal leading-[1.1] text-neutral-800">
            {title}
          </h2>
        </div>

        {/* Setas — canto superior direito, na linha do título (no mobile o
            trilho é arrastável, então ficam ocultas). */}
        <div className="hidden shrink-0 items-center gap-2 lg:flex">
          <button
            type="button"
            aria-label="Ver seminovas anteriores"
            onClick={() => scrollByCard(-1)}
            className="flex size-12 items-center justify-center rounded-full border border-neutral-300 text-primary-500 transition-colors hover:bg-neutral-100"
          >
            <ArrowLeft className="size-6" aria-hidden />
          </button>
          <button
            type="button"
            aria-label="Ver próximas seminovas"
            onClick={() => scrollByCard(1)}
            className="flex size-12 items-center justify-center rounded-full border border-neutral-300 text-primary-500 transition-colors hover:bg-neutral-100"
          >
            <ArrowRight className="size-6" aria-hidden />
          </button>
        </div>
      </div>

      {/* Trilho — `overflow-x-auto` recorta tudo que passa da caixa, então o
          padding interno (compensado por margem negativa igual) reserva o
          espaço da sombra do hover em volta dos cards: 48px embaixo (a sombra
          desce 24px), 8px no topo e 32px nas laterais no desktop. No mobile e
          no tablet as laterais sangram até a borda da tela, para o padding da
          seção não cortar os cards. */}
      <div
        ref={trackRef}
        className="-mx-5 -mb-10 -mt-2 flex w-[calc(100%+2.5rem)] snap-x snap-mandatory gap-6 overflow-x-auto px-5 pb-12 pt-2 scroll-px-5 [scrollbar-width:none] sm:-mx-6 sm:w-[calc(100%+3rem)] sm:px-6 sm:scroll-px-6 lg:-mx-8 lg:w-[calc(100%+4rem)] lg:px-8 lg:scroll-px-8"
      >
        {items.map((forklift) => (
          <div
            key={forklift.id}
            className="w-[280px] shrink-0 snap-start sm:w-[320px] lg:w-[calc((100%-4.5rem)/4)]"
          >
            <ProductCard
              forklift={forklift}
              onRequestQuote={(f) => setQuoteForId(f.id)}
              detailsHref={`${ROUTES.EMPILHADEIRAS_SEMINOVAS}/${forklift.id}`}
              specs={[
                { label: "Ano", value: forklift.year ?? "—" },
                {
                  label: "Horas trabalhadas",
                  value: forklift.workedHours ?? "—",
                },
                { label: "Capacidade", value: forklift.capacity },
                { label: "Localização", value: forklift.location },
              ]}
            />
          </div>
        ))}
      </div>

      {quoteForId && (
        <QuoteModal
          onClose={() => setQuoteForId(null)}
          forklifts={forkliftsSeminovas}
          initialSelectedId={quoteForId}
        />
      )}
    </Section>
  );
}
