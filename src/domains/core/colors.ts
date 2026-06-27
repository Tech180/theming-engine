import type { TokenGroup } from '@/types/token-group.interface';

/* =========================================
   Core Color Palette
   Unified from react-website Pantone tokens
   and giftistry-react design system colors.
   ========================================= */

export default {
  color: {
    /* --- Pure Base --- */
    white: {
      pure:    { $value: '#ffffff', $type: 'color', $description: 'Pure white' },
    },
    black: {
      pure:    { $value: '#000000', $type: 'color', $description: 'Pure black' },
    },

    /* --- Neutrals (Pantone) --- */
    obsidian:           { $value: '#111111', $type: 'color' },
    brightWhite:        { $value: '#f4f4f4', $type: 'color' },
    brightWhitePetal:   { $value: '#fdf4ff', $type: 'color' },
    brightWhiteSurface: { $value: '#fcfdfa', $type: 'color' },
    brightWhiteBg:      { $value: '#f5f7f2', $type: 'color' },
    cloudDancer:        { $value: '#ededed', $type: 'color' },
    starWhite:          { $value: '#dadce0', $type: 'color' },
    egret:              { $value: '#e2e8e4', $type: 'color' },
    sandDollar:         { $value: '#e5d6c6', $type: 'color' },
    frostedAlmond:      { $value: '#d1bfae', $type: 'color' },
    silver:             { $value: '#a0a0a0', $type: 'color' },
    harborMist:         { $value: '#b3b3b3', $type: 'color' },
    aleutian:           { $value: '#9ca3af', $type: 'color' },
    smokedPearl:        { $value: '#666666', $type: 'color' },
    flintStone:         { $value: '#6b7280', $type: 'color' },
    periscope:          { $value: '#4b5563', $type: 'color' },
    ebony:              { $value: '#374151', $type: 'color' },
    anthracite:         { $value: '#1f2937', $type: 'color' },
    caviar:             { $value: '#333333', $type: 'color' },
    caviarMatte:        { $value: '#2a2a2a', $type: 'color' },
    jetBlack:           { $value: '#0a0a0a', $type: 'color' },
    jetBlackMatte:      { $value: '#1a1a1a', $type: 'color' },
    jetBlackSurface:    { $value: '#0f1914', $type: 'color' },
    jetBlackHover:      { $value: '#142319', $type: 'color' },
    jetBlackFg:         { $value: '#1a231e', $type: 'color' },

    /* --- Black Beauty Series --- */
    blackBeautyBg:      { $value: '#121212', $type: 'color' },
    blackBeautyDeepBg:  { $value: '#2d0a0a', $type: 'color' },
    blackBeautySurface: { $value: '#222222', $type: 'color' },
    blackBeautyMuted:   { $value: '#242424', $type: 'color' },
    blackBeautyFg:      { $value: '#1f140e', $type: 'color' },

    /* --- Warm Browns --- */
    licorice:           { $value: '#2c1e16', $type: 'color' },
    blackCoffee:        { $value: '#4a3326', $type: 'color' },
    blackIris:          { $value: '#0d0221', $type: 'color' },
    ganache:            { $value: '#3b1e0c', $type: 'color' },
    demitasse:          { $value: '#4a332a', $type: 'color' },
    chocolateSlab:      { $value: '#6d4c41', $type: 'color' },

    /* --- Soft Warm Tones --- */
    softAmber:          { $value: '#ffedd5', $type: 'color' },
    lemonChiffon:       { $value: '#fef08a', $type: 'color' },

    /* --- Vibrant & Primary --- */
    canalBlue:          { $value: '#9AC2E6', $type: 'color' },
    airForceBlue:       { $value: '#7AB2E1', $type: 'color' },
    lavendula:          { $value: '#B39DDB', $type: 'color' },
    purpleHeather:      { $value: '#9575CD', $type: 'color' },
    blazingYellow:      { $value: '#fcee0a', $type: 'color' },
    blazingYellowLight: { $value: '#fff31a', $type: 'color' },
    mustardGoldCenter:  { $value: '#fde047', $type: 'color' },
    oliveGold:          { $value: '#a8a02a', $type: 'color' },
    highRiskRedAccent:  { $value: '#ff003c', $type: 'color' },
    cyanBlueAccent:     { $value: '#00f3ff', $type: 'color' },
    cyanBlueLight:      { $value: '#33f5ff', $type: 'color' },
    fuchsiaPinkAccent:  { $value: '#ff00ff', $type: 'color' },
    fuchsiaPinkLight:   { $value: '#ff33ff', $type: 'color' },
    dandelion:          { $value: '#ffd700', $type: 'color' },
    vibrantOrange:      { $value: '#ff9800', $type: 'color' },
    orangePeel:         { $value: '#f97316', $type: 'color' },
    icelandPoppy:       { $value: '#fb923c', $type: 'color' },
    exuberance:         { $value: '#ea580c', $type: 'color' },
    mandarinRed:        { $value: '#ef4444', $type: 'color' },
    orangeComAccent:    { $value: '#dc2626', $type: 'color' },
    scarletIbisAccent:  { $value: '#ff4500', $type: 'color' },
    valiantPoppy:       { $value: '#c03028', $type: 'color' },
    hotCoral:           { $value: '#ff4b4b', $type: 'color' },
    poisonGreen:        { $value: '#4caf50', $type: 'color' },
    blueAtoll:          { $value: '#00bcd4', $type: 'color' },

    /* --- Nature & Specialty --- */
    greenFlash:              { $value: '#4ade80', $type: 'color' },
    greenFlashDeep:          { $value: '#22c55e', $type: 'color' },
    botanicalGarden:         { $value: '#064e3b', $type: 'color' },
    botanicalGardenVein:     { $value: '#14532d', $type: 'color' },
    jungleGreen:             { $value: '#166534', $type: 'color' },
    laurelWreath:            { $value: '#8b9d90', $type: 'color' },
    limelight:               { $value: '#bef264', $type: 'color' },
    limePunch:               { $value: '#a3e635', $type: 'color' },
    gardenTopiary:           { $value: '#2b5936', $type: 'color' },
    climbingIvy:             { $value: '#576b5d', $type: 'color' },
    amazon:                  { $value: '#16a34a', $type: 'color' },
    amazonBase:              { $value: '#15803d', $type: 'color' },
    pastelPink:              { $value: '#fce7f3', $type: 'color' },
    mustardGold:             { $value: '#fbbf24', $type: 'color' },
    redDahlia:               { $value: '#7f1d1d', $type: 'color' },
    hauteRed:                { $value: '#991b1b', $type: 'color' },

    /* --- Giftistry Design System Colors --- */
    linear: {
      primary:              { $value: '#5e6ad2', $type: 'color', $description: 'Linear.app inspired primary' },
      primaryHover:         { $value: '#4d59c2', $type: 'color' },
      bgLight:              { $value: '#fafafa', $type: 'color' },
      surfaceHoverLight:    { $value: '#f3f3f4', $type: 'color' },
      textLight:            { $value: '#111111', $type: 'color' },
      textMutedLight:       { $value: '#6b6b7b', $type: 'color' },
      bgDark:               { $value: '#0f0f10', $type: 'color' },
      surfaceDark:          { $value: '#151516', $type: 'color' },
      surfaceHoverDark:     { $value: '#1e1e20', $type: 'color' },
      textDark:             { $value: '#f7f8f8', $type: 'color' },
      textMutedDark:        { $value: '#8a8f98', $type: 'color' },
    },

    neon: {
      primary:              { $value: '#ff007f', $type: 'color', $description: 'Neon hot pink primary' },
      primaryHover:         { $value: '#e0006c', $type: 'color' },
      bgLight:              { $value: '#f8f5fc', $type: 'color' },
      surfaceHoverLight:    { $value: '#f1e9fc', $type: 'color' },
      borderLight:          { $value: '#bf55ec', $type: 'color' },
      textLight:            { $value: '#2c0054', $type: 'color' },
      textMutedLight:       { $value: '#7b688c', $type: 'color' },
      cyan:                 { $value: '#00ffff', $type: 'color' },
      bgDark:               { $value: '#0d021a', $type: 'color' },
      surfaceDark:          { $value: '#17072e', $type: 'color' },
      surfaceHoverDark:     { $value: '#260e47', $type: 'color' },
      textMutedDark:        { $value: '#a372eb', $type: 'color' },
    },

    cyber: {
      primary:              { $value: '#fcee0a', $type: 'color', $description: 'Cyberpunk yellow primary' },
      primaryHover:         { $value: '#d2c700', $type: 'color' },
      bgLight:              { $value: '#e2e2e4', $type: 'color' },
      surfaceLight:         { $value: '#f3f3f5', $type: 'color' },
      cyan:                 { $value: '#00f0ff', $type: 'color' },
      textMutedLight:       { $value: '#4e4e54', $type: 'color' },
      pink:                 { $value: '#ff0055', $type: 'color' },
      bgDark:               { $value: '#000411', $type: 'color' },
      surfaceDark:          { $value: '#080f26', $type: 'color' },
      surfaceHoverDark:     { $value: '#0d1b40', $type: 'color' },
      textMutedDark:        { $value: '#5e83a6', $type: 'color' },
    },

    mystic: {
      primary:              { $value: '#2d7a4d', $type: 'color', $description: 'Mystic forest green primary' },
      primaryHover:         { $value: '#1e5c36', $type: 'color' },
      bgLight:              { $value: '#f2f7f4', $type: 'color' },
      surfaceHoverLight:    { $value: '#eaf1ed', $type: 'color' },
      borderLight:          { $value: '#bce3c5', $type: 'color' },
      textLight:            { $value: '#1d3322', $type: 'color' },
      textMutedLight:       { $value: '#607c65', $type: 'color' },
      gold:                 { $value: '#d4af37', $type: 'color' },
      bgDark:               { $value: '#0f1c13', $type: 'color' },
      surfaceDark:          { $value: '#162a1d', $type: 'color' },
      surfaceHoverDark:     { $value: '#223f2c', $type: 'color' },
      borderDark:           { $value: '#2e543b', $type: 'color' },
      textDark:             { $value: '#e1efe6', $type: 'color' },
      textMutedDark:        { $value: '#7a9c84', $type: 'color' },
    },

    burnt: {
      primary:              { $value: '#ff5500', $type: 'color', $description: 'Burnt forest orange primary' },
      primaryHover:         { $value: '#cc4400', $type: 'color' },
      bgLight:              { $value: '#f4efeb', $type: 'color' },
      surfaceHoverLight:    { $value: '#ebdcd3', $type: 'color' },
      borderLight:          { $value: '#cc7a52', $type: 'color' },
      textLight:            { $value: '#331f14', $type: 'color' },
      textMutedLight:       { $value: '#8c7365', $type: 'color' },
      bgDark:               { $value: '#0a0705', $type: 'color' },
      surfaceDark:          { $value: '#140e0a', $type: 'color' },
      surfaceHoverDark:     { $value: '#1e150f', $type: 'color' },
      borderDark:           { $value: '#4d2600', $type: 'color' },
      textDark:             { $value: '#f0e6df', $type: 'color' },
      textMutedDark:        { $value: '#a68c7c', $type: 'color' },
    },

    /* --- Semantic Status --- */
    error:   { $value: '#ef4444', $type: 'color', $description: 'Error/danger state' },
    success: { $value: '#10b981', $type: 'color', $description: 'Success/positive state' },
    warning: { $value: '#f59e0b', $type: 'color', $description: 'Warning/caution state' },

    /* --- Stat Colors (from react-website pokemon feature) --- */
    statRed:    { $value: '#ff4b4b', $type: 'color' },
    statOrange: { $value: '#ff9800', $type: 'color' },
    statGreen:  { $value: '#4caf50', $type: 'color' },
    statCyan:   { $value: '#00bcd4', $type: 'color' },
  },
} satisfies TokenGroup;
