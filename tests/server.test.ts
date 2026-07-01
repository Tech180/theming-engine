import { describe, test, expect, afterAll } from 'bun:test';
import { server } from '../src/server';

describe('Theming Engine API Server', () => {
  afterAll(() => {
    server.stop();
  });

  test('GET /health', async () => {
    const res = await server.fetch(new Request('http://localhost/health'));
    expect(res.status).toBe(200);
    const data = await res.json();
    expect(data.Meta.Status).toBe('Success');
    expect(data.Result.Status).toBe('ok');
    expect(data.Result.Version).toBe('0.0.1');
  });

  test('POST /api/validate', async () => {
    const res = await server.fetch(new Request('http://localhost/api/validate', { method: 'POST' }));
    expect(res.status).toBe(200);
    const data = await res.json();
    expect(data.Meta.Status).toBe('Success');
    expect(data.Result.Validated).toBe(true);
  });

  test('POST /api/build', async () => {
    const res = await server.fetch(new Request('http://localhost/api/build', { method: 'POST' }));
    expect(res.status).toBe(200);
    const data = await res.json();
    expect(data.Meta.Status).toBe('Success');
    expect(data.Result.Message).toContain('successful');
  });

  test('GET /api/tokens', async () => {
    const res = await server.fetch(new Request('http://localhost/api/tokens'));
    expect(res.status).toBe(200);
    const data = await res.json();
    expect(data.Meta.Status).toBe('Success');
    expect(data.Result.tokens).toBeDefined();
    expect(data.Result.tokenTree).toBeDefined();
    expect(data.Result.tokens.ColorWhitePure).toBe('#ffffff');
  });

  test('GET /api/themes', async () => {
    const res = await server.fetch(new Request('http://localhost/api/themes'));
    expect(res.status).toBe(200);
    const data = await res.json();
    expect(data.Meta.Status).toBe('Success');
    expect(Array.isArray(data.Result)).toBe(true);
    expect(data.Result.some((t: any) => t.theme === 'cyberpunk')).toBe(true);
  });

  test('GET /api/themes/cyberpunk/dark (JSON Source)', async () => {
    const res = await server.fetch(new Request('http://localhost/api/themes/cyberpunk/dark'));
    expect(res.status).toBe(200);
    const data = await res.json();
    expect(data.Meta.Status).toBe('Success');
    expect(data.Result.theme.bg.$value).toBe('{color.cyber.bgDark}');
  });

  test('GET /api/themes/cyberpunk/dark/css', async () => {
    const res = await server.fetch(new Request('http://localhost/api/themes/cyberpunk/dark/css'));
    expect(res.status).toBe(200);
    expect(res.headers.get('Content-Type')).toBe('text/css');
    const content = await res.text();
    expect(content).toContain('[data-theme="cyberpunk"][data-appearance="dark"]');
    expect(content).toContain('--theme-bg');
  });

  test('GET /api/themes/cyberpunk/dark/scss', async () => {
    const res = await server.fetch(new Request('http://localhost/api/themes/cyberpunk/dark/scss'));
    expect(res.status).toBe(200);
    expect(res.headers.get('Content-Type')).toBe('text/x-scss');
    const content = await res.text();
    expect(content).toContain('@mixin theme-cyberpunk-dark');
    expect(content).toContain('$theme-bg');
  });

  test('GET /api/themes/invalid/invalid (400 Bad Request)', async () => {
    const res = await server.fetch(new Request('http://localhost/api/themes/invalid/invalid'));
    expect(res.status).toBe(400);
    const data = await res.json();
    expect(data.Meta.Status).toBe('Error');
    expect(data.Result.Message).toContain('Invalid theme or appearance');
  });

  test('GET /invalid-route (404 Not Found)', async () => {
    const res = await server.fetch(new Request('http://localhost/invalid-route'));
    expect(res.status).toBe(404);
    const data = await res.json();
    expect(data.Meta.Status).toBe('Error');
    expect(data.Result.Message).toBe('Route not found');
  });
});
