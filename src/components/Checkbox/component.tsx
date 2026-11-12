import React, { JSX, useId, useRef } from 'react';
import { CheckboxOwnerState } from '@mui/material';
import { CheckboxProps } from './types';
import * as Styled from './styles';
import { DEFAULT_LAYOUT, DEFAULT_TOOLTIP_PLACEMENT, LAYOUTS } from './constants';
import { RadioButtonUnchecked, RadioButtonChecked } from '@mui/icons-material';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

// Cancelling the click (mouse, label or Space) keeps the box unchanged, and MUI skips
// `onChange` for a prevented click. It sits on the root because MUI drops event handlers
// passed through `slotProps.input`, except `onChange`.
const preventToggle = (event: React.MouseEvent<HTMLButtonElement>) => event.preventDefault();

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
  helperText,
  round = false,
  ariaLabel,
  id,
  dataTest,
  slotProps,
  disabled,
  tooltipLabel,
  tooltipPlacement = DEFAULT_TOOLTIP_PLACEMENT,
  ...props
}: CheckboxProps): JSX.Element {
  const generatedId = useId();
  const containerRef = useRef<HTMLDivElement>(null);
  const checkboxId = id ?? generatedId;
  const labelId = `${checkboxId}-label`;
  const helperTextId = `${checkboxId}-helper`;
  const tooltipDescriptionId = `${checkboxId}-tooltip`;
  // The helper text is a second <label> so clicking it toggles the checkbox, but every
  // associated <label> joins the accessible name. aria-labelledby keeps the name to the
  // label alone, leaving the helper text as the description; with no other name source,
  // the helper text names the checkbox and can't also describe it. The tooltip text
  // follows the same rule when neither a label nor the helper text names the checkbox.
  const hasNameSource = Boolean(ariaLabel || label);
  const tooltipNamesCheckbox = Boolean(tooltipLabel && !hasNameSource && !helperText);
  let ariaLabelledBy: string | undefined;
  if (!ariaLabel && label) ariaLabelledBy = labelId;
  else if (tooltipNamesCheckbox) ariaLabelledBy = tooltipDescriptionId;
  const describedBy = [
    hasNameSource && helperText && helperTextId,
    tooltipLabel && !tooltipNamesCheckbox && tooltipDescriptionId,
  ].filter(Boolean).join(' ');
  const ownInputProps = {
    'aria-label': ariaLabel,
    'aria-labelledby': ariaLabelledBy,
    'aria-describedby': describedBy || undefined,
    'data-test': dataTest,
  };
  // A natively disabled input leaves the tab order, so keyboard users could never reach the
  // tooltip that explains why it is disabled. With a tooltip, the input stays focusable and is
  // announced through aria-disabled instead; dropping `name` and `required` keeps it out of form
  // submission and validation, as a natively disabled input would be.
  const focusableWhileDisabled = Boolean(disabled && tooltipLabel);
  const focusableDisabledInputProps = focusableWhileDisabled
    ? {
      disabled: false,
      'aria-disabled': true,
      name: undefined,
      required: false,
    }
    : {};
  const { input: consumerInputSlotProps, ...otherSlotProps } = slotProps ?? {};
  const inputSlotProps = typeof consumerInputSlotProps === 'function'
    ? (ownerState: CheckboxOwnerState) => ({
      ...ownInputProps,
      ...consumerInputSlotProps(ownerState),
      ...focusableDisabledInputProps,
    })
    : { ...ownInputProps, ...consumerInputSlotProps, ...focusableDisabledInputProps };
  const checkbox = (
    <Styled.StyledCheckbox
      {...props}
      id={checkboxId}
      disabled={disabled}
      $round={round}
      {...(focusableWhileDisabled && { onClick: preventToggle })}
      icon={round ? <RadioButtonUnchecked /> : undefined}
      checkedIcon={round ? <RadioButtonChecked /> : undefined}
      slotProps={{ ...otherSlotProps, input: inputSlotProps }}
    />
  );

  if (!label && !helperText && !tooltipLabel) {
    return checkbox;
  }

  const labelElement = label && (
    <Styled.Label id={labelId} htmlFor={checkboxId} $disabled={disabled}>{label}</Styled.Label>
  );

  // Tippy sits beside the container instead of wrapping it, so toggling `tooltipLabel`
  // keeps the same root and doesn't remount the checkbox (losing focus and uncontrolled
  // state). It targets the container, not the input: MUI gives the disabled box
  // `pointer-events: none`, so hovering it reaches the container. `focusin` bubbles
  // from the input; Tippy's `focus` would not.
  return (
    <>
      <Styled.Container ref={containerRef} $layout={layout} $hasLabel={!!label} $hasHelperText={!!helperText}>
        {layout === LAYOUTS.LEFT && labelElement}
        {checkbox}
        {layout === LAYOUTS.RIGHT && labelElement}
        {helperText && (
          <Styled.HelperText id={helperTextId} htmlFor={checkboxId} $disabled={disabled}>{helperText}</Styled.HelperText>
        )}
        {/* aria-describedby needs the text at all times; Tippy mounts it only while shown. */}
        {tooltipLabel && (
          <span id={tooltipDescriptionId} hidden>{tooltipLabel}</span>
        )}
      </Styled.Container>
      {tooltipLabel && (
        <Tippy
          reference={containerRef}
          content={tooltipLabel}
          placement={tooltipPlacement}
          trigger="mouseenter focusin"
          aria={{ content: null }}
        />
      )}
    </>
  );
}

export default Checkbox;
