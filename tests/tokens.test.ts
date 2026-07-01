import { describe, test, expect } from 'bun:test';
import {
  ThemeContractSchema,
  ColorTokenSchema,
  DimensionTokenSchema,
  ShadowTokenSchema,
  GradientTokenSchema,
  validateTokenGroup,
} from '../src/schemas/token.schema';

/* =========================================
   Token Schema Validation Tests
   ========================================= */

describe('ColorTokenSchema', () => {
  test('accepts valid 6-digit hex', () => {
    const result = ColorTokenSchema.safeParse({ $value: '#ff00aa', $type: 'color' });
    expect(result.success).toBe(true);
  });

  test('accepts valid 3-digit hex', () => {
    const result = ColorTokenSchema.safeParse({ $value: '#f0a', $type: 'color' });
    expect(result.success).toBe(true);
  });

  test('accepts valid 8-digit hex (with alpha)', () => {
    const result = ColorTokenSchema.safeParse({ $value: '#ff00aa80', $type: 'color' });
    expect(result.success).toBe(true);
  });

  test('accepts rgba() expressions', () => {
    const result = ColorTokenSchema.safeParse({ $value: 'rgba(255, 0, 0, 0.5)', $type: 'color' });
    expect(result.success).toBe(true);
  });

  test('accepts token references', () => {
    const result = ColorTokenSchema.safeParse({ $value: '{color.white.pure}', $type: 'color' });
    expect(result.success).toBe(true);
  });

  test('rejects invalid color format', () => {
    const result = ColorTokenSchema.safeParse({ $value: 'not-a-color', $type: 'color' });
    expect(result.success).toBe(false);
  });

  test('rejects typo like "24xp"', () => {
    const result = ColorTokenSchema.safeParse({ $value: '24xp', $type: 'color' });
    expect(result.success).toBe(false);
  });
});

describe('DimensionTokenSchema', () => {
  test('accepts valid px values', () => {
    const result = DimensionTokenSchema.safeParse({ $value: '16px', $type: 'dimension' });
    expect(result.success).toBe(true);
  });

  test('accepts valid rem values', () => {
    const result = DimensionTokenSchema.safeParse({ $value: '1.5rem', $type: 'dimension' });
    expect(result.success).toBe(true);
  });

  test('accepts percentage values', () => {
    const result = DimensionTokenSchema.safeParse({ $value: '50%', $type: 'dimension' });
    expect(result.success).toBe(true);
  });

  test('accepts numeric values', () => {
    const result = DimensionTokenSchema.safeParse({ $value: 16, $type: 'dimension' });
    expect(result.success).toBe(true);
  });

  test('accepts token references', () => {
    const result = DimensionTokenSchema.safeParse({ $value: '{spacing.md}', $type: 'dimension' });
    expect(result.success).toBe(true);
  });

  test('rejects invalid dimension like "24xp"', () => {
    const result = DimensionTokenSchema.safeParse({ $value: '24xp', $type: 'dimension' });
    expect(result.success).toBe(false);
  });
});

describe('ShadowTokenSchema', () => {
  test('accepts valid box-shadow string', () => {
    const result = ShadowTokenSchema.safeParse({
      $value: '0 4px 6px rgba(0, 0, 0, 0.1)',
      $type: 'shadow',
    });
    expect(result.success).toBe(true);
  });

  test('accepts token references', () => {
    const result = ShadowTokenSchema.safeParse({ $value: '{shadow.md}', $type: 'shadow' });
    expect(result.success).toBe(true);
  });
});

describe('GradientTokenSchema', () => {
  test('accepts linear-gradient', () => {
    const result = GradientTokenSchema.safeParse({
      $value: 'linear-gradient(180deg, #000 0%, #fff 100%)',
      $type: 'gradient',
    });
    expect(result.success).toBe(true);
  });

  test('accepts radial-gradient', () => {
    const result = GradientTokenSchema.safeParse({
      $value: 'radial-gradient(circle at top, rgba(0,0,0,0.1) 0%, transparent 70%)',
      $type: 'gradient',
    });
    expect(result.success).toBe(true);
  });

  test('accepts "none"', () => {
    const result = GradientTokenSchema.safeParse({ $value: 'none', $type: 'gradient' });
    expect(result.success).toBe(true);
  });

  test('rejects non-gradient strings', () => {
    const result = GradientTokenSchema.safeParse({ $value: 'red', $type: 'gradient' });
    expect(result.success).toBe(false);
  });
});

describe('ThemeContractSchema', () => {
  const validTheme = {
    theme: {
      bg:           { $value: '#fafafa', $type: 'color' },
      surface:      { $value: '#ffffff', $type: 'color' },
      surfaceHover: { $value: '#f3f3f4', $type: 'color' },
      surfaceGlass: { $value: 'rgba(255, 255, 255, 0.8)', $type: 'color' },
      border:       { $value: 'rgba(0, 0, 0, 0.08)', $type: 'color' },
      text:         { $value: '#111111', $type: 'color' },
      textMuted:    { $value: '#6b6b7b', $type: 'color' },
      primary:      { $value: '#5e6ad2', $type: 'color' },
      primaryHover: { $value: '#4d59c2', $type: 'color' },
      primaryText:  { $value: '#ffffff', $type: 'color' },
      accent:       { $value: '#5e6ad2', $type: 'color' },
      shadow:       { $value: '0 4px 30px rgba(0,0,0,0.03)', $type: 'shadow' },
      radius:       { $value: '8px', $type: 'dimension' },
      bgGradient:   { $value: 'none', $type: 'gradient' },
    },
  };

  test('accepts a complete theme contract', () => {
    const result = ThemeContractSchema.safeParse(validTheme);
    expect(result.success).toBe(true);
  });

  test('rejects missing required token (primary)', () => {
    const incomplete = {
      theme: { ...validTheme.theme },
    };
    // @ts-expect-error — deliberately removing required field for test
    delete incomplete.theme.primary;

    const result = ThemeContractSchema.safeParse(incomplete);
    expect(result.success).toBe(false);
  });

  test('rejects missing required token (bgGradient)', () => {
    const incomplete = {
      theme: { ...validTheme.theme },
    };
    // @ts-expect-error — deliberately removing required field for test
    delete incomplete.theme.bgGradient;

    const result = ThemeContractSchema.safeParse(incomplete);
    expect(result.success).toBe(false);
  });
});

describe('Theme Files — Contract Compliance', () => {
  const themeFiles = [
    'default/light',
    'default/dark',
    'cyberpunk/light',
    'cyberpunk/dark',
    'neon/light',
    'neon/dark',
    'mystic/light',
    'mystic/dark',
    'burnt-forest/light',
    'burnt-forest/dark',
    'halloween/light',
    'halloween/dark',
    'christmas/light',
    'christmas/dark',
    'valentines/light',
    'valentines/dark',
    'st-patricks/light',
    'st-patricks/dark',
    'earth-day/light',
    'earth-day/dark',
    'independence/light',
    'independence/dark',
    'thanksgiving/light',
    'thanksgiving/dark',
  ];

  for (const themeFile of themeFiles) {
    test(`${themeFile} satisfies ThemeContract`, async () => {
      const mod = await import(`../src/domains/brands/${themeFile}`);
      const tokens = mod.default;
      const result = ThemeContractSchema.safeParse(tokens);
      expect(result.success).toBe(true);
    });
  }
});

describe('Core Token Files — Structure Validation', () => {
  test('core/colors has no validation errors', async () => {
    const mod = await import('../src/domains/core/colors');
    const errors = validateTokenGroup(mod.default);
    expect(errors).toEqual([]);
  });

  test('core/typography has no validation errors', async () => {
    const mod = await import('../src/domains/core/typography');
    const errors = validateTokenGroup(mod.default);
    expect(errors).toEqual([]);
  });

  test('core/spacing has no validation errors', async () => {
    const mod = await import('../src/domains/core/spacing');
    const errors = validateTokenGroup(mod.default);
    expect(errors).toEqual([]);
  });

  test('core/effects has no validation errors', async () => {
    const mod = await import('../src/domains/core/effects');
    const errors = validateTokenGroup(mod.default);
    expect(errors).toEqual([]);
  });
});
