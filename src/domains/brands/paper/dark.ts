import type { ThemeContract } from '@/types/theme-contract.interface';
import { semanticStatus } from '@/domains/shared/semantic-status';
import { getPrimaryRgb } from '@/domains/shared/primary-rgb';

/* =========================================
   Paper Theme — Dark Appearance
   Night notebook, kraft paper tones
   ========================================= */

export default {
  theme: {
    bg:           { $value: '{color.paper.bgDark}',            $type: 'color' },
    surface:      { $value: '{color.paper.surfaceDark}',       $type: 'color' },
    surfaceHover: { $value: '{color.paper.surfaceHoverDark}',  $type: 'color' },
    surfaceGlass: { $value: 'rgba(37, 32, 25, 0.85)',         $type: 'color' },
    border:       { $value: '{color.paper.borderDark}',        $type: 'color' },
    text:         { $value: '{color.paper.textDark}',           $type: 'color' },
    textMuted:    { $value: '{color.paper.textMutedDark}',      $type: 'color' },
    primary:      { $value: '{color.paper.textDark}',           $type: 'color' },
    primaryHover: { $value: '{color.paper.textMutedDark}',      $type: 'color' },
    primaryText:  { $value: '{color.paper.bgDark}',            $type: 'color' },
    accent:       { $value: '{color.paper.textMutedDark}',     $type: 'color' },
    shadow:       { $value: '0 4px 16px rgba(0, 0, 0, 0.35)',  $type: 'shadow' },
    radius:       { $value: '8px',                             $type: 'dimension' },
    bgGradient:   { $value: 'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(74, 64, 53, 0.4), rgba(0, 0, 0, 0))', $type: 'gradient' },
    ...semanticStatus,
    primaryRgb:   { $value: getPrimaryRgb('paper'), $type: 'color' },
  },
} satisfies ThemeContract;
