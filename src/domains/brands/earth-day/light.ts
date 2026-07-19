import type { ThemeContract } from '@/types/theme-contract.interface';
import { semanticStatus } from '@/domains/shared/semantic-status';
import { getPrimaryRgb } from '@/domains/shared/primary-rgb';

/* =========================================
   Earth Day Theme — Light Appearance
   Sage green background, terracotta primary, organic curves
   ========================================= */

export default {
  theme: {
    bg:           { $value: '#f0f4f1',                     $type: 'color' },
    surface:      { $value: '#ffffff',                     $type: 'color' },
    surfaceHover: { $value: '#e1eae3',                     $type: 'color' },
    surfaceGlass: { $value: 'rgba(255, 255, 255, 0.85)',   $type: 'color' },
    border:       { $value: '#81c784',                     $type: 'color' },
    text:         { $value: '#1e3f20',                     $type: 'color' },
    textMuted:    { $value: '#4e7351',                     $type: 'color' },
    primary:      { $value: '#d97443',                     $type: 'color' },
    primaryHover: { $value: '#e68a5c',                     $type: 'color' },
    primaryText:  { $value: '#ffffff',                     $type: 'color' },
    accent:       { $value: '#2e7d32',                     $type: 'color' },
    shadow:       { $value: '0 4px 20px rgba(217, 116, 67, 0.08)', $type: 'shadow' },
    radius:       { $value: '16px',                        $type: 'dimension' },
    bgGradient:   { $value: 'linear-gradient(180deg, rgba(46, 125, 50, 0.05) 0%, rgba(255, 255, 255, 0) 100%)', $type: 'gradient' },
    ...semanticStatus,
    primaryRgb:   { $value: getPrimaryRgb('earth-day'), $type: 'color' },
  },
} satisfies ThemeContract;
