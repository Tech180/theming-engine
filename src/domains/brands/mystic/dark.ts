import type { ThemeContract } from '@/types/theme-contract.interface';
import { semanticStatus } from '@/domains/shared/semantic-status';
import { getPrimaryRgb } from '@/domains/shared/primary-rgb';

/* =========================================
   Mystic Theme — Dark Appearance
   Night garden, deep forest
   ========================================= */

export default {
  theme: {
    bg:           { $value: '{color.mystic.bgDark}',           $type: 'color' },
    surface:      { $value: '{color.mystic.surfaceDark}',      $type: 'color' },
    surfaceHover: { $value: '{color.mystic.surfaceHoverDark}', $type: 'color' },
    surfaceGlass: { $value: 'rgba(22, 42, 29, 0.75)',          $type: 'color' },
    border:       { $value: '{color.mystic.borderDark}',       $type: 'color' },
    text:         { $value: '{color.mystic.textDark}',          $type: 'color' },
    textMuted:    { $value: '{color.mystic.textMutedDark}',     $type: 'color' },
    primary:      { $value: '{color.mystic.primary}',           $type: 'color' },
    primaryHover: { $value: '{color.mystic.primaryHover}',      $type: 'color' },
    primaryText:  { $value: '{color.white.pure}',               $type: 'color' },
    accent:       { $value: '{color.mystic.gold}',              $type: 'color' },
    shadow:       { $value: '0 10px 30px rgba(0, 0, 0, 0.4)',  $type: 'shadow' },
    radius:       { $value: '12px',                             $type: 'dimension' },
    bgGradient:   { $value: 'radial-gradient(circle at top, rgba(46, 84, 59, 0.3) 0%, rgba(0, 0, 0, 0) 70%)', $type: 'gradient' },
    ...semanticStatus,
    primaryRgb:   { $value: getPrimaryRgb('mystic'), $type: 'color' },
  },
} satisfies ThemeContract;
