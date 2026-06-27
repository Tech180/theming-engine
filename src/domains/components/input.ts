import type { TokenGroup } from '@/types/token-group.interface';

/* =========================================
   Input Component Tokens
   Form input styling tokens with
   focus/error/disabled states.
   ========================================= */

export default {
  input: {
    bg:           { $value: '{theme.surface}',       $type: 'color' },
    bgHover:      { $value: '{theme.surfaceHover}',  $type: 'color' },
    border:       { $value: '{theme.border}',        $type: 'color' },
    borderFocus:  { $value: '{theme.primary}',       $type: 'color' },
    borderError:  { $value: '{color.error}',         $type: 'color' },
    borderRadius: { $value: '{theme.radius}',        $type: 'dimension' },
    text:         { $value: '{theme.text}',          $type: 'color' },
    placeholder:  { $value: '{theme.textMuted}',     $type: 'color' },
    transition:   { $value: '{transition.fast}',     $type: 'duration' },

    paddingX:     { $value: '{spacing.sm}',          $type: 'dimension' },
    paddingY:     { $value: '{spacing.sm}',          $type: 'dimension' },
    fontSize:     { $value: '{fontSize.sm}',         $type: 'dimension' },

    focusRing: {
      color:  { $value: '{theme.primary}',           $type: 'color' },
      width:  { $value: '2px',                       $type: 'dimension' },
      offset: { $value: '2px',                       $type: 'dimension' },
    },
  },
} satisfies TokenGroup;
