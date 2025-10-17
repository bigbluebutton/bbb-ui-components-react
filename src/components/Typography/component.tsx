import React from 'react';
import { TypographyStyled } from './styles';
import { TypographyProps } from './types';

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
