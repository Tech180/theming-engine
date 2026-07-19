import type { ThemeContract } from '@/types/theme-contract.interface';
import { semanticStatus } from '@/domains/shared/semantic-status';
import { getPrimaryRgb } from '@/domains/shared/primary-rgb';

/* =========================================
   Pixel Theme — Light Appearance
   NES-style flat gray and high contrast
   ========================================= */

export default {
  theme: {
    bg:           { $value: '{color.pixel.bgLight}',           $type: 'color' },
    surface:      { $value: '{color.pixel.surfaceLight}',      $type: 'color' },
    surfaceHover: { $value: '{color.pixel.surfaceHoverLight}', $type: 'color' },
    surfaceGlass: { $value: 'rgba(252, 252, 252, 0.95)',     $type: 'color' },
    border:       { $value: '{color.pixel.borderLight}',      $type: 'color' },
    text:         { $value: '{color.pixel.textLight}',         $type: 'color' },
    textMuted:    { $value: '{color.pixel.textMutedLight}',    $type: 'color' },
    primary:      { $value: '{color.pixel.primary}',           $type: 'color' },
    primaryHover: { $value: '{color.pixel.primaryHover}',      $type: 'color' },
    primaryText:  { $value: '{color.white.pure}',              $type: 'color' },
    accent:       { $value: '{color.pixel.blue}',             $type: 'color' },
    shadow:       { $value: '2px 2px 0 #000000',             $type: 'shadow' },
    radius:       { $value: '0px',                             $type: 'dimension' },
    bgGradient:   { $value: 'none',                            $type: 'gradient' },
    ...semanticStatus,
    primaryRgb:   { $value: getPrimaryRgb('pixel'), $type: 'color' },
  },
} satisfies ThemeContract;
