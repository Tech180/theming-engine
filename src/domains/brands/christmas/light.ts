import type { ThemeContract } from '@/types/theme-contract.interface';
import { semanticStatus } from '@/domains/shared/semantic-status';
import { getPrimaryRgb } from '@/domains/shared/primary-rgb';

/* =========================================
   Christmas Theme — Light Appearance
   Santa red, pine tree green, and white snow
   ========================================= */

export default {
  theme: {
    bg:           { $value: '#f5fdf7',                     $type: 'color' },
    surface:      { $value: '#ffffff',                     $type: 'color' },
    surfaceHover: { $value: '#e3f6e9',                     $type: 'color' },
    surfaceGlass: { $value: 'rgba(255, 255, 255, 0.85)',   $type: 'color' },
    border:       { $value: '#1b7a3a',                     $type: 'color' },
    text:         { $value: '#0b2c16',                     $type: 'color' },
    textMuted:    { $value: '#577a64',                     $type: 'color' },
    primary:      { $value: '#b01b2e',                     $type: 'color' },
    primaryHover: { $value: '#941424',                     $type: 'color' },
    primaryText:  { $value: '#ffffff',                     $type: 'color' },
    accent:       { $value: '#1b7a3a',                     $type: 'color' },
    shadow:       { $value: '0 4px 20px rgba(176, 27, 46, 0.08)', $type: 'shadow' },
    radius:       { $value: '8px',                         $type: 'dimension' },
    bgGradient:   { $value: 'linear-gradient(180deg, rgba(27, 122, 58, 0.05) 0%, rgba(255, 255, 255, 0) 100%)', $type: 'gradient' },
    ...semanticStatus,
    primaryRgb:   { $value: getPrimaryRgb('christmas'), $type: 'color' },
  },
} satisfies ThemeContract;
