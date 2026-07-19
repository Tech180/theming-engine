import { build } from './index';
import { validateAllTokens, TokenValidationError } from './validate';
import { join } from 'path';

const PORT = process.env.NODE_ENV === 'test' ? 0 : 3002;

/**
 * Helper to write JSON responses consistently matching the Giftistry style.
 */
function jsonResponse(status: 'Success' | 'Error', code: number, result: any, correlationId: string) {
  return new Response(JSON.stringify({
    Meta: {
      Status: status,
      Code: code,
      CorrelationId: correlationId
    },
    Result: result
  }), {
    status: code,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type'
    }
  });
}

function corsHeaders() {
  return {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type'
  };
}

export const server = Bun.serve({
  port: PORT,
  async fetch(req) {
    const correlationId = crypto.randomUUID();
    const url = new URL(req.url);
    const path = url.pathname;

    // Handle OPTIONS request for CORS
    if (req.method === 'OPTIONS') {
      return new Response(null, {
        status: 204,
        headers: corsHeaders()
      });
    }

    console.log(`[INFO] [CorrelationId: ${correlationId}] ${req.method} ${path}`);

    // GET /health
    if (req.method === 'GET' && path === '/health') {
      return jsonResponse('Success', 200, {
        Status: 'ok',
        Database: 'none',
        Version: '0.0.1'
      }, correlationId);
    }

    // POST /api/validate
    if (req.method === 'POST' && path === '/api/validate') {
      try {
        await validateAllTokens();
        return jsonResponse('Success', 200, {
          Message: 'All tokens valid!',
          Validated: true
        }, correlationId);
      } catch (err: any) {
        if (err instanceof TokenValidationError) {
          return jsonResponse('Error', 400, {
            Message: 'Token validation failed',
            Errors: err.errors
          }, correlationId);
        }
        return jsonResponse('Error', 500, {
          Message: err.message || 'Internal server error during validation'
        }, correlationId);
      }
    }

    // POST /api/build
    if (req.method === 'POST' && path === '/api/build') {
      try {
        const start = performance.now();
        await build();
        const elapsed = Math.round(performance.now() - start);
        return jsonResponse('Success', 200, {
          Message: 'Build successful!',
          ElapsedMs: elapsed
        }, correlationId);
      } catch (err: any) {
        return jsonResponse('Error', 500, {
          Message: err.message || 'Build failed'
        }, correlationId);
      }
    }

    // GET /api/tokens
    if (req.method === 'GET' && path === '/api/tokens') {
      try {
        const tokensModulePath = join(import.meta.dir, '../dist/js/tokens.ts');
        const tokensModule = await import(tokensModulePath);
        return jsonResponse('Success', 200, {
          tokens: tokensModule.tokens,
          tokenTree: tokensModule.tokenTree
        }, correlationId);
      } catch (err: any) {
        return jsonResponse('Error', 404, {
          Message: 'Tokens not found. Please run build first.',
          Error: err.message
        }, correlationId);
      }
    }

    // GET /api/themes
    if (req.method === 'GET' && path === '/api/themes') {
      const themes = [
        { theme: 'default', appearances: ['light', 'dark'] },
        { theme: 'cyberpunk', appearances: ['light', 'dark'] },
        { theme: 'neon', appearances: ['light', 'dark'] },
        { theme: 'mystic', appearances: ['light', 'dark'] },
        { theme: 'burnt-forest', appearances: ['light', 'dark'] },
        { theme: 'halloween', appearances: ['light', 'dark'] },
        { theme: 'christmas', appearances: ['light', 'dark'] },
        { theme: 'valentines', appearances: ['light', 'dark'] },
        { theme: 'st-patricks', appearances: ['light', 'dark'] },
        { theme: 'earth-day', appearances: ['light', 'dark'] },
        { theme: 'independence', appearances: ['light', 'dark'] },
        { theme: 'thanksgiving', appearances: ['light', 'dark'] },
        { theme: 'paper', appearances: ['light', 'dark'] },
        { theme: 'paper-mario', appearances: ['light', 'dark'] },
        { theme: 'retro-80s', appearances: ['light', 'dark'] },
        { theme: 'pixel', appearances: ['light', 'dark'] },
        { theme: 'matrix', appearances: ['light', 'dark'] },
        { theme: 'terminal', appearances: ['light', 'dark'] },
        { theme: 'vaporwave', appearances: ['light', 'dark'] },
        { theme: 'arcade', appearances: ['light', 'dark'] },
      ];
      return jsonResponse('Success', 200, themes, correlationId);
    }

    // Regex match routes like /api/themes/:theme/:appearance
    // or /api/themes/:theme/:appearance/css
    // or /api/themes/:theme/:appearance/scss
    const themeMatch = path.match(/^\/api\/themes\/([a-zA-Z0-9-]+)\/([a-zA-Z0-9-]+)(?:\/(css|scss))?$/);
    if (req.method === 'GET' && themeMatch) {
      const [_, theme, appearance, formatType] = themeMatch;
      const validThemes = ['default', 'cyberpunk', 'neon', 'mystic', 'burnt-forest', 'halloween', 'christmas', 'valentines', 'st-patricks', 'earth-day', 'independence', 'thanksgiving', 'paper', 'paper-mario', 'retro-80s', 'pixel', 'matrix', 'terminal', 'vaporwave', 'arcade'];
      const validAppearances = ['light', 'dark'];

      if (!validThemes.includes(theme) || !validAppearances.includes(appearance)) {
        return jsonResponse('Error', 400, {
          Message: `Invalid theme or appearance. Theme must be one of: ${validThemes.join(', ')}. Appearance must be one of: ${validAppearances.join(', ')}.`
        }, correlationId);
      }

      // If format type specified (css/scss), return the raw files
      if (formatType === 'css') {
        const cssPath = join(import.meta.dir, `../dist/css/themes/${theme}-${appearance}.css`);
        try {
          const file = Bun.file(cssPath);
          const content = await file.text();
          return new Response(content, {
            status: 200,
            headers: {
              'Content-Type': 'text/css',
              ...corsHeaders()
            }
          });
        } catch {
          return jsonResponse('Error', 404, { Message: 'Compiled CSS not found. Please run build.' }, correlationId);
        }
      }

      if (formatType === 'scss') {
        const scssPath = join(import.meta.dir, `../dist/scss/themes/_${theme}-${appearance}.scss`);
        try {
          const file = Bun.file(scssPath);
          const content = await file.text();
          return new Response(content, {
            status: 200,
            headers: {
              'Content-Type': 'text/x-scss',
              ...corsHeaders()
            }
          });
        } catch {
          return jsonResponse('Error', 404, { Message: 'Compiled SCSS not found. Please run build.' }, correlationId);
        }
      }

      // If format is not specified, return the source theme definition as JSON
      try {
        const sourcePath = `./domains/brands/${theme}/${appearance}`;
        const mod = await import(sourcePath);
        const tokens = mod.default ?? mod;
        return jsonResponse('Success', 200, tokens, correlationId);
      } catch (err: any) {
        return jsonResponse('Error', 500, { Message: 'Failed to read source theme tokens', Error: err.message }, correlationId);
      }
    }

    // Default 404
    return jsonResponse('Error', 404, { Message: 'Route not found' }, correlationId);
  }
});

if (process.env.NODE_ENV !== 'test') {
  console.log(`🚀 Theming Engine Dev Server running at http://localhost:${server.port}`);
}
