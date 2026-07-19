import type { ThemeContract } from '@/types/theme-contract.interface';
import { semanticStatus } from '@/domains/shared/semantic-status';
import { getPrimaryRgb } from '@/domains/shared/primary-rgb';

/* =========================================
   Vaporwave Theme — Light Appearance
   Soft pastel pink and lavender
   ========================================= */

export default {
  theme: {
    bg:           { $value: '{color.vaporwave.bgLight}',           $type: 'color' },
    surface:      { $value: '{color.vaporwave.surfaceLight}',      $type: 'color' },
    surfaceHover: { $value: '{color.vaporwave.surfaceHoverLight}',  $type: 'color' },
    surfaceGlass: { $value: 'rgba(255, 255, 255, 0.85)',         $type: 'color' },
    border:       { $value: '{color.vaporwave.borderLight}',       $type: 'color' },
    text:         { $value: '{color.vaporwave.textLight}',          $type: 'color' },
    textMuted:    { $value: '{color.vaporwave.textMutedLight}',     $type: 'color' },
    primary:      { $value: '{color.vaporwave.primary}',            $type: 'color' },
    primaryHover: { $value: '{color.vaporwave.primaryHover}',       $type: 'color' },
    primaryText:  { $value: '{color.white.pure}',                  $type: 'color' },
    accent:       { $value: '{color.vaporwave.cyan}',               $type: 'color' },
    shadow:       { $value: '0 4px 20px rgba(255, 113, 206, 0.2)', $type: 'shadow' },
    radius:       { $value: '8px',                                $type: 'dimension' },
    bgGradient:   { $value: 'linear-gradient(135deg, rgba(255, 113, 206, 0.1) 0%, rgba(1, 205, 254, 0.1) 100%)', $type: 'gradient' },
    ...semanticStatus,
    primaryRgb:   { $value: getPrimaryRgb('vaporwave'), $type: 'color' },
  },
} satisfies ThemeContract;
