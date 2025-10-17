import React from 'react';
import { TYPOGRAPHY_VARIANTS } from './constants';

export type TypographyVariants = (typeof TYPOGRAPHY_VARIANTS)[number];

export interface StyledTypography {
  $variant: TypographyVariants;
}

export interface TypographyProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  variant?: TypographyVariants;
  as?: React.ElementType;
}
