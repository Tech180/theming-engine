import StyleDictionary from 'style-dictionary';
import { themedCssFormat } from './formats/themed-css';
import { pxToRemTransform } from './transforms/px-to-rem';
import { hexAlphaTransform, rgbaToHexTransform } from './transforms/color-modifiers';

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
        const isBrandToken = String(token.filePath ?? '').includes('brands/') || !token.filePath;
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
  }
};

/**
 * Compiles raw theme token values in-memory to CSS custom properties (variables)
 * using the Style Dictionary v4 pipeline.
 */
export async function compileDynamicThemeCss(
  themeName: string,
  appearance: 'light' | 'dark',
  tokenValues: Record<string, any>
): Promise<string> {
  // Convert token flat/nested values into the W3C DTCG token structure
  const themeTokens: Record<string, any> = {};
  for (const [key, val] of Object.entries(tokenValues)) {
    themeTokens[key] = {
      $value: val,
      $type: key === 'radius' ? 'dimension' : (key === 'shadow' ? 'shadow' : (key === 'bgGradient' ? 'gradient' : 'color'))
    };
  }

  // Nesting under 'theme' ensures that Style Dictionary's paths start with 'theme',
  // which name/themePrefix uses to prepend --theme- to the compiled variables.
  const sd = new StyleDictionary({
    hooks: sharedHooks,
    tokens: {
      theme: themeTokens
    },
    platforms: {
      css: {
        transforms: ['attribute/cti', 'name/themePrefix', 'size/pxToRem', 'color/hexAlpha', 'color/rgbaToHex'],
      }
    }
  });

  const dictionary = await sd.getPlatformTokens('css');

  // Override filePath so that parseThemeFromPath resolves theme metadata correctly
  dictionary.allTokens = dictionary.allTokens.map(token => ({
    ...token,
    filePath: `brands/${themeName}/${appearance}.ts`
  }));

  return themedCssFormat({
    dictionary,
    file: { destination: `themes/${themeName}-${appearance}.css` }
  });
}
