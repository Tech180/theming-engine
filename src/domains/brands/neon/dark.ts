import type { ThemeContract } from '@/types/theme-contract.interface';

/* =========================================
   Neon Theme — Dark Appearance
   Deep purple void with hot pink & cyan
   ========================================= */

export default {
  theme: {
    bg:           { $value: '{color.neon.bgDark}',           $type: 'color' },
    surface:      { $value: '{color.neon.surfaceDark}',      $type: 'color' },
    surfaceHover: { $value: '{color.neon.surfaceHoverDark}', $type: 'color' },
    surfaceGlass: { $value: 'rgba(23, 7, 46, 0.75)',         $type: 'color' },
    border:       { $value: '{color.neon.primary}',          $type: 'color' },
    text:         { $value: '{color.neon.cyan}',             $type: 'color' },
    textMuted:    { $value: '{color.neon.textMutedDark}',    $type: 'color' },
    primary:      { $value: '{color.fuchsiaPinkAccent}',     $type: 'color' },
    primaryHover: { $value: '{color.fuchsiaPinkLight}',      $type: 'color' },
    primaryText:  { $value: '{color.white.pure}',            $type: 'color' },
    accent:       { $value: '{color.neon.primary}',          $type: 'color' },
    shadow:       { $value: '0 0 15px rgba(255, 0, 127, 0.4)', $type: 'shadow' },
    radius:       { $value: '4px',                           $type: 'dimension' },
    bgGradient:   { $value: 'linear-gradient(180deg, rgba(26, 8, 46, 0.5) 0%, rgba(10, 2, 22, 0) 100%)', $type: 'gradient' },
  },
} satisfies ThemeContract;
