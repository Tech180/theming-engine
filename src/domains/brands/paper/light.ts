import type { ThemeContract } from '@/types/theme-contract.interface';
import { semanticStatus } from '@/domains/shared/semantic-status';
import { getPrimaryRgb } from '@/domains/shared/primary-rgb';

/* =========================================
   Paper Theme — Light Appearance
   Cream stationery, graphite ink
   ========================================= */

export default {
  theme: {
    bg:           { $value: '{color.paper.bgLight}',           $type: 'color' },
    surface:      { $value: '{color.paper.surfaceLight}',      $type: 'color' },
    surfaceHover: { $value: '{color.paper.surfaceHoverLight}', $type: 'color' },
    surfaceGlass: { $value: 'rgba(250, 248, 243, 0.85)',     $type: 'color' },
    border:       { $value: '{color.paper.borderLight}',      $type: 'color' },
    text:         { $value: '{color.paper.textLight}',         $type: 'color' },
    textMuted:    { $value: '{color.paper.textMutedLight}',    $type: 'color' },
    primary:      { $value: '{color.paper.primary}',           $type: 'color' },
    primaryHover: { $value: '{color.paper.primaryHover}',      $type: 'color' },
    primaryText:  { $value: '{color.white.pure}',              $type: 'color' },
    accent:       { $value: '{color.paper.primary}',           $type: 'color' },
    shadow:       { $value: '0 2px 8px rgba(45, 55, 72, 0.08)', $type: 'shadow' },
    radius:       { $value: '8px',                             $type: 'dimension' },
    bgGradient:   { $value: 'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(212, 207, 196, 0.3), rgba(255, 255, 255, 0))', $type: 'gradient' },
    ...semanticStatus,
    primaryRgb:   { $value: getPrimaryRgb('paper'), $type: 'color' },
  },
} satisfies ThemeContract;
