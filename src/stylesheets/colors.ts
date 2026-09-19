import {
  colorNeutral2, colorNeutral3, colorNeutral4, colorWhite, colorLightGray, colorGray, colorDarkGray,
  colorBrand1, colorBrand2, colorBrand3, colorBrandLight, colorBrandAux,
  colorSuccess, colorWarning, colorError, colorErrorDark,
  colorBackgroundWhite, colorBackgroundLight, colorBackgroundBlue,
  colorBorderDefault, colorBorderSelected, colorBorderError, colorBorderFocusRing,
  colorTextDefault, colorTextLight,
  colorIconDefault, colorIconBlue, colorIconWhite, colorIconDefaultDark,
  colorHoverDark, colorHoverLight, colorHoverNeutral,
  colorOverlay,
  colorShadowDefault,
  colorUserYou,
} from './palette';

export const colors = {
  neutral: {
    neutral2: colorNeutral2,
    neutral3: colorNeutral3,
    neutral4: colorNeutral4,
    white: colorWhite,
    lightGray: colorLightGray,
    gray: colorGray,
    darkGray: colorDarkGray,
  },
  brand: {
    brand1: colorBrand1,
    brand2: colorBrand2,
    brand3: colorBrand3,
    light: colorBrandLight,
    aux: colorBrandAux,
  },
  semantic: {
    success: colorSuccess,
    warning: colorWarning,
    error: colorError,
    errorDark: colorErrorDark,
  },
  background: {
    white: colorBackgroundWhite,
    light: colorBackgroundLight,
    blue: colorBackgroundBlue,
  },
  border: {
    default: colorBorderDefault,
    selected: colorBorderSelected,
    error: colorBorderError,
    focusRing: colorBorderFocusRing,
  },
  text: {
    default: colorTextDefault,
    light: colorTextLight,
  },
  icon: {
    default: colorIconDefault,
    blue: colorIconBlue,
    white: colorIconWhite,
    defaultDark: colorIconDefaultDark,
  },
  hover: {
    dark: colorHoverDark,
    light: colorHoverLight,
    neutral: colorHoverNeutral,
  },
  overlay: {
    default: colorOverlay,
  },
  shadow: {
    default: colorShadowDefault,
  },
  user: {
    you: colorUserYou,
  },
} as const;

export type Colors = typeof colors;
