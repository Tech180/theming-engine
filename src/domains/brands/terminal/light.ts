import type { ThemeContract } from '@/types/theme-contract.interface';
import { semanticStatus } from '@/domains/shared/semantic-status';
import { getPrimaryRgb } from '@/domains/shared/primary-rgb';

/* =========================================
   Terminal Theme — Light Appearance
   Warm CRT paper tones
   ========================================= */

export default {
  theme: {
    bg:           { $value: '{color.terminal.bgLight}',           $type: 'color' },
    surface:      { $value: '{color.terminal.surfaceLight}',      $type: 'color' },
    surfaceHover: { $value: '{color.terminal.surfaceHoverLight}',  $type: 'color' },
    surfaceGlass: { $value: 'rgba(250, 246, 235, 0.9)',         $type: 'color' },
    border:       { $value: '{color.terminal.borderLight}',       $type: 'color' },
    text:         { $value: '{color.terminal.textLight}',          $type: 'color' },
    textMuted:    { $value: '{color.terminal.textMutedLight}',     $type: 'color' },
    primary:      { $value: '{color.terminal.primary}',            $type: 'color' },
    primaryHover: { $value: '{color.terminal.primaryHover}',       $type: 'color' },
    primaryText:  { $value: '{color.terminal.bgDark}',            $type: 'color' },
    accent:       { $value: '{color.terminal.primary}',           $type: 'color' },
    shadow:       { $value: '0 2px 6px rgba(255, 176, 0, 0.15)', $type: 'shadow' },
    radius:       { $value: '2px',                                $type: 'dimension' },
    bgGradient:   { $value: 'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(255, 176, 0, 0.08), rgba(255, 255, 255, 0))', $type: 'gradient' },
    ...semanticStatus,
    primaryRgb:   { $value: getPrimaryRgb('terminal'), $type: 'color' },
  },
} satisfies ThemeContract;
