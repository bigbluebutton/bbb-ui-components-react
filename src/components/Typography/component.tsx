import React from 'react';
import { TypographyStyled } from './styles';
import { TypographyProps } from './types';

/**
 * A typography component that standardizes text styles across the app.
 *
 * This component provides multiple semantic variants (header, default, label, helper)
 * and allows overriding the rendered HTML element via the `as` prop.
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
