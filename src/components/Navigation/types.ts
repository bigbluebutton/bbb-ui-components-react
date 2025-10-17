import React from 'react';

export interface StyledIconWrapper {
  $isCustomIcon: boolean;
}

export interface NavigationProps {
  label: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  onKeyDown?: React.KeyboardEventHandler<HTMLButtonElement>;
  icon?: React.ReactNode;
  children?: React.ReactNode;
  ariaLabel?: string;
  ariaLabelledBy?: string;
  ariaDescribedBy?: string;
  dataTest?: string;
}

