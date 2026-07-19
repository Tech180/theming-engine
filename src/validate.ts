import { ThemeContractSchema, validateTokenGroup } from './schemas/token.schema';
import type { ValidationError } from './schemas/token.schema';

export class TokenValidationError extends Error {
  constructor(public errors: { file: string; errors: ValidationError[] }[]) {
    super(`Token validation failed with ${errors.reduce((sum, e) => sum + e.errors.length, 0)} error(s).`);
    this.name = 'TokenValidationError';
  }
}

/* =========================================
   Token Validation Runner
   ========================================= */

/** Theme file manifest — maps display name to module path */
const THEME_FILES = [
  { name: 'default/light', path: './domains/brands/default/light' },
  { name: 'default/dark', path: './domains/brands/default/dark' },
  { name: 'cyberpunk/light', path: './domains/brands/cyberpunk/light' },
  { name: 'cyberpunk/dark', path: './domains/brands/cyberpunk/dark' },
  { name: 'neon/light', path: './domains/brands/neon/light' },
  { name: 'neon/dark', path: './domains/brands/neon/dark' },
  { name: 'mystic/light', path: './domains/brands/mystic/light' },
  { name: 'mystic/dark', path: './domains/brands/mystic/dark' },
  { name: 'burnt-forest/light', path: './domains/brands/burnt-forest/light' },
  { name: 'burnt-forest/dark', path: './domains/brands/burnt-forest/dark' },
  { name: 'halloween/light', path: './domains/brands/halloween/light' },
  { name: 'halloween/dark', path: './domains/brands/halloween/dark' },
  { name: 'christmas/light', path: './domains/brands/christmas/light' },
  { name: 'christmas/dark', path: './domains/brands/christmas/dark' },
  { name: 'valentines/light', path: './domains/brands/valentines/light' },
  { name: 'valentines/dark', path: './domains/brands/valentines/dark' },
  { name: 'st-patricks/light', path: './domains/brands/st-patricks/light' },
  { name: 'st-patricks/dark', path: './domains/brands/st-patricks/dark' },
  { name: 'earth-day/light', path: './domains/brands/earth-day/light' },
  { name: 'earth-day/dark', path: './domains/brands/earth-day/dark' },
  { name: 'independence/light', path: './domains/brands/independence/light' },
  { name: 'independence/dark', path: './domains/brands/independence/dark' },
  { name: 'thanksgiving/light', path: './domains/brands/thanksgiving/light' },
  { name: 'thanksgiving/dark', path: './domains/brands/thanksgiving/dark' },
  { name: 'paper/light', path: './domains/brands/paper/light' },
  { name: 'paper/dark', path: './domains/brands/paper/dark' },
  { name: 'paper-mario/light', path: './domains/brands/paper-mario/light' },
  { name: 'paper-mario/dark', path: './domains/brands/paper-mario/dark' },
  { name: 'retro-80s/light', path: './domains/brands/retro-80s/light' },
  { name: 'retro-80s/dark', path: './domains/brands/retro-80s/dark' },
  { name: 'pixel/light', path: './domains/brands/pixel/light' },
  { name: 'pixel/dark', path: './domains/brands/pixel/dark' },
  { name: 'matrix/light', path: './domains/brands/matrix/light' },
  { name: 'matrix/dark', path: './domains/brands/matrix/dark' },
  { name: 'terminal/light', path: './domains/brands/terminal/light' },
  { name: 'terminal/dark', path: './domains/brands/terminal/dark' },
  { name: 'vaporwave/light', path: './domains/brands/vaporwave/light' },
  { name: 'vaporwave/dark', path: './domains/brands/vaporwave/dark' },
  { name: 'arcade/light', path: './domains/brands/arcade/light' },
  { name: 'arcade/dark', path: './domains/brands/arcade/dark' },
  { name: '_shared/presentation-light', path: './domains/brands/_shared/presentation-light' },
  { name: '_shared/presentation-dark', path: './domains/brands/_shared/presentation-dark' },
] as const;

/** Core domain file manifest */
const CORE_FILES = [
  { name: 'core/colors', path: './domains/core/colors' },
  { name: 'core/typography', path: './domains/core/typography' },
  { name: 'core/spacing', path: './domains/core/spacing' },
  { name: 'core/effects', path: './domains/core/effects' },
] as const;

/**
 * Validates all token files in the project.
 * - Core tokens: checked for valid token structure (recursive)
 * - Theme tokens: checked against the ThemeContract schema
 *
 * Throws on validation failure with a detailed error report.
 */
export async function validateAllTokens(): Promise<void> {
  const allErrors: { file: string; errors: ValidationError[] }[] = [];
  let totalTokens = 0;

  console.log('🔍 Validating tokens...\n');

  // 1. Validate core domain tokens (structure only)
  for (const { name, path } of CORE_FILES) {
    try {
      const mod = await import(path);
      const tokens = mod.default ?? mod;
      const errors = validateTokenGroup(tokens);
      const tokenCount = countTokens(tokens);
      totalTokens += tokenCount;

      if (errors.length > 0) {
        allErrors.push({ file: name, errors });
        console.log(`  ❌ ${name} (${errors.length} error${errors.length > 1 ? 's' : ''})`);
      } else {
        console.log(`  ✅ ${name} (${tokenCount} tokens)`);
      }
    } catch (err) {
      allErrors.push({
        file: name,
        errors: [{ path: '<import>', message: `Failed to import: ${err}` }],
      });
      console.log(`  ❌ ${name} (import failed)`);
    }
  }

  // 2. Validate theme tokens (contract compliance)
  for (const { name, path } of THEME_FILES) {
    try {
      const mod = await import(path);
      const tokens = mod.default ?? mod;
      const isPresentationOnly = name.startsWith('_shared/presentation');

      if (!isPresentationOnly) {
        // Check semantic contract compliance
        const contractResult = ThemeContractSchema.safeParse(tokens);
        if (!contractResult.success) {
          const errors: ValidationError[] = contractResult.error.issues.map((issue) => ({
            path: issue.path.join('.'),
            message: issue.message,
          }));
          allErrors.push({ file: name, errors });
          console.log(`  ❌ ${name} (contract violation: ${errors.length} error${errors.length > 1 ? 's' : ''})`);
          continue;
        }
      }

      const tokenErrors = validateTokenGroup(tokens);
      const tokenCount = countTokens(tokens);
      totalTokens += tokenCount;

      if (tokenErrors.length > 0) {
        allErrors.push({ file: name, errors: tokenErrors });
        console.log(`  ❌ ${name} (${tokenErrors.length} token error${tokenErrors.length > 1 ? 's' : ''})`);
      } else {
        console.log(`  ✅ ${name} (${tokenCount} tokens)`);
      }
    } catch (err) {
      allErrors.push({
        file: name,
        errors: [{ path: '<import>', message: `Failed to import: ${err}` }],
      });
      console.log(`  ❌ ${name} (import failed)`);
    }
  }

  console.log('');

  // 3. Report results
  if (allErrors.length > 0) {
    console.error('❌ Validation failed!\n');
    for (const { file, errors } of allErrors) {
      console.error(`  📄 ${file}:`);
      for (const error of errors) {
        console.error(`     → ${error.path}: ${error.message}`);
      }
    }
    console.error('');
    throw new TokenValidationError(allErrors);
  }

  console.log(`✅ All tokens valid! (${totalTokens} tokens across ${CORE_FILES.length + THEME_FILES.length} files)\n`);
}

/** Counts leaf tokens in a token group recursively */
function countTokens(group: Record<string, unknown>): number {
  let count = 0;
  for (const value of Object.values(group)) {
    if (
      value !== null &&
      typeof value === 'object' &&
      '$value' in (value as Record<string, unknown>) &&
      '$type' in (value as Record<string, unknown>)
    ) {
      count++;
    } else if (value !== null && typeof value === 'object') {
      count += countTokens(value as Record<string, unknown>);
    }
  }
  return count;
}

/* =========================================
   Standalone execution
   ========================================= */

// When run directly via `bun run src/validate.ts`
if (import.meta.main) {
  try {
    await validateAllTokens();
  } catch {
    process.exit(1);
  }
}
