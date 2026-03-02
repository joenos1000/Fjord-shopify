# Fjord Bryggeri og Destilleri — Shopify Theme

A custom Shopify theme for Fjord Bryggeri og Destilleri, a Danish brewery and distillery producing beer, gin, snaps, rum and more. The brand identity is **clean Nordic minimalism with bold, intentional accents** — reflecting tradition and premium craftsmanship.

## Project Overview

- **Brand:** Fjord Bryggeri og Destilleri (Danish brewery & distillery)
- **Products:** Craft beer, beer, gin, snaps, rum and more — emphasis on tradition processes and high-quality ingredients
- **Base:** Dawn theme (structure/plumbing only — UI is fully replaced)
- **Stack:** Tailwind CSS, Alpine.js, Shopify Liquid, npm

## Architecture

```
assets/          — Compiled CSS, JS, and static files
config/          — settings_schema.json, settings_data.json
layout/          — theme.liquid (root shell)
locales/         — da.json (primary), en.json (future i18n)
sections/        — Shopify sections (.liquid)
snippets/        — Reusable partials (.liquid)
templates/       — Page templates (.json or .liquid)
```

## Tech Stack & Conventions

### CSS — Tailwind
- All styling via Tailwind utility classes
- Custom design tokens defined in `tailwind.config.js` (colors, fonts, spacing)
- No inline `style=""` attributes — use Tailwind classes or `@apply` in component CSS
- Use `@layer components` for repeated patterns (e.g. `.btn-primary`, `.product-card`)
- Dark variants via `dark:` prefix if dark mode is ever toggled

### JavaScript — Alpine.js
- Use Alpine.js (`x-data`, `x-show`, `x-on`, `x-bind`) for all interactivity
- No jQuery — never add it
- Vanilla JS is acceptable for one-liners or event listeners on static elements
- Alpine stores (`Alpine.store`) for shared state (cart count, menu open state, etc.)
- Keep `x-data` objects small — extract to `Alpine.data()` in `/assets/alpine-components.js` when logic grows

### Shopify Liquid
- Prefer `{% render %}` over `{% include %}` (scoped, no variable leakage)
- All section settings must have a matching `settings_schema.json` entry or inline schema
- Use `{{ 'file.css' | asset_url | stylesheet_tag }}` — never hardcode URLs
- Metafields are preferred over hacking product descriptions for structured data (tasting notes, ABV, ingredients)
- Use Context7 with official Shopify Liquid docs when implementing or validating Liquid syntax, filters, and objects

## Design System

### Principles
- **Clean Nordic minimal** as the baseline — whitespace, restraint, legibility
- **Bold accents** used intentionally — hero typography, product highlights, CTAs
- Never use more than 2 typefaces
- Imagery is always full-bleed or tightly cropped — no floating images with white gaps

### Tokens (define in `tailwind.config.js`)
- Define brand colors as named tokens: `fjord-navy`, `fjord-cream`, `fjord-copper`, etc.
- Define font families: `font-display` (headings), `font-body` (body text)
- Use `rem` units for spacing — never `px` in Tailwind config

### Components to build (not inherit from Dawn)
- Navigation (desktop + mobile)
- Product card
- Hero / banner section
- Collection grid
- Cart drawer
- Footer

## Localisation (i18n)

- **Primary language:** Danish (`da.json`)
- **Future-proof:** Mirror all keys in `en.json` for future English support
- All user-facing strings must go through `{{ 'key' | t }}` — no hardcoded Danish text in `.liquid` files
- Translation keys use `snake_case` and are namespaced: `product.add_to_cart`, `nav.menu`, `footer.newsletter_heading`

## Development Workflow

```bash
npm install              # Install dependencies
shopify theme dev        # Start local development server
npm run build:css        # Compile Tailwind (watch mode: npm run watch:css)
```

- Shopify CLI handles hot-reloading for Liquid/JSON changes
- Tailwind should be compiled to `/assets/theme.css` — add to `.gitignore` the uncompiled output only if source is committed
- Never commit `node_modules/`

## Dawn Inheritance Rules

Dawn is used **for structure only**. Follow these rules:

- **Keep:** `config/`, `locales/` base structure, template JSON scaffolding, section schema patterns
- **Replace:** All section HTML/CSS, `layout/theme.liquid` shell, any Dawn-specific JS (`theme.js`, etc.)
- **Do not:** Add Dawn's CSS classes, rely on Dawn's JS modules, or reference `base.css`
- If a Dawn section is not being replaced yet, leave it untouched — do not partially restyle it

## Code Style

- English only for code, comments, variable names, and commit messages
- Danish only for user-facing UI strings (via i18n keys)
- No `console.log` left in committed code
- Liquid: 2-space indent. HTML: 2-space indent. JS: 2-space indent
- Prefer explicit over clever — Liquid is read by designers too

## What NOT to Do

- Do not modify Shopify checkout or order flow — out of scope
- Do not add jQuery or other large JS libraries without discussion
- Do not hardcode prices, product IDs, or collection handles in templates
- Do not use Dawn's utility classes (`rte`, `page-width`, etc.) — these will conflict
- Do not store sensitive keys in theme files — use Shopify environment variables
