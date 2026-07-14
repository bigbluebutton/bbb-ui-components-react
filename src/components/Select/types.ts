import * as React from 'react';
import { SelectProps as MuiSelectProps } from '@mui/material/Select';

export type SelectProps = MuiSelectProps & {
  /** Label text displayed above the select input. @default null */
  title?: string;

  /** Optional icon rendered inside the select wrapper. @default null */
  icon?: React.ReactNode;

  /** Accessible name for the select when a visible title is not present. */
  ariaLabel?: string;

  /** Option elements rendered inside the select. */
  children: React.ReactNode;
};
