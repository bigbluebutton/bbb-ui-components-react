// Generated from tokens/tokens.json by `npm run tokens`. Do not edit.
import {
  colorBackgroundBlue, colorBackgroundLight, colorBackgroundWhite, colorBackgroundInverse, colorBackgroundRoom, colorBackgroundRoomOverlay, colorBackgroundRoomOverlayStrong, colorBackgroundVideo, colorBorderDefault, colorBorderError, colorBorderFocusRing, colorBorderSelected, colorBorderSubtle, colorBrand1, colorBrand2, colorBrand3, colorBrandAux, colorBrandLight, colorDarkGray, colorError, colorErrorDark, colorGray, colorHoverDark, colorHoverLight, colorHoverNeutral, colorIconBlue, colorIconDefault, colorIconDefaultDark, colorIconWhite, colorLightGray, colorNeutral2, colorNeutral3, colorNeutral4, colorOverlay, colorShadowDefault, colorShadowStrong, colorSuccess, colorTextDefault, colorTextLight, colorTextOnBrand, colorTextOnDark, colorUserYou, colorWarning, colorWhite,
} from './palette';

export const colors = {
  background: {
    blue: colorBackgroundBlue,
    light: colorBackgroundLight,
    white: colorBackgroundWhite,
    inverse: colorBackgroundInverse,
    room: colorBackgroundRoom,
    roomOverlay: colorBackgroundRoomOverlay,
    roomOverlayStrong: colorBackgroundRoomOverlayStrong,
    video: colorBackgroundVideo,
  },
  border: {
    default: colorBorderDefault,
    error: colorBorderError,
    focusRing: colorBorderFocusRing,
    selected: colorBorderSelected,
    subtle: colorBorderSubtle,
  },
  brand: {
    brand1: colorBrand1,
    brand2: colorBrand2,
    brand3: colorBrand3,
    aux: colorBrandAux,
    light: colorBrandLight,
  },
  neutral: {
    darkGray: colorDarkGray,
    gray: colorGray,
    lightGray: colorLightGray,
    neutral2: colorNeutral2,
    neutral3: colorNeutral3,
    neutral4: colorNeutral4,
    white: colorWhite,
  },
  semantic: {
    error: colorError,
    errorDark: colorErrorDark,
    success: colorSuccess,
    warning: colorWarning,
  },
  hover: {
    dark: colorHoverDark,
    light: colorHoverLight,
    neutral: colorHoverNeutral,
  },
  icon: {
    blue: colorIconBlue,
    default: colorIconDefault,
    defaultDark: colorIconDefaultDark,
    white: colorIconWhite,
  },
  overlay: {
    default: colorOverlay,
  },
  shadow: {
    default: colorShadowDefault,
    strong: colorShadowStrong,
  },
  text: {
    default: colorTextDefault,
    light: colorTextLight,
    onBrand: colorTextOnBrand,
    onDark: colorTextOnDark,
  },
  user: {
    you: colorUserYou,
  },
} as const;

export type Colors = typeof colors;
