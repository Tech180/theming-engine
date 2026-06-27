import type { TransformedToken } from 'style-dictionary/types';

/* =========================================
   px → rem Transform
   Converts pixel dimension values to rem
   based on a 16px root font size.
   ========================================= */

export const pxToRemTransform = {
  name: 'size/pxToRem',
  type: 'value' as const,
  transitive: true,
  filter: (token: TransformedToken) => {
    const val = token.$value ?? token.value;
    return token.$type === 'dimension' && typeof val === 'string' && val.endsWith('px');
  },
  transform: (token: TransformedToken) => {
    const val = token.$value ?? token.value;
    const px = parseFloat(String(val));
    if (isNaN(px)) return val;
    return `${px / 16}rem`;
  },
};

