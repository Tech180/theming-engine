import type { ThemeContract } from '@/types/theme-contract.interface';
import { semanticStatus } from '@/domains/shared/semantic-status';
import { getPrimaryRgb } from '@/domains/shared/primary-rgb';

/* =========================================
   Vaporwave Theme — Dark Appearance
   Pastel neon on deep purple dusk
   ========================================= */

export default {
  theme: {
    bg:           { $value: '{color.vaporwave.bgDark}',            $type: 'color' },
    surface:      { $value: '{color.vaporwave.surfaceDark}',       $type: 'color' },
    surfaceHover: { $value: '{color.vaporwave.surfaceHoverDark}',  $type: 'color' },
    surfaceGlass: { $value: 'rgba(45, 0, 82, 0.8)',              $type: 'color' },
    border:       { $value: '{color.vaporwave.borderDark}',        $type: 'color' },
    text:         { $value: '{color.vaporwave.textDark}',           $type: 'color' },
    textMuted:    { $value: '{color.vaporwave.textMutedDark}',      $type: 'color' },
    primary:      { $value: '{color.vaporwave.primary}',            $type: 'color' },
    primaryHover: { $value: '{color.vaporwave.primaryHover}',       $type: 'color' },
    primaryText:  { $value: '{color.white.pure}',                  $type: 'color' },
    accent:       { $value: '{color.vaporwave.mint}',               $type: 'color' },
    shadow:       { $value: '0 0 20px rgba(255, 113, 206, 0.35)', $type: 'shadow' },
    radius:       { $value: '8px',                                $type: 'dimension' },
    bgGradient:   { $value: 'linear-gradient(180deg, rgba(255, 113, 206, 0.12) 0%, rgba(5, 255, 161, 0.06) 50%, rgba(26, 0, 51, 0) 100%)', $type: 'gradient' },
    ...semanticStatus,
    primaryRgb:   { $value: getPrimaryRgb('vaporwave'), $type: 'color' },
  },
} satisfies ThemeContract;
