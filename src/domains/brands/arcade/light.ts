import type { ThemeContract } from '@/types/theme-contract.interface';
import { semanticStatus } from '@/domains/shared/semantic-status';
import { getPrimaryRgb } from '@/domains/shared/primary-rgb';

/* =========================================
   Arcade Theme — Light Appearance
   Bright cabinet marquee colors
   ========================================= */

export default {
  theme: {
    bg:           { $value: '{color.arcade.bgLight}',           $type: 'color' },
    surface:      { $value: '{color.arcade.surfaceLight}',      $type: 'color' },
    surfaceHover: { $value: '{color.arcade.surfaceHoverLight}',  $type: 'color' },
    surfaceGlass: { $value: 'rgba(255, 255, 255, 0.9)',        $type: 'color' },
    border:       { $value: '{color.arcade.borderLight}',       $type: 'color' },
    text:         { $value: '{color.arcade.textLight}',          $type: 'color' },
    textMuted:    { $value: '{color.arcade.textMutedLight}',     $type: 'color' },
    primary:      { $value: '{color.arcade.primary}',            $type: 'color' },
    primaryHover: { $value: '{color.arcade.primaryHover}',       $type: 'color' },
    primaryText:  { $value: '{color.white.pure}',               $type: 'color' },
    accent:       { $value: '{color.arcade.blue}',               $type: 'color' },
    shadow:       { $value: '0 4px 0 rgba(63, 81, 181, 0.3)',  $type: 'shadow' },
    radius:       { $value: '6px',                               $type: 'dimension' },
    bgGradient:   { $value: 'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(33, 150, 243, 0.12), rgba(255, 255, 255, 0))', $type: 'gradient' },
    ...semanticStatus,
    primaryRgb:   { $value: getPrimaryRgb('arcade'), $type: 'color' },
  },
} satisfies ThemeContract;
