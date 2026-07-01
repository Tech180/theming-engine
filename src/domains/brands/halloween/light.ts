import type { ThemeContract } from '@/types/theme-contract.interface';

/* =========================================
   Halloween Theme — Light Appearance (Pantone approximation)
   Primary Orange: Pantone Orange 021 C (#FE5000)
   Accent Purple: Pantone Purple C (#BB29BB)
   Text Black: Pantone Black 6 C (#101820)
   ========================================= */

export default {
  theme: {
    bg:           { $value: '#fbfcf7',                     $type: 'color' },
    surface:      { $value: '#ffffff',                     $type: 'color' },
    surfaceHover: { $value: '#fef3ec',                     $type: 'color' },
    surfaceGlass: { $value: 'rgba(255, 255, 255, 0.85)',   $type: 'color' },
    border:       { $value: '#fe5000',                     $type: 'color' },
    text:         { $value: '#101820',                     $type: 'color' },
    textMuted:    { $value: '#5c768d',                     $type: 'color' },
    primary:      { $value: '#fe5000',                     $type: 'color' },
    primaryHover: { $value: '#d84400',                     $type: 'color' },
    primaryText:  { $value: '#ffffff',                     $type: 'color' },
    accent:       { $value: '#bb29bb',                     $type: 'color' },
    shadow:       { $value: '0 4px 20px rgba(254, 80, 0, 0.08)', $type: 'shadow' },
    radius:       { $value: '8px',                         $type: 'dimension' },
    bgGradient:   { $value: 'linear-gradient(180deg, rgba(254, 80, 0, 0.05) 0%, rgba(255, 255, 255, 0) 100%)', $type: 'gradient' },
  },
} satisfies ThemeContract;
