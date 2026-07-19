export const PRIMARY_RGB: Record<string, string> = {
  default: '94, 106, 210',
  neon: '255, 0, 127',
  cyberpunk: '252, 238, 10',
  mystic: '45, 122, 77',
  'burnt-forest': '255, 85, 0',
  valentines: '255, 77, 109',
  'st-patricks': '0, 168, 107',
  'earth-day': '217, 116, 67',
  independence: '214, 40, 40',
  halloween: '254, 80, 0',
  thanksgiving: '230, 81, 0',
  christmas: '176, 27, 46',
  paper: '74, 85, 104',
  'paper-mario': '227, 0, 27',
  'retro-80s': '255, 110, 199',
  pixel: '229, 37, 33',
  matrix: '0, 255, 65',
  terminal: '255, 176, 0',
  vaporwave: '255, 113, 206',
  arcade: '255, 0, 64',
};

export function getPrimaryRgb(themeName: string): string {
  return PRIMARY_RGB[themeName] ?? PRIMARY_RGB.default;
}
