import type { ThemeContract } from '@/types/theme-contract.interface';
import { semanticStatus } from '@/domains/shared/semantic-status';
import { getPrimaryRgb } from '@/domains/shared/primary-rgb';

/* =========================================
   Retro 80s Theme — Dark Appearance
   Synthwave outrun neon void
   ========================================= */

export default {
  theme: {
    bg:           { $value: '{color.retro80s.bgDark}',            $type: 'color' },
    surface:      { $value: '{color.retro80s.surfaceDark}',       $type: 'color' },
    surfaceHover: { $value: '{color.retro80s.surfaceHoverDark}',  $type: 'color' },
    surfaceGlass: { $value: 'rgba(45, 27, 105, 0.75)',           $type: 'color' },
    border:       { $value: '{color.retro80s.borderDark}',        $type: 'color' },
    text:         { $value: '{color.retro80s.textDark}',           $type: 'color' },
    textMuted:    { $value: '{color.retro80s.textMutedDark}',      $type: 'color' },
    primary:      { $value: '{color.retro80s.primary}',            $type: 'color' },
    primaryHover: { $value: '{color.retro80s.primaryHover}',       $type: 'color' },
    primaryText:  { $value: '{color.white.pure}',                  $type: 'color' },
    accent:       { $value: '{color.retro80s.cyan}',               $type: 'color' },
    shadow:       { $value: '0 0 20px rgba(255, 110, 199, 0.45)', $type: 'shadow' },
    radius:       { $value: '4px',                                $type: 'dimension' },
    bgGradient:   { $value: 'linear-gradient(180deg, rgba(255, 110, 199, 0.15) 0%, rgba(255, 154, 0, 0.08) 50%, rgba(26, 10, 46, 0) 100%)', $type: 'gradient' },
    ...semanticStatus,
    primaryRgb:   { $value: getPrimaryRgb('retro-80s'), $type: 'color' },
  },
} satisfies ThemeContract;
