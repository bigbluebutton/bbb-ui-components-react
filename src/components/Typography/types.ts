import React from 'react';
import { TYPOGRAPHY_VARIANTS } from './constants';

export type TypographyVariants = (typeof TYPOGRAPHY_VARIANTS)[number];

export interface StyledTypography {
  $variant: TypographyVariants;
}

export interface TypographyProps extends React.HTMLAttributes<HTMLElement> {
  /** Text content to render. */
  children: React.ReactNode;

  /** Typography variant (e.g., header, default) controlling the applied text style. @default 'default' */
  variant?: TypographyVariants;

  /** HTML element to render as (e.g., h1, p, span), overriding the variant's default element. */
  as?: React.ElementType;
}
