import React, { JSX } from 'react';
import { TextInputProps } from './types';
import * as Styled from './styles';

/**
 * A customizable text input component.
 *
 * This component provides a styled, single-line text input field that supports
 * icons, custom validation, and all standard input attributes.
 *
 */
function TextInput({
  label,
  helperText,
  error,
  placeholder,
  ...props
}: TextInputProps): JSX.Element {
  return (
    <Styled.Container>
      {label && <Styled.Label>{label}</Styled.Label>}
      <Styled.StyledTextField {...props} $error={error} placeholder={placeholder} />
      {helperText && <Styled.HelperText $error={error}>{helperText}</Styled.HelperText>}
    </Styled.Container>
  );
}

export default TextInput;
