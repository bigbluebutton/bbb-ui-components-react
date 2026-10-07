import { MdCheck, MdError, MdHelp, MdInfo, MdWarning } from 'react-icons/md';
import {
  colorBrand1, colorSuccessDark, colorWarningDark, colorError, colorWhite,
} from '../../stylesheets/palette';

export const TOAST_VARIANTS = {
  DEFAULT: 'default',
  INFO: 'info',
  SUCCESS: 'success',
  WARNING: 'warning',
  ERROR: 'error',
} as const;
export const TOAST_VARIANT_VALUES = Object.values(TOAST_VARIANTS);
export const DEFAULT_TOAST_VARIANT = TOAST_VARIANTS.DEFAULT;

export const DEFAULT_AUTO_CLOSE = 5000;

export const DEFAULT_CLOSE_BUTTON_ARIA_LABEL = 'Close';

export const INTERACTIVE_SELECTOR = [
  'a[href]', 'button', 'input', 'select', 'textarea', 'summary', 'label',
  '[role="button"]', '[role="link"]', '[tabindex]:not([tabindex="-1"])',
].join(', ');

// Caps the card so tall content scrolls inside it instead of being clipped in silence by
// the toast engine's own container (react-toastify's is `max-height: 75vh; overflow: hidden`).
export const DEFAULT_MAX_HEIGHT = '70vh';

export const DEFAULT_ICONS = {
  default: MdInfo,
  info: MdHelp,
  success: MdCheck,
  warning: MdWarning,
  error: MdError,
} as const;

// The success and warning badges take the dark shades of their colors so the white glyph
// keeps at least the 3:1 non-text contrast WCAG asks for; it fails on the lighter fills.
export const VARIANT_COLORS = {
  default: { background: colorBrand1, glyph: colorWhite },
  info: { background: colorBrand1, glyph: colorWhite },
  success: { background: colorSuccessDark, glyph: colorWhite },
  warning: { background: colorWarningDark, glyph: colorWhite },
  error: { background: colorError, glyph: colorWhite },
} as const;
