/**
 * W3C Design Token Community Group (DTCG) aligned token structure.
 * Represents a single design token with its value, type, and optional metadata.
 *
 * @see https://design-tokens.github.io/community-group/format/
 */
export interface DesignToken {
  /** The resolved value of the token */
  $value: string | number;

  /** The token's type classification per W3C DTCG spec */
  $type:
    | 'color'
    | 'dimension'
    | 'fontFamily'
    | 'fontWeight'
    | 'duration'
    | 'cubicBezier'
    | 'shadow'
    | 'gradient'
    | 'zIndex'
    | 'animation'
    | 'filter'
    | 'transform';

  /** Human-readable description of the token's purpose */
  $description?: string;
}
