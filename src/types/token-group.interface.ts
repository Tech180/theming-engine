import type { DesignToken } from './design-token.interface';

/**
 * Recursive grouping of design tokens.
 * A TokenGroup can contain either individual DesignToken values
 * or nested TokenGroup sub-groups, allowing arbitrary depth.
 */
export interface TokenGroup {
  [key: string]: DesignToken | TokenGroup;
}
