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
 * A versatile Button component that supports multiple layouts and styles.
 *
 * This component can be rendered as a default inline button, a circular icon button, or a stacked
 * button with an icon and label. It's designed to be highly customizable and accessible,
 * integrating with Tippy.js for tooltips.
 *
 * @param {ButtonProps} props The props for the Button component. See {@link ButtonProps} for more details.
 * @param {string} [props.id] The unique identifier for the button.
 * @param {string} [props.dataTest] The 'data-test' attribute for testing purposes.
 * @param {string} [props.label] The text to be displayed on the button.
 * @param {string} [props.tooltipLabel] The text to be displayed in a tooltip on hover.
 * @param {keyof typeof import('./constants')['TOOLTIP_PLACEMENTS']} [props.tooltipPlacement=import('./constants').DEFAULT_TOOLTIP_PLACEMENT] The placement of the tooltip.
 * @param {() => void} [props.onClick] The function to be called when the button is clicked.
 * @param {(event: React.KeyboardEvent<HTMLButtonElement>) => void} [props.onKeyDown] The function to be called when a key is pressed.
 * @param {string} [props.ariaLabel] The ARIA label for accessibility.
 * @param {string} [props.ariaLabelledBy] The ARIA labelledby for accessibility.
  * @param {string} [props.ariaDescribedBy] The ARIA describedby for accessibility.
  * @param {keyof typeof import('./constants')['COLORS']} [props.color=import('./constants').DEFAULT_COLOR] The color of the button.
 * @param {keyof typeof import('./constants')['VARIANTS']} [props.variant=import('./constants').DEFAULT_VARIANT] The variant of the button.
 * @param {keyof typeof import('./constants')['SIZES']} [props.size=import('./constants').DEFAULT_SIZE] The size of the button.
 * @param {keyof typeof import('./constants')['LAYOUTS']} [props.layout=import('./constants').DEFAULT_LAYOUT] The layout of the button.
 * @param {boolean} [props.disabled=false] If `true`, the button will be disabled.
 * @param {React.ReactNode} [props.children] The content of the button, typically used for the 'default' layout.
 * @param {React.ReactNode} [props.icon] The icon to be displayed. Used for 'circle' and 'stacked' layouts.
 * @param {React.ReactNode} [props.iconStart] The icon to be displayed at the start of the button. Used for 'default' layout.
 * @param {React.ReactNode} [props.iconEnd] The icon to be displayed at the end of the button. Used for 'default' layout.
 * @param {React.ReactNode} [props.helperIcon] The auxiliary icon to be displayed. Used for 'stacked' layout.
 * @param {boolean} [props.hideHelperIcon=false] If `true`, the auxiliary icon will be hidden. Used for 'stacked' layout.
 * @param {(event: React.MouseEvent<HTMLDivElement>) => void} [props.helperOnClick] The function to be called when the auxiliary icon is clicked. Used for 'stacked' layout.
 *
 * @returns {JSX.Element} The rendered Button component.
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
