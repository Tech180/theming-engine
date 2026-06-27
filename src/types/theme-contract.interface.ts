import type { DesignToken } from './design-token.interface';

/**
 * The semantic contract that every theme (brand × appearance) must fulfill.
 * This ensures all themes produce the same set of CSS custom properties,
 * allowing consumers to use `var(--bg)` without knowing which theme is active.
 */
export interface ThemeContract {
  theme: {
    /** Page background color */
    bg: DesignToken;

    /** Card/panel surface color */
    surface: DesignToken;

    /** Surface hover state */
    surfaceHover: DesignToken;

    /** Glassmorphism surface (semi-transparent) */
    surfaceGlass: DesignToken;

    /** Default border color */
    border: DesignToken;

    /** Primary text color */
    text: DesignToken;

    /** Secondary/muted text color */
    textMuted: DesignToken;

    /** Brand primary color */
    primary: DesignToken;

    /** Brand primary hover state */
    primaryHover: DesignToken;

    /** Text color on primary backgrounds */
    primaryText: DesignToken;

    /** Accent/highlight color */
    accent: DesignToken;

    /** Default box shadow */
    shadow: DesignToken;

    /** Default border radius */
    radius: DesignToken;

    /** Background gradient overlay */
    bgGradient: DesignToken;
  };
}
