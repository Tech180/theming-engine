import type { ThemeContract } from '@/types/theme-contract.interface';

/* =========================================
   Valentine's Day Theme — Light Appearance
   Romantic pinks, soft roses, and cream
   ========================================= */

export default {
  theme: {
    bg:           { $value: '#fff0f3',                     $type: 'color' },
    surface:      { $value: '#ffffff',                     $type: 'color' },
    surfaceHover: { $value: '#ffccd5',                     $type: 'color' },
    surfaceGlass: { $value: 'rgba(255, 255, 255, 0.85)',   $type: 'color' },
    border:       { $value: '#ff8fa3',                     $type: 'color' },
    text:         { $value: '#5c0d16',                     $type: 'color' },
    textMuted:    { $value: '#c71585',                     $type: 'color' },
    primary:      { $value: '#ff4d6d',                     $type: 'color' },
    primaryHover: { $value: '#ff758f',                     $type: 'color' },
    primaryText:  { $value: '#ffffff',                     $type: 'color' },
    accent:       { $value: '#c71585',                     $type: 'color' },
    shadow:       { $value: '0 4px 20px rgba(255, 77, 109, 0.08)', $type: 'shadow' },
    radius:       { $value: '12px',                        $type: 'dimension' },
    bgGradient:   { $value: 'linear-gradient(180deg, rgba(255, 77, 109, 0.05) 0%, rgba(255, 255, 255, 0) 100%)', $type: 'gradient' },
  },
} satisfies ThemeContract;
