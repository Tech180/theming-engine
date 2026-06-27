/**
 * Style Dictionary platform build configuration.
 */
export interface PlatformConfig {
  /** The transform group to apply (e.g., 'css', 'scss', 'android') */
  transformGroup: string;

  /** Additional individual transforms beyond the group */
  transforms?: string[];

  /** Output directory path (must end with '/') */
  buildPath: string;

  /** File output definitions */
  files: PlatformFile[];
}

/**
 * Individual file output within a platform configuration.
 */
export interface PlatformFile {
  /** Output filename relative to buildPath */
  destination: string;

  /** Style Dictionary format to use for output */
  format: string;

  /** Optional token filter function */
  filter?: (token: Record<string, unknown>) => boolean;

  /** Additional format options (e.g., selector, outputReferences) */
  options?: Record<string, unknown>;
}
