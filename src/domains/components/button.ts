import type { TokenGroup } from '@/types/token-group.interface';

/* =========================================
   Button Component Tokens
   References semantic theme values for
   automatic theme-awareness.
   ========================================= */

export default {
  button: {
    borderRadius: { $value: '{theme.radius}',       $type: 'dimension' },
    transition:   { $value: '{transition.normal}',   $type: 'duration' },

    primary: {
      bg:         { $value: '{theme.primary}',       $type: 'color' },
      bgHover:    { $value: '{theme.primaryHover}',  $type: 'color' },
      text:       { $value: '{theme.primaryText}',   $type: 'color' },
    },

    secondary: {
      bg:         { $value: '{theme.surface}',       $type: 'color' },
      bgHover:    { $value: '{theme.surfaceHover}',  $type: 'color' },
      text:       { $value: '{theme.text}',          $type: 'color' },
      border:     { $value: '{theme.border}',        $type: 'color' },
    },

    ghost: {
      bg:         { $value: 'rgba(0, 0, 0, 0)',     $type: 'color' },
      bgHover:    { $value: '{theme.surfaceHover}',  $type: 'color' },
      text:       { $value: '{theme.text}',          $type: 'color' },
    },

    paddingX: { $value: '{spacing.md}', $type: 'dimension' },
    paddingY: { $value: '{spacing.sm}', $type: 'dimension' },
    fontSize: { $value: '{fontSize.sm}', $type: 'dimension' },
    fontWeight: { $value: '{fontWeight.medium}', $type: 'fontWeight' },
  },
} satisfies TokenGroup;
