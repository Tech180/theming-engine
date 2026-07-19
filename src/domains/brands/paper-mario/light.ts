import type { ThemeContract } from '@/types/theme-contract.interface';
import { semanticStatus } from '@/domains/shared/semantic-status';
import { getPrimaryRgb } from '@/domains/shared/primary-rgb';
import { TTYD_DIE_CUT_FILTER } from '@/domains/shared/presentation-defaults';

/* =========================================
   Paper Mario Theme — Light Appearance
   Rogueport sky + TTYD Remake input styling
   ========================================= */

export default {
  theme: {
    bg:           { $value: '{color.paperMario.bgLight}',           $type: 'color' },
    surface:      { $value: '{color.paperMario.surfaceLight}',      $type: 'color' },
    surfaceHover: { $value: '{color.paperMario.surfaceHoverLight}', $type: 'color' },
    surfaceGlass: { $value: 'rgba(255, 255, 255, 0.92)',           $type: 'color' },
    border:       { $value: '{color.paperMario.borderLight}',        $type: 'color' },
    text:         { $value: '{color.paperMario.textLight}',          $type: 'color' },
    textMuted:    { $value: '{color.paperMario.textMutedLight}',     $type: 'color' },
    primary:      { $value: '{color.paperMario.marioRed}',          $type: 'color' },
    primaryHover: { $value: '{color.paperMario.marioRedDark}',       $type: 'color' },
    primaryText:  { $value: '{color.paperMario.paperWhite}',        $type: 'color' },
    accent:       { $value: '{color.paperMario.starYellow}',        $type: 'color' },
    shadow:       { $value: '0 4px 0 rgba(58, 46, 38, 0.2)',        $type: 'shadow' },
    radius:       { $value: '16px',                                   $type: 'dimension' },
    bgGradient:   { $value: 'radial-gradient(ellipse 100% 80% at 50% 0%, rgba(255, 255, 255, 0.45), rgba(135, 206, 235, 0))', $type: 'gradient' },
    ...semanticStatus,
    primaryRgb:   { $value: getPrimaryRgb('paper-mario'), $type: 'color' },

    /* TTYD presentation overrides */
    fontDisplay:      { $value: '{fontFamily.ttydDisplay}', $type: 'fontFamily' },
    fontBody:           { $value: '{fontFamily.ttydBody}', $type: 'fontFamily' },
    dieCutFilter:       { $value: TTYD_DIE_CUT_FILTER, $type: 'filter' },
    inputFill:          { $value: 'transparent', $type: 'color' },
    inputBorderWidth:   { $value: '4px', $type: 'dimension' },
    inputBorderColor:   { $value: '{color.paperMario.marioRed}', $type: 'color' },
    inputShadow:        { $value: '0 6px 0 #E3001B', $type: 'shadow' },
    inputShadowFocus:   { $value: '0 6px 0 #FFCC00', $type: 'shadow' },
    inputFocusTransform:{ $value: 'none', $type: 'transform' },
    inputTextColor:     { $value: '{color.paperMario.textInk}', $type: 'color' },
    inputPlaceholderColor: { $value: '{color.paperMario.textInkMuted}', $type: 'color' },
    inputIconColor:     { $value: '{color.paperMario.textInk}', $type: 'color' },
    inputFocusFill:     { $value: 'transparent', $type: 'color' },
    buttonRadius:       { $value: '999px', $type: 'dimension' },
    buttonBorderWidth:  { $value: '4px', $type: 'dimension' },
    buttonShadow:       { $value: '0 8px 0 #990012, 0 15px 15px rgba(0, 0, 0, 0.25)', $type: 'shadow' },
    buttonShadowHover:  { $value: '0 6px 0 #990012, 0 10px 12px rgba(0, 0, 0, 0.25)', $type: 'shadow' },
    buttonShadowActive: { $value: '0 0 0 #990012, 0 2px 4px rgba(0, 0, 0, 0.25)', $type: 'shadow' },
    buttonGloss:        { $value: 'linear-gradient(180deg, rgba(255, 255, 255, 0.6) 0%, rgba(255, 255, 255, 0) 100%)', $type: 'gradient' },
    buttonPrimaryBorder:{ $value: '{color.paperMario.marioRedDark}', $type: 'color' },
    buttonSecondaryBg:  { $value: '{color.paperMario.luigiGreen}', $type: 'color' },
    buttonSecondaryText:{ $value: '{color.paperMario.paperWhite}', $type: 'color' },
    buttonSecondaryBorder: { $value: '{color.paperMario.luigiGreenDark}', $type: 'color' },
    buttonSecondaryShadow: { $value: '0 8px 0 #00661A, 0 15px 15px rgba(0, 0, 0, 0.25)', $type: 'shadow' },
    buttonSecondaryShadowHover: { $value: '0 6px 0 #00661A, 0 10px 12px rgba(0, 0, 0, 0.25)', $type: 'shadow' },
    buttonSecondaryShadowActive: { $value: '0 0 0 #00661A, 0 2px 4px rgba(0, 0, 0, 0.25)', $type: 'shadow' },
    buttonGhostBorder:  { $value: '{color.paperMario.textInk}', $type: 'color' },
    labelBg:            { $value: '{color.paperMario.starYellow}', $type: 'color' },
    labelBorder:        { $value: '{color.paperMario.textInk}', $type: 'color' },
    labelRotate:        { $value: '-2deg', $type: 'dimension' },
    cardBorderWidth:    { $value: '4px', $type: 'dimension' },
    cardShadow:         { $value: '0 8px 0 rgba(58, 46, 38, 0.15), 0 12px 24px rgba(0, 0, 0, 0.12)', $type: 'shadow' },
    cardInnerStitch:    { $value: 'none', $type: 'gradient' },
    transitionPop:      { $value: '0.25s cubic-bezier(0.175, 0.885, 0.32, 1.275)', $type: 'duration' },
  },
} satisfies ThemeContract;
