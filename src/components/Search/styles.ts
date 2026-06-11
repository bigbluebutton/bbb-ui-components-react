import styled, { css } from 'styled-components';
import {
  colorBorderDefault,
  colorBorderSelected,
  colorTextDefault,
  colorTextLight,
  colorIconDefault,
  colorIconBlue,
  colorBrand1,
} from '../../stylesheets/pallete';
import {
  spacingSmall,
  spacingMedium,
  borderRadiusDefault,
} from '../../stylesheets/sizing';
import { fontSizeSmall } from '../../stylesheets/typography';

interface ContainerProps {
  $disabled?: boolean;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  align-items: center;
  position: relative;
  width: 100%;
  height: 2.5rem;
  padding: ${spacingSmall} ${spacingMedium};
  gap: ${spacingSmall};
  border-radius: ${borderRadiusDefault};
  border: 1px solid ${colorBorderDefault};
  background-color: transparent;
  box-sizing: border-box;
  cursor: text;
  transition: border-color 0.15s ease, box-shadow 0.15s ease;

  &:focus-within {
    border-color: ${colorBorderSelected};
    box-shadow: 0 0 0 3px var(--color-border-focus-ring, rgba(29, 101, 212, 0.15));
  }

  ${({ $disabled }) =>
    $disabled &&
    css`
      opacity: 0.5;
      cursor: not-allowed;
      pointer-events: none;
    `}
`;

export const SearchIconWrapper = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  color: ${colorIconDefault};
  width: 1rem;
  height: 1rem;
`;

export const StyledInput = styled.input`
  flex: 1;
  min-width: 0;
  border: none;
  outline: none;
  background: transparent;
  color: ${colorTextDefault};
  font-size: ${fontSizeSmall};
  line-height: 1.5;
  padding: 0;

  &::placeholder {
    color: ${colorTextLight};
  }

  &:disabled {
    cursor: not-allowed;
  }

  &::-webkit-search-decoration,
  &::-webkit-search-cancel-button,
  &::-webkit-search-results-button,
  &::-webkit-search-results-decoration {
    -webkit-appearance: none;
    appearance: none;
    display: none;
  }

  [dir='rtl'] & {
    text-align: right;
  }
`;

export const ActionWrapper = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 1rem;
  height: 1rem;
  color: ${colorBrand1};
`;

export const ClearButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  width: 1rem;
  height: 1rem;
  color: ${colorIconDefault};
  line-height: 1;
  transition: color 0.1s ease;

  &:hover {
    color: ${colorIconBlue};
  }

  &:focus-visible {
    outline: 2px solid ${colorBorderSelected};
    outline-offset: 2px;
    border-radius: 2px;
  }
`;
