import React from 'react';
import { TypographyStyled } from './styles';
import { TypographyProps } from './types';

/**
 * A typography component that standardizes text styles across the app.
 *
 * Each variant applies a text style from the tokens, and a text color. It renders a `p`, unless the `as` prop
 * says otherwise.
 *
 */
const Typography: React.FC<TypographyProps> = ({
  children,
  variant = 'default',
  as,
  ...props
}) => {
  return (
    <TypographyStyled as={as} $variant={variant} {...props}>
      {children}
    </TypographyStyled>
  );
};

export default Typography;
