import { CheckboxProps as MuiCheckboxProps } from '@mui/material';
import { LAYOUTS } from './constants';

type Layout = typeof LAYOUTS[keyof typeof LAYOUTS];

export interface CheckboxProps extends MuiCheckboxProps {
  /** Text label displayed next to the checkbox. */
  label?: string;

  /** Position of the label relative to the checkbox. @default 'right' */
  layout?: Layout;

  /** When true, renders the checkbox as a round radio-style control. @default false */
  round?: boolean;

  /** Accessible name for the checkbox. */
  ariaLabel?: string;
}
