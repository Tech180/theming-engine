import type { TransformedToken } from 'style-dictionary/types';

/* =========================================
   Web Platform Configuration
   Generates CSS, SCSS, and JS outputs
   with strict directory separation.
   ========================================= */

/** Theme manifest for generating per-theme output files */
const THEMES = ['default', 'cyberpunk', 'neon', 'mystic', 'burnt-forest'] as const;
const APPEARANCES = ['light', 'dark'] as const;

/** Filters tokens to only core domain (non-theme, non-component) */
function coreFilter(token: TransformedToken): boolean {
  return !token.filePath.includes('brands/') && !token.filePath.includes('components/');
}

/** Filters tokens to only component domain */
function componentFilter(token: TransformedToken): boolean {
  return token.filePath.includes('components/');
}

/** Creates a filter for a specific theme × appearance combination */
function themeFilter(theme: string, appearance: string) {
  return (token: TransformedToken): boolean => {
    return token.filePath.includes(`brands/${theme}/${appearance}`);
  };
}

/** Generates CSS file entries for all themes */
function getCssThemeFiles() {
  return THEMES.flatMap((theme) =>
    APPEARANCES.map((appearance) => ({
      destination: `themes/${theme}-${appearance}.css`,
      format: 'themed-css',
      filter: themeFilter(theme, appearance),
    }))
  );
}

/** Generates SCSS file entries for all themes */
function getScssThemeFiles() {
  return THEMES.flatMap((theme) =>
    APPEARANCES.map((appearance) => ({
      destination: `themes/_${theme}-${appearance}.scss`,
      format: 'themed-scss',
      filter: themeFilter(theme, appearance),
    }))
  );
}

export function getWebPlatforms() {
  return {
    css: {
      transformGroup: 'css',
      buildPath: 'dist/css/',
      files: [
        {
          destination: 'variables.css',
          format: 'css/variables',
          filter: coreFilter,
          options: { outputReferences: false },
        },
        {
          destination: 'components.css',
          format: 'css/variables',
          filter: componentFilter,
          options: { outputReferences: true },
        },
        ...getCssThemeFiles(),
      ],
    },
    scss: {
      transformGroup: 'scss',
      buildPath: 'dist/scss/',
      files: [
        {
          destination: '_variables.scss',
          format: 'themed-scss',
          filter: coreFilter,
        },
        {
          destination: '_components.scss',
          format: 'themed-scss',
          filter: componentFilter,
        },
        ...getScssThemeFiles(),
      ],
    },
    js: {
      transformGroup: 'js',
      buildPath: 'dist/js/',
      files: [
        {
          destination: 'tokens.ts',
          format: 'js-module',
        },
      ],
    },
  };
}
