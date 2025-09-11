import styled, { keyframes, css } from 'styled-components';
import { StyledWrapperProps, StyledSvgProps, StyledPathProps } from './types';
import { colorBrand1 } from '../../stylesheets/pallete';

const rotate = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const dash = keyframes`
  0%   { stroke-dasharray: 1, 200; stroke-dashoffset: 0; }
  50%  { stroke-dasharray: 100, 200; stroke-dashoffset: -15; }
  100% { stroke-dasharray: 100, 200; stroke-dashoffset: -125; }
`;

export const Wrapper = styled.div<StyledWrapperProps>`
  width: ${({ $size }) => typeof $size === 'number' ? `${$size}px` : $size};
  height: ${({ $size }) => typeof $size === 'number' ? `${$size}px` : $size};
  display: inline-grid;
  place-items: center;
`;

export const StyledSvg = styled.svg<StyledSvgProps>`
  width: 100%;
  height: 100%;
  transform-origin: center;
  overflow: visible;
  ${({ $animate }) =>
    $animate && css`
      animation: ${rotate} 1.4s linear infinite;
    `}
`;

export const Path = styled.circle<StyledPathProps>`
  fill: none;
  stroke: ${colorBrand1};
  stroke-width: ${({ $strokeWidth }) => $strokeWidth}px;
  stroke-linecap: round;
  ${({ $animate }) =>
    $animate && css`
      animation: ${dash} 1.4s ease-in-out infinite;
    `}

  ${({ $animate }) =>
    !$animate && css`
      stroke-dasharray: 94.2 31.4;
      stroke-dashoffset: 0;
    `}
`;