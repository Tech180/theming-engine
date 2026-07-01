import type { ThemeContract } from '@/types/theme-contract.interface';

/* =========================================
   Independence Theme — Dark Appearance
   Midnight navy, bright flag red, and steel blue accents
   ========================================= */

export default {
  theme: {
    bg:           { $value: '#0b132b',                     $type: 'color' },
    surface:      { $value: '#1c2541',                     $type: 'color' },
    surfaceHover: { $value: '#3a506b',                     $type: 'color' },
    surfaceGlass: { $value: 'rgba(28, 37, 65, 0.8)',       $type: 'color' },
    border:       { $value: '#1e293b',                     $type: 'color' },
    text:         { $value: '#f1f5f9',                     $type: 'color' },
    textMuted:    { $value: '#94a3b8',                     $type: 'color' },
    primary:      { $value: '#e63946',                     $type: 'color' },
    primaryHover: { $value: '#ff4d5a',                     $type: 'color' },
    primaryText:  { $value: '#ffffff',                     $type: 'color' },
    accent:       { $value: '#457b9d',                     $type: 'color' },
    shadow:       { $value: '0 0 15px rgba(230, 57, 70, 0.25)',  $type: 'shadow' },
    radius:       { $value: '4px',                         $type: 'dimension' },
    bgGradient:   { $value: 'linear-gradient(180deg, rgba(28, 37, 65, 0.8) 0%, rgba(11, 19, 43, 1) 100%)', $type: 'gradient' },
  },
} satisfies ThemeContract;
