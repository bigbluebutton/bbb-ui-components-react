import { TextFieldProps } from '@mui/material';

export interface StyledTextProps {
  $error?: boolean;
}

export interface TextInputProps extends Omit<TextFieldProps, 'label'> {
  label?: string;
  helperText?: string;
  error?: boolean;
}
