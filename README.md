# Sing Khan Tuang Portfolio

Personal portfolio website for Sing Khan Tuang, a full stack web developer focused on thoughtful product building, modern UX, and reliable remote collaboration.

Built with `React`, `TypeScript`, `Vite`, and `Tailwind CSS`.

## Overview

This site presents:

- A hero section with a square workstation photo, introduction, resume link, availability, and three stat cards
- A scrolling technology strip and an about section with background and grouped skill chips
- A selected work section with hover-driven project previews
- A contact section with a large email call to action plus phone and social tiles
- A sticky header with numbered anchor navigation and scroll progress

The content is driven from a single data file so personal details, skills, projects, and links are easy to update.

## Tech Stack

- React 18
- TypeScript
- Vite
- Tailwind CSS
- Lucide React
- Fonts: Space Grotesk (display), Inter (body), JetBrains Mono (labels and metadata)

## Design System

The visual language is dark, technical, and editorial.

| Token | Value | Usage |
| --- | --- | --- |
| `canvas` | `#08090a` | Page background |
| `surface` | `#101113` | Panels and image frames |
| `accent` | `#c7f94b` | Acid-lime highlight, links, focus rings |
| `ink` | `#f4f4f5` | Primary text |
| `muted` | `#a1a1aa` | Body copy |
| `faint` | `#8b8b96` | Micro labels and metadata |

Tokens, fluid display type sizes, and animations live in [`tailwind.config.js`](./tailwind.config.js). Base element styles, focus rings, and the reduced-motion guards live in [`src/index.css`](./src/index.css).

To change the accent color, update `accent` in `tailwind.config.js` and the matching hex values used for `::selection` and `:focus-visible` in `src/index.css`.

## Project Structure

```text
src/
  assets/              Images used across the site
  components/          Page sections and shared UI pieces
  data/portfolio.ts    Portfolio content, navigation, and links
  hooks/useInView.ts   Scroll reveal and active-section hooks
  App.tsx              Main page composition
  index.css            Base styles and shared component classes
```

## Accessibility Notes

- Skip link to the main content
- Visible `:focus-visible` rings on all interactive elements
- Anchor scrolling offset for the sticky header
- Decorative graphics hidden from assistive technology
- `prefers-reduced-motion` disables reveals, marquee movement, and smooth scrolling

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

- Hero text and resume link (`profile.resumeHref`)
- Hero stat cards (`stats`) and the about section copy and profile facts
- Skills list, stack strip, and skill groups (rendered as chips)
- Project entries and preview images
- Contact links
- Navigation items (`navItems`)

Images can be replaced in [`src/assets`](./src/assets) and referenced from the same data file.

### Hero photo

The hero portrait is `src/assets/hero.webp` (1254×1254, ~70 KB). It is displayed in a square frame, so keep a 1:1 source image to avoid cropping surprises. When swapping the photo, update the `width` and `height` attributes in [`src/components/HeroSection.tsx`](./src/components/HeroSection.tsx) to match the new file so the browser reserves the right space. Images are imported through the data file, so Vite handles hashing and cache busting.

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
