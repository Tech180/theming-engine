import type { ThemeContract } from '@/types/theme-contract.interface';

/* =========================================
   Thanksgiving Theme — Dark Appearance
   Deep chocolate background, warm pumpkin orange primary, and harvest gold accents
   ========================================= */

export default {
  theme: {
    bg:           { $value: '#1e1411',                     $type: 'color' },
    surface:      { $value: '#2d1f1a',                     $type: 'color' },
    surfaceHover: { $value: '#3e2b24',                     $type: 'color' },
    surfaceGlass: { $value: 'rgba(45, 31, 26, 0.75)',      $type: 'color' },
    border:       { $value: '#4e342e',                     $type: 'color' },
    text:         { $value: '#efebe9',                     $type: 'color' },
    textMuted:    { $value: '#d7ccc8',                     $type: 'color' },
    primary:      { $value: '#ff6f00',                     $type: 'color' },
    primaryHover: { $value: '#ff8f00',                     $type: 'color' },
    primaryText:  { $value: '#ffffff',                     $type: 'color' },
    accent:       { $value: '#ffb300',                     $type: 'color' },
    shadow:       { $value: '0 0 15px rgba(255, 111, 0, 0.25)',  $type: 'shadow' },
    radius:       { $value: '8px',                         $type: 'dimension' },
    bgGradient:   { $value: 'linear-gradient(180deg, rgba(45, 31, 26, 0.8) 0%, rgba(30, 20, 17, 1) 100%)', $type: 'gradient' },
  },
} satisfies ThemeContract;
