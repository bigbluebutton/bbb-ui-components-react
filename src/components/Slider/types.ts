import React from 'react';
import { SliderProps as MuiSliderProps } from '@mui/material';
import { VALUE_LABEL_DISPLAY_VALUES } from './constants';

export type ValueLabelDisplay = typeof VALUE_LABEL_DISPLAY_VALUES[number];

export interface StyledSliderRowProps {
  $showMarkTicks: boolean;
  $animate: boolean;
  $isRtl: boolean;
}

export interface StyledSliderWrapperProps {
  $valueLabelSpace: boolean;
}

export interface SliderProps extends Omit<MuiSliderProps,
  'orientation' | 'value' | 'defaultValue' | 'onChange' | 'onChangeCommitted' | 'valueLabelDisplay'
> {
  /** Main label text displayed above the slider. */
  label?: string;

  /** Helper text displayed below the label. */
  helperText?: string;

  /** Current value; providing it makes the slider controlled. */
  value?: number;

  /** Initial value used while the slider is uncontrolled. */
  defaultValue?: number;

  /** Change handler fired continuously while the user drags or presses a key. */
  onChange?: (event: Event, value: number) => void;

  /** Change handler fired once, when the interaction ends; prefer it for expensive updates. */
  onChangeCommitted?: (event: React.SyntheticEvent | Event, value: number) => void;

  /** Decorative node rendered at the minimum end of the track. */
  iconStart?: React.ReactNode;

  /** Decorative node rendered at the maximum end of the track. */
  iconEnd?: React.ReactNode;

  /** Controls when the value tooltip is shown. @default 'auto' */
  valueLabelDisplay?: ValueLabelDisplay;

  /** Renders the tick dots of `marks`; set to false to keep the mark labels only. @default true */
  showMarkTicks?: boolean;

  /** Enables transitions and hover/drag visual effects; set to false for instant state changes. @default true */
  animate?: boolean;

  /** HTML `id` applied to the underlying range input; auto-generated via `useId` when omitted. */
  id?: string;

  /** Value for the `data-test` attribute on the root; the range input gets `${dataTest}-input`. */
  dataTest?: string;

  /** Accessible name for the slider. */
  ariaLabel?: string;

  /** ID of the element that labels the slider; ignored when `ariaLabel` is set, and falls back to the rendered label's id when omitted. */
  ariaLabelledBy?: string;

  /** ID of the element that describes the slider; falls back to the rendered helper text's id when omitted. */
  ariaDescribedBy?: string;
}
