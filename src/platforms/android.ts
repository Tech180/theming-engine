import type { TransformedToken } from 'style-dictionary/types';

/* =========================================
   Android Platform Configuration
   Generates Android resource XML files
   using values/ and values-night/ convention.
   ========================================= */

/** Filters to only color tokens */
function colorFilter(token: TransformedToken): boolean {
  return token.$type === 'color' && !token.filePath.includes('brands/');
}

/** Filters to only dimension tokens (non-font) */
function dimensionFilter(token: TransformedToken): boolean {
  return (
    token.$type === 'dimension' &&
    !token.path.includes('fontSize') &&
    !token.path.includes('letterSpacing') &&
    !token.filePath.includes('brands/')
  );
}

/** Filters to only font-related dimension tokens */
function fontFilter(token: TransformedToken): boolean {
  return (
    token.$type === 'dimension' &&
    (token.path.includes('fontSize') || token.path.includes('letterSpacing'))
  );
}

/** Filters theme colors for light appearance (default theme) */
function lightThemeColorFilter(token: TransformedToken): boolean {
  return token.$type === 'color' && token.filePath.includes('brands/default/light');
}

/** Filters theme colors for dark appearance (default theme) */
function darkThemeColorFilter(token: TransformedToken): boolean {
  return token.$type === 'color' && token.filePath.includes('brands/default/dark');
}

export function getAndroidPlatforms() {
  return {
    android: {
      transformGroup: 'android',
      buildPath: 'dist/android/',
      files: [
        {
          destination: 'values/colors.xml',
          format: 'android/colors',
          filter: colorFilter,
        },
        {
          destination: 'values/dimens.xml',
          format: 'android/dimens',
          filter: dimensionFilter,
        },
        {
          destination: 'values/font_dimens.xml',
          format: 'android/fontDimens',
          filter: fontFilter,
        },
        {
          destination: 'values/theme_colors.xml',
          format: 'android/colors',
          filter: lightThemeColorFilter,
        },
        {
          destination: 'values-night/theme_colors.xml',
          format: 'android/colors',
          filter: darkThemeColorFilter,
        },
      ],
    },
  };
}
