import styled, { css } from 'styled-components';
import {
  colorBorderDefault,
  colorBorderSelected,
  colorBorderError,
  colorTextDefault,
  colorTextLight,
  colorError,
  colorSuccess,
} from '../../stylesheets/pallete';
import { borderRadiusDefault, spacingSmall, spacingMedium } from '../../stylesheets/sizing';
import { fontSizeSmall } from '../../stylesheets/typography';
import { StyledContainerProps, StyledHelperTextProps } from './types';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: ${spacingSmall};
`;

export const Label = styled.label`
  color: ${colorTextDefault};
  font-size: ${fontSizeSmall};
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const FieldContainer = styled.div<StyledContainerProps>`
  display: flex;
  align-items: center;
  width: 100%;
  padding: ${spacingSmall} ${spacingMedium};
  gap: ${spacingSmall};
  border-radius: ${borderRadiusDefault};
  border: 1px solid ${colorBorderDefault};
  background-color: transparent;
  box-sizing: border-box;
  transition: border-color 0.15s ease, box-shadow 0.15s ease;

  &:focus-within {
    border-color: ${colorBorderSelected};
    box-shadow: 0 0 0 3px var(--color-border-focus-ring, rgba(29, 101, 212, 0.15));
  }

  ${({ $error }) =>
    $error &&
    css`
      border-color: ${colorBorderError};
    `}

  ${({ $disabled }) =>
    $disabled &&
    css`
      opacity: 0.5;
      cursor: not-allowed;
      pointer-events: none;
    `}
`;

export const TextArea = styled.textarea`
  flex: 1;
  min-width: 0;
  resize: none;
  border: none;
  outline: none;
  background: transparent;
  color: ${colorTextDefault};
  font-family: inherit;
  font-size: ${fontSizeSmall};
  line-height: 1.5;
  padding: 0;

  &::placeholder {
    color: ${colorTextLight};
  }

  &:disabled {
    cursor: not-allowed;
  }

  [dir='rtl'] & {
    text-align: right;
  }
`;

export const HelperText = styled.div<StyledHelperTextProps>`
  color: ${colorTextDefault};
  font-size: ${fontSizeSmall};
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  padding: 0 ${spacingMedium};

  ${({ $success }) =>
    $success &&
    css`
      color: ${colorSuccess};
    `}

  ${({ $error }) =>
    $error &&
    css`
      color: ${colorError};
    `}
`;
