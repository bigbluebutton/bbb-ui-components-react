import React, { JSX } from 'react';
import { NavigationProps } from './types';
import * as Styled from './styles';
import { MdExpandCircleDown } from 'react-icons/md';
import { BBBTypography } from '../Typography';

/**
 * A customizable Navigation component that acts as a button with an icon and a label.
 * It can be used for navigation actions within an application.
 *
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
