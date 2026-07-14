export interface StyledWrapperProps {
  $size: number | string;
}

export interface StyledSvgProps {
  $animate: boolean;
}

export interface StyledPathProps {
  $animate: boolean;
  $strokeWidth: number;
}

export interface SpinnerProps {
  /** Width/height of the spinner (number in px or CSS string, e.g. '2rem'). @default 48 */
  size?: number | string;

  /** Thickness of the spinner stroke. @default 4 */
  strokeWidth?: number;

  /** When false, disables the rotation animation. @default true */
  animate?: boolean;
}
