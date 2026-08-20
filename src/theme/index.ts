// Instagram dark mode theme — true-black palette with Instagram blue accent
export const colors = {
  background: '#000000',
  surface: '#121212',
  surfaceLight: '#1c1c1c',
  border: '#262626',
  borderFocused: '#ffffff',
  text: '#ffffff',
  textSecondary: 'rgba(255,255,255,0.6)',
  textMuted: 'rgba(255,255,255,0.35)',
  accent: '#0095f6',         // Instagram blue
  accentDark: '#0074cc',
  danger: '#e74c3c',
  storyRing: '#c13584',      // gradient stand-in — close to Instagram's pink-purple
  placeholder: 'rgba(255,255,255,0.4)',
  tabBar: '#000000',
  tabBarBorder: '#262626',
};

export const typography = {
  logoFamily: 'serif',
  bold: 'bold' as const,
  semiBold: '600' as const,
  regular: '400' as const,
};

export const radius = {
  sm: 6,
  md: 10,
  lg: 16,
  xl: 24,
  pill: 30,
  full: 9999,
};

export const spacing = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 24,
  xxl: 32,
};
