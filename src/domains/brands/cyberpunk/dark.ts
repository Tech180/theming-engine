import type { ThemeContract } from '@/types/theme-contract.interface';

/* =========================================
   Cyberpunk Theme — Dark Appearance
   Electric yellow on deep dark blue
   ========================================= */

export default {
  theme: {
    bg:           { $value: '{color.cyber.bgDark}',          $type: 'color' },
    surface:      { $value: '{color.cyber.surfaceDark}',     $type: 'color' },
    surfaceHover: { $value: '{color.cyber.surfaceHoverDark}',$type: 'color' },
    surfaceGlass: { $value: 'rgba(8, 15, 38, 0.75)',         $type: 'color' },
    border:       { $value: '{color.cyber.primary}',         $type: 'color' },
    text:         { $value: '{color.cyber.cyan}',            $type: 'color' },
    textMuted:    { $value: '{color.cyber.textMutedDark}',   $type: 'color' },
    primary:      { $value: '{color.cyber.primary}',         $type: 'color' },
    primaryHover: { $value: '{color.cyber.primaryHover}',    $type: 'color' },
    primaryText:  { $value: '{color.black.pure}',            $type: 'color' },
    accent:       { $value: '{color.cyber.pink}',            $type: 'color' },
    shadow:       { $value: '3px 3px 0px #00f0ff',           $type: 'shadow' },
    radius:       { $value: '0px',                           $type: 'dimension' },
    bgGradient:   { $value: 'radial-gradient(ellipse 80% 80% at 50% -20%, rgba(252, 238, 10, 0.1), rgba(0, 0, 0, 0))', $type: 'gradient' },
  },
} satisfies ThemeContract;
