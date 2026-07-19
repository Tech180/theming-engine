import type { ThemeContract } from '@/types/theme-contract.interface';
import { semanticStatus } from '@/domains/shared/semantic-status';
import { getPrimaryRgb } from '@/domains/shared/primary-rgb';

/* =========================================
   Cyberpunk Theme — Light Appearance
   Sharp corners, high contrast, electric
   ========================================= */

export default {
  theme: {
    bg:           { $value: '{color.cyber.bgLight}',         $type: 'color' },
    surface:      { $value: '{color.cyber.surfaceLight}',    $type: 'color' },
    surfaceHover: { $value: '{color.white.pure}',            $type: 'color' },
    surfaceGlass: { $value: 'rgba(243, 243, 245, 0.85)',     $type: 'color' },
    border:       { $value: '{color.cyber.cyan}',            $type: 'color' },
    text:         { $value: '{color.black.pure}',            $type: 'color' },
    textMuted:    { $value: '{color.cyber.textMutedLight}',  $type: 'color' },
    primary:      { $value: '{color.cyber.primary}',         $type: 'color' },
    primaryHover: { $value: '{color.cyber.primaryHover}',    $type: 'color' },
    primaryText:  { $value: '{color.black.pure}',            $type: 'color' },
    accent:       { $value: '{color.cyber.pink}',            $type: 'color' },
    shadow:       { $value: '3px 3px 0px #000000',           $type: 'shadow' },
    radius:       { $value: '0px',                           $type: 'dimension' },
    bgGradient:   { $value: 'none',                          $type: 'gradient' },
    ...semanticStatus,
    primaryRgb:   { $value: getPrimaryRgb('cyberpunk'), $type: 'color' },
  },
} satisfies ThemeContract;
