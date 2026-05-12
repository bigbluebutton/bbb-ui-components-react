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
  label?: string;
  helperText?: string;
  textPosition?: LayoutType;
  ariaLabel?: string;
  ariaLabelledBy?: string;
  ariaDescribedBy?: string;
};
