# Portfólio, Otávio Ramalho 🐧

Site de portfólio pessoal, construído com Next.js. Estética "preto cromado" (estilo Vercel), bilíngue (PT/EN), com pinguim como marca.

## Stack

- **Next.js 16** (App Router) + **React 19** + **TypeScript**
- **Tailwind CSS v4**
- Fontes **Geist** (via `next/font`)
- Sem dependências externas de runtime, tudo estático

## Rodar localmente

```bash
npm install
npm run dev
```

Abre em [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # build de produção
npm run start   # servir o build
```

## Como editar o conteúdo

Todo o conteúdo fica em arquivos simples e comentados:

- `src/data/profile.ts`, dados pessoais, bio, links e tecnologias
- `src/data/experience.ts`, experiência e formação
- `src/data/projects.ts`, projetos
- `src/data/certificates.ts`, certificados
- `src/i18n/dictionary.ts`, textos fixos da interface (PT/EN)

A marca (pinguim) fica em `public/penguin.png`.

## Estrutura

- `src/app/`, layout, página e design system (`globals.css`)
- `src/components/`, seções (Hero, About, Experience, Projects, Certificates, Contact) e utilitários
- `src/i18n/`, sistema bilíngue (context + dicionário)

## Deploy

Hospedado na [Vercel](https://vercel.com). Cada push na branch principal publica automaticamente.
