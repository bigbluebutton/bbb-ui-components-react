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
  /** HTML `id` for the root element; auto-generated via `useId` when omitted, and used to derive the label's id and default `data-test` value. @default '' */
  id?: string;

  /** Value for the `data-test` attribute, used for test selectors; falls back to an auto-generated id based on `id`/`label` when omitted. */
  dataTest?: string;

  /** Text label for the button; rendered in layouts that display a label (e.g. `default`, `stacked`). */
  label?: string;

  /** Text shown in a tooltip; the tooltip only renders when this is provided. */
  tooltipLabel?: string;

  /** Placement of the tooltip relative to the button; only used when `tooltipLabel` is set. @default 'top' */
  tooltipPlacement?: TooltipPlacementType;

  /** Click handler for the button's primary action (required); for the `stacked` layout this is distinct from `helperOnClick`. */
  onClick: React.MouseEventHandler<HTMLButtonElement>;

  /** Keydown handler for the button element, for custom keyboard interactions. */
  onKeyDown?: React.KeyboardEventHandler<HTMLButtonElement>;

  /** Id of the element that labels the button (`aria-labelledby`); when omitted, falls back to the id of the button's own rendered label element, if any. */
  ariaLabelledBy?: string;

  /** Id of the element that describes the button, wired to `aria-describedby`, when provided. */
  ariaDescribedBy?: string;

  /** Accessible name for the button (`aria-label`); falls back to `label` when not provided. */
  ariaLabel?: string;

  /** Color theme for the button (affects background/border/text depending on `variant`). @default 'default' */
  color?: ColorType;

  /** Visual variant controlling emphasis and background/border styling. @default 'primary' */
  variant?: VariantType;

  /** Button size; affects padding and, for the `circle` layout, the overall diameter. @default 'md' */
  size?: SizeType;

  /** Disables interaction and applies disabled styling. @default false */
  disabled?: boolean;

  /** Additional content rendered inside the button, after the label (only used in the `default` layout). */
  children?: React.ReactNode;

  /**
   * When `true`, temporarily shows `feedbackContent` in place of the button's own
   * label/icon for `feedbackDuration` after `onClick` fires.
   * @default false
   */
  showFeedback?: boolean;

  /** Content rendered while the click feedback is visible (e.g. a checkmark icon and "Copied"). @default <MdCheckCircle /> */
  feedbackContent?: React.ReactNode;

  /** How long, in milliseconds, the click feedback stays visible. @default 2000 */
  feedbackDuration?: number;
}

type DefaultLayoutProps = BaseButtonProps & {
  /** Layout mode for this variant — always `'default'`, the standard inline label/icon button; also the overall default. @default 'default' */
  layout?: typeof LAYOUTS.DEFAULT;

  /** Icon rendered before the label (left side); effective when a label is present. */
  iconStart?: React.ReactNode;

  /** Icon rendered after the label (right side); effective when a label is present. */
  iconEnd?: React.ReactNode;
};

type StackedLayoutProps = BaseButtonProps & {
  /** Layout mode for this variant — must be `'stacked'`, rendering a main icon with a label underneath plus an optional helper icon. */
  layout: typeof LAYOUTS.STACKED;

  /** Main icon for the button, shown above the label. */
  icon?: React.ReactNode;

  /** Auxiliary icon for a secondary action, shown next to the main icon; clickable via `helperOnClick`. @default MdSettings icon */
  helperIcon?: React.ReactNode;

  /** Hides the helper icon entirely when true. @default false */
  hideHelperIcon?: boolean;

  /** Click handler for the helper icon, triggering a secondary action separate from `onClick`. @default null */
  helperOnClick?: React.MouseEventHandler<HTMLDivElement>;
};

type CircleLayoutProps = BaseButtonProps & {
  /** Layout mode for this variant — must be `'circle'`, rendering an icon-only circular button. */
  layout: typeof LAYOUTS.CIRCLE;

  /** Icon rendered inside the circular button (no label is shown in this layout). */
  icon?: React.ReactNode;
};

type SquaredLayoutProps = BaseButtonProps & {
  /** Layout mode for this variant — must be `'squared'`, rendering an icon-only square button. */
  layout: typeof LAYOUTS.SQUARED;

  /** Icon rendered inside the square button (no label is shown in this layout). */
  icon?: React.ReactNode;
};

export type ButtonProps = DefaultLayoutProps | StackedLayoutProps | CircleLayoutProps | SquaredLayoutProps;
