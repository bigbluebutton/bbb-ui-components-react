import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { MdTimer, MdAvTimer } from 'react-icons/md';
import BBBSegmentedControl from './component';
import { SegmentedControlProps } from './types';
import { DEFAULT_VARIANT } from './constants';
import { STACK_VALUES, DEFAULT_STACK, DEFAULT_STACK_BELOW } from '../ButtonGroup/constants';
import { SIZE_VALUES, VARIANT_VALUES, DEFAULT_SIZE } from '../Button/constants';

const TIMER_OPTIONS = [
  { value: 'timer', label: 'Timer', iconStart: <MdAvTimer size="1.25rem" /> },
  { value: 'stopwatch', label: 'Stopwatch', iconStart: <MdTimer size="1.25rem" /> },
];

const RESPONSE_TYPE_OPTIONS = [
  { value: 'tf', label: 'True / False' },
  { value: 'a4', label: 'A / B / C / D' },
  { value: 'yna', label: 'Yes / No / Abstention' },
  { value: 'response', label: 'User response' },
];

function ControlledSegmentedControl(args: SegmentedControlProps) {
  const { value: initialValue, onChange } = args;
  const [value, setValue] = useState(initialValue);

  return (
    <BBBSegmentedControl
      {...args}
      value={value}
      onChange={(newValue) => {
        setValue(newValue);
        onChange(newValue);
      }}
    />
  );
}

const meta = {
  title: 'BBBSegmentedControl',
  component: BBBSegmentedControl,
  tags: ['autodocs'],
  argTypes: {
    options: {
      control: 'object',
      description: 'Options rendered as buttons, in order. Each option has a `value`, a `label`, and optionally `iconStart`, `disabled` and `dataTest`.',
    },
    value: {
      control: 'text',
      description: 'Value of the selected option; `null` or a value missing from `options` leaves every option unselected.',
      table: { defaultValue: { summary: 'null' } },
    },
    onChange: {
      control: false,
      description: 'Called with the picked option\'s value; not called when the already selected option is clicked.',
    },
    ariaLabel: {
      control: 'text',
      description: 'Accessible name for the group; provide this or `ariaLabelledBy`.',
    },
    ariaLabelledBy: {
      control: 'text',
      description: 'Id of the element that labels the group; provide this or `ariaLabel`.',
    },
    stack: {
      control: 'select',
      options: STACK_VALUES,
      description: `When the options leave their single row of equal-width buttons for a stack of full-width ones; see BBBButtonGroup's \`stack\`. Allowed values: ${STACK_VALUES.join(', ')}.`,
      table: { defaultValue: { summary: DEFAULT_STACK } },
    },
    stackBelow: {
      control: 'text',
      description: 'Group width, as a CSS length, below which `stack="width"` stacks the options.',
      table: { defaultValue: { summary: DEFAULT_STACK_BELOW } },
    },
    disabled: {
      control: 'boolean',
      description: 'Disables every option; the selected one keeps a faded pressed fill, so the current choice stays visible.',
      table: { defaultValue: { summary: 'false' } },
    },
    size: {
      control: 'select',
      options: SIZE_VALUES,
      description: `Size of the option buttons. Allowed values: ${SIZE_VALUES.join(', ')}.`,
      table: { defaultValue: { summary: DEFAULT_SIZE } },
    },
    variant: {
      control: 'select',
      options: VARIANT_VALUES,
      description: `Button variant of the unselected options; the selected one shows BBButton's pressed fill. Allowed values: ${VARIANT_VALUES.join(', ')}.`,
      table: { defaultValue: { summary: DEFAULT_VARIANT } },
    },
    id: {
      control: 'text',
      description: 'HTML `id` for the group element.',
    },
    dataTest: {
      control: 'text',
      description: 'Value for the group\'s `data-test` attribute.',
    },
    className: {
      control: false,
      description: 'Class name forwarded to the group element, so `styled(BBBSegmentedControl)` works.',
    },
  },
  args: {
    onChange: fn(),
  },
  decorators: [
    (Story) => (
      <div style={{ width: '20rem' }}>
        <Story />
      </div>
    ),
  ],
  render: (args) => <ControlledSegmentedControl {...args} />,
} satisfies Meta<typeof BBBSegmentedControl>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Two options side by side, like the timer panel's Timer/Stopwatch switch; clicking an option selects it. */
export const Default: Story = {
  args: {
    ariaLabel: 'Timer mode',
    options: TIMER_OPTIONS,
    value: 'timer',
  },
};

/** Options always stacked at full width with nothing selected yet, like the poll panel's response types. */
export const Stacked: Story = {
  args: {
    ariaLabel: 'Response type',
    stack: 'always',
    options: RESPONSE_TYPE_OPTIONS,
    value: null,
  },
};

/** The whole group disabled, as when the timer is running; the selected option stays visible. */
export const Disabled: Story = {
  args: {
    ariaLabel: 'Timer mode',
    options: TIMER_OPTIONS,
    value: 'timer',
    disabled: true,
  },
};

/** A single option disabled while the others stay selectable. */
export const DisabledOption: Story = {
  name: 'Disabled Option',
  args: {
    ariaLabel: 'Response type',
    stack: 'always',
    options: RESPONSE_TYPE_OPTIONS.map((option) => (
      option.value === 'response' ? { ...option, disabled: true } : option
    )),
    value: 'tf',
  },
};
