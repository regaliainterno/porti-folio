# Porti-folio

Porti-folio é o meu portfólio interativo construído com Vite, React + TypeScript, shadcn-ui e Tailwind CSS. O projeto destaca experiência, projetos e contato em uma única página elegante e responsiva.

## Tecnologias

- Vite (bundler moderno)
- React com TypeScript
- shadcn-ui (componentes Radix + Tailwind)
- Tailwind CSS + tailwindcss-animate
- Framer Motion, recharts e Radix UI em zonas específicas

## Rodando localmente

1. Instale as dependências:

   ```bash
   npm install
   ```

2. Inicie o servidor de desenvolvimento com hot reload:

   ```bash
   npm run dev
   ```

3. Abra `http://localhost:5173` (ou o host/porta que o Vite imprimir).

## Scripts úteis

- `npm run dev` — roda o servidor de desenvolvimento.
- `npm run build` — gera a versão otimizada em `dist/`.
- `npm run preview` — serve `dist/` localmente para revisar a build.
- `npm run lint` — executa o ESLint em todo o código.

## Deploy

1. Empurre o repositório para o GitHub (ou outro serviço Git).
2. Conecte o repositório ao Netlify, Vercel ou semelhante:
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Habilite deploy automático com branches protegidas conforme necessário.
3. Adicione domínios personalizados e variáveis de ambiente direto no painel da plataforma de hospedagem.

## Atualizando o conteúdo

- `src/pages/Index.tsx`: conteúdo principal, seções e textos.
- `src/components/*`: componentes como Hero, projetos, contato, footer.
- `src/main.tsx` e `src/App.css`: ponto de entrada e estilos globais.
- `public/`: imagens fixas, favicon e assets estáticos.
- `index.html`: metas, fontes e favicons que aparecem em redes sociais.

## Nota

Sempre rode `npm run build` antes de realizar o deploy e revise `dist/` para garantir que nenhuma asset esteja faltando.
