import type { ThemeContract } from '@/types/theme-contract.interface';
import { semanticStatus } from '@/domains/shared/semantic-status';
import { getPrimaryRgb } from '@/domains/shared/primary-rgb';
import { TTYD_DIE_CUT_FILTER } from '@/domains/shared/presentation-defaults';

/* =========================================
   Paper Mario Theme — Dark Appearance
   Switch Remake stage + dialogue panels
   ========================================= */

export default {
  theme: {
    bg:           { $value: '{color.paperMario.stageBg}',            $type: 'color' },
    surface:      { $value: '{color.paperMario.surfaceDark}',       $type: 'color' },
    surfaceHover: { $value: '{color.paperMario.surfaceHoverDark}',  $type: 'color' },
    surfaceGlass: { $value: 'rgba(15, 20, 35, 0.88)',              $type: 'color' },
    border:       { $value: '{color.paperMario.borderDark}',        $type: 'color' },
    text:         { $value: '{color.paperMario.textDark}',           $type: 'color' },
    textMuted:    { $value: '{color.paperMario.textMutedDark}',      $type: 'color' },
    primary:      { $value: '{color.paperMario.marioRed}',           $type: 'color' },
    primaryHover: { $value: '{color.paperMario.marioRedDark}',        $type: 'color' },
    primaryText:  { $value: '{color.paperMario.paperWhite}',         $type: 'color' },
    accent:       { $value: '{color.paperMario.luigiGreen}',          $type: 'color' },
    shadow:       { $value: '0 15px 30px rgba(0, 0, 0, 0.5)',        $type: 'shadow' },
    radius:       { $value: '16px',                                    $type: 'dimension' },
    bgGradient:   { $value: 'radial-gradient(circle at 50% 0%, rgba(255, 255, 255, 0.1) 0%, transparent 40%), radial-gradient(circle at 50% 120%, #4a2d6a 0%, #1a1025 50%, #08050c 100%)', $type: 'gradient' },
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
    inputTextColor:     { $value: '{color.paperMario.textDark}', $type: 'color' },
    inputPlaceholderColor: { $value: '{color.paperMario.textMutedDark}', $type: 'color' },
    inputIconColor:     { $value: '{color.paperMario.textDark}', $type: 'color' },
    inputFocusFill:     { $value: 'transparent', $type: 'color' },
    buttonRadius:       { $value: '999px', $type: 'dimension' },
    buttonBorderWidth:  { $value: '4px', $type: 'dimension' },
    buttonShadow:       { $value: '0 8px 0 #990012, 0 15px 15px rgba(0, 0, 0, 0.4)', $type: 'shadow' },
    buttonShadowHover:  { $value: '0 6px 0 #990012, 0 10px 12px rgba(0, 0, 0, 0.4)', $type: 'shadow' },
    buttonShadowActive: { $value: '0 0 0 #990012, 0 2px 4px rgba(0, 0, 0, 0.4)', $type: 'shadow' },
    buttonGloss:        { $value: 'linear-gradient(180deg, rgba(255, 255, 255, 0.45) 0%, rgba(255, 255, 255, 0) 100%)', $type: 'gradient' },
    buttonPrimaryBorder:{ $value: '{color.paperMario.marioRedDark}', $type: 'color' },
    buttonSecondaryBg:  { $value: '{color.paperMario.toadBlue}', $type: 'color' },
    buttonSecondaryText:{ $value: '{color.paperMario.paperWhite}', $type: 'color' },
    buttonSecondaryBorder: { $value: '{color.paperMario.toadBlueDark}', $type: 'color' },
    buttonSecondaryShadow: { $value: '0 8px 0 #003366, 0 15px 15px rgba(0, 0, 0, 0.4)', $type: 'shadow' },
    buttonSecondaryShadowHover: { $value: '0 6px 0 #003366, 0 10px 12px rgba(0, 0, 0, 0.4)', $type: 'shadow' },
    buttonSecondaryShadowActive: { $value: '0 0 0 #003366, 0 2px 4px rgba(0, 0, 0, 0.4)', $type: 'shadow' },
    buttonGhostBorder:  { $value: '{color.paperMario.paperWhite}', $type: 'color' },
    labelBg:            { $value: '{color.paperMario.luigiGreen}', $type: 'color' },
    labelBorder:        { $value: '{color.paperMario.paperWhite}', $type: 'color' },
    labelRotate:        { $value: '-3deg', $type: 'dimension' },
    cardBorderWidth:    { $value: '4px', $type: 'dimension' },
    cardShadow:         { $value: 'inset 0 0 20px rgba(0, 0, 0, 0.8), 0 20px 30px rgba(0, 0, 0, 0.6)', $type: 'shadow' },
    cardInnerStitch:    { $value: 'repeating-linear-gradient(0deg, rgba(255,255,255,0.3) 0 4px, transparent 4px 8px)', $type: 'gradient' },
    transitionPop:      { $value: '0.25s cubic-bezier(0.175, 0.885, 0.32, 1.275)', $type: 'duration' },
  },
} satisfies ThemeContract;
