import React, {
  JSX, useEffect, useId, useRef, useState,
} from 'react';
import { SwitchOwnerState, switchClasses } from '@mui/material';
import { ToggleProps } from './types';
import * as Styled from './styles';
import { DEFAULT_TEXT_POSITION, DEFAULT_TOOLTIP_PLACEMENT, TEXT_POSITIONS } from './constants';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

// Cancelling the click (mouse, label or Space) keeps the switch unchanged, and MUI skips
// `onChange` for a prevented click. It sits on the switch because MUI drops event handlers
// passed through `slotProps.input`, except `onChange`.
const preventToggle = (event: React.MouseEvent<HTMLButtonElement>) => event.preventDefault();

// Bridges the gap between the text and the switch, which are separate tooltip triggers,
// so moving the pointer from one to the other doesn't hide and reshow the tooltip.
const TOOLTIP_DELAY: [number, number] = [0, 100];

const isElement = <T,>(element: T | null): element is T => element !== null;

const getBoundingRect = (elements: HTMLElement[]) => {
  const rects = elements.map((element) => element.getBoundingClientRect());
  const left = Math.min(...rects.map((rect) => rect.left));
  const top = Math.min(...rects.map((rect) => rect.top));
  const right = Math.max(...rects.map((rect) => rect.right));
  const bottom = Math.max(...rects.map((rect) => rect.bottom));
  return new DOMRect(left, top, right - left, bottom - top);
};

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
  fullWidth = false,
  disabled,
  onChange,
  ariaLabel,
  ariaLabelledBy,
  ariaDescribedBy,
  id: providedId,
  slotProps,
  tooltipLabel,
  tooltipPlacement = DEFAULT_TOOLTIP_PLACEMENT,
  ...rest
}: ToggleProps): JSX.Element {
  const generatedUniqueId = useId();
  const titleRef = useRef<HTMLSpanElement>(null);
  const helperTextRef = useRef<HTMLSpanElement>(null);
  const switchWrapperRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [tooltipTriggers, setTooltipTriggers] = useState<HTMLElement[]>([]);

  // MUI's Switch ref points at its inner button, which a disabled switch hides from the
  // pointer; the root, which holds the track, is looked up instead.
  const getSwitchRoot = () => (
    switchWrapperRef.current?.querySelector<HTMLElement>(`.${switchClasses.root}`) ?? null
  );

  // The wrapper spans the whole row, so it can't be the tooltip's trigger or anchor: the
  // tooltip would open over empty space and center on the row. The text and the switch
  // trigger it instead, and it points at the text, or at the switch when there is none.
  useEffect(() => {
    if (!tooltipLabel) return;
    setTooltipTriggers([titleRef.current, helperTextRef.current, getSwitchRoot()].filter(isElement));
  }, [tooltipLabel, label, helperText]);

  const getTooltipAnchorRect = () => {
    const textElements = [titleRef.current, helperTextRef.current].filter(isElement);
    const anchorElements = textElements.length > 0 ? textElements : [getSwitchRoot()].filter(isElement);
    return anchorElements.length > 0 ? getBoundingRect(anchorElements) : new DOMRect();
  };
  const id = providedId ?? generatedUniqueId;
  const labelId = label ? `${id}-label` : undefined;
  const helperTextId = helperText ? `${id}-helper` : undefined;
  const tooltipDescriptionId = tooltipLabel ? `${id}-tooltip` : undefined;
  const isFullWidth = fullWidth && (textPosition === TEXT_POSITIONS.LEFT || textPosition === TEXT_POSITIONS.RIGHT);

  const explicitLabelledBy = ariaLabel ? undefined : ariaLabelledBy || labelId;
  // Without a name source, the <label htmlFor> names the input from the helper text,
  // so it can't also be the description. The tooltip text follows the same rule when
  // neither a label nor the helper text names the toggle.
  const hasNameSource = !!ariaLabel || !!explicitLabelledBy;
  const tooltipNamesToggle = Boolean(tooltipLabel && !hasNameSource && !helperText);
  const a11yInputProps = {
    role: 'switch',
    'aria-label': ariaLabel,
    'aria-labelledby': tooltipNamesToggle ? tooltipDescriptionId : explicitLabelledBy,
    'aria-describedby': [
      ariaDescribedBy || (hasNameSource ? helperTextId : undefined),
      !tooltipNamesToggle && tooltipDescriptionId,
    ].filter(Boolean).join(' ') || undefined,
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
    ? (ownerState: SwitchOwnerState) => ({
      ...a11yInputProps,
      ...consumerInputSlotProps(ownerState),
      ...focusableDisabledInputProps,
    })
    : { ...a11yInputProps, ...consumerInputSlotProps, ...focusableDisabledInputProps };

  // Tippy sits beside the wrapper instead of wrapping it, so toggling `tooltipLabel` keeps
  // the same root and doesn't remount the toggle (losing focus and uncontrolled state).
  // The switch root, not the input, triggers it: MUI gives the disabled switch's input
  // `pointer-events: none`, so hovering it reaches the root. `focusin` bubbles from the
  // input; Tippy's `focus` would not.
  return (
    <>
      <Styled.ToggleWrapper ref={wrapperRef} $textPosition={textPosition} $fullWidth={isFullWidth}>
        {(label || helperText) && (
          <Styled.TextWrapper
            $textPosition={textPosition}
            $fullWidth={isFullWidth}
            htmlFor={id}
            $hasLabel={!!label}
            $hasHelperText={!!helperText}
            $disabled={disabled}
          >
            {label && <Styled.Title ref={titleRef} id={labelId} $disabled={disabled}>{label}</Styled.Title>}
            {helperText && (
              <Styled.HelperText ref={helperTextRef} id={helperTextId} $disabled={disabled}>{helperText}</Styled.HelperText>
            )}
          </Styled.TextWrapper>
        )}
        <Styled.ToggleSwitchWrapper ref={switchWrapperRef}>
          <Styled.MaterialToggle
            {...rest}
            id={id}
            disabled={disabled}
            {...(focusableWhileDisabled && { onClick: preventToggle })}
            onChange={onChange}
            slotProps={{ ...otherSlotProps, input: inputSlotProps }}
          />
        </Styled.ToggleSwitchWrapper>
        {/* aria-describedby needs the text at all times; Tippy mounts it only while shown. */}
        {tooltipLabel && (
          <span id={tooltipDescriptionId} hidden>{tooltipLabel}</span>
        )}
      </Styled.ToggleWrapper>
      {tooltipLabel && (
        <Tippy
          reference={wrapperRef}
          content={tooltipLabel}
          placement={tooltipPlacement}
          trigger="mouseenter focusin"
          triggerTarget={tooltipTriggers.length > 0 ? tooltipTriggers : null}
          getReferenceClientRect={getTooltipAnchorRect}
          delay={TOOLTIP_DELAY}
          aria={{ content: null }}
        />
      )}
    </>
  );
}

export default Toggle;
