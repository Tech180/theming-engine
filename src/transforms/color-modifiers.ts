import type { TransformedToken } from 'style-dictionary/types';

/* =========================================
   Color Modifier Transforms
   Handles opacity and color-mix utilities
   for modern CSS.
   ========================================= */

/**
 * Converts 6-digit hex to 8-digit hex with alpha.
 * Useful for Android platform output.
 */
export const hexAlphaTransform = {
  name: 'color/hexAlpha',
  type: 'value' as const,
  transitive: true,
  filter: (token: TransformedToken) => token.$type === 'color',
  transform: (token: TransformedToken) => {
    const val = token.$value ?? token.value;
    const value = String(val);

    // Only transform plain hex values, not rgba/references
    if (!/^#[A-Fa-f0-9]{6}$/.test(value)) return value;

    // Already 6-digit hex, convert to 8-digit with full opacity for Android
    return `${value}FF`.toUpperCase().replace('#', '#');
  },
};

/**
 * Converts rgba() expressions to 8-digit hex for Android.
 */
export const rgbaToHexTransform = {
  name: 'color/rgbaToHex',
  type: 'value' as const,
  transitive: true,
  filter: (token: TransformedToken) => {
    const val = token.$value ?? token.value;
    return token.$type === 'color' && String(val).startsWith('rgba(');
  },
  transform: (token: TransformedToken) => {
    const val = token.$value ?? token.value;
    const value = String(val);
    const match = value.match(/rgba\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*([\d.]+)\s*\)/);

    if (!match) return value;

    const [, r, g, b, a] = match;
    const alpha = Math.round(parseFloat(a!) * 255);

    const toHex = (n: string) => parseInt(n!).toString(16).padStart(2, '0');

    return `#${alpha.toString(16).padStart(2, '0')}${toHex(r!)}${toHex(g!)}${toHex(b!)}`.toUpperCase();
  },
};

