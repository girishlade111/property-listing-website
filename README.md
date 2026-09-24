# Property Listing Website

A polished, single-property luxury listing website built with **Vite**, **React 18**, **TypeScript**, and **Tailwind CSS**. Ships with four complete brand themes (fonts, colors, and property content swap live from a demo bar), scroll-reveal animations, a rent/mortgage calculator, a masonry gallery, an amenities grid, and a private viewing enquiry form — fully responsive from mobile to wide desktop.

---

## Table of contents

- [Overview](#overview)
- [Features](#features)
- [Tech stack](#tech-stack)
- [Project structure](#project-structure)
- [Getting started](#getting-started)
- [Available scripts](#available-scripts)
- [Configuration](#configuration)
- [Theming system](#theming-system)
- [Environment variables](#environment-variables)
- [Building for production](#building-for-production)
- [Linting & type checking](#linting--type-checking)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

---

## Overview

This project is a marketing-grade landing page for a single luxury residence (default theme: **Maison Solène**, a Trousdale Estates home in Beverly Hills). Every piece of content — brand name, agent details, pricing, stats, highlights, gallery images, and amenities — is driven by a typed configuration object, so the entire site can be rebranded for a different property without touching component code.

A fixed **demo bar** at the top lets visitors switch between four fully distinct themes at runtime. Switching a theme updates CSS custom properties (colors + typography), the document title, and all property content instantly.

---

## Features

- **Multi-theme demo bar** — four complete themes with unique palettes, type pairings, and property content:
  | Theme | Property | Vibe |
  |---|---|---|
  | `atelier` | Maison Solène — Beverly Hills, CA | Luxury Minimal |
  | `azure` | Casa Azure — Point Dume, Malibu, CA | Coastal Bright |
  | `noir` | The Monolith — Palm Springs, CA | Architectural Noir |
  | `terra` | Villa Terra — Rancho Mirage, CA | Warm Hacienda |
- **Cinematic hero** — full-screen Ken Burns image animation, gradient scrims, status/agency eyebrow, price, and CTA
- **Sticky navigation** — transparent over the hero, frosted/solid on scroll, mobile hamburger menu with smooth anchor links
- **Overview section** — property stats (beds/baths/sqft/garage), long-form description, and highlight bullets
- **Masonry gallery** — responsive grid with `wide` / `tall` / `normal` span control per image
- **Amenities grid** — icon + title + description cards (Lucide icons)
- **Financial calculator** — dual-mode panel:
  - **Lease Affordability** — 30%-of-income guideline vs. the property’s monthly rent
  - **Mortgage Estimate** — price, down payment, rate, and term sliders → monthly P&I, loan amount, total of payments
- **Enquiry form** — agent profile (photo, license, phone, email, address) plus a validated viewing-request form with success state
- **Scroll reveals** — IntersectionObserver-driven fade/rise animations on section entry
- **Responsive & accessible** — mobile-first layout, semantic landmarks, focus styles, `aria-label`s on interactive controls
- **Theming via CSS variables** — Tailwind colors map to `rgb(var(--…))` tokens applied at runtime on `:root`

---

## Tech stack

| Layer | Choices |
|---|---|
| Build | [Vite 5](https://vitejs.dev/) |
| UI | [React 18](https://react.dev/) + [TypeScript 5](https://www.typescriptlang.org/) |
| Styling | [Tailwind CSS 3](https://tailwindcss.com/), PostCSS, Autoprefixer |
| Icons | [lucide-react](https://lucide.dev/) |
| Linting | ESLint 9 + `typescript-eslint`, `eslint-plugin-react-hooks`, `eslint-plugin-react-refresh` |
| Backend (optional) | `@supabase/supabase-js` is listed as a dependency for future form persistence — not yet used in source |

---

## Project structure

```
.
├── index.html                 # HTML entry, Google Fonts preconnect + font loading, meta tags
├── package.json
├── package-lock.json
├── vite.config.ts             # Vite + React plugin (lucide-react excluded from optimizeDeps)
├── tsconfig.json              # Project references (app + node)
├── tsconfig.app.json          # Browser/app TypeScript config
├── tsconfig.node.json         # Build-tooling TypeScript config
├── tailwind.config.js         # Design tokens (colors, fonts, animations) wired to CSS vars
├── postcss.config.js
├── eslint.config.js
├── .gitignore                 # Ignores node_modules, dist, logs, .env, editor files, etc.
├── public/                    # Static assets served at the site root
└── src/
    ├── main.tsx               # React entry point
    ├── App.tsx                # Composes all sections inside ThemeProvider
    ├── index.css              # Tailwind directives + global styles
    ├── vite-env.d.ts
    ├── config/
    │   ├── property.ts        # PropertyConfig types (stats, amenities, gallery, agent…)
    │   └── themes.ts          # All four themes: colors, fonts, and full property content
    ├── context/
    │   └── ThemeContext.tsx   # ThemeProvider, applyTheme(), useTheme(), useProperty()
    ├── hooks/
    │   └── useReveal.ts       # IntersectionObserver visibility hook
    └── components/
        ├── DemoBar.tsx        # Fixed theme switcher (palette swatches + labels)
        ├── Navbar.tsx         # Sticky header with scroll state + mobile menu
        ├── Hero.tsx           # Full-screen hero with Ken Burns background
        ├── Overview.tsx       # Stats, description, highlights
        ├── Gallery.tsx        # Masonry gallery grid
        ├── Amenities.tsx      # Amenity icon cards
        ├── Calculator.tsx     # Rent affordability + mortgage estimator
        ├── Enquire.tsx        # Agent card + viewing request form
        ├── Footer.tsx         # Site footer
        ├── Reveal.tsx         # Reveal-on-scroll wrapper component
        └── BoltPromo.tsx      # Promo overlay component
```

---

## Getting started

### Prerequisites

- **Node.js** 18+ (20 LTS recommended)
- **npm** 9+ (or pnpm/yarn — a `package-lock.json` is committed for npm)

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/<your-username>/property-listing-website.git
cd property-listing-website

# 2. Install dependencies
npm install

# 3. Start the dev server
npm run dev
```

The app runs at **http://localhost:5173** by default (Vite’s standard port) with hot module replacement enabled.

---

## Available scripts

| Script | Command | Description |
|---|---|---|
| Dev server | `npm run dev` | Start Vite dev server with HMR |
| Production build | `npm run build` | Type-check and emit optimized assets to `dist/` |
| Preview build | `npm run preview` | Serve the production build locally |
| Lint | `npm run lint` | Run ESLint across the project |
| Type check | `npm run typecheck` | Run `tsc --noEmit` against `tsconfig.app.json` |

---

## Configuration

### Rebranding for another property

All content lives in **`src/config/themes.ts`**. Each entry in the `themes` array is a `Theme` object:

```ts
export interface Theme {
  id: string;
  label: string;                          // Demo-bar button label
  vibe: string;                           // Short descriptor
  fonts: { display: string; sans: string }; // CSS font stacks
  colors: ThemeColors;                    // RGB triplet strings for CSS vars
  property: PropertyConfig;               // Full listing content
}
```

`PropertyConfig` (defined in `src/config/property.ts`) includes:

- `brand`, `agency`, `status`, `name`, `tagline`, `location`, `fullAddress`
- `price` + `priceSuffix` (e.g. `42000` / `"/ month"`)
- `description[]`, `hero.image`, `stats[]`, `highlights[]`
- `gallery[]` (`src`, `alt`, optional `span: 'wide' | 'tall' | 'normal'`)
- `amenities[]` (`icon`, `title`, `description` — icons are Lucide components)
- `agent` (`name`, `title`, `phone`, `email`, `photo`, `license`)

To ship a single property, you can keep only one theme in the array; the demo bar will render one button (or hide gracefully depending on how you adapt `DemoBar`).

### Adding a new theme

1. Copy an existing object in `src/config/themes.ts`.
2. Give it a unique `id` and a distinct `label` / `vibe`.
3. Set `fonts` to any Google Fonts already loaded in `index.html` (or add new `<link>`s there).
4. Set `colors` as RGB triplet strings, e.g. `'154 133 104'` — these are injected as `--accent`, `--ink`, `--bone`, etc.
5. Fill in the `property` object with the new listing content.

No other files need to change — `ThemeProvider` maps every theme entry into the demo bar automatically.

### Tailwind design tokens

`tailwind.config.js` exposes semantic utilities driven by the CSS variables:

- Colors: `ink`, `ink-800`, `ink-700`, `bone`, `sand`, `stone-400/500/600`, `accent`, `accent-light`
- Fonts: `font-display`, `font-sans`
- Extras: `tracking-widest2`, `ease-lux` (luxury easing curve), `animate-kenburns`

---

## Theming system

At runtime, `applyTheme()` in `src/context/ThemeContext.tsx` writes each color/font token onto `document.documentElement`:

```ts
root.style.setProperty('--ink', c.ink);
root.style.setProperty('--accent', c.accent);
root.style.setProperty('--font-display', theme.fonts.display);
document.title = `${theme.property.name} — ${theme.property.location}`;
```

Components read content via the **`useProperty()`** hook and style via Tailwind classes that resolve against those variables — so switching a theme updates the entire page atomically with no reload.

---

## Environment variables

No environment variables are required to run the site today.

If you enable Supabase persistence for the enquiry form later, create a `.env` file in the project root (already covered by `.gitignore`):

```bash
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key
```

and access them via `import.meta.env.VITE_SUPABASE_URL` etc. **Never commit `.env` or hardcode secrets.**

---

## Building for production

```bash
npm run build     # outputs static assets to dist/
npm run preview   # serve dist/ locally for a final smoke test
```

The `dist/` directory (and `dist-ssr/`) are git-ignored — only source is committed.

---

## Linting & type checking

```bash
npm run lint        # ESLint
npm run typecheck   # tsc --noEmit (app config)
```

Run both before opening a pull request.

---

## Deployment

This is a fully static SPA — deploy the `dist/` folder to any static host:

- **Vercel**
  - Framework preset: **Vite**
  - Build command: `npm run build`
  - Output directory: `dist`
- **Netlify**
  - Build command: `npm run build`
  - Publish directory: `dist`
  - A `_redirects` file is already present under `dist/` for SPA routing if you rebuild locally
- **GitHub Pages / Cloudflare Pages / S3 + CloudFront** — serve `dist/` as a static site

---

## Contributing

1. Fork the repository and create a feature branch: `git checkout -b feature/my-change`
2. Install and verify: `npm install && npm run lint && npm run typecheck`
3. Commit with a clear message: `git commit -m "Add …"`
4. Push and open a pull request

---

## License

No license has been specified for this project yet. All rights reserved by default — add a `LICENSE` file if you intend to open-source it.
