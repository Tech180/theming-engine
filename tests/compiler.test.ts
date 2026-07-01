import { describe, test, expect } from 'bun:test';
import { compileDynamicThemeCss } from '../src/dynamic-compiler';

describe('Dynamic Theme Compiler', () => {
  test('compiles custom user theme tokens in-memory correctly', async () => {
    const rawTokens = {
      primary: '#ff00ff',
      primaryHover: '#cc00cc',
      accent: '#00ffff',
      bg: '#121212',
      surface: '#1e1e1e',
      surfaceHover: '#2d2d2d',
      surfaceGlass: 'rgba(30, 30, 30, 0.5)',
      border: '#333333',
      text: '#ffffff',
      textMuted: '#aaaaaa',
      radius: '12px',
      shadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      bgGradient: 'linear-gradient(135deg, #121212 0%, #1e1e1e 100%)',
    };

    const css = await compileDynamicThemeCss('custom-user-theme', 'dark', rawTokens);

    expect(css).toBeDefined();
    expect(css).toContain('[data-theme="custom-user-theme"][data-appearance="dark"]');
    expect(css).toContain('--theme-primary: #ff00ff;');
    expect(css).toContain('--theme-primary-hover: #cc00cc;');
    expect(css).toContain('--theme-bg: #121212;');
    expect(css).toContain('--theme-radius: 0.75rem;'); // Verify pxToRem works (12px -> 0.75rem)
    expect(css).toContain('--theme-bg-gradient: linear-gradient(135deg, #121212 0%, #1e1e1e 100%);');
  });
});
