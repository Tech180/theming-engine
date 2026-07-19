import type { ThemeContract } from '@/types/theme-contract.interface';
import { semanticStatus } from '@/domains/shared/semantic-status';
import { getPrimaryRgb } from '@/domains/shared/primary-rgb';

/* =========================================
   Matrix Theme — Light Appearance
   Washed green-gray terminal paper
   ========================================= */

export default {
  theme: {
    bg:           { $value: '{color.matrix.bgLight}',           $type: 'color' },
    surface:      { $value: '{color.matrix.surfaceLight}',      $type: 'color' },
    surfaceHover: { $value: '{color.matrix.surfaceHoverLight}',  $type: 'color' },
    surfaceGlass: { $value: 'rgba(241, 248, 242, 0.9)',        $type: 'color' },
    border:       { $value: '{color.matrix.borderLight}',       $type: 'color' },
    text:         { $value: '{color.matrix.textLight}',          $type: 'color' },
    textMuted:    { $value: '{color.matrix.textMutedLight}',     $type: 'color' },
    primary:      { $value: '{color.matrix.primaryHover}',       $type: 'color' },
    primaryHover: { $value: '{color.matrix.textLight}',          $type: 'color' },
    primaryText:  { $value: '{color.white.pure}',               $type: 'color' },
    accent:       { $value: '{color.matrix.primary}',           $type: 'color' },
    shadow:       { $value: '0 2px 8px rgba(0, 255, 65, 0.15)', $type: 'shadow' },
    radius:       { $value: '0px',                              $type: 'dimension' },
    bgGradient:   { $value: 'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(0, 255, 65, 0.08), rgba(255, 255, 255, 0))', $type: 'gradient' },
    ...semanticStatus,
    primaryRgb:   { $value: getPrimaryRgb('matrix'), $type: 'color' },
  },
} satisfies ThemeContract;
