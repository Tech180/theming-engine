import type { ThemeContract } from '@/types/theme-contract.interface';
import { semanticStatus } from '@/domains/shared/semantic-status';
import { getPrimaryRgb } from '@/domains/shared/primary-rgb';

/* =========================================
   Terminal Theme — Dark Appearance
   Classic amber-on-black CRT console
   ========================================= */

export default {
  theme: {
    bg:           { $value: '{color.terminal.bgDark}',            $type: 'color' },
    surface:      { $value: '{color.terminal.surfaceDark}',       $type: 'color' },
    surfaceHover: { $value: '{color.terminal.surfaceHoverDark}',  $type: 'color' },
    surfaceGlass: { $value: 'rgba(20, 20, 20, 0.9)',            $type: 'color' },
    border:       { $value: '{color.terminal.borderDark}',        $type: 'color' },
    text:         { $value: '{color.terminal.textDark}',           $type: 'color' },
    textMuted:    { $value: '{color.terminal.textMutedDark}',      $type: 'color' },
    primary:      { $value: '{color.terminal.primary}',            $type: 'color' },
    primaryHover: { $value: '{color.terminal.primaryHover}',       $type: 'color' },
    primaryText:  { $value: '{color.terminal.bgDark}',            $type: 'color' },
    accent:       { $value: '{color.terminal.textMutedDark}',      $type: 'color' },
    shadow:       { $value: '0 0 10px rgba(255, 176, 0, 0.25)',  $type: 'shadow' },
    radius:       { $value: '2px',                                $type: 'dimension' },
    bgGradient:   { $value: 'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(255, 176, 0, 0.06), rgba(0, 0, 0, 0))', $type: 'gradient' },
    ...semanticStatus,
    primaryRgb:   { $value: getPrimaryRgb('terminal'), $type: 'color' },
  },
} satisfies ThemeContract;
