import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { MdBrightnessLow, MdBrightnessHigh } from 'react-icons/md';
import BBBSlider from './component';
import { VALUE_LABEL_DISPLAY_VALUES, DEFAULT_VALUE_LABEL_DISPLAY } from './constants';

const meta = {
  title: 'BBBSlider',
  component: BBBSlider,
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
      description: 'Main label text displayed above the slider.',
    },
    helperText: {
      control: 'text',
      description: 'Helper text displayed below the label.',
    },
    min: {
      control: 'number',
      description: 'Minimum allowed value.',
    },
    max: {
      control: 'number',
      description: 'Maximum allowed value.',
    },
    step: {
      control: 'number',
      description: 'Granularity the value can move by; use null with marks to snap to them.',
    },
    marks: {
      control: 'object',
      description: 'Marks to render on the track; true spreads them by step, or pass an array with labels.',
    },
    showMarkTicks: {
      control: 'boolean',
      description: 'Renders the tick dots of `marks`; set to false to keep the mark labels only.',
      table: { defaultValue: { summary: 'true' } },
    },
    animate: {
      control: 'boolean',
      description: 'Enables transitions and hover/drag visual effects; set to false for instant state changes.',
      table: { defaultValue: { summary: 'true' } },
    },
    valueLabelDisplay: {
      control: 'select',
      options: VALUE_LABEL_DISPLAY_VALUES,
      description: 'Controls when the value tooltip is shown.',
      table: { defaultValue: { summary: `${DEFAULT_VALUE_LABEL_DISPLAY}` } },
    },
    iconStart: {
      control: false,
      description: 'Decorative node rendered at the minimum end of the track.',
    },
    iconEnd: {
      control: false,
      description: 'Decorative node rendered at the maximum end of the track.',
    },
    valueLabelFormat: {
      control: false,
      description: 'Formats the value shown in the tooltip; receives the raw value.',
    },
    getAriaValueText: {
      control: false,
      description: 'Returns the text screen readers announce for the current value.',
    },
    disabled: {
      control: 'boolean',
      description: 'Disable the slider when true.',
    },
    dataTest: {
      control: 'text',
      description: 'Value for the data-test attribute on the root; the range input gets `${dataTest}-input`.',
    },
    ariaLabel: {
      control: 'text',
      description: 'Accessible name for the slider.',
    },
    onChange: {
      control: false,
      description: 'Change handler fired continuously while the user drags or presses a key.',
    },
    onChangeCommitted: {
      control: false,
      description: 'Change handler fired once, when the interaction ends.',
    },
  },
} satisfies Meta<typeof BBBSlider>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Bare slider with no label, covering the default 0-100 range. */
export const Default: Story = {
  args: { defaultValue: 50, ariaLabel: 'Volume' },
};

/** Visible label and helper text; clicking the label focuses the slider. */
export const WithLabel: Story = {
  args: { label: 'Brightness', helperText: 'Applies to the whole image', defaultValue: 50 },
};

/** Disabled state, which keeps the label readable but blocks interaction. */
export const Disabled: Story = {
  args: { label: 'Brightness', defaultValue: 50, disabled: true },
};

/** Decorative icons at both ends, the brightness pattern where the number itself is irrelevant. */
export const WithIcons: Story = {
  args: {
    label: 'Brightness',
    iconStart: <MdBrightnessLow />,
    iconEnd: <MdBrightnessHigh />,
    valueLabelDisplay: 'off',
    min: -100,
    max: 100,
    defaultValue: 0,
    ariaLabel: 'Camera brightness',
  },
};

/** Discrete stages with labelled marks, snapping to each step. */
export const WithMarks: Story = {
  args: {
    label: 'Webcam grid size',
    min: 1,
    max: 4,
    step: 1,
    marks: [
      { value: 1, label: '1x1' },
      { value: 2, label: '2x2' },
      { value: 3, label: '3x3' },
      { value: 4, label: '4x4' },
    ],
    defaultValue: 2,
    valueLabelDisplay: 'off',
    ariaLabel: 'Webcam grid size',
  },
  decorators: [
    (StoryComponent) => (
      <div style={{ paddingLeft: '1.5rem', paddingRight: '1.5rem' }}>
        <StoryComponent />
      </div>
    ),
  ],
};

/** Mark labels without the tick dots, reproducing the camera modal's -100/0/100 scale. */
export const MarksWithoutTicks: Story = {
  args: {
    label: 'Brightness',
    min: -100,
    max: 100,
    showMarkTicks: false,
    marks: [
      { value: -100, label: '-100' },
      { value: 0, label: '0' },
      { value: 100, label: '100' },
    ],
    defaultValue: 0,
    ariaLabel: 'Camera brightness',
  },
  decorators: [
    (StoryComponent) => (
      <div style={{ paddingLeft: '1.5rem', paddingRight: '1.5rem' }}>
        <StoryComponent />
      </div>
    ),
  ],
};

/** Tooltip pinned open, for cases where the number must stay visible while adjusting. */
export const ValueLabelAlwaysOn: Story = {
  args: { label: 'Volume', defaultValue: 70, valueLabelDisplay: 'on', ariaLabel: 'Volume' },
};

/** Percentage formatting through valueLabelFormat, the volume pattern where the number matters. */
export const PercentageFormat: Story = {
  args: {
    label: 'Volume',
    defaultValue: 70,
    valueLabelDisplay: 'on',
    valueLabelFormat: (value: number) => `${value}%`,
    getAriaValueText: (value: number) => `${value} percent`,
    ariaLabel: 'Volume',
  },
};

/** Stored value and displayed value differ: the range is 0-200 but the user sees -100 to 100. */
export const OffsetFormat: Story = {
  args: {
    label: 'Brightness',
    min: 0,
    max: 200,
    defaultValue: 100,
    valueLabelDisplay: 'on',
    valueLabelFormat: (value: number) => `${value - 100}`,
    getAriaValueText: (value: number) => `${value - 100}`,
    ariaLabel: 'Camera brightness',
  },
};

/** Animation disabled: dragging the thumb and viewing the tooltip show no transitions or hover glow. */
export const WithoutAnimation: Story = {
  args: {
    label: 'Volume',
    defaultValue: 70,
    valueLabelDisplay: 'on',
    animate: false,
    ariaLabel: 'Volume',
  },
};

/** Same slider under a right-to-left ancestor: the track fills from the right. */
export const RightToLeft: Story = {
  args: {
    label: 'Brightness',
    min: -100,
    max: 100,
    defaultValue: 50,
    valueLabelDisplay: 'on',
    ariaLabel: 'Camera brightness',
  },
  decorators: [
    (StoryComponent) => (
      <div dir="rtl">
        <StoryComponent />
      </div>
    ),
  ],
};
