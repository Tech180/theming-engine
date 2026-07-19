import type { ThemeContract } from '@/types/theme-contract.interface';
import { semanticStatus } from '@/domains/shared/semantic-status';
import { getPrimaryRgb } from '@/domains/shared/primary-rgb';

/* =========================================
   Default Theme — Dark Appearance
   Linear.app inspired (from giftistry-react)
   ========================================= */

export default {
  theme: {
    bg:           { $value: '{color.linear.bgDark}',            $type: 'color' },
    surface:      { $value: '{color.linear.surfaceDark}',       $type: 'color' },
    surfaceHover: { $value: '{color.linear.surfaceHoverDark}',  $type: 'color' },
    surfaceGlass: { $value: 'rgba(21, 21, 22, 0.75)',           $type: 'color' },
    border:       { $value: 'rgba(255, 255, 255, 0.08)',        $type: 'color' },
    text:         { $value: '{color.linear.textDark}',           $type: 'color' },
    textMuted:    { $value: '{color.linear.textMutedDark}',      $type: 'color' },
    primary:      { $value: '{color.linear.primary}',            $type: 'color' },
    primaryHover: { $value: '{color.linear.primaryHover}',       $type: 'color' },
    primaryText:  { $value: '{color.white.pure}',                $type: 'color' },
    accent:       { $value: '{color.linear.primary}',            $type: 'color' },
    shadow:       { $value: '0 4px 30px rgba(0, 0, 0, 0.5)',    $type: 'shadow' },
    radius:       { $value: '8px',                               $type: 'dimension' },
    bgGradient:   { $value: 'radial-gradient(ellipse 80% 80% at 50% -20%, rgba(94, 106, 210, 0.08), rgba(0, 0, 0, 0))', $type: 'gradient' },
    ...semanticStatus,
    primaryRgb:   { $value: getPrimaryRgb('default'), $type: 'color' },
  },
} satisfies ThemeContract;
