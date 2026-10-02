import React, { JSX, useId } from 'react';
import { SwitchOwnerState } from '@mui/material';
import { ToggleProps } from './types';
import * as Styled from './styles';
import { DEFAULT_TEXT_POSITION } from './constants';

/**
 * A customizable Toggle switch component.
 *
 * This component provides a flexible toggle switch that can be used for binary state changes.
 * It supports labels (label and helperText) and various textPosition configurations.
 *
 */
function Toggle ({
  label,
  helperText,
  textPosition =  DEFAULT_TEXT_POSITION, 
  onChange,
  ariaLabel,
  ariaLabelledBy,
  ariaDescribedBy,
  id: providedId,
  slotProps,
  ...rest
}: ToggleProps): JSX.Element {
  const generatedUniqueId = useId();
  const id = providedId ?? generatedUniqueId;
  const labelId = label ? `${id}-label` : undefined;
  const helperTextId = helperText ? `${id}-helper` : undefined;

  const ariaLabelledByValue = ariaLabel ? undefined : ariaLabelledBy || labelId;
  // Without a name source, the <label htmlFor> names the input from the helper text,
  // so it can't also be the description.
  const hasNameSource = !!ariaLabel || !!ariaLabelledByValue;
  const a11yInputProps = {
    role: 'switch',
    'aria-label': ariaLabel,
    'aria-labelledby': ariaLabelledByValue,
    'aria-describedby': ariaDescribedBy || (hasNameSource ? helperTextId : undefined),
  };
  const { input: consumerInputSlotProps, ...otherSlotProps } = slotProps ?? {};
  const inputSlotProps = typeof consumerInputSlotProps === 'function'
    ? (ownerState: SwitchOwnerState) => ({ ...a11yInputProps, ...consumerInputSlotProps(ownerState) })
    : { ...a11yInputProps, ...consumerInputSlotProps };

  return (
    <Styled.ToggleWrapper $textPosition={textPosition}>
      {(label || helperText) && (
        <Styled.TextWrapper
          $textPosition={textPosition}
          htmlFor={id}
          $hasLabel={!!label}
          $hasHelperText={!!helperText}
        >
          {label && <Styled.Title id={labelId}>{label}</Styled.Title>}
          {helperText && <Styled.HelperText id={helperTextId}>{helperText}</Styled.HelperText>}
        </Styled.TextWrapper>
      )}
      <Styled.ToggleSwitchWrapper>
        <Styled.MaterialToggle
          {...rest}
          id={id}
          onChange={onChange}
          slotProps={{ ...otherSlotProps, input: inputSlotProps }}
        />
      </Styled.ToggleSwitchWrapper>
    </Styled.ToggleWrapper>
  );
}

export default Toggle;
