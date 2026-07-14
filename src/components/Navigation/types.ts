import React from 'react';

export interface StyledIconWrapper {
  $isCustomIcon: boolean;
}

export interface NavigationProps {
  /** Text label displayed inside the navigation button. */
  label: string;

  /** Click handler fired when the navigation button is activated. */
  onClick: React.MouseEventHandler<HTMLButtonElement>;

  /** Keyboard keydown handler for the navigation button. */
  onKeyDown?: React.KeyboardEventHandler<HTMLButtonElement>;

  /** Optional custom icon node. If omitted, a default icon is displayed. */
  icon?: React.ReactNode;

  /** Optional children (e.g., sub-menus) rendered within the button. */
  children?: React.ReactNode;

  /** Accessible name for the navigation button. */
  ariaLabel?: string;

  /** ID of the element that labels the navigation button. */
  ariaLabelledBy?: string;

  /** ID of the element that describes the navigation button. */
  ariaDescribedBy?: string;

  /** Test id used for automated tests. */
  dataTest?: string;
}

