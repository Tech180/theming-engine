import { describe, test, expect, beforeAll } from 'bun:test';
import { existsSync, readFileSync, readdirSync } from 'fs';

/* =========================================
   Build Output Verification Tests
   Run AFTER `bun run build` to verify
   generated artifacts.
   ========================================= */

describe('Build Output — File Existence', () => {
  test('generates CSS variables file', () => {
    expect(existsSync('dist/css/variables.css')).toBe(true);
  });

  test('generates CSS components file', () => {
    expect(existsSync('dist/css/components.css')).toBe(true);
  });

  test('generates SCSS variables file', () => {
    expect(existsSync('dist/scss/_variables.scss')).toBe(true);
  });

  test('generates JS tokens file', () => {
    expect(existsSync('dist/js/tokens.ts')).toBe(true);
  });

  test('generates Android colors.xml', () => {
    expect(existsSync('dist/android/values/colors.xml')).toBe(true);
  });

  test('generates Android dimens.xml', () => {
    expect(existsSync('dist/android/values/dimens.xml')).toBe(true);
  });

  test('generates Android night colors', () => {
    expect(existsSync('dist/android/values-night/theme_colors.xml')).toBe(true);
  });
});

describe('Build Output — Theme Files', () => {
  const themes = ['default', 'cyberpunk', 'neon', 'mystic', 'burnt-forest'];
  const appearances = ['light', 'dark'];

  for (const theme of themes) {
    for (const appearance of appearances) {
      test(`generates CSS for ${theme}-${appearance}`, () => {
        expect(existsSync(`dist/css/themes/${theme}-${appearance}.css`)).toBe(true);
      });

      test(`generates SCSS for ${theme}-${appearance}`, () => {
        expect(existsSync(`dist/scss/themes/_${theme}-${appearance}.scss`)).toBe(true);
      });
    }
  }
});

describe('Build Output — Strict Separation', () => {
  test('CSS directory contains no .scss files', () => {
    if (!existsSync('dist/css')) return;
    const files = getAllFiles('dist/css');
    const scssFiles = files.filter((f) => f.endsWith('.scss'));
    expect(scssFiles).toEqual([]);
  });

  test('SCSS directory contains no .css files', () => {
    if (!existsSync('dist/scss')) return;
    const files = getAllFiles('dist/scss');
    const cssFiles = files.filter((f) => f.endsWith('.css'));
    expect(cssFiles).toEqual([]);
  });

  test('Android directory contains only .xml files', () => {
    if (!existsSync('dist/android')) return;
    const files = getAllFiles('dist/android');
    const nonXml = files.filter((f) => !f.endsWith('.xml'));
    expect(nonXml).toEqual([]);
  });
});

describe('Build Output — Content Validation', () => {
  test('theme CSS contains correct data-attribute selectors', () => {
    if (!existsSync('dist/css/themes/default-light.css')) return;
    const content = readFileSync('dist/css/themes/default-light.css', 'utf-8');
    expect(content).toContain('[data-theme="default"]');
    expect(content).toContain('[data-appearance="light"]');
  });

  test('Android colors.xml has valid resource structure', () => {
    if (!existsSync('dist/android/values/colors.xml')) return;
    const content = readFileSync('dist/android/values/colors.xml', 'utf-8');
    expect(content).toContain('<?xml version="1.0"');
    expect(content).toContain('<resources>');
    expect(content).toContain('<color name=');
    expect(content).toContain('</resources>');
  });

  test('JS tokens file exports a tokens object', () => {
    if (!existsSync('dist/js/tokens.ts')) return;
    const content = readFileSync('dist/js/tokens.ts', 'utf-8');
    expect(content).toContain('export const tokens');
    expect(content).toContain('as const');
  });
});

/* =========================================
   Helpers
   ========================================= */

/** Recursively gets all files in a directory */
function getAllFiles(dir: string): string[] {
  const files: string[] = [];
  if (!existsSync(dir)) return files;

  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const fullPath = `${dir}/${entry.name}`;
    if (entry.isDirectory()) {
      files.push(...getAllFiles(fullPath));
    } else {
      files.push(fullPath);
    }
  }
  return files;
}
