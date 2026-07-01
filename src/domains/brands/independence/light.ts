import type { ThemeContract } from '@/types/theme-contract.interface';

/* =========================================
   Independence Theme — Light Appearance
   Patriotic flag red, navy, and sharp 4px stripes
   ========================================= */

export default {
  theme: {
    bg:           { $value: '#f8f9fa',                     $type: 'color' },
    surface:      { $value: '#ffffff',                     $type: 'color' },
    surfaceHover: { $value: '#e9ecef',                     $type: 'color' },
    surfaceGlass: { $value: 'rgba(255, 255, 255, 0.9)',    $type: 'color' },
    border:       { $value: '#003049',                     $type: 'color' },
    text:         { $value: '#1d3557',                     $type: 'color' },
    textMuted:    { $value: '#457b9d',                     $type: 'color' },
    primary:      { $value: '#d62828',                     $type: 'color' },
    primaryHover: { $value: '#b82020',                     $type: 'color' },
    primaryText:  { $value: '#ffffff',                     $type: 'color' },
    accent:       { $value: '#003049',                     $type: 'color' },
    shadow:       { $value: '0 4px 15px rgba(214, 40, 40, 0.08)',  $type: 'shadow' },
    radius:       { $value: '4px',                         $type: 'dimension' },
    bgGradient:   { $value: 'linear-gradient(180deg, rgba(29, 53, 87, 0.04) 0%, rgba(255, 255, 255, 0) 100%)', $type: 'gradient' },
  },
} satisfies ThemeContract;
