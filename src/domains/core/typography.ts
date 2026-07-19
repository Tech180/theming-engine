import type { TokenGroup } from '@/types/token-group.interface';

/* =========================================
   Core Typography Tokens
   Font families and weights used across
   react-website and giftistry-react.
   ========================================= */

export default {
  fontFamily: {
    main: {
      $value: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif",
      $type: 'fontFamily',
      $description: 'Primary UI font (from giftistry-react)',
    },
    display: {
      $value: "'Outfit', sans-serif",
      $type: 'fontFamily',
      $description: 'Display/heading font (shared by both projects)',
    },
    body: {
      $value: "'DM Sans', sans-serif",
      $type: 'fontFamily',
      $description: 'Body text font (from react-website)',
    },
    ttydDisplay: {
      $value: "'Mochiy Pop One', cursive",
      $type: 'fontFamily',
      $description: 'Paper Mario TTYD display font',
    },
    ttydBody: {
      $value: "'Nunito', sans-serif",
      $type: 'fontFamily',
      $description: 'Paper Mario TTYD body font',
    },
  },

  fontWeight: {
    light:    { $value: 300, $type: 'fontWeight' },
    regular:  { $value: 400, $type: 'fontWeight' },
    medium:   { $value: 500, $type: 'fontWeight' },
    semibold: { $value: 600, $type: 'fontWeight' },
    bold:     { $value: 700, $type: 'fontWeight' },
    extrabold:{ $value: 800, $type: 'fontWeight', $description: 'Used in Outfit display headings' },
  },

  fontSize: {
    xs:   { $value: '12px', $type: 'dimension' },
    sm:   { $value: '14px', $type: 'dimension' },
    base: { $value: '16px', $type: 'dimension' },
    lg:   { $value: '18px', $type: 'dimension' },
    xl:   { $value: '20px', $type: 'dimension' },
    '2xl':{ $value: '24px', $type: 'dimension' },
    '3xl':{ $value: '30px', $type: 'dimension' },
    '4xl':{ $value: '36px', $type: 'dimension' },
  },

  lineHeight: {
    tight:  { $value: '1.25', $type: 'dimension' },
    normal: { $value: '1.5',  $type: 'dimension' },
    relaxed:{ $value: '1.75', $type: 'dimension' },
  },

  letterSpacing: {
    tight:  { $value: '-0.02em', $type: 'dimension', $description: 'Used for headings (from giftistry-react)' },
    normal: { $value: '0em',     $type: 'dimension' },
    wide:   { $value: '0.05em',  $type: 'dimension' },
  },
} satisfies TokenGroup;
