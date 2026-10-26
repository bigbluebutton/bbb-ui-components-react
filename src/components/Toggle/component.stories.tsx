import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import BBBToggle from './component';
import { TEXT_POSITIONS_VALUES, DEFAULT_TEXT_POSITION } from './constants';

const meta = {
  title: 'BBBToggle',
  component: BBBToggle,
  tags: ['autodocs'],
  argTypes: {
    textPosition: {
      control: 'select',
      options: TEXT_POSITIONS_VALUES,
      description: 'Position of label/helper relative to the toggle.',
      table: { defaultValue: { summary: `${DEFAULT_TEXT_POSITION}` } },
    },
    fullWidth: {
      control: 'boolean',
      description: `Stretches the row to its container, putting the text and the switch at opposite ends. Only used with textPosition 'left' or 'right'.`,
      table: { defaultValue: { summary: 'false' } },
    },
    label: {
      control: 'text',
      description: 'Main label text displayed next to the toggle.',
    },
    helperText: {
      control: 'text',
      description: 'Helper text displayed below the label.',
    },
    ariaLabel: {
      control: 'text',
      description: 'Accessible name for the toggle.',
    },
    disabled: {
      control: 'boolean',
      description: 'Disable the toggle when true.',
    },
    onChange: {
      control: false,
      description: 'Change handler fired when toggle state changes.',
    },
  },
} satisfies Meta<typeof BBBToggle>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Basic toggle with only a main label. */
export const Default: Story = { args: { label: 'Enable feature' } };
/** Adds helper text below the label, with the label/helper positioned to the right of the toggle. */
export const WithHelper: Story = { args: { label: 'Enable', helperText: 'Recommended', textPosition: 'right' } };
/** Shows a `fullWidth` toggle in a settings row: label and helper text at the start, switch at the end. */
export const FullWidth: Story = {
  args: {
    label: 'Join muted',
    helperText: 'Joining users are muted by default',
    textPosition: 'left',
    fullWidth: true,
  },
  render: (args) => (
    <div style={{ width: '24rem' }}>
      <BBBToggle {...args} />
    </div>
  ),
};
/** Shows a `fullWidth` toggle with the text on the right: switch at the start, label and helper text at the end. */
export const FullWidthTextRight: Story = {
  ...FullWidth,
  args: { ...FullWidth.args, textPosition: 'right' },
};
