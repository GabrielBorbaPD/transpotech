# Pneus — imagens das categorias

Fotos do topo dos cards da seção "Escolha a categoria mais próxima da sua necessidade"
(`src/components/pneus/categories-section/categories-section.tsx`). O card renderiza a
foto só quando o campo `image` da categoria existe.

> **Estado atual: placeholders.** Os cinco `.webp` desta pasta são artes provisórias
> (gradiente com o nome da categoria). Para publicar, basta sobrescrever cada arquivo
> mantendo o mesmo nome — nenhum ajuste de código é necessário.

## Arquivos esperados

Salvar em `.webp` (~1500px de largura, q80, via `sharp`) nesta pasta e ligar no array
`categories` com `image` + `imageAlt`.

| Arquivo | Categoria | Cenário desejado |
|---|---|---|
| `pneu-empilhadeira.webp` | Pneus para Empilhadeiras | Empilhadeira contrabalançada em galpão/CD, enquadramento que valorize o rodado |
| `pneu-otr.webp` | Pneus OTR (Off-The-Road) | Escavadeira ou carregadeira em obra/terreno, pneu grande em evidência |
| `pneu-agricola.webp` | Pneus Agrícolas | Trator ou colheitadeira em lavoura, pneu de garras visível |
| `pneu-florestal.webp` | Pneus Florestais | Skidder/forwarder em área de manejo florestal, pneu com correntes ou garras |
| `pneu-portuario.webp` | Pneus Portuários | Reach stacker ou empilhadeira de contêiner em pátio portuário |

## Formato

- Proporção ~**2:1** (o card exibe 180px de altura em largura fluida, com `object-cover`).
- Luz e tratamento alinhados às fotos do portal de conteúdo (cena real, sem render "3D branco").
- O assunto principal deve ficar centralizado na vertical — o `object-cover` corta topo e base
  em telas estreitas.

## Processo (igual ao de `src/assets/images/Image generation/`)

1. Referências no Magnific: foto real do equipamento + enquadramento desejado desta tabela.
2. Gerar mantendo identidade e branding corretos (sem logotipos de marcas concorrentes).
3. Converter para `.webp` (~1500px, q80, via `sharp`) nesta pasta.
4. Ligar em `categories` (`image` e `imageAlt`) na seção de categorias de pneus.

## Prompts de partida (Magnific / modelo de alta fidelidade)

Base comum: `fotografia industrial realista, luz natural difusa, profundidade de campo suave,
cores neutras com destaque para o equipamento, sem texto e sem logotipos de marcas, enquadramento
horizontal 2:1, assunto centralizado na vertical`.

- **Empilhadeiras:** empilhadeira contrabalançada elétrica operando em centro de distribuição
  moderno, porta-paletes ao fundo, piso de concreto polido, rodado em primeiro plano.
- **OTR:** escavadeira ou carregadeira sobre pneus em canteiro de obra a céu aberto, terra
  compactada, pneu de grande porte em destaque.
- **Agrícolas:** trator agrícola em lavoura ao amanhecer, pneus de garras profundas com solo
  aderido, plantação ao fundo.
- **Florestais:** skidder ou forwarder em área de manejo florestal, pneus com correntes,
  troncos empilhados ao fundo, luz filtrada pelas árvores.
- **Portuários:** reach stacker movimentando contêineres em pátio portuário, pilhas de
  contêineres ao fundo, luz de fim de tarde.
