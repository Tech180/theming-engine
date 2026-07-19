import type { ThemeContract } from '@/types/theme-contract.interface';
import { semanticStatus } from '@/domains/shared/semantic-status';
import { getPrimaryRgb } from '@/domains/shared/primary-rgb';

/* =========================================
   Matrix Theme — Dark Appearance
   Green phosphor on near-black void
   ========================================= */

export default {
  theme: {
    bg:           { $value: '{color.matrix.bgDark}',            $type: 'color' },
    surface:      { $value: '{color.matrix.surfaceDark}',       $type: 'color' },
    surfaceHover: { $value: '{color.matrix.surfaceHoverDark}',  $type: 'color' },
    surfaceGlass: { $value: 'rgba(10, 31, 10, 0.85)',         $type: 'color' },
    border:       { $value: '{color.matrix.borderDark}',        $type: 'color' },
    text:         { $value: '{color.matrix.textDark}',           $type: 'color' },
    textMuted:    { $value: '{color.matrix.textMutedDark}',      $type: 'color' },
    primary:      { $value: '{color.matrix.primary}',            $type: 'color' },
    primaryHover: { $value: '{color.matrix.primaryHover}',       $type: 'color' },
    primaryText:  { $value: '{color.matrix.bgDark}',            $type: 'color' },
    accent:       { $value: '{color.matrix.textMutedDark}',      $type: 'color' },
    shadow:       { $value: '0 0 15px rgba(0, 255, 65, 0.35)', $type: 'shadow' },
    radius:       { $value: '0px',                              $type: 'dimension' },
    bgGradient:   { $value: 'radial-gradient(ellipse 80% 80% at 50% -20%, rgba(0, 255, 65, 0.12), rgba(0, 0, 0, 0))', $type: 'gradient' },
    ...semanticStatus,
    primaryRgb:   { $value: getPrimaryRgb('matrix'), $type: 'color' },
  },
} satisfies ThemeContract;
