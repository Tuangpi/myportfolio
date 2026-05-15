# Sing Khan Tuang Portfolio

Personal portfolio website for Sing Khan Tuang, a full stack web developer focused on thoughtful product building, modern UX, and reliable remote collaboration.

Built with `React`, `TypeScript`, `Vite`, and `Tailwind CSS`.

## Overview

This site presents:

- A hero section with introduction, resume link, and availability
- An about section with background and technical skills
- A selected work section featuring real client and product projects
- A contact section with email, phone, and social links

The content is driven from a single data file so personal details, skills, projects, and links are easy to update.

## Tech Stack

- React 18
- TypeScript
- Vite
- Tailwind CSS
- Lucide React

## Project Structure

```text
src/
  assets/              Images used across the site
  components/          Reusable UI sections
  data/portfolio.ts    Portfolio content and links
  App.tsx              Main page composition
```

## Live Demo

[Live Demo](https://m-yportfolio.pages.dev/)

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Install dependencies

```bash
npm install
```

### Start the development server

```bash
npm run dev
```

### Build for production

```bash
npm run build
```

### Preview the production build

```bash
npm run preview
```

## Customizing Content

Most portfolio content lives in [`src/data/portfolio.ts`](./src/data/portfolio.ts).

Update this file to change:

- Hero text and resume link
- About section copy
- Skills list
- Project cards
- Contact links

Images can be replaced in [`src/assets`](./src/assets) and referenced from the same data file.

## Featured Projects

- Vakul Project
- ThaPyayNyo
- Glampro
- Kenpetmed

## Scripts

- `npm run dev` - Start the Vite dev server
- `npm run build` - Type-check and create a production build
- `npm run preview` - Preview the production build locally

## License

This project is for personal portfolio use.
