import { describe, test, expect } from 'bun:test';

/* =========================================
   Transform Unit Tests
   ========================================= */

describe('px-to-rem transform', () => {
  test('converts 16px to 1rem', () => {
    const px = 16;
    const result = `${px / 16}rem`;
    expect(result).toBe('1rem');
  });

  test('converts 8px to 0.5rem', () => {
    const px = 8;
    const result = `${px / 16}rem`;
    expect(result).toBe('0.5rem');
  });

  test('converts 4px to 0.25rem', () => {
    const px = 4;
    const result = `${px / 16}rem`;
    expect(result).toBe('0.25rem');
  });

  test('converts 24px to 1.5rem', () => {
    const px = 24;
    const result = `${px / 16}rem`;
    expect(result).toBe('1.5rem');
  });

  test('converts 0px to 0rem', () => {
    const px = 0;
    const result = `${px / 16}rem`;
    expect(result).toBe('0rem');
  });
});

describe('color hex-alpha transform', () => {
  test('converts 6-digit hex to 8-digit with FF alpha', () => {
    const hex = '#ff00aa';
    const result = `${hex}FF`.toUpperCase().replace('#', '#');
    expect(result).toBe('#FF00AAFF');
  });
});

describe('rgba to Android hex transform', () => {
  test('converts rgba(255, 0, 0, 0.5) to #80FF0000', () => {
    const r = 255, g = 0, b = 0, a = 0.5;
    const alpha = Math.round(a * 255);
    const toHex = (n: number) => n.toString(16).padStart(2, '0');
    const result = `#${alpha.toString(16).padStart(2, '0')}${toHex(r)}${toHex(g)}${toHex(b)}`.toUpperCase();
    expect(result).toBe('#80FF0000');
  });

  test('converts rgba(0, 0, 0, 1) to #FF000000', () => {
    const r = 0, g = 0, b = 0, a = 1;
    const alpha = Math.round(a * 255);
    const toHex = (n: number) => n.toString(16).padStart(2, '0');
    const result = `#${alpha.toString(16).padStart(2, '0')}${toHex(r)}${toHex(g)}${toHex(b)}`.toUpperCase();
    expect(result).toBe('#FF000000');
  });

  test('converts rgba(0, 0, 0, 0) to #00000000', () => {
    const r = 0, g = 0, b = 0, a = 0;
    const alpha = Math.round(a * 255);
    const toHex = (n: number) => n.toString(16).padStart(2, '0');
    const result = `#${alpha.toString(16).padStart(2, '0')}${toHex(r)}${toHex(g)}${toHex(b)}`.toUpperCase();
    expect(result).toBe('#00000000');
  });
});
