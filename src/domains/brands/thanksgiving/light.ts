import type { ThemeContract } from '@/types/theme-contract.interface';

/* =========================================
   Thanksgiving Theme — Light Appearance
   Warm wheat background, pumpkin orange, and chocolate text
   ========================================= */

export default {
  theme: {
    bg:           { $value: '#faf2eb',                     $type: 'color' },
    surface:      { $value: '#ffffff',                     $type: 'color' },
    surfaceHover: { $value: '#f5e6d8',                     $type: 'color' },
    surfaceGlass: { $value: 'rgba(255, 255, 255, 0.85)',   $type: 'color' },
    border:       { $value: '#d7ccc8',                     $type: 'color' },
    text:         { $value: '#3e2723',                     $type: 'color' },
    textMuted:    { $value: '#795548',                     $type: 'color' },
    primary:      { $value: '#e65100',                     $type: 'color' },
    primaryHover: { $value: '#ff6f00',                     $type: 'color' },
    primaryText:  { $value: '#ffffff',                     $type: 'color' },
    accent:       { $value: '#8d6e63',                     $type: 'color' },
    shadow:       { $value: '0 4px 20px rgba(230, 81, 0, 0.08)',   $type: 'shadow' },
    radius:       { $value: '8px',                         $type: 'dimension' },
    bgGradient:   { $value: 'linear-gradient(180deg, rgba(230, 81, 0, 0.05) 0%, rgba(255, 255, 255, 0) 100%)', $type: 'gradient' },
  },
} satisfies ThemeContract;
