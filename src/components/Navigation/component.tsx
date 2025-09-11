import React, { JSX } from 'react';
import { NavigationProps } from './types';
import * as Styled from './styles';
import { MdExpandCircleDown } from 'react-icons/md';
import { BBBTypography } from '../Typography';

/**
 * A customizable Navigation component that acts as a button with an icon and a label.
 * It can be used for navigation actions within an application.
 *
 * @param {NavigationProps} props - The props for the Navigation component. See {@link NavigationProps} for more details.
 * @param {string} props.label - The text to be displayed as the label for the navigation button.
 * @param {React.MouseEventHandler<HTMLButtonElement>} props.onClick - The function to be called when the navigation button is clicked.
 * @param {React.KeyboardEventHandler<HTMLButtonElement>} [props.onKeyDown] - The function to be called when a key is pressed down on the navigation button.
 * @param {React.ReactNode} [props.icon] - A custom icon to be displayed. If not provided, a default icon is used.
 * @param {React.ReactNode} [props.children] - The children to be rendered inside the navigation button, typically used for sub-menus or other content.
 * @param {string} [props.ariaLabel] - The accessible name for the navigation button.
 * @param {string} [props.ariaLabelledBy] - The ID of the element that labels the navigation button.
 * @param {string} [props.ariaDescribedBy] - The ID of the element that describes the navigation button.
 * @param {string} [props.dataTest] - The test ID for the navigation button, used for testing purposes.
 * @returns {JSX.Element} The rendered Navigation component.
 */
function Navigation ({
  label,
  onClick,
  onKeyDown,
  icon,
  children,
  ariaLabel,
  ariaLabelledBy,
  ariaDescribedBy,
  dataTest,
}: NavigationProps): JSX.Element {
  const isCustomIcon = !!icon;
  const iconToRender = icon || <MdExpandCircleDown size="1.5rem" />;

  return (
    <Styled.NavigationButton
      onClick={onClick}
      onKeyDown={onKeyDown}
      aria-label={ariaLabel}
      aria-labelledby={ariaLabelledBy}
      aria-describedby={ariaDescribedBy}
      data-test={dataTest}
    >
      <Styled.IconTextWrapper>
        <Styled.IconWrapper $isCustomIcon={isCustomIcon}>
          {iconToRender}
        </Styled.IconWrapper>
        <BBBTypography variant="default">
          {label}
        </BBBTypography>
      </Styled.IconTextWrapper>
      {children}
    </Styled.NavigationButton>
  );
}

export default Navigation;
