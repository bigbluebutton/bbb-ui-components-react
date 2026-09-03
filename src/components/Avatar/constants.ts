export const AVATAR_SIZES = {
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large',
} as const;

export const AVATAR_SIZE_VALUES = Object.values(AVATAR_SIZES);
export const DEFAULT_AVATAR_SIZE = AVATAR_SIZES.MEDIUM;

// Mirrors the palette akka-bbb-apps' ColorPicker assigns to users server-side (round-robin per
// meeting), so a name-hash fallback here lands on the same colors real BBB users get.
export const AVATAR_FALLBACK_COLORS = [
  '#7b1fa2', '#6a1b9a', '#4a148c', '#5e35b1', '#512da8', '#4527a0', '#311b92',
  '#3949ab', '#303f9f', '#283593', '#1a237e', '#1976d2', '#1565c0', '#0d47a1', '#0277bd', '#01579b',
];
