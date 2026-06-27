import type { ThemeContract } from '@/types/theme-contract.interface';

/* =========================================
   Burnt Forest Theme — Dark Appearance
   Charred ember glow, deep red-black
   ========================================= */

export default {
  theme: {
    bg:           { $value: '{color.burnt.bgDark}',            $type: 'color' },
    surface:      { $value: '{color.burnt.surfaceDark}',       $type: 'color' },
    surfaceHover: { $value: '{color.burnt.surfaceHoverDark}',  $type: 'color' },
    surfaceGlass: { $value: 'rgba(20, 14, 10, 0.75)',          $type: 'color' },
    border:       { $value: '{color.burnt.borderDark}',        $type: 'color' },
    text:         { $value: '{color.burnt.textDark}',           $type: 'color' },
    textMuted:    { $value: '{color.burnt.textMutedDark}',      $type: 'color' },
    primary:      { $value: '{color.burnt.primary}',            $type: 'color' },
    primaryHover: { $value: '{color.burnt.primaryHover}',       $type: 'color' },
    primaryText:  { $value: '{color.white.pure}',               $type: 'color' },
    accent:       { $value: '{color.burnt.primary}',            $type: 'color' },
    shadow:       { $value: '0 4px 20px rgba(0, 0, 0, 0.7)',   $type: 'shadow' },
    radius:       { $value: '6px',                              $type: 'dimension' },
    bgGradient:   { $value: 'radial-gradient(ellipse 80% 80% at 50% -20%, rgba(255, 85, 0, 0.12), rgba(0, 0, 0, 0))', $type: 'gradient' },
  },
} satisfies ThemeContract;
