// Generated from tokens/tokens.json by `npm run tokens`. Do not edit.
import {
  fontSizeDefault, fontWeightLight, fontWeightHard, fontSizeSmall, fontSizeXSmall, fontSizeLarge, fontWeightDefault, fontSizeXLarge, fontSizeDisplay,
} from './typography';

export const textStyles = {
  body: {
    default: { fontSize: fontSizeDefault, fontWeight: fontWeightLight, lineHeight: 'normal' },
    selected: { fontSize: fontSizeDefault, fontWeight: fontWeightHard, lineHeight: 'normal' },
    text2: { fontSize: fontSizeSmall, fontWeight: fontWeightLight, lineHeight: 'normal' },
    text3: { fontSize: fontSizeXSmall, fontWeight: fontWeightLight, lineHeight: 'normal' },
    large: { fontSize: fontSizeLarge, fontWeight: fontWeightLight, lineHeight: 'normal' },
  },
  heading: {
    panel: { fontSize: fontSizeDefault, fontWeight: fontWeightHard, lineHeight: 'normal', textTransform: 'uppercase' },
    section: { fontSize: fontSizeDefault, fontWeight: fontWeightDefault, lineHeight: 'normal' },
    highlight: { fontSize: fontSizeXLarge, fontWeight: fontWeightHard, lineHeight: 'normal' },
    display: { fontSize: fontSizeDisplay, fontWeight: fontWeightDefault, lineHeight: 'normal' },
  },
  label: {
    button: { fontSize: fontSizeDefault, fontWeight: fontWeightDefault, lineHeight: 'normal' },
    small: { fontSize: fontSizeXSmall, fontWeight: fontWeightDefault, lineHeight: 'normal' },
  },
} as const;

export type TextStyles = typeof textStyles;
