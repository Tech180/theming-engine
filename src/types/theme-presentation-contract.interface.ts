import type { DesignToken } from './design-token.interface';

/**
 * Optional presentation tokens for physical UI styling
 * (3D edges, die-cut filters, typography overrides).
 * Defaults ship via _shared/presentation-{appearance}.ts;
 * themes like paper-mario override selectively.
 */
export interface ThemePresentationContract {
  fontDisplay: DesignToken;
  fontBody: DesignToken;
  dieCutFilter: DesignToken;
  inputFill: DesignToken;
  inputBorderWidth: DesignToken;
  inputBorderColor: DesignToken;
  inputShadow: DesignToken;
  inputShadowFocus: DesignToken;
  inputFocusTransform: DesignToken;
  inputTextColor: DesignToken;
  inputPlaceholderColor: DesignToken;
  inputIconColor: DesignToken;
  inputFocusFill: DesignToken;
  buttonRadius: DesignToken;
  buttonBorderWidth: DesignToken;
  buttonShadow: DesignToken;
  buttonShadowHover: DesignToken;
  buttonShadowActive: DesignToken;
  buttonGloss: DesignToken;
  buttonPrimaryBorder: DesignToken;
  buttonSecondaryBg: DesignToken;
  buttonSecondaryText: DesignToken;
  buttonSecondaryBorder: DesignToken;
  buttonSecondaryShadow: DesignToken;
  buttonSecondaryShadowHover: DesignToken;
  buttonSecondaryShadowActive: DesignToken;
  buttonGhostBorder: DesignToken;
  labelBg: DesignToken;
  labelBorder: DesignToken;
  labelRotate: DesignToken;
  cardBorderWidth: DesignToken;
  cardShadow: DesignToken;
  cardInnerStitch: DesignToken;
  transitionPop: DesignToken;
}
