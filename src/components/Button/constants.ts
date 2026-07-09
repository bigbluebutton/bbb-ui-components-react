import {
  colorBrand1, colorHoverDark,
  colorWhite, colorError,
  colorBorderError,
  colorErrorDark,
  colorBackgroundWhite,
  colorBackgroundBlue,
  colorHoverLight,
  colorLightGray,
  colorNeutral3,
  colorBackgroundLight,
  colorBorderSelected,
  colorTextLight,
  colorIconDefault,
  colorGray,
  colorBrandAux,
} from '../../stylesheets/pallete';
import { spacingMedium, spacingSmall, spacingSmallMedium } from '../../stylesheets/sizing';
import { CSSColorPropertiesType, CSSSizePropertiesType, EssentialColorProperties } from './type';

const VARIANTS = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
  TERTIARY: 'tertiary',
  SUBTLE: 'subtle',
} as const;
const VARIANT_VALUES = Object.values(VARIANTS);
const DEFAULT_VARIANT = VARIANT_VALUES[0];

const COLORS = {
  DEFAULT: 'default',
  DANGER: 'danger',
  NEUTRAL: 'neutral',
} as const;
const COLOR_VALUES = Object.values(COLORS);
const DEFAULT_COLOR = COLOR_VALUES[0];

const SIZES = {
  MEDIUM: 'md',
  SMALL: 'sm',
} as const;
const SIZE_VALUES = Object.values(SIZES);
const DEFAULT_SIZE = SIZE_VALUES[0];

const LAYOUTS = {
  DEFAULT: 'default',
  STACKED: 'stacked',
  CIRCLE: 'circle',
  SQUARED: 'squared',
} as const;
const LAYOUT_VALUES = Object.values(LAYOUTS);
const DEFAULT_LAYOUT = LAYOUT_VALUES[0];

const TOOLTIP_PLACEMENTS = {
  TOP: 'top',
  BOTTOM: 'bottom',
  LEFT: 'left',
  RIGHT: 'right',
} as const;
const TOOLTIP_PLACEMENT_VALUES = Object.values(TOOLTIP_PLACEMENTS);
const DEFAULT_TOOLTIP_PLACEMENT = TOOLTIP_PLACEMENTS.TOP;

const CSS_COLOR_PROPERTIES: CSSColorPropertiesType = {
  primary: {
    default: {
      color: colorWhite,
      background: colorBrand1,
      border: colorBrand1,
      hoverColor: colorWhite,
      hoverBackground: colorHoverDark,
      hoverBorder: colorHoverDark,
      outline: colorBrand1,
    },
    danger: {
      color: colorWhite,
      background: colorError,
      border: colorBorderError,
      hoverColor: colorWhite,
      hoverBackground: colorErrorDark,
      hoverBorder:colorBorderError,
      outline: colorError,
    },
    neutral: {
      color: colorGray,
      background: colorWhite,
      border: false,
      hoverColor: colorGray,
      hoverBackground: colorBrandAux,
      hoverBorder: false,
      outline: colorBrand1,
    },
  },
  secondary: {
    default: {
      color: colorBrand1,
      background: colorBackgroundWhite,
      border: colorBorderSelected,
      hoverColor: colorHoverDark,
      hoverBackground: colorBackgroundWhite,
      hoverBorder: colorHoverDark,
      outline: colorBrand1,
    },
    danger: {
      color: colorError,
      background: colorBackgroundWhite,
      border: colorBorderError,
      hoverColor: colorErrorDark,
      hoverBackground: colorBackgroundWhite,
      hoverBorder: colorErrorDark,
      outline: colorError,
    },
    neutral: {
      color: colorGray,
      background: colorWhite,
      border: false,
      hoverColor: colorGray,
      hoverBackground: colorBrandAux,
      hoverBorder: false,
      outline: colorBrand1,
    },
  },
  tertiary: {
    default: {
      color: colorBrand1,
      background: colorBackgroundBlue,
      border: false,
      hoverColor: colorHoverDark,
      hoverBackground: colorHoverLight,
      hoverBorder: false,
      outline: colorBrand1,
    },
    // TODO: Button variant tertiary in danger color is not yet
    // defined. I put some bogus values here just to satisfy TypeScript
    danger: {
      color: colorWhite,
      background: colorErrorDark,
      border: false,
      hoverColor: colorWhite,
      hoverBackground: colorError,
      hoverBorder: false, 
      outline: colorErrorDark,
    },
    neutral: {
      color: colorGray,
      background: colorWhite,
      border: false,
      hoverColor: colorGray,
      hoverBackground: colorBrandAux,
      hoverBorder: false,
      outline: colorBrand1,
    },
  },
  subtle: {
    default: {
      color: colorTextLight,
      iconColor: colorIconDefault,
      background: 'transparent',
      border: false,
      hoverColor: colorTextLight,
      hoverBackground: colorLightGray,
      hoverBorder: false,
      outline: colorIconDefault,
    },
    danger: {
      color: colorError,
      background: false,
      border: false,
      hoverColor: colorErrorDark,
      hoverBackground: colorLightGray,
      hoverBorder: false,
      outline: colorError,
    },
    neutral: {
      color: colorGray,
      background: colorWhite,
      border: false,
      hoverColor: colorGray,
      hoverBackground: colorBrandAux,
      hoverBorder: false,
      outline: colorBrand1,
    },
  },
};


const CSS_COLOR_PROPERTIES_DISABLED: EssentialColorProperties = {
  color: colorNeutral3,
  background: colorBackgroundLight,
  border: false,
  outline: colorNeutral3,
}

const CSS_SIZE_PROPERTIES: CSSSizePropertiesType = {
  sm: {
    padding: `${spacingSmall} ${spacingSmallMedium}`,
  },
  md: {
    padding: spacingMedium
  },
};

export {
  VARIANTS,
  VARIANT_VALUES,
  DEFAULT_VARIANT,
  COLORS,
  COLOR_VALUES,
  DEFAULT_COLOR,
  SIZES,
  SIZE_VALUES,
  DEFAULT_SIZE,
  LAYOUTS,
  LAYOUT_VALUES,
  DEFAULT_LAYOUT,
  TOOLTIP_PLACEMENTS,
  TOOLTIP_PLACEMENT_VALUES,
  DEFAULT_TOOLTIP_PLACEMENT,
  CSS_COLOR_PROPERTIES,
  CSS_COLOR_PROPERTIES_DISABLED,
  CSS_SIZE_PROPERTIES,
};
