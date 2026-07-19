import StyleDictionary from 'style-dictionary';
import { outputReferencesFilter } from 'style-dictionary/utils';
import { pxToRemTransform } from './transforms/px-to-rem';
import { hexAlphaTransform, rgbaToHexTransform } from './transforms/color-modifiers';
import { themedCssFormat } from './formats/themed-css';
import { themedScssFormat } from './formats/themed-scss';
import { jsModuleFormat } from './formats/js-module';
import { androidColorsFormat, androidDimensFormat, androidFontDimensFormat } from './formats/android-xml';
import { coreCssFormat } from './formats/core-css';
import { validateAllTokens } from './validate';
export { compileDynamicThemeCss } from './dynamic-compiler';

/* =========================================
   Theming Engine — Build Orchestrator

   Uses separate SD instances per theme to
   avoid token collisions between themes
   that share the same semantic key names.
   ========================================= */

const THEMES = ['default', 'cyberpunk', 'neon', 'mystic', 'burnt-forest', 'valentines', 'st-patricks', 'earth-day', 'independence', 'halloween', 'thanksgiving', 'christmas', 'paper', 'paper-mario', 'retro-80s', 'pixel', 'matrix', 'terminal', 'vaporwave', 'arcade'] as const;
const APPEARANCES = ['light', 'dark'] as const;

/** Shared hooks for all SD instances */
const sharedHooks = {
  transforms: {
    'size/pxToRem': pxToRemTransform,
    'color/hexAlpha': hexAlphaTransform,
    'color/rgbaToHex': rgbaToHexTransform,
    'name/themePrefix': {
      type: 'name' as const,
      transitive: false,
      transform: (token: any) => {
        const nameParts = [...token.path];
        const isBrandToken = String(token.filePath ?? '').includes('brands/');
        if (isBrandToken && nameParts[0] !== 'theme') {
          nameParts.unshift('theme');
        }
        return nameParts
          .map((part: string) =>
            part
              .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
              .toLowerCase()
          )
          .join('-');
      },
    },
  },
  formats: {
    'themed-css': themedCssFormat,
    'themed-scss': themedScssFormat,
    'js-module': jsModuleFormat,
    'android/colors': androidColorsFormat,
    'android/dimens': androidDimensFormat,
    'android/fontDimens': androidFontDimensFormat,
    'core-css': coreCssFormat,
  },
};

/** Core token sources (shared across all themes) */
const CORE_SOURCES = [
  'src/domains/core/colors.ts',
  'src/domains/core/typography.ts',
  'src/domains/core/spacing.ts',
  'src/domains/core/effects.ts',
];

/** Component token sources */
const COMPONENT_SOURCES = [
  'src/domains/components/button.ts',
  'src/domains/components/card.ts',
  'src/domains/components/input.ts',
];

export async function build() {
  const startTime = performance.now();

  console.log('🚀 Building theming-engine...\n');

  // ── Step 1: Validate all tokens ──
  try {
    await validateAllTokens();
  } catch {
    console.error('Build aborted due to validation errors.');
    process.exit(1);
  }

  // ── Step 2: Build core tokens (platform-independent base) ──
  console.log('📦 Building core tokens...');

  const coreSd = new StyleDictionary({
    hooks: sharedHooks,
    source: CORE_SOURCES,
    platforms: {
      css: {
        transforms: ['attribute/cti', 'name/themePrefix', 'size/pxToRem'],
        buildPath: 'dist/css/',
        files: [
          {
            destination: 'variables.css',
            format: 'core-css',
            options: { outputReferences: false },
          },
        ],
      },
      scss: {
        transforms: ['attribute/cti', 'name/themePrefix', 'size/pxToRem'],
        buildPath: 'dist/scss/',
        files: [
          {
            destination: '_variables.scss',
            format: 'scss/variables',
          },
        ],
      },
      android: {
        transforms: ['attribute/cti', 'name/themePrefix', 'size/pxToRem', 'color/hexAlpha', 'color/rgbaToHex'],
        buildPath: 'dist/android/',
        files: [
          {
            destination: 'values/colors.xml',
            format: 'android/colors',
          },
          {
            destination: 'values/dimens.xml',
            format: 'android/dimens',
          },
          {
            destination: 'values/font_dimens.xml',
            format: 'android/fontDimens',
          },
        ],
      },
    },
  });
  await coreSd.buildAllPlatforms();

  // ── Step 3: Build each theme×appearance separately ──
  console.log('🎨 Building theme tokens...');

  for (const theme of THEMES) {
    for (const appearance of APPEARANCES) {
      const themeSources = [
        ...CORE_SOURCES,
        `src/domains/brands/_shared/presentation-${appearance}.ts`,
        `src/domains/brands/${theme}/${appearance}.ts`,
      ];

      const sd = new StyleDictionary({
        hooks: sharedHooks,
        source: themeSources,
        platforms: {
          css: {
            transforms: ['attribute/cti', 'name/themePrefix', 'size/pxToRem'],
            buildPath: 'dist/css/',
            files: [
              {
                destination: `themes/${theme}-${appearance}.css`,
                format: 'themed-css',
                filter: (token: Record<string, unknown>) =>
                  String(token.filePath ?? '').includes('brands/'),
              },
            ],
          },
          scss: {
            transforms: ['attribute/cti', 'name/themePrefix', 'size/pxToRem'],
            buildPath: 'dist/scss/',
            files: [
              {
                destination: `themes/_${theme}-${appearance}.scss`,
                format: 'themed-scss',
                filter: (token: Record<string, unknown>) =>
                  String(token.filePath ?? '').includes('brands/'),
              },
            ],
          },
        },
      });

      await sd.buildAllPlatforms();
    }
  }

  // ── Step 4: Build Android theme colors (default only, using values/values-night) ──
  console.log('🤖 Building Android theme tokens...');

  for (const appearance of APPEARANCES) {
    const androidSd = new StyleDictionary({
      hooks: sharedHooks,
      source: [
        ...CORE_SOURCES,
        `src/domains/brands/default/${appearance}.ts`,
      ],
      platforms: {
        android: {
          transforms: ['attribute/cti', 'name/themePrefix', 'size/pxToRem', 'color/hexAlpha', 'color/rgbaToHex'],
          buildPath: 'dist/android/',
          files: [
            {
              destination: appearance === 'dark' ? 'values-night/theme_colors.xml' : 'values/theme_colors.xml',
              format: 'android/colors',
              filter: (token: Record<string, unknown>) =>
                String(token.filePath ?? '').includes('brands/'),
            },
          ],
        },
      },
    });
    await androidSd.buildAllPlatforms();
  }
  // ── Step 5: Build component tokens ──
  console.log('🧱 Building component tokens...');

  const componentSd = new StyleDictionary({
    hooks: sharedHooks,
    source: [
      ...CORE_SOURCES,
      ...COMPONENT_SOURCES,
      'src/domains/brands/default/light.ts',
    ],
    platforms: {
      css: {
        transforms: ['attribute/cti', 'name/themePrefix', 'size/pxToRem'],
        buildPath: 'dist/css/',
        files: [
          {
            destination: 'components.css',
            format: 'css/variables',
            filter: (token) => token.filePath.includes('components/'),
            options: { outputReferences: false },
          },
        ],
      },
      scss: {
        transforms: ['attribute/cti', 'name/themePrefix', 'size/pxToRem'],
        buildPath: 'dist/scss/',
        files: [
          {
            destination: '_components.scss',
            format: 'themed-scss',
            filter: (token) => token.filePath.includes('components/'),
            options: { outputReferences: outputReferencesFilter },
          },
        ],
      },
    },
  });
  await componentSd.buildAllPlatforms();

  // ── Step 6: Build JS/TS module (all tokens combined) ──
  console.log('📝 Building JS module...');


  const jsSd = new StyleDictionary({
    hooks: sharedHooks,
    source: CORE_SOURCES,
    platforms: {
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
    },
  });
  await jsSd.buildAllPlatforms();

  // ── Done ──
  const elapsed = (performance.now() - startTime).toFixed(0);
  console.log(`\n✅ Build complete in ${elapsed}ms!`);
  console.log('   📂 dist/css/     — CSS variables & theme files');
  console.log('   📂 dist/scss/    — SCSS variables & theme mixins');
  console.log('   📂 dist/js/      — TypeScript token module');
  console.log('   📂 dist/android/ — Android resource XML');
}

if (import.meta.main) {
  build().catch((error) => {
    console.error('Build failed:', error);
    process.exit(1);
  });
}
