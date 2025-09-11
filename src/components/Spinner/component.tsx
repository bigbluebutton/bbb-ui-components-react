import React from 'react';
import * as Styled from './styles';
import { SpinnerProps } from './types';


/**
 * BBBSpinner is a loading spinner component for indicating background activity or loading states.
 *
 * @component
 * @param {number|string} [size=48] - The width and height of the spinner. Accepts a number (pixels) or a CSS string (e.g., '2rem', '24px').
 * @param {number} [strokeWidth=4] - The thickness of the spinner stroke.
 * @param {boolean} [animate=false] - If true, disables the animation.
 * @returns {JSX.Element} The rendered spinner component.
 *
 * @example
 * <BBBSpinner />
 * <BBBSpinner size={32} />
 * <BBBSpinner size="2rem" />
 * <BBBSpinner strokeWidth={2} />
 * <BBBSpinner animate />
 */
const Spinner: React.FC<SpinnerProps> = ({
  size = 48,
  strokeWidth = 4,
  animate = false,
}) => {
  return (
    <Styled.Wrapper $size={size} role="progressbar" aria-label="Loading" aria-busy={!animate}>
      <Styled.StyledSvg viewBox="0 0 50 50" $animate={!animate} focusable="false" aria-hidden="true">
        <Styled.Path
          className="path"
          cx="25"
          cy="25"
          r="20"
          $animate={!animate}
          $strokeWidth={strokeWidth}
        />
      </Styled.StyledSvg>
    </Styled.Wrapper>
  );
};

export default Spinner;
