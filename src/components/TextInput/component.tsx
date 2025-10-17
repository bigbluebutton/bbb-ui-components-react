import React, { JSX } from 'react';
import { TextInputProps } from './types';
import * as Styled from './styles';

/**
 * A customizable text input component.
 *
 * This component provides a styled, single-line text input field that supports
 * icons, custom validation, and all standard input attributes.
 *
 * @param {TextInputProps} props The props for the TextInput component. See {@link TextInputProps} for more details.
 * @param {string} [props.label] The label to be displayed above the input field.
 * @param {string} [props.placeholder] The placeholder text to be displayed when the input is empty.
 * @param {boolean} [props.disabled=false] If `true`, the input field will be disabled.
 * @param {React.Ref<HTMLInputElement>} [props.inputRef] A ref to be forwarded to the underlying input element.
 * @param {(event: React.ChangeEvent<HTMLInputElement>) => void} [props.onChange] Callback fired when the value is changed.
 * @param {any} ...props Any other props will be passed down to the underlying input element.
 * @returns {JSX.Element} The rendered TextInput component.
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
