import React, { JSX } from 'react';
import { BBButton } from '../Button';
import { BBBButtonGroup } from '../ButtonGroup';
import { DEFAULT_SIZE } from '../Button/constants';
import { DEFAULT_STACK, DEFAULT_STACK_BELOW } from '../ButtonGroup/constants';
import { DEFAULT_VARIANT } from './constants';
import { SegmentedControlProps } from './types';
import * as Styled from './styles';

/**
 * A group of buttons where exactly one option is selected at a time.
 *
 * Each option is a `BBButton`; the selected one is rendered with `pressed`, so the
 * group is exposed to assistive technology as a set of toggle buttons. The options
 * are laid out by `BBBButtonGroup`.
 */
function SegmentedControl<T extends string = string>(props: SegmentedControlProps<T>): JSX.Element {
  const {
    options,
    value = null,
    onChange,
    ariaLabel,
    ariaLabelledBy,
    stack = DEFAULT_STACK,
    stackBelow = DEFAULT_STACK_BELOW,
    disabled = false,
    size = DEFAULT_SIZE,
    variant = DEFAULT_VARIANT,
    id,
    dataTest,
    className,
  } = props;

  return (
    <Styled.SegmentedControl
      id={id}
      className={className}
      role="group"
      aria-label={ariaLabel}
      aria-labelledby={ariaLabelledBy}
      data-test={dataTest}
    >
      <BBBButtonGroup stack={stack} stackBelow={stackBelow}>
        {options.map((option) => {
          const selected = option.value === value;

          return (
            <BBButton
              key={option.value}
              label={option.label}
              iconStart={option.iconStart}
              dataTest={option.dataTest}
              variant={variant}
              size={size}
              pressed={selected}
              disabled={disabled || Boolean(option.disabled)}
              fullWidth
              onClick={() => {
                if (!selected) onChange(option.value);
              }}
            />
          );
        })}
      </BBBButtonGroup>
    </Styled.SegmentedControl>
  );
}

export default SegmentedControl;
