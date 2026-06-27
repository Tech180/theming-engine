import { z } from 'zod';

/* =========================================
   Design Token Zod Schemas
   ========================================= */

/** Valid hex color: 3, 4, 6, or 8 digit hex */
const hexColorRegex = /^#([A-Fa-f0-9]{3,4}|[A-Fa-f0-9]{6}|[A-Fa-f0-9]{8})$/;

/** CSS dimension value: number + unit */
const dimensionRegex = /^-?\d+(\.\d+)?(px|rem|em|%|vw|vh|dvh|svh|lvh)$/;

/** W3C DTCG $type values */
const tokenTypeEnum = z.enum([
  'color',
  'dimension',
  'fontFamily',
  'fontWeight',
  'duration',
  'cubicBezier',
  'shadow',
  'gradient',
]);

/* -----------------------------------------
   Individual Token Schemas
   ----------------------------------------- */

/** Color token — validates hex format or rgba/hsla/color-mix expressions */
export const ColorTokenSchema = z.object({
  $value: z.string().refine(
    (val) =>
      hexColorRegex.test(val) ||
      val.startsWith('rgba(') ||
      val.startsWith('hsla(') ||
      val.startsWith('color-mix(') ||
      val.startsWith('{'),  // Style Dictionary reference
    { message: 'Invalid color value. Expected hex (#RRGGBB), rgba(), hsla(), color-mix(), or a token reference ({...}).' }
  ),
  $type: z.literal('color'),
  $description: z.string().optional(),
});

/** Dimension token — validates CSS dimension values */
export const DimensionTokenSchema = z.object({
  $value: z.union([
    z.string().refine(
      (val) => dimensionRegex.test(val) || val.startsWith('{'),
      { message: 'Invalid dimension value. Expected number+unit (e.g., "16px", "1rem", "50%") or a token reference ({...}).' }
    ),
    z.number(),
  ]),
  $type: z.literal('dimension'),
  $description: z.string().optional(),
});

/** Shadow token — validates CSS box-shadow strings */
export const ShadowTokenSchema = z.object({
  $value: z.string().refine(
    (val) =>
      // Basic shadow pattern: contains digits and color references
      /\d/.test(val) || val.startsWith('{'),
    { message: 'Invalid shadow value. Expected a CSS box-shadow string or a token reference ({...}).' }
  ),
  $type: z.literal('shadow'),
  $description: z.string().optional(),
});

/** Gradient token — validates CSS gradient strings */
export const GradientTokenSchema = z.object({
  $value: z.string().refine(
    (val) =>
      val.includes('gradient(') ||
      val.startsWith('{') ||
      val === 'none',
    { message: 'Invalid gradient value. Expected a CSS gradient string, "none", or a token reference ({...}).' }
  ),
  $type: z.literal('gradient'),
  $description: z.string().optional(),
});

/** Font family token */
export const FontFamilyTokenSchema = z.object({
  $value: z.string().min(1),
  $type: z.literal('fontFamily'),
  $description: z.string().optional(),
});

/** Font weight token */
export const FontWeightTokenSchema = z.object({
  $value: z.union([z.number().int().min(100).max(900), z.string()]),
  $type: z.literal('fontWeight'),
  $description: z.string().optional(),
});

/** Duration token */
export const DurationTokenSchema = z.object({
  $value: z.string().refine(
    (val) => /^\d+(\.\d+)?(ms|s)$/.test(val) || val.includes('ease') || val.startsWith('{'),
    { message: 'Invalid duration value.' }
  ),
  $type: z.literal('duration'),
  $description: z.string().optional(),
});

/** Generic design token (any type) */
export const DesignTokenSchema = z.object({
  $value: z.union([z.string(), z.number()]),
  $type: tokenTypeEnum,
  $description: z.string().optional(),
});

/* -----------------------------------------
   Theme Contract Schema
   ----------------------------------------- */

/** Ensures every theme file has the full semantic contract */
export const ThemeContractSchema = z.object({
  theme: z.object({
    bg: DesignTokenSchema,
    surface: DesignTokenSchema,
    surfaceHover: DesignTokenSchema,
    surfaceGlass: DesignTokenSchema,
    border: DesignTokenSchema,
    text: DesignTokenSchema,
    textMuted: DesignTokenSchema,
    primary: DesignTokenSchema,
    primaryHover: DesignTokenSchema,
    primaryText: DesignTokenSchema,
    accent: DesignTokenSchema,
    shadow: DesignTokenSchema,
    radius: DesignTokenSchema,
    bgGradient: DesignTokenSchema,
  }),
});

/* -----------------------------------------
   Utility: Validate a token group recursively
   ----------------------------------------- */

export type ValidationError = {
  path: string;
  message: string;
};

/**
 * Recursively validates all tokens in a token group.
 * Returns an array of validation errors (empty = all valid).
 */
export function validateTokenGroup(
  group: Record<string, unknown>,
  parentPath = '',
): ValidationError[] {
  const errors: ValidationError[] = [];

  for (const [key, value] of Object.entries(group)) {
    const currentPath = parentPath ? `${parentPath}.${key}` : key;

    if (
      value !== null &&
      typeof value === 'object' &&
      '$value' in (value as Record<string, unknown>) &&
      '$type' in (value as Record<string, unknown>)
    ) {
      // This is a leaf token — validate it
      const result = DesignTokenSchema.safeParse(value);
      if (!result.success) {
        for (const issue of result.error.issues) {
          errors.push({
            path: currentPath,
            message: issue.message,
          });
        }
      }
    } else if (value !== null && typeof value === 'object') {
      // Recurse into nested group
      errors.push(
        ...validateTokenGroup(value as Record<string, unknown>, currentPath),
      );
    }
  }

  return errors;
}
