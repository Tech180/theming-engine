# Design Token Theming Engine

A high-performance, W3C DTCG-compliant design token and multi-platform theme compilation engine built with **Bun** and **Style Dictionary v4**.

This repository serves as the single source of truth for design tokens, unifying theme patterns across web and native platforms. It automates token validation using **Zod** schemas and compiles core, theme, and component-level tokens into web variables (CSS, SCSS), type-safe JS/TS modules, and native Android resources.

---

## 🏗️ Domain-Driven Architecture

The design token system follows a strict **Domain-Driven Design (DDD)** layered structure (Core, Brand/Theme, Component contexts):

```
src/domains/
├── core/                   # Tier 1: Context-free base values
│   ├── colors.ts           # Unified color palette (94 Pantone + custom colors)
│   ├── typography.ts       # Type scale, font families, and weights
│   ├── spacing.ts          # Spacing grid, border-radii, and transition timings
│   └── effects.ts          # Box-shadows, glows, and backdrop blurs
│
├── brands/                 # Tier 2: Theme-specific overrides & semantic contract
│   ├── default/            # Canonical theme (Linear-inspired)
│   │   ├── light.ts
│   │   └── dark.ts
│   ├── cyberpunk/          # High-contrast neon theme
│   ├── neon/               # Vibrant dark-focused theme
│   ├── mystic/             # Soft purple glassmorphic theme
│   └── burnt-forest/       # Moody autumn-inspired palette
│
└── components/             # Tier 3: Theme-aware UI component tokens
    ├── button.ts           # Button styles (primary, secondary, ghost, paddings)
    ├── card.ts             # Card styles (glassmorphism, backdrop-filters)
    └── input.ts            # Text field borders, backgrounds, and sizes
```

### 🤝 The Semantic Theme Contract

To ensure that downstream applications can switch themes seamlessly at runtime, every theme must implement the exact same semantic interface contract defined in `src/types/theme-contract.interface.ts` (enforced by a strict Zod schema):

*   `bg`, `surface`, `surfaceHover`, `surfaceGlass` (Backdrops & cards)
*   `border` (Lines, bounds)
*   `text`, `textMuted` (Content readability)
*   `primary`, `primaryHover`, `primaryText` (Call-to-actions)
*   `accent` (Interactive cues)
*   `radius`, `shadow`, `bgGradient` (Visual aesthetic elements)

---

## 📦 Multi-Platform Compilations (`dist/`)

The pipeline generates strictly separated, production-ready design tokens under `dist/`:

*   **`dist/css/`**: Core `:root` variables (`variables.css`), component-level styles (`components.css`), and selector-scoped theme variables (`themes/*.css`) using modern `[data-theme][data-appearance]` selectors.
*   **`dist/scss/`**: SCSS variables (`_variables.scss`), SCSS component tokens (`_components.scss`), and theme-scoped mixin definitions (`themes/*.scss`).
*   **`dist/js/`**: A type-safe TypeScript module (`tokens.ts`) exporting flat token lookups and a nested semantic tree (`tokenTree`) with full autocomplete support.
*   **`dist/android/`**: Android-compatible XML resources. Colors automatically transform from hex/rgba to ARGB (`#AARRGGBB`) colors.xml, and dimensions convert to `dp` / `sp` values. Supported qualifiers include default `values/` and night-mode `values-night/` setups.

---

## 🚀 Quick Start

### 1. Installation

Ensure you have [Bun](https://bun.sh) installed:

```bash
bun install
```

### 2. Run Token Validation

Scan and validate all TypeScript token files against the Zod schema system:

```bash
bun run validate
```

### 3. Build Platforms

Compile all design tokens into Web, JS, and Android outputs:

```bash
bun run build
```

### 4. Run Test Suite

Run the full automated test suite containing token compliance and compiler outputs checks:

```bash
bun test
```

---

## 🛠️ Adding a New Theme

Follow these steps to add a new theme (e.g. `cosmic`):

1.  **Create theme files**: Create `src/domains/brands/cosmic/light.ts` and `src/domains/brands/cosmic/dark.ts`.
2.  **Satisfy the contract**: Both files must export a token group satisfying the `ThemeContract` interface:
    ```typescript
    import type { ThemeContract } from '@/types/theme-contract.interface';

    export default {
      theme: {
        bg: { $value: '{color.spaceBg}', $type: 'color' },
        // ... define all required contract tokens
      }
    } satisfies ThemeContract;
    ```
3.  **Register the theme**: Update the `THEMES` array in `src/platforms/web.ts` to include `'cosmic'`.
4.  **Validate**: Run `bun run validate` and verify that the new theme conforms to all color, dimension, and schema rules.
5.  **Build**: Run `bun run build` to generate `cosmic-light.css`, `cosmic-dark.css` and their SCSS counterparts.

---

## 🧱 Adding a New Component

To add a new component (e.g. `badge`):

1.  **Create component file**: Create `src/domains/components/badge.ts`.
2.  **Define component tokens**: reference semantic themes or core tokens:
    ```typescript
    import type { TokenGroup } from '@/types/token-group.interface';

    export default {
      badge: {
        bg: { $value: '{theme.accent}', $type: 'color' },
        padding: { $value: '{spacing.xs}', $type: 'dimension' }
      }
    } satisfies TokenGroup;
    ```
3.  **Include in build**: Add the path to `COMPONENT_SOURCES` in `src/index.ts`.
4.  **Build & Consume**: Run `bun run build`. Component CSS and SCSS will automatically output referencing the global semantic variables (e.g., `var(--theme-accent)` or `$theme-accent`).
