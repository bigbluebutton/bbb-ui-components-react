import React, { JSX, useId } from 'react';
import { CheckboxOwnerState } from '@mui/material';
import { CheckboxProps } from './types';
import * as Styled from './styles';
import { DEFAULT_LAYOUT, LAYOUTS } from './constants';
import { RadioButtonUnchecked, RadioButtonChecked } from '@mui/icons-material';

/**
 * A customizable Checkbox component.
 *
 * This component provides a wrapper around the Material-UI Checkbox with additional features,
 * such as custom layouts and a round variant. It can be used with a label,
 * and clicking the label will toggle the checkbox state.
 *
 */
function Checkbox({
  label,
  layout = DEFAULT_LAYOUT,
  round = false,
  ariaLabel,
  id,
  dataTest,
  slotProps,
  disabled,
  ...props
}: CheckboxProps): JSX.Element {
  const generatedId = useId();
  const checkboxId = id ?? generatedId;
  const ownInputProps = { 'aria-label': ariaLabel, 'data-test': dataTest };
  const { input: consumerInputSlotProps, ...otherSlotProps } = slotProps ?? {};
  const inputSlotProps = typeof consumerInputSlotProps === 'function'
    ? (ownerState: CheckboxOwnerState) => ({ ...ownInputProps, ...consumerInputSlotProps(ownerState) })
    : { ...ownInputProps, ...consumerInputSlotProps };
  const checkbox = (
    <Styled.StyledCheckbox
      {...props}
      id={checkboxId}
      disabled={disabled}
      $round={round}
      icon={round ? <RadioButtonUnchecked /> : undefined}
      checkedIcon={round ? <RadioButtonChecked /> : undefined}
      slotProps={{ ...otherSlotProps, input: inputSlotProps }}
    />
  );

  if (!label) {
    return checkbox;
  }

  const labelElement = (
    <Styled.Label htmlFor={checkboxId} $disabled={disabled}>{label}</Styled.Label>
  );

  return (
    <Styled.Container>
      {layout === LAYOUTS.LEFT && labelElement}
      {checkbox}
      {layout === LAYOUTS.RIGHT && labelElement}
    </Styled.Container>
  );
}

export default Checkbox;
