import React from 'react';
import * as Styled from './styles';
import { SpinnerProps } from './types';


/**
 * A customizable spinner component.
 *
 * This component provides a small, configurable loading indicator for background activity or loading states.
 *
 */
const Spinner: React.FC<SpinnerProps> = ({
  size = 48,
  strokeWidth = 4,
  animate = true,
}) => {
  return (
    <Styled.Wrapper $size={size} role="progressbar" aria-label="Loading" aria-busy={animate}>
      <Styled.StyledSvg viewBox="0 0 50 50" $animate={animate} focusable="false" aria-hidden="true">
        <Styled.Path
          className="path"
          cx="25"
          cy="25"
          r="20"
          $animate={animate}
          $strokeWidth={strokeWidth}
        />
      </Styled.StyledSvg>
    </Styled.Wrapper>
  );
};

export default Spinner;
