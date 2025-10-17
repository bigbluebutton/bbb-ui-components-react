import React, { JSX, useId } from 'react';
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
  ...props
}: CheckboxProps): JSX.Element {
  const id = useId();
  const checkbox = (
    <Styled.StyledCheckbox
      {...props}
      id={id}
      aria-label={ariaLabel}
      icon={round ? <RadioButtonUnchecked /> : undefined}
      checkedIcon={round ? <RadioButtonChecked /> : undefined}
    />
  );

  if (!label) {
    return checkbox;
  }

  return (
    <Styled.Container>
      {layout === LAYOUTS.LEFT && <Styled.Label htmlFor={id}>{label}</Styled.Label>}
      {checkbox}
      {layout === LAYOUTS.RIGHT && <Styled.Label htmlFor={id}>{label}</Styled.Label>}
    </Styled.Container>
  );
}

export default Checkbox;
