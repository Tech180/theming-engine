import type { ThemeContract } from '@/types/theme-contract.interface';
import { semanticStatus } from '@/domains/shared/semantic-status';
import { getPrimaryRgb } from '@/domains/shared/primary-rgb';

/* =========================================
   Arcade Theme — Dark Appearance
   Dark cabinet with joystick red glow
   ========================================= */

export default {
  theme: {
    bg:           { $value: '{color.arcade.bgDark}',            $type: 'color' },
    surface:      { $value: '{color.arcade.surfaceDark}',       $type: 'color' },
    surfaceHover: { $value: '{color.arcade.surfaceHoverDark}',  $type: 'color' },
    surfaceGlass: { $value: 'rgba(26, 26, 46, 0.85)',          $type: 'color' },
    border:       { $value: '{color.arcade.borderDark}',        $type: 'color' },
    text:         { $value: '{color.arcade.textDark}',           $type: 'color' },
    textMuted:    { $value: '{color.arcade.textMutedDark}',      $type: 'color' },
    primary:      { $value: '{color.arcade.primary}',            $type: 'color' },
    primaryHover: { $value: '{color.arcade.primaryHover}',       $type: 'color' },
    primaryText:  { $value: '{color.white.pure}',               $type: 'color' },
    accent:       { $value: '{color.arcade.blue}',               $type: 'color' },
    shadow:       { $value: '0 0 15px rgba(255, 0, 64, 0.35)',  $type: 'shadow' },
    radius:       { $value: '6px',                               $type: 'dimension' },
    bgGradient:   { $value: 'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(33, 150, 243, 0.15), rgba(0, 0, 0, 0))', $type: 'gradient' },
    ...semanticStatus,
    primaryRgb:   { $value: getPrimaryRgb('arcade'), $type: 'color' },
  },
} satisfies ThemeContract;
