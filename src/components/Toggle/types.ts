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

export interface ToggleProps {
  disabled?: boolean;
  label?: string;
  helperText?: string;
  textPosition?: LayoutType;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>, checked: boolean) => void;
  ariaLabel?: string;
  ariaLabelledBy?: string;
  ariaDescribedBy?: string;
  [key: string]: unknown;
};
