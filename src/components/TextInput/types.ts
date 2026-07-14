import { TextFieldProps } from '@mui/material';

export interface StyledTextProps {
  $error?: boolean;
}

export interface TextInputProps extends Omit<TextFieldProps, 'label'> {
  /** Label displayed above the input. */
  label?: string;

  /** Helper text shown below the input. */
  helperText?: string;

  /** When true, renders the input in an error state. */
  error?: boolean;
}
