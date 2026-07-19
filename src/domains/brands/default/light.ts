import type { ThemeContract } from '@/types/theme-contract.interface';
import { semanticStatus } from '@/domains/shared/semantic-status';
import { getPrimaryRgb } from '@/domains/shared/primary-rgb';

/* =========================================
   Default Theme — Light Appearance
   Linear.app inspired (from giftistry-react)
   ========================================= */

export default {
  theme: {
    bg:           { $value: '{color.linear.bgLight}',          $type: 'color' },
    surface:      { $value: '{color.white.pure}',              $type: 'color' },
    surfaceHover: { $value: '{color.linear.surfaceHoverLight}',$type: 'color' },
    surfaceGlass: { $value: 'rgba(255, 255, 255, 0.8)',        $type: 'color' },
    border:       { $value: 'rgba(0, 0, 0, 0.08)',             $type: 'color' },
    text:         { $value: '{color.linear.textLight}',         $type: 'color' },
    textMuted:    { $value: '{color.linear.textMutedLight}',    $type: 'color' },
    primary:      { $value: '{color.linear.primary}',           $type: 'color' },
    primaryHover: { $value: '{color.linear.primaryHover}',      $type: 'color' },
    primaryText:  { $value: '{color.white.pure}',               $type: 'color' },
    accent:       { $value: '{color.linear.primary}',           $type: 'color' },
    shadow:       { $value: '0 4px 30px rgba(0, 0, 0, 0.03)',  $type: 'shadow' },
    radius:       { $value: '8px',                              $type: 'dimension' },
    bgGradient:   { $value: 'radial-gradient(ellipse 80% 80% at 50% -20%, rgba(94, 106, 210, 0.15), rgba(255, 255, 255, 0))', $type: 'gradient' },
    ...semanticStatus,
    primaryRgb:   { $value: getPrimaryRgb('default'), $type: 'color' },
  },
} satisfies ThemeContract;
