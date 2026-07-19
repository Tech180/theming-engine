import type { ThemeContract } from '@/types/theme-contract.interface';
import { semanticStatus } from '@/domains/shared/semantic-status';
import { getPrimaryRgb } from '@/domains/shared/primary-rgb';

/* =========================================
   Earth Day Theme — Dark Appearance
   Deep forest soil background, warm clay primary, leaf green accents
   ========================================= */

export default {
  theme: {
    bg:           { $value: '#1b261a',                     $type: 'color' },
    surface:      { $value: '#253524',                     $type: 'color' },
    surfaceHover: { $value: '#324831',                     $type: 'color' },
    surfaceGlass: { $value: 'rgba(37, 53, 36, 0.75)',      $type: 'color' },
    border:       { $value: '#3e5c3b',                     $type: 'color' },
    text:         { $value: '#e8f5e9',                     $type: 'color' },
    textMuted:    { $value: '#a5d6a7',                     $type: 'color' },
    primary:      { $value: '#e07a5f',                     $type: 'color' },
    primaryHover: { $value: '#f4977e',                     $type: 'color' },
    primaryText:  { $value: '#ffffff',                     $type: 'color' },
    accent:       { $value: '#81c784',                     $type: 'color' },
    shadow:       { $value: '0 0 15px rgba(224, 122, 95, 0.25)', $type: 'shadow' },
    radius:       { $value: '16px',                        $type: 'dimension' },
    bgGradient:   { $value: 'linear-gradient(180deg, rgba(37, 53, 36, 0.8) 0%, rgba(27, 38, 26, 1) 100%)', $type: 'gradient' },
    ...semanticStatus,
    primaryRgb:   { $value: getPrimaryRgb('earth-day'), $type: 'color' },
  },
} satisfies ThemeContract;
