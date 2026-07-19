import type { TokenGroup } from '@/types/token-group.interface';

/* =========================================
   Core Effect Tokens
   Shadows, glows, and glass effects
   extracted from both projects.
   ========================================= */

export default {
  shadow: {
    sm: {
      $value: '0 1px 2px rgba(0, 0, 0, 0.05)',
      $type: 'shadow',
      $description: 'Subtle shadow (from giftistry-react --shadow-sm)',
    },
    md: {
      $value: '0 4px 6px -1px rgba(0, 0, 0, 0.08), 0 2px 4px -1px rgba(0, 0, 0, 0.04)',
      $type: 'shadow',
      $description: 'Medium shadow (from giftistry-react --shadow-md)',
    },
    lg: {
      $value: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      $type: 'shadow',
      $description: 'Large shadow (from giftistry-react --shadow-lg)',
    },
    hover: {
      $value: '0 8px 30px rgba(0, 0, 0, 0.12)',
      $type: 'shadow',
      $description: 'Hover elevation (from giftistry-react --shadow-hover)',
    },
  },

  shadow_dark: {
    sm: {
      $value: '0 1px 2px rgba(0, 0, 0, 0.3)',
      $type: 'shadow',
    },
    md: {
      $value: '0 4px 6px -1px rgba(0, 0, 0, 0.4), 0 2px 4px -1px rgba(0, 0, 0, 0.24)',
      $type: 'shadow',
    },
    lg: {
      $value: '0 10px 15px -3px rgba(0, 0, 0, 0.5), 0 4px 6px -2px rgba(0, 0, 0, 0.3)',
      $type: 'shadow',
    },
    hover: {
      $value: '0 8px 30px rgba(0, 0, 0, 0.5)',
      $type: 'shadow',
    },
  },

  glow: {
    sun: {
      $value: '0 0 20px rgba(255, 215, 0, 0.6)',
      $type: 'shadow',
      $description: 'Sun/gold glow effect',
    },
    neonCyan: {
      $value: '0 0 15px rgba(0, 243, 255, 0.15)',
      $type: 'shadow',
    },
    neonMagenta: {
      $value: '0 0 15px rgba(255, 0, 255, 0.15)',
      $type: 'shadow',
    },
    cyberRed: {
      $value: '0 0 15px rgba(255, 0, 60, 0.1)',
      $type: 'shadow',
    },
  },

  blur: {
    glass: {
      $value: '12px',
      $type: 'dimension',
      $description: 'Glassmorphism backdrop blur (from giftistry-react)',
    },
    surface: {
      $value: '10px',
      $type: 'dimension',
      $description: 'Surface blur (from react-website glass mixin)',
    },
  },

  zindex: {
    hide:     { $value: -1,   $type: 'zIndex', $description: 'Below content layer' },
    base:     { $value: 1,    $type: 'zIndex', $description: 'Default relative content layer' },
    dropdown: { $value: 100,  $type: 'zIndex', $description: 'Dropdowns, navigation menus' },
    sticky:   { $value: 200,  $type: 'zIndex', $description: 'Sticky navigation bars, headers' },
    overlay:  { $value: 1000, $type: 'zIndex', $description: 'Full-screen overlay/backdrops' },
    modal:    { $value: 1100, $type: 'zIndex', $description: 'Modal dialogues' },
    toast:    { $value: 9999, $type: 'zIndex', $description: 'Global notification alerts' },
  },

  overlay: {
    backdrop:     { $value: 'rgba(0, 0, 0, 0.4)',   $type: 'color', $description: 'Standard modal backdrop overlay (light mode)' },
    backdropDark: { $value: 'rgba(0, 0, 0, 0.6)',   $type: 'color', $description: 'Dark-mode modal backdrop overlay' },
    glass:        { $value: 'rgba(255, 255, 255, 0.05)', $type: 'color', $description: 'Standard glass panel tint' },
    glassDark:    { $value: 'rgba(0, 0, 0, 0.2)',   $type: 'color', $description: 'Dark-mode glass panel tint' },
  },

  animation: {
    'fade-in': {
      $value: 'fade-in var(--duration-slow) ease forwards',
      $type: 'animation',
      $description: 'Fade in animation shorthand'
    },
    'slide-up': {
      $value: 'slide-up var(--duration-slow) cubic-bezier(0.16, 1, 0.3, 1) forwards',
      $type: 'animation',
      $description: 'Slide up animation shorthand'
    },
    'scale-in': {
      $value: 'scale-in var(--duration-normal) cubic-bezier(0.34, 1.56, 0.64, 1) forwards',
      $type: 'animation',
      $description: 'Scale in animation shorthand'
    },
    shimmer: {
      $value: 'shimmer 1.5s infinite linear',
      $type: 'animation',
      $description: 'Shimmer skeleton loader animation shorthand'
    },
    'slide-down': {
      $value: 'slide-down var(--duration-normal) ease forwards',
      $type: 'animation',
      $description: 'Slide down animation shorthand'
    },
    rotation: {
      $value: 'rotation var(--duration-slow) linear infinite',
      $type: 'animation',
      $description: 'Spin/rotation loader animation shorthand'
    },
    'bounce-a': {
      $value: 'bounce-a 1s infinite',
      $type: 'animation',
      $description: 'TTYD A-button bounce prompt',
    },
    'pulse-ring': {
      $value: 'pulse-ring 1.5s infinite',
      $type: 'animation',
      $description: 'TTYD prompt ring pulse',
    },
  },
} satisfies TokenGroup;
