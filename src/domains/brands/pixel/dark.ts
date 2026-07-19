import type { ThemeContract } from '@/types/theme-contract.interface';
import { semanticStatus } from '@/domains/shared/semantic-status';
import { getPrimaryRgb } from '@/domains/shared/primary-rgb';

/* =========================================
   Pixel Theme — Dark Appearance
   8-bit navy void with bold primaries
   ========================================= */

export default {
  theme: {
    bg:           { $value: '{color.pixel.bgDark}',            $type: 'color' },
    surface:      { $value: '{color.pixel.surfaceDark}',       $type: 'color' },
    surfaceHover: { $value: '{color.pixel.surfaceHoverDark}',  $type: 'color' },
    surfaceGlass: { $value: 'rgba(41, 43, 65, 0.9)',           $type: 'color' },
    border:       { $value: '{color.pixel.borderDark}',        $type: 'color' },
    text:         { $value: '{color.pixel.textDark}',           $type: 'color' },
    textMuted:    { $value: '{color.pixel.textMutedDark}',      $type: 'color' },
    primary:      { $value: '{color.pixel.primary}',            $type: 'color' },
    primaryHover: { $value: '{color.pixel.primaryHover}',       $type: 'color' },
    primaryText:  { $value: '{color.white.pure}',               $type: 'color' },
    accent:       { $value: '{color.pixel.yellow}',            $type: 'color' },
    shadow:       { $value: '2px 2px 0 #ffffff',              $type: 'shadow' },
    radius:       { $value: '0px',                             $type: 'dimension' },
    bgGradient:   { $value: 'none',                            $type: 'gradient' },
    ...semanticStatus,
    primaryRgb:   { $value: getPrimaryRgb('pixel'), $type: 'color' },
  },
} satisfies ThemeContract;
