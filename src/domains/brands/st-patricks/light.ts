import type { ThemeContract } from '@/types/theme-contract.interface';
import { semanticStatus } from '@/domains/shared/semantic-status';
import { getPrimaryRgb } from '@/domains/shared/primary-rgb';

/* =========================================
   St. Patrick's Day Theme — Light Appearance
   Shamrock green, gold, and soft cream
   ========================================= */

export default {
  theme: {
    bg:           { $value: '#f4fcf6',                     $type: 'color' },
    surface:      { $value: '#ffffff',                     $type: 'color' },
    surfaceHover: { $value: '#e6f7eb',                     $type: 'color' },
    surfaceGlass: { $value: 'rgba(255, 255, 255, 0.85)',   $type: 'color' },
    border:       { $value: '#00a86b',                     $type: 'color' },
    text:         { $value: '#0e3a1a',                     $type: 'color' },
    textMuted:    { $value: '#3b7a57',                     $type: 'color' },
    primary:      { $value: '#00a86b',                     $type: 'color' },
    primaryHover: { $value: '#00c47d',                     $type: 'color' },
    primaryText:  { $value: '#ffffff',                     $type: 'color' },
    accent:       { $value: '#d4af37',                     $type: 'color' },
    shadow:       { $value: '0 4px 20px rgba(0, 168, 107, 0.08)', $type: 'shadow' },
    radius:       { $value: '6px',                         $type: 'dimension' },
    bgGradient:   { $value: 'linear-gradient(180deg, rgba(0, 168, 107, 0.05) 0%, rgba(255, 255, 255, 0) 100%)', $type: 'gradient' },
    ...semanticStatus,
    primaryRgb:   { $value: getPrimaryRgb('st-patricks'), $type: 'color' },
  },
} satisfies ThemeContract;
