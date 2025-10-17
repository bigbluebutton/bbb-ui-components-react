import React from 'react';
import {
  COLOR_VALUES,
  LAYOUT_VALUES,
  SIZE_VALUES,
  VARIANT_VALUES,
  LAYOUTS,
  TOOLTIP_PLACEMENT_VALUES,
} from './constants';

export type EssentialColorProperties = {
  color: string;
  background: string | boolean;
  border: string | boolean;
  outline: string;
}

export type ColorProperties = EssentialColorProperties & {
  iconColor?: string;
  hoverColor: string;
  hoverBackground: string;
  hoverBorder: string | boolean;
};

export type CSSColorPropertiesType = {
  [key: string]: {
    [key: string]: ColorProperties;
  };
};

export type SizeProperties = {
  padding: string;
}

export type CSSSizePropertiesType = {
  [key: string]: SizeProperties;
}

type VariantType = typeof VARIANT_VALUES[number];
type ColorType = typeof COLOR_VALUES[number];
type SizeType = typeof SIZE_VALUES[number];
type LayoutType = typeof LAYOUT_VALUES[number];
type TooltipPlacementType = typeof TOOLTIP_PLACEMENT_VALUES[number];

export interface StyledHelperIconContainer {
  $hover: boolean;
  $variant: VariantType;
  $color: ColorType;
}

export interface StyledButtonWrapperProps {
  $layout: LayoutType;
}

export interface StyledButtonProps {
  $variant?: VariantType;
  $color?: ColorType;
  $size?: SizeType;
  $layout?: LayoutType;
  disabled: boolean;
}

type BaseButtonProps = {
  id?: string;
  dataTest?: string;
  label?: string;
  tooltipLabel?: string;
  tooltipPlacement?: TooltipPlacementType;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  onKeyDown?: React.KeyboardEventHandler<HTMLButtonElement>;
  ariaLabelledBy?: string;
  ariaDescribedBy?: string;
  ariaLabel?: string;
  color?: ColorType;
  variant?: VariantType;
  size?: SizeType;
  disabled?: boolean;
  children?: React.ReactNode;
}

type DefaultLayoutProps = BaseButtonProps & {
  layout?: typeof LAYOUTS.DEFAULT;
  iconStart?: React.ReactNode;
  iconEnd?: React.ReactNode;
};

type StackedLayoutProps = BaseButtonProps & {
  layout: typeof LAYOUTS.STACKED;
  icon?: React.ReactNode;
  helperIcon?: React.ReactNode;
  hideHelperIcon?: boolean;
  helperOnClick?: React.MouseEventHandler<HTMLDivElement>;
};

type CircleLayoutProps = BaseButtonProps & {
  layout: typeof LAYOUTS.CIRCLE;
  icon?: React.ReactNode;
};

export type ButtonProps = DefaultLayoutProps | StackedLayoutProps | CircleLayoutProps;
