import type { ThemeContract } from '@/types/theme-contract.interface';

/* =========================================
   Valentine's Day Theme — Dark Appearance
   Deep wine red, warm rose, and magenta accents
   ========================================= */

export default {
  theme: {
    bg:           { $value: '#2b0c10',                     $type: 'color' },
    surface:      { $value: '#3d1217',                     $type: 'color' },
    surfaceHover: { $value: '#5c1b23',                     $type: 'color' },
    surfaceGlass: { $value: 'rgba(61, 18, 23, 0.75)',      $type: 'color' },
    border:       { $value: '#5c0d16',                     $type: 'color' },
    text:         { $value: '#ffccd5',                     $type: 'color' },
    textMuted:    { $value: '#ff8fa3',                     $type: 'color' },
    primary:      { $value: '#ff4d6d',                     $type: 'color' },
    primaryHover: { $value: '#ff758f',                     $type: 'color' },
    primaryText:  { $value: '#ffffff',                     $type: 'color' },
    accent:       { $value: '#ff007f',                     $type: 'color' },
    shadow:       { $value: '0 0 15px rgba(255, 77, 109, 0.25)', $type: 'shadow' },
    radius:       { $value: '12px',                        $type: 'dimension' },
    bgGradient:   { $value: 'linear-gradient(180deg, rgba(61, 18, 23, 0.8) 0%, rgba(43, 12, 16, 1) 100%)', $type: 'gradient' },
  },
} satisfies ThemeContract;
