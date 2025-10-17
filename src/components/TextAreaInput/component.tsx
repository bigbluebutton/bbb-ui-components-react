import React, { useRef, useEffect, JSX } from 'react';
import { TextAreaInputProps } from './types';
import * as Styled from './styles';

/**
 * A customizable text area input component.
 *
 * This component provides a styled, multi-line text input field that automatically
 * focuses on render and supports all standard textarea attributes.
 *
 */
function TextAreaInput({
  placeholder = '',
  rows = 1,
  maxLength = 250,
  autoFocus = true,
  inputRef = undefined,
  onChange,
  onKeyDown,
  ...props
}: TextAreaInputProps): JSX.Element {
  const internalRef = useRef<HTMLTextAreaElement | null>(null);
  
  useEffect(() => {
    if (autoFocus && internalRef.current) {
      internalRef.current.focus();
    }
  }, [autoFocus]);

  return (
    <Styled.TextAreaInput
      {...props}
      rows={rows}
      maxLength={maxLength}
      ref={(ref) => {
        internalRef.current = ref;
        if (typeof inputRef === 'function') {
          inputRef(ref);
        } else if (inputRef && 'current' in inputRef) {
          inputRef.current = ref;
        }
      }}
      placeholder={placeholder}
      onChange={onChange}
      onKeyDown={onKeyDown}
    />
  );
}

export default TextAreaInput;
