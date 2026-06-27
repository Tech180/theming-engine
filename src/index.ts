import StyleDictionary from 'style-dictionary';
import { pxToRemTransform } from './transforms/px-to-rem';
import { hexAlphaTransform, rgbaToHexTransform } from './transforms/color-modifiers';
import { themedCssFormat } from './formats/themed-css';
import { themedScssFormat } from './formats/themed-scss';
import { jsModuleFormat } from './formats/js-module';
import { androidColorsFormat, androidDimensFormat, androidFontDimensFormat } from './formats/android-xml';
import { validateAllTokens } from './validate';

/* =========================================
   Theming Engine — Build Orchestrator

   Uses separate SD instances per theme to
   avoid token collisions between themes
   that share the same semantic key names.
   ========================================= */

const THEMES = ['default', 'cyberpunk', 'neon', 'mystic', 'burnt-forest'] as const;
const APPEARANCES = ['light', 'dark'] as const;

/** Shared hooks for all SD instances */
const sharedHooks = {
  transforms: {
    'size/pxToRem': pxToRemTransform,
    'color/hexAlpha': hexAlphaTransform,
    'color/rgbaToHex': rgbaToHexTransform,
  },
  formats: {
    'themed-css': themedCssFormat,
    'themed-scss': themedScssFormat,
    'js-module': jsModuleFormat,
    'android/colors': androidColorsFormat,
    'android/dimens': androidDimensFormat,
    'android/fontDimens': androidFontDimensFormat,
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

async function build() {
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
        transformGroup: 'css',
        buildPath: 'dist/css/',
        files: [
          {
            destination: 'variables.css',
            format: 'css/variables',
            options: { outputReferences: false },
          },
        ],
      },
      scss: {
        transformGroup: 'scss',
        buildPath: 'dist/scss/',
        files: [
          {
            destination: '_variables.scss',
            format: 'scss/variables',
          },
        ],
      },
      android: {
        transformGroup: 'android',
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
        `src/domains/brands/${theme}/${appearance}.ts`,
      ];

      const sd = new StyleDictionary({
        hooks: sharedHooks,
        source: themeSources,
        platforms: {
          css: {
            transformGroup: 'css',
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
            transformGroup: 'scss',
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
          transformGroup: 'android',
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
        transformGroup: 'css',
        buildPath: 'dist/css/',
        files: [
          {
            destination: 'components.css',
            format: 'css/variables',
            filter: (token) => token.filePath.includes('components/'),
            options: { outputReferences: true },
          },
        ],
      },
      scss: {
        transformGroup: 'scss',
        buildPath: 'dist/scss/',
        files: [
          {
            destination: '_components.scss',
            format: 'themed-scss',
            filter: (token) => token.filePath.includes('components/'),
            options: { outputReferences: true },
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

build().catch((error) => {
  console.error('Build failed:', error);
  process.exit(1);
});
