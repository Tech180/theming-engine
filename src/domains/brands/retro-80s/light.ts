import type { ThemeContract } from '@/types/theme-contract.interface';
import { semanticStatus } from '@/domains/shared/semantic-status';
import { getPrimaryRgb } from '@/domains/shared/primary-rgb';

/* =========================================
   Retro 80s Theme — Light Appearance
   Soft synthwave pastels
   ========================================= */

export default {
  theme: {
    bg:           { $value: '{color.retro80s.bgLight}',           $type: 'color' },
    surface:      { $value: '{color.retro80s.surfaceLight}',      $type: 'color' },
    surfaceHover: { $value: '{color.retro80s.surfaceHoverLight}',  $type: 'color' },
    surfaceGlass: { $value: 'rgba(255, 255, 255, 0.85)',         $type: 'color' },
    border:       { $value: '{color.retro80s.borderLight}',       $type: 'color' },
    text:         { $value: '{color.retro80s.textLight}',          $type: 'color' },
    textMuted:    { $value: '{color.retro80s.textMutedLight}',     $type: 'color' },
    primary:      { $value: '{color.retro80s.primary}',            $type: 'color' },
    primaryHover: { $value: '{color.retro80s.primaryHover}',       $type: 'color' },
    primaryText:  { $value: '{color.white.pure}',                  $type: 'color' },
    accent:       { $value: '{color.retro80s.cyan}',               $type: 'color' },
    shadow:       { $value: '0 0 12px rgba(255, 110, 199, 0.25)', $type: 'shadow' },
    radius:       { $value: '4px',                                $type: 'dimension' },
    bgGradient:   { $value: 'linear-gradient(180deg, rgba(255, 110, 199, 0.12) 0%, rgba(0, 212, 255, 0.08) 100%)', $type: 'gradient' },
    ...semanticStatus,
    primaryRgb:   { $value: getPrimaryRgb('retro-80s'), $type: 'color' },
  },
} satisfies ThemeContract;
