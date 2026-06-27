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
} satisfies TokenGroup;
