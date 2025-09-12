import styled, { css } from 'styled-components';
import {
  CSS_COLOR_PROPERTIES,
  CSS_COLOR_PROPERTIES_DISABLED,
  CSS_SIZE_PROPERTIES,
  DEFAULT_COLOR,
  DEFAULT_SIZE,
  DEFAULT_VARIANT,
  VARIANTS,
  LAYOUTS,
} from './constants';
import {
  StyledHelperIconContainer, StyledButtonProps,
  StyledButtonWrapperProps,
} from './type';
import {
  borderRadiusDefault,
  spacingSmall,
} from '../../stylesheets/sizing';
import { colorBorderDefault, colorTextDefault } from '../../stylesheets/pallete';
import { fontSizeSmall } from '../../stylesheets/typography';

const commonButtonStyles = css<StyledButtonProps>`
  cursor: pointer;
  user-select: none;
  font-weight: 600;
  line-height: normal;
  text-align: center;
  white-space: nowrap;
  text-transform: none;
  position: relative;
  transition: opacity 0.2s ease-in-out;

  ${({ $size }) => {
    return CSS_SIZE_PROPERTIES[$size]
      ? `padding: ${CSS_SIZE_PROPERTIES[$size].padding};`
      : `padding: ${CSS_SIZE_PROPERTIES[DEFAULT_SIZE].padding};`;
  }}

  ${({ $color, $variant }) => {
    const safeColor = $color || DEFAULT_COLOR;
    const safeVariant = $variant || DEFAULT_VARIANT;
    const {
      color: contentColor,
      iconColor,
      background,
      border,
      hoverColor,
      hoverBackground,
      hoverBorder,
      outline,
    } = CSS_COLOR_PROPERTIES[safeVariant][safeColor];

    return css`
      & span {
        color: ${contentColor};
      }
      ${iconColor ? `color: ${iconColor}` : `color: ${contentColor}`};
      ${background && `background-color: ${background};`}
      ${border ? `border: 1px solid ${border};` : 'border: none;'}

      &&:hover:not(:has(> [data-is-aux-icon]:hover)),
      &&:active {
        color: ${hoverColor};
        ${hoverBackground && `background-color: ${hoverBackground};`}
        ${hoverBorder ? `border: 1px solid ${hoverBorder};` : 'border: none;'}
      }
      &&:focus {
        border: 1px solid transparent;
        outline: 2px solid ${outline};
      }
    `;
  }}

  ${({ $variant }) =>
    $variant === VARIANTS.SUBTLE &&
    `
    text-decoration: underline;
  `}

  ${({ disabled }) => {
    if (!disabled) return null;
    const { color, background, border, outline } = CSS_COLOR_PROPERTIES_DISABLED;

    return css`
      pointer-events: none;
      cursor: not-allowed;
      & span {
        color: ${color};
      }
      color: ${color};
      ${background ? `background-color: ${background}` : `background-color: none`};
      border: ${border ? `1px solid ${border}` : 'none'};

      &&:hover,
      &&:active {
        color: ${color};
        ${background ? `background-color: ${background}` : `background-color: none`};
        border: ${border ? `1px solid ${border}` : 'none'};
      }
      
      &&:focus {
        outline: 2px solid ${outline};
      }
    `;
  }}
`;

const stackedLayoutStyles = css`
  width: 4.5rem;
  height: 4.5rem;
  border-radius: ${borderRadiusDefault} !important;
  border: 1px solid ${colorBorderDefault} !important;
  padding: ${spacingSmall} !important;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const circleLayoutStyles = css`
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
  aspect-ratio: 1;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const defaultLayoutStyles = css`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: ${spacingSmall};
  border-radius: ${borderRadiusDefault};
`;

export const ButtonWrapper = styled.div<StyledButtonWrapperProps>`
  ${({ $layout }) => $layout === LAYOUTS.STACKED && `
    width: 5rem;
    display: flex;
    flex-direction: column;
    gap: ${spacingSmall};
    align-items: center;
  `}
`;

export const Button = styled.button<StyledButtonProps>`
  ${commonButtonStyles}

  ${({ $layout }) => {
    switch ($layout) {
      case LAYOUTS.STACKED:
        return stackedLayoutStyles;
      case LAYOUTS.CIRCLE:
        return circleLayoutStyles;
      default:
        return defaultLayoutStyles;
    }
  }}
`;

export const HelperIconContainer = styled.div<StyledHelperIconContainer>`
  ${({ $hover, $variant, $color }) => {
    if (!$hover) return null;

    return css`
      &&:hover,
      &&:active {
        ${CSS_COLOR_PROPERTIES[$variant][$color].hoverBackground &&
        `background-color: ${CSS_COLOR_PROPERTIES[$variant][$color].hoverBackground};`}
      }

      &&:focus {
        outline: 1px solid ${CSS_COLOR_PROPERTIES[$variant][$color].outline};
      }
    `;
  }}
  border-radius: 50%;
  padding: 0.2rem;
  position: absolute;
  top: 0.1rem;
  right: 0.1rem;
  & svg {
    font-size: 1.25rem;
  }
`;

export const HelperIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;

  > i {
    font-size: 2rem;
  }
`;

export const ButtonText = styled.div`
  color: ${colorTextDefault};
  font-size: ${fontSizeSmall};
  width: 100%;
  text-align: center;
  line-height: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;
