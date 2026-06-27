import type { ThemeContract } from '@/types/theme-contract.interface';

/* =========================================
   Burnt Forest Theme — Light Appearance
   Sun-bleached ash, warm embers
   ========================================= */

export default {
  theme: {
    bg:           { $value: '{color.burnt.bgLight}',           $type: 'color' },
    surface:      { $value: '{color.white.pure}',              $type: 'color' },
    surfaceHover: { $value: '{color.burnt.surfaceHoverLight}', $type: 'color' },
    surfaceGlass: { $value: 'rgba(255, 255, 255, 0.8)',        $type: 'color' },
    border:       { $value: '{color.burnt.borderLight}',       $type: 'color' },
    text:         { $value: '{color.burnt.textLight}',          $type: 'color' },
    textMuted:    { $value: '{color.burnt.textMutedLight}',     $type: 'color' },
    primary:      { $value: '{color.burnt.primary}',            $type: 'color' },
    primaryHover: { $value: '{color.burnt.primaryHover}',       $type: 'color' },
    primaryText:  { $value: '{color.white.pure}',               $type: 'color' },
    accent:       { $value: '{color.burnt.primary}',            $type: 'color' },
    shadow:       { $value: '0 4px 15px rgba(255, 85, 0, 0.08)', $type: 'shadow' },
    radius:       { $value: '6px',                              $type: 'dimension' },
    bgGradient:   { $value: 'linear-gradient(180deg, rgba(30, 10, 5, 0.4) 0%, rgba(0, 0, 0, 0) 100%)', $type: 'gradient' },
  },
} satisfies ThemeContract;
