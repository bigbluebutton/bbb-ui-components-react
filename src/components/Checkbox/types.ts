import { CheckboxProps as MuiCheckboxProps } from '@mui/material';
import { LAYOUTS, TOOLTIP_PLACEMENT_VALUES } from './constants';

type Layout = typeof LAYOUTS[keyof typeof LAYOUTS];
type TooltipPlacement = typeof TOOLTIP_PLACEMENT_VALUES[number];

export interface CheckboxProps extends Omit<MuiCheckboxProps, 'inputProps'> {
  /** Text label displayed next to the checkbox. */
  label?: string;

  /** Position of the label relative to the checkbox. @default 'right' */
  layout?: Layout;

  /** Secondary text displayed below the label; it is also exposed as the checkbox's accessible description. */
  helperText?: string;

  /** When true, renders the checkbox as a round radio-style control. @default false */
  round?: boolean;

  /** Accessible name for the checkbox. */
  ariaLabel?: string;

  /** `data-test` attribute on the underlying `<input>` element. */
  dataTest?: string;

  /** Text shown in a tooltip on hover and keyboard focus; when set, a disabled checkbox stays focusable (`aria-disabled`) so the tooltip can be reached. */
  tooltipLabel?: string;

  /** Placement of the tooltip when `tooltipLabel` is provided. @default 'top' */
  tooltipPlacement?: TooltipPlacement;
}

export interface StyledContainerProps {
  $layout: Layout;
  $hasLabel: boolean;
  $hasHelperText: boolean;
}

export interface StyledLabelProps {
  $disabled?: boolean;
}

export interface StyledCheckboxProps {
  $round: boolean;
}
