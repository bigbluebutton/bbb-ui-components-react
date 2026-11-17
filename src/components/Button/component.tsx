import React, {
  JSX, useCallback, useEffect, useId, useRef, useState,
} from 'react';
import { MdSettings, MdCheckCircle } from 'react-icons/md';
import { ButtonProps } from './type';
import {
  DEFAULT_VARIANT,
  DEFAULT_COLOR,
  DEFAULT_SIZE,
  DEFAULT_LAYOUT,
  LAYOUTS,
  DEFAULT_TOOLTIP_PLACEMENT,
  DEFAULT_TYPE,
  DEFAULT_LABEL_OVERFLOW,
  LABEL_OVERFLOWS,
} from './constants';
import * as Styled from './styles';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { TOOLTIP_PLUGINS } from '../../utils/tooltip';

/**
 * A versatile Button component.
 *
 * This component provides a configurable button that can be rendered as a default inline
 * button, a circular icon button, or a stacked button with an icon and label. It is designed
 * to be highly customizable and accessible, integrating with Tippy.js for tooltips.
 *
 */
function Button(props: ButtonProps): JSX.Element {
  const {
    id = '',
    dataTest,
    label,
    tooltipLabel,
    tooltipPlacement = DEFAULT_TOOLTIP_PLACEMENT,
    onClick,
    onKeyDown,
    ariaLabel = '',
    ariaLabelledBy = '',
    ariaDescribedBy = '',
    color = DEFAULT_COLOR,
    variant = DEFAULT_VARIANT,
    size = DEFAULT_SIZE,
    layout = DEFAULT_LAYOUT,
    type = DEFAULT_TYPE,
    disabled = false,
    children,
    showFeedback = false,
    feedbackContent = <MdCheckCircle fontSize="small" />,
    feedbackDuration = 2000,
    className,
  } = props;

  const labelOverflow = (layout === LAYOUTS.DEFAULT && 'labelOverflow' in props && props.labelOverflow)
    || DEFAULT_LABEL_OVERFLOW;
  const truncatesLabel = labelOverflow === LABEL_OVERFLOWS.ELLIPSIS;

  const feedbackTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [isFeedbackVisible, setFeedbackVisible] = useState(false);

  useEffect(() => () => {
    if (feedbackTimeoutRef.current) clearTimeout(feedbackTimeoutRef.current);
  }, []);

  // A natively disabled button leaves the tab order, so keyboard users could never reach the
  // tooltip that explains why it is disabled. With a tooltip, the button stays focusable and is
  // announced through aria-disabled instead, and its clicks (including Enter, Space and form
  // submission) are cancelled here.
  const focusableWhileDisabled = Boolean(disabled && tooltipLabel);

  const handleClick: React.MouseEventHandler<HTMLButtonElement> = useCallback((event) => {
    if (focusableWhileDisabled) {
      event.preventDefault();
      return;
    }

    onClick(event);

    if (showFeedback) {
      setFeedbackVisible(true);
      if (feedbackTimeoutRef.current) clearTimeout(feedbackTimeoutRef.current);
      feedbackTimeoutRef.current = setTimeout(() => setFeedbackVisible(false), feedbackDuration);
    }
  }, [focusableWhileDisabled, onClick, showFeedback, feedbackDuration]);

  const labelRef = useRef<HTMLSpanElement>(null);
  const [isLabelTruncated, setLabelTruncated] = useState(false);

  useEffect(() => {
    const labelElement = labelRef.current;
    if (!truncatesLabel || !labelElement || typeof ResizeObserver === 'undefined') {
      setLabelTruncated(false);
      return undefined;
    }

    const observer = new ResizeObserver(() => {
      setLabelTruncated(labelElement.scrollWidth > labelElement.clientWidth);
    });
    observer.observe(labelElement);
    return () => observer.disconnect();
  }, [truncatesLabel, label, isFeedbackVisible]);

  const accessibilityProps: {
    'aria-label'?: string;
    'aria-labelledby'?: string;
    'aria-describedby'?: string;
  } = {};
  const generatedId = useId();
  const defaultLabelId = `${id || generatedId}-label`;
  const tooltipDescriptionId = `${id || generatedId}-tooltip`;
  // Only default aria-labelledby to defaultLabelId when an element with that id is
  // actually rendered (stacked always renders ButtonText; default when labeled, or
  // when the feedback content is taking the label's place). circle never renders a
  // label element, so it must rely on aria-label instead — otherwise aria-labelledby
  // would point at a non-existent id.
  const hasRenderedLabelElement = layout === LAYOUTS.STACKED
    || (layout === LAYOUTS.DEFAULT && (Boolean(label) || isFeedbackVisible));
  accessibilityProps['aria-label'] = ariaLabel || label;
  if (ariaLabelledBy) {
    accessibilityProps['aria-labelledby'] = ariaLabelledBy;
  } else if (hasRenderedLabelElement) {
    accessibilityProps['aria-labelledby'] = defaultLabelId;
  }
  const describedBy = [ariaDescribedBy, tooltipLabel && tooltipDescriptionId].filter(Boolean).join(' ');
  if (describedBy) accessibilityProps['aria-describedby'] = describedBy;

  const disabledProps = {
    disabled: disabled && !focusableWhileDisabled,
    'aria-disabled': focusableWhileDisabled || undefined,
  };

  // aria-describedby needs the text at all times; Tippy mounts it only while shown.
  const tooltipDescription = tooltipLabel && (
    <span id={tooltipDescriptionId} hidden>{tooltipLabel}</span>
  );

  const buttonElement = (() => {
    if (props.layout === LAYOUTS.CIRCLE || props.layout === LAYOUTS.SQUARED) {
      const { icon } = props;
      const testId = dataTest || `button-${id || 'default'}`;

      return (
        <Styled.Button
          id={id}
          className={className}
          type={type}
          data-test={testId}
          onClick={handleClick}
          onKeyDown={onKeyDown}
          {...accessibilityProps}
          $color={color}
          $variant={variant}
          $size={size}
          $layout={layout}
          {...disabledProps}
        >
          {isFeedbackVisible ? (
            <Styled.FeedbackContent role="status" aria-live="polite">
              {feedbackContent}
            </Styled.FeedbackContent>
          ) : icon}
          {tooltipDescription}
        </Styled.Button>
      );
    }

    if (props.layout === LAYOUTS.STACKED) {
      const {
        icon,
        helperIcon = <MdSettings fontSize="small" />,
        hideHelperIcon = false,
        helperOnClick = null,
      } = props;
      const testId = dataTest || `${LAYOUTS.STACKED}-button-${id || label || 'default'}`;

      return (
        <Styled.ButtonWrapper
          className={className}
          data-test={testId}
          $layout={layout}
        >
          <Styled.Button
            id={id}
            type={type}
            onClick={handleClick}
            onKeyDown={onKeyDown}
            {...accessibilityProps}
            $color={color}
            $variant={variant}
            $size={size}
            $layout={layout}
            {...disabledProps}
          >
            {!hideHelperIcon && (
              <Styled.HelperIconContainer
                // Add this property only when there is a onClick function for the auxiliary icon.
                // It controls whether the auxiliary button is going to have an independent hover state.
                {...(helperOnClick && { 'data-is-aux-icon': true })}
                {...(helperOnClick && { 'aria-label': accessibilityProps['aria-label'] + ' helper' })}
                {...(helperOnClick && { role: "button" })}
                $hover={helperOnClick !== null && !disabled}
                $color={color}
                $variant={variant}
                onClick={(event) => {
                  if (helperOnClick && !disabled) {
                    helperOnClick(event);
                    event.preventDefault();
                    event.stopPropagation();
                  }
                }}
              >
                <Styled.HelperIcon>{helperIcon}</Styled.HelperIcon>
              </Styled.HelperIconContainer>
            )}
            {isFeedbackVisible ? (
              <Styled.IconWrapper>
                <Styled.FeedbackContent role="status" aria-live="polite">
                  {feedbackContent}
                </Styled.FeedbackContent>
              </Styled.IconWrapper>
            ) : (icon && <Styled.IconWrapper>{icon}</Styled.IconWrapper>)}
            {tooltipDescription}
          </Styled.Button>
          <Styled.ButtonText id={defaultLabelId}>{label}</Styled.ButtonText>
        </Styled.ButtonWrapper>
      );
    }

    const { iconStart, iconEnd, fullWidth = false } = props;
    const testId = dataTest || `button-${id || label || 'default'}`;

    return (
      <Styled.Button
        id={id}
        className={className}
        type={type}
        data-test={testId}
        onClick={handleClick}
        onKeyDown={onKeyDown}
        {...accessibilityProps}
        $color={color}
        $variant={variant}
        $size={size}
        $layout={layout}
        $fullWidth={fullWidth}
        $labelOverflow={labelOverflow}
        {...disabledProps}
      >
        {isFeedbackVisible ? (
          <Styled.FeedbackContent id={defaultLabelId} role="status" aria-live="polite">
            {feedbackContent}
          </Styled.FeedbackContent>
        ) : (
          <>
            {iconStart && iconStart}
            {label && (
              <Styled.Label id={defaultLabelId} ref={labelRef} $truncate={truncatesLabel}>
                {label}
              </Styled.Label>
            )}
            {children}
            {iconEnd && iconEnd}
          </>
        )}
        {tooltipDescription}
      </Styled.Button>
    );
  })();

  const showsTruncatedLabelTooltip = !tooltipLabel && truncatesLabel && Boolean(label);

  if (tooltipLabel || showsTruncatedLabelTooltip) {
    return (
      <Tippy
        content={tooltipLabel || label}
        placement={tooltipPlacement}
        plugins={TOOLTIP_PLUGINS}
        disabled={showsTruncatedLabelTooltip && !isLabelTruncated}
        // In the 'stacked' layout the reference is the wrapper, which focus never lands on;
        // `focusin` bubbles up from the button, Tippy's `focus` would not.
        trigger="mouseenter focusin"
        // The button is already described by `tooltipDescription`, and the truncated-label
        // tooltip repeats its accessible name, so Tippy must not add aria-describedby.
        aria={{ content: null }}
      >
        {buttonElement}
      </Tippy>
    );
  }

  return buttonElement;
}

export default Button;
