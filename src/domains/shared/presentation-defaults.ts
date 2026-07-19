import type { ThemePresentationContract } from '@/types/theme-presentation-contract.interface';

/* =========================================
   Neutral presentation defaults (light)
   Merged into every theme build; overridden
   per-theme (e.g. paper-mario) when needed.
   ========================================= */

export const presentationDefaultsLight = {
  fontDisplay:      { $value: '{fontFamily.main}', $type: 'fontFamily' as const },
  fontBody:         { $value: '{fontFamily.main}', $type: 'fontFamily' as const },
  dieCutFilter:     { $value: 'none', $type: 'filter' as const },
  inputFill:        { $value: '{theme.surface}', $type: 'color' as const },
  inputBorderWidth: { $value: '1px', $type: 'dimension' as const },
  inputBorderColor: { $value: '{theme.border}', $type: 'color' as const },
  inputShadow:      { $value: 'inset 0 1px 2px rgba(0, 0, 0, 0.02)', $type: 'shadow' as const },
  inputShadowFocus: { $value: '0 0 0 3px color-mix(in srgb, var(--theme-primary) 15%, transparent)', $type: 'shadow' as const },
  inputFocusTransform: { $value: 'none', $type: 'transform' as const },
  inputTextColor: { $value: '{theme.text}', $type: 'color' as const },
  inputPlaceholderColor: { $value: '{theme.textMuted}', $type: 'color' as const },
  inputIconColor: { $value: '{theme.textMuted}', $type: 'color' as const },
  inputFocusFill: { $value: '{theme.surface}', $type: 'color' as const },
  buttonRadius:     { $value: '{theme.radius}', $type: 'dimension' as const },
  buttonBorderWidth:{ $value: '1px', $type: 'dimension' as const },
  buttonShadow:     { $value: '{shadow.sm}', $type: 'shadow' as const },
  buttonShadowHover:{ $value: '{shadow.sm}', $type: 'shadow' as const },
  buttonShadowActive:{ $value: '{shadow.sm}', $type: 'shadow' as const },
  buttonGloss:      { $value: 'none', $type: 'gradient' as const },
  buttonPrimaryBorder: { $value: '{theme.border}', $type: 'color' as const },
  buttonSecondaryBg: { $value: '{theme.surface}', $type: 'color' as const },
  buttonSecondaryText: { $value: '{theme.text}', $type: 'color' as const },
  buttonSecondaryBorder: { $value: '{theme.border}', $type: 'color' as const },
  buttonSecondaryShadow: { $value: '{shadow.sm}', $type: 'shadow' as const },
  buttonSecondaryShadowHover: { $value: '{shadow.sm}', $type: 'shadow' as const },
  buttonSecondaryShadowActive: { $value: '{shadow.sm}', $type: 'shadow' as const },
  buttonGhostBorder: { $value: 'transparent', $type: 'color' as const },
  labelBg:          { $value: 'transparent', $type: 'color' as const },
  labelBorder:      { $value: 'transparent', $type: 'color' as const },
  labelRotate:      { $value: '0deg', $type: 'dimension' as const },
  cardBorderWidth:  { $value: '1px', $type: 'dimension' as const },
  cardShadow:       { $value: '{theme.shadow}', $type: 'shadow' as const },
  cardInnerStitch:  { $value: 'none', $type: 'gradient' as const },
  transitionPop:    { $value: '{transition.normal}', $type: 'duration' as const },
} satisfies ThemePresentationContract;

export const presentationDefaultsDark = {
  ...presentationDefaultsLight,
  inputShadow: { $value: 'inset 0 1px 2px rgba(0, 0, 0, 0.08)', $type: 'shadow' as const },
} satisfies ThemePresentationContract;

/** TTYD die-cut white rim + ambient shadow */
export const TTYD_DIE_CUT_FILTER =
  'drop-shadow(2px 0px 0px #ffffff) drop-shadow(-2px 0px 0px #ffffff) drop-shadow(0px 2px 0px #ffffff) drop-shadow(0px -2px 0px #ffffff) drop-shadow(1.5px 1.5px 0px #ffffff) drop-shadow(-1.5px -1.5px 0px #ffffff) drop-shadow(1.5px -1.5px 0px #ffffff) drop-shadow(-1.5px 1.5px 0px #ffffff) drop-shadow(0px 8px 4px rgba(0, 0, 0, 0.4))';
