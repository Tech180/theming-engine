import type { ThemeContract } from '@/types/theme-contract.interface';

/* =========================================
   Christmas Theme — Dark Appearance
   Midnight pine tree, festive red, and gold accents
   ========================================= */

export default {
  theme: {
    bg:           { $value: '#07170d',                     $type: 'color' },
    surface:      { $value: '#0d2818',                     $type: 'color' },
    surfaceHover: { $value: '#143d24',                     $type: 'color' },
    surfaceGlass: { $value: 'rgba(13, 40, 24, 0.75)',      $type: 'color' },
    border:       { $value: '#228b22',                     $type: 'color' },
    text:         { $value: '#eefaf2',                     $type: 'color' },
    textMuted:    { $value: '#8ba695',                     $type: 'color' },
    primary:      { $value: '#b01b2e',                     $type: 'color' },
    primaryHover: { $value: '#d62b3e',                     $type: 'color' },
    primaryText:  { $value: '#ffffff',                     $type: 'color' },
    accent:       { $value: '#ffd700',                     $type: 'color' },
    shadow:       { $value: '0 0 15px rgba(176, 27, 46, 0.3)', $type: 'shadow' },
    radius:       { $value: '8px',                         $type: 'dimension' },
    bgGradient:   { $value: 'linear-gradient(180deg, rgba(13, 40, 24, 0.8) 0%, rgba(7, 23, 13, 1) 100%)', $type: 'gradient' },
  },
} satisfies ThemeContract;
