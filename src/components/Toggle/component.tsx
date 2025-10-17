import React, { JSX, useId } from 'react';
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
  ...toggleProps
}: ToggleProps): JSX.Element {
  const id = useId();
  const labelId = label ? `${id}-label` : undefined;
  const helperTextId = helperText ? `${id}-helper` : undefined;

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
          id={id}
          onChange={onChange}
          aria-label={ariaLabel}
          aria-labelledby={ariaLabel ? undefined : ariaLabelledBy || labelId}
          aria-describedby={ariaDescribedBy || helperTextId}
          {...toggleProps}
        />
      </Styled.ToggleSwitchWrapper>
    </Styled.ToggleWrapper>
  );
}

export default Toggle;
