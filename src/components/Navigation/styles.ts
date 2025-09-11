import styled, { css } from 'styled-components';
import { borderRadiusSmall, spacingMedium } from '../../stylesheets/sizing';
import { colorBrand1 } from '../../stylesheets/pallete';
import { StyledIconWrapper } from './types';

export const NavigationButton = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background: transparent;
  border: none;
  cursor: pointer;
  margin: 1px; /* Adds margin to prevent outline from being cropped */
  border-radius: ${borderRadiusSmall};

  &:focus {
    outline: 1px solid ${colorBrand1};
  }
`;

export const IconTextWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: ${spacingMedium};
`;

export const IconWrapper = styled.div<StyledIconWrapper>`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${colorBrand1};

  ${({ $isCustomIcon }) => !$isCustomIcon && css`
    transform: rotate(90deg);
    [dir="rtl"] & {
      transform: rotate(-90deg);
    }
  `}
`;