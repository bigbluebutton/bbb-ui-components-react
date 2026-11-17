import React from 'react';
import { SIZE_VALUES, VARIANT_VALUES } from '../Button/constants';
import { StackType } from '../ButtonGroup/types';

type SizeType = typeof SIZE_VALUES[number];
type VariantType = typeof VARIANT_VALUES[number];

export interface SegmentedControlOption<T extends string = string> {
  /** Value passed to `onChange` when this option is picked; must be unique within `options`. */
  value: T;

  /** Text shown on the option's button, also used as its accessible name. */
  label: string;

  /** Icon rendered before the label. */
  iconStart?: React.ReactNode;

  /** Disables only this option. @default false */
  disabled?: boolean;

  /** Value for the option button's `data-test` attribute. */
  dataTest?: string;
}

export interface SegmentedControlProps<T extends string = string> {
  /** Options rendered as buttons, in order. */
  options: SegmentedControlOption<T>[];

  /** Value of the selected option; `null` or a value missing from `options` leaves every option unselected. @default null */
  value?: T | null;

  /** Called with the picked option's value; not called when the already selected option is clicked. */
  onChange: (value: T) => void;

  /** Accessible name for the group; provide this or `ariaLabelledBy`. */
  ariaLabel?: string;

  /** Id of the element that labels the group; provide this or `ariaLabel`. */
  ariaLabelledBy?: string;

  /** When the options leave their single row of equal-width buttons for a stack of full-width ones; see `BBBButtonGroup`'s `stack`. @default 'never' */
  stack?: StackType;

  /** Group width, as a CSS length, below which `stack="width"` stacks the options. @default '20.75rem' */
  stackBelow?: string;

  /** Disables every option; the selected one keeps a faded pressed fill, so the current choice stays visible. @default false */
  disabled?: boolean;

  /** Size of the option buttons. @default 'md' */
  size?: SizeType;

  /** Button variant of the unselected options; the selected one shows BBButton's pressed fill. @default 'secondary' */
  variant?: VariantType;

  /** HTML `id` for the group element. */
  id?: string;

  /** Value for the group's `data-test` attribute. */
  dataTest?: string;

  /** Class name forwarded to the group element, so `styled(BBBSegmentedControl)` works. */
  className?: string;
}
