import React from 'react';
import { STACK_VALUES } from './constants';

export type StackType = typeof STACK_VALUES[number];

export type ButtonsLayoutType = 'row' | 'column' | 'stackBelow';

export interface StyledButtonsProps {
  $layout: ButtonsLayoutType;
  $stackBelow: string;
}

export interface ButtonGroupProps {
  /** Buttons to lay out, usually `BBButton`s; each one becomes a slot of the group. */
  children: React.ReactNode;

  /** When the buttons leave their single row of equal-width buttons for a stack of full-width ones: `never`, `always`, `width` once the group is narrower than `stackBelow`, or `overflow` once any button no longer fits its share of the row. @default 'never', or 'width' when `footer` is set */
  stack?: StackType;

  /** Group width, as a CSS length, below which `stack="width"` stacks the buttons. @default '20.75rem' */
  stackBelow?: string;

  /** Renders a divider above the buttons, for the footer of a side panel. @default false */
  footer?: boolean;

  /** HTML `id` for the group element. */
  id?: string;

  /** Value for the group's `data-test` attribute. */
  dataTest?: string;

  /** Class name forwarded to the group element, so `styled(BBBButtonGroup)` works. */
  className?: string;
}
