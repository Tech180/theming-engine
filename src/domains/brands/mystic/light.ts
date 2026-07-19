import type { ThemeContract } from '@/types/theme-contract.interface';
import { semanticStatus } from '@/domains/shared/semantic-status';
import { getPrimaryRgb } from '@/domains/shared/primary-rgb';

/* =========================================
   Mystic Theme — Light Appearance
   Fae woodland, botanical garden
   ========================================= */

export default {
  theme: {
    bg:           { $value: '{color.mystic.bgLight}',          $type: 'color' },
    surface:      { $value: '{color.white.pure}',              $type: 'color' },
    surfaceHover: { $value: '{color.mystic.surfaceHoverLight}',$type: 'color' },
    surfaceGlass: { $value: 'rgba(255, 255, 255, 0.8)',        $type: 'color' },
    border:       { $value: '{color.mystic.borderLight}',      $type: 'color' },
    text:         { $value: '{color.mystic.textLight}',         $type: 'color' },
    textMuted:    { $value: '{color.mystic.textMutedLight}',    $type: 'color' },
    primary:      { $value: '{color.mystic.primary}',           $type: 'color' },
    primaryHover: { $value: '{color.mystic.primaryHover}',      $type: 'color' },
    primaryText:  { $value: '{color.white.pure}',               $type: 'color' },
    accent:       { $value: '{color.mystic.gold}',              $type: 'color' },
    shadow:       { $value: '0 10px 30px rgba(45, 122, 77, 0.08)', $type: 'shadow' },
    radius:       { $value: '12px',                             $type: 'dimension' },
    bgGradient:   { $value: 'radial-gradient(circle at top, rgba(45, 122, 77, 0.15) 0%, rgba(255, 255, 255, 0) 70%)', $type: 'gradient' },
    ...semanticStatus,
    primaryRgb:   { $value: getPrimaryRgb('mystic'), $type: 'color' },
  },
} satisfies ThemeContract;
