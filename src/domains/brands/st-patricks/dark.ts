import type { ThemeContract } from '@/types/theme-contract.interface';
import { semanticStatus } from '@/domains/shared/semantic-status';
import { getPrimaryRgb } from '@/domains/shared/primary-rgb';

/* =========================================
   St. Patrick's Day Theme — Dark Appearance
   Deep forest night, vibrant emerald, and gold accents
   ========================================= */

export default {
  theme: {
    bg:           { $value: '#081c0f',                     $type: 'color' },
    surface:      { $value: '#0e301a',                     $type: 'color' },
    surfaceHover: { $value: '#154a28',                     $type: 'color' },
    surfaceGlass: { $value: 'rgba(14, 48, 26, 0.75)',      $type: 'color' },
    border:       { $value: '#228b22',                     $type: 'color' },
    text:         { $value: '#eefaf2',                     $type: 'color' },
    textMuted:    { $value: '#8ba695',                     $type: 'color' },
    primary:      { $value: '#00a86b',                     $type: 'color' },
    primaryHover: { $value: '#00c47d',                     $type: 'color' },
    primaryText:  { $value: '#ffffff',                     $type: 'color' },
    accent:       { $value: '#ffd700',                     $type: 'color' },
    shadow:       { $value: '0 0 15px rgba(0, 168, 107, 0.25)', $type: 'shadow' },
    radius:       { $value: '6px',                         $type: 'dimension' },
    bgGradient:   { $value: 'linear-gradient(180deg, rgba(14, 48, 26, 0.8) 0%, rgba(8, 28, 15, 1) 100%)', $type: 'gradient' },
    ...semanticStatus,
    primaryRgb:   { $value: getPrimaryRgb('st-patricks'), $type: 'color' },
  },
} satisfies ThemeContract;
