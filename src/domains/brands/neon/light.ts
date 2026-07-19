import type { ThemeContract } from '@/types/theme-contract.interface';
import { semanticStatus } from '@/domains/shared/semantic-status';
import { getPrimaryRgb } from '@/domains/shared/primary-rgb';

/* =========================================
   Neon Theme — Light Appearance
   Vibrant arcade glow, soft lavender base
   ========================================= */

export default {
  theme: {
    bg:           { $value: '{color.neon.bgLight}',          $type: 'color' },
    surface:      { $value: '{color.white.pure}',            $type: 'color' },
    surfaceHover: { $value: '{color.neon.surfaceHoverLight}',$type: 'color' },
    surfaceGlass: { $value: 'rgba(255, 255, 255, 0.8)',      $type: 'color' },
    border:       { $value: '{color.neon.borderLight}',      $type: 'color' },
    text:         { $value: '{color.neon.textLight}',         $type: 'color' },
    textMuted:    { $value: '{color.neon.textMutedLight}',    $type: 'color' },
    primary:      { $value: '{color.neon.primary}',           $type: 'color' },
    primaryHover: { $value: '{color.neon.primaryHover}',      $type: 'color' },
    primaryText:  { $value: '{color.white.pure}',             $type: 'color' },
    accent:       { $value: '{color.neon.cyan}',              $type: 'color' },
    shadow:       { $value: '0 0 10px rgba(191, 85, 236, 0.2)', $type: 'shadow' },
    radius:       { $value: '4px',                            $type: 'dimension' },
    bgGradient:   { $value: 'linear-gradient(180deg, rgba(26, 8, 46, 0.5) 0%, rgba(10, 2, 22, 0) 100%)', $type: 'gradient' },
    ...semanticStatus,
    primaryRgb:   { $value: getPrimaryRgb('neon'), $type: 'color' },
  },
} satisfies ThemeContract;
