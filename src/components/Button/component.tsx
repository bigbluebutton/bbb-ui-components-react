import React, { JSX, useId } from 'react';
import { MdSettings } from 'react-icons/md';
import { ButtonProps } from './type';
import {
  DEFAULT_VARIANT,
  DEFAULT_COLOR,
  DEFAULT_SIZE,
  DEFAULT_LAYOUT,
  LAYOUTS,
  DEFAULT_TOOLTIP_PLACEMENT,
} from './constants';
import * as Styled from './styles';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

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
    disabled = false,
    children,
  } = props;

  const accessibilityProps: {
    'aria-label'?: string;
    'aria-labelledby'?: string;
    'aria-describedby'?: string;
  } = {};
  const generatedId = useId();
  const defaultLabelId = `${id || generatedId}-label`;
  accessibilityProps['aria-label'] = ariaLabel || label;
  accessibilityProps['aria-labelledby'] = ariaLabelledBy || defaultLabelId;
  if (ariaDescribedBy) accessibilityProps['aria-describedby'] = ariaDescribedBy;

  const buttonElement = (() => {
    if (props.layout === LAYOUTS.CIRCLE) {
      const { icon } = props;
      const testId = dataTest || `button-${id || 'default'}`;

      return (
        <Styled.Button
          id={id}
          data-test={testId}
          onClick={onClick}
          onKeyDown={onKeyDown}
          {...accessibilityProps}
          $color={color}
          $variant={variant}
          $size={size}
          $layout={layout}
          disabled={disabled}
        >
          {icon}
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
        <Styled.ButtonWrapper data-test={testId} $layout={layout}>
          <Styled.Button
            id={id}
            onClick={onClick}
            onKeyDown={onKeyDown}
            {...accessibilityProps}
            $color={color}
            $variant={variant}
            $size={size}
            $layout={layout}
            disabled={disabled}
          >
            {!hideHelperIcon && (
              <Styled.HelperIconContainer
                // Add this property only when there is a onClick function for the auxiliary icon.
                // It controls whether the auxiliary button is going to have an independent hover state.
                {...(helperOnClick && { 'data-is-aux-icon': true })}
                {...(helperOnClick && { 'aria-label': accessibilityProps['aria-label'] + ' helper' })}
                {...(helperOnClick && { role: "button" })}
                $hover={helperOnClick !== null}
                $color={color}
                $variant={variant}
                onClick={(event) => {
                  if (helperOnClick) {
                    helperOnClick(event);
                    event.preventDefault();
                    event.stopPropagation();
                  }
                }}
              >
                <Styled.HelperIcon>{helperIcon}</Styled.HelperIcon>
              </Styled.HelperIconContainer>
            )}
            {icon && <Styled.IconWrapper>{icon}</Styled.IconWrapper>}
          </Styled.Button>
          <Styled.ButtonText id={defaultLabelId}>{label}</Styled.ButtonText>
        </Styled.ButtonWrapper>
      );
    }

    const { iconStart, iconEnd } = props;
    const testId = dataTest || `button-${id || label || 'default'}`;

    return (
      <Styled.Button
        id={id}
        data-test={testId}
        onClick={onClick}
        onKeyDown={onKeyDown}
        {...accessibilityProps}
        $color={color}
        $variant={variant}
        $size={size}
        $layout={layout}
        disabled={disabled}
      >
        {iconStart && iconStart}
        {label && <span id={defaultLabelId}>{label}</span>}
        {children}
        {iconEnd && iconEnd}
      </Styled.Button>
    );
  })();

  if (tooltipLabel) {
    return (
      <Tippy
        content={tooltipLabel}
        placement={tooltipPlacement}
      >
        {buttonElement}
      </Tippy>
    );
  }

  return buttonElement;
}

export default Button;
