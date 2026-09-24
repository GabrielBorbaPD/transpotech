import { StructureMapSection } from "@/components/layout/structure-map-section";

// Mesma seção de abrangência nacional da página de serviços (indicadores +
// mapa do Brasil interativo), com o texto institucional de Quem Somos.
export function StructureSection() {
  return (
    <StructureMapSection
      titleTop="Onde sua operação estiver,"
      titleBottom="a gente chega"
      accentBottom
      description="Com unidades, hub administrativo, hub de rental, oficinas, estoque de peças e carros oficina, a TranspoTech oferece atendimento consultivo e suporte para empresas que precisam de agilidade, disponibilidade e confiança."
      descriptionWidth="560px"
    />
  );
}
