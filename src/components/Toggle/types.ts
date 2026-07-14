import { SwitchProps } from '@mui/material';
import { TEXT_POSITIONS_VALUES } from './constants';

export type LayoutType = typeof TEXT_POSITIONS_VALUES[number];

export type LabelPlacement = 'top' | 'bottom' | 'start' | 'end';

export interface StyledToggleWrapperProps {
  $textPosition: LayoutType;
}

export interface StyledTextWrapperProps extends StyledToggleWrapperProps{
  $hasLabel: boolean;
  $hasHelperText: boolean;
}

export interface ToggleProps extends SwitchProps {
  /** Main label text displayed next to the toggle. */
  label?: string;

  /** Helper text displayed below the label. */
  helperText?: string;

  /** Position of the label/helper text relative to the toggle. @default 'right' */
  textPosition?: LayoutType;

  /** Accessible name for the toggle. */
  ariaLabel?: string;

  /** ID of the element that labels the toggle; ignored when `ariaLabel` is set, and falls back to the rendered label's id when omitted. */
  ariaLabelledBy?: string;

  /** ID of the element that describes the toggle; falls back to the rendered helper text's id when omitted. */
  ariaDescribedBy?: string;
};
