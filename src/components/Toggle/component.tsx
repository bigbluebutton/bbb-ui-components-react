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
 * @param {ToggleProps} props - The props for the Toggle component. See {@link ToggleProps} for more details.
 * @param {string} [props.label] - The main label text displayed next to the toggle.
 * @param {string} [props.helperText] - The helperText text displayed below the label.
 * @param {keyof typeof import('./constants')['TEXT_POSITIONS']} [props.textPosition=import('./constants').DEFAULT_TEXT_POSITION] - The position of the text labels relative to the toggle switch.
 * @param {string} [props.ariaLabel] - The accessible name for the toggle.
 * @param {string} [props.ariaLabelledBy] - The ID of the element that labels the toggle.
 * @param {string} [props.ariaDescribedBy] - The ID of the element that describes the toggle.
 * @param {boolean} [props.disabled=false] - If `true`, the toggle will be disabled and unresponsive.
 * @param {(event: React.ChangeEvent<HTMLInputElement>, checked: boolean) => void} [props.onChange] - Callback function that is fired when the toggle state changes.
 * @param {any} ...toggleProps - Any other props will be passed down to the underlying Material-UI Switch component.
 * @returns {JSX.Element} The rendered Toggle component.
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
