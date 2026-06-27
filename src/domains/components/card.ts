import type { TokenGroup } from '@/types/token-group.interface';

/* =========================================
   Card Component Tokens
   Glassmorphism pattern from giftistry-react.
   ========================================= */

export default {
  card: {
    bg:           { $value: '{theme.surfaceGlass}', $type: 'color' },
    bgSolid:      { $value: '{theme.surface}',      $type: 'color' },
    border:       { $value: '{theme.border}',        $type: 'color' },
    borderRadius: { $value: '{theme.radius}',        $type: 'dimension' },
    shadow:       { $value: '{theme.shadow}',        $type: 'shadow' },
    backdropBlur: { $value: '{blur.glass}',          $type: 'dimension' },
    transition:   { $value: '{transition.normal}',   $type: 'duration' },

    padding: {
      sm: { $value: '{spacing.sm}',  $type: 'dimension' },
      md: { $value: '{spacing.md}',  $type: 'dimension' },
      lg: { $value: '{spacing.lg}',  $type: 'dimension' },
    },
  },
} satisfies TokenGroup;
