import type { ThemeContract } from '@/types/theme-contract.interface';

/* =========================================
   Halloween Theme — Dark Appearance (Pantone approximation)
   Primary Orange: Pantone Orange 021 C (#FE5000)
   Accent Purple: Pantone Purple C (#BB29BB)
   Background Black: Pantone Black 6 C (#101820)
   ========================================= */

export default {
  theme: {
    bg:           { $value: '#101820',                     $type: 'color' },
    surface:      { $value: '#1b2530',                     $type: 'color' },
    surfaceHover: { $value: '#253242',                     $type: 'color' },
    surfaceGlass: { $value: 'rgba(27, 37, 48, 0.75)',      $type: 'color' },
    border:       { $value: '#fe5000',                     $type: 'color' },
    text:         { $value: '#fbfcf7',                     $type: 'color' },
    textMuted:    { $value: '#8ca4bc',                     $type: 'color' },
    primary:      { $value: '#fe5000',                     $type: 'color' },
    primaryHover: { $value: '#ff7533',                     $type: 'color' },
    primaryText:  { $value: '#101820',                     $type: 'color' },
    accent:       { $value: '#bb29bb',                     $type: 'color' },
    shadow:       { $value: '0 0 15px rgba(254, 80, 0, 0.3)', $type: 'shadow' },
    radius:       { $value: '8px',                         $type: 'dimension' },
    bgGradient:   { $value: 'linear-gradient(180deg, rgba(27, 37, 48, 0.8) 0%, rgba(16, 24, 32, 1) 100%)', $type: 'gradient' },
  },
} satisfies ThemeContract;
