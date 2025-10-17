import type { Meta, StoryObj } from '@storybook/react';
import BBBCheckbox from './component';
import { LAYOUT_VALUES, DEFAULT_LAYOUT } from './constants';

const meta = {
  title: 'BBBCheckbox',
  component: BBBCheckbox,
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
      description: 'Text label displayed next to the checkbox.',
    },
    layout: {
      control: 'select',
      options: LAYOUT_VALUES,
      description: 'Position of the label relative to the checkbox.',
      table: { defaultValue: { summary: `${DEFAULT_LAYOUT}` } },
    },
    round: {
      control: 'boolean',
      description: 'When true, renders the checkbox as a round radio-style control.',
    },
    ariaLabel: {
      control: 'text',
      description: 'Accessible name for the checkbox.',
    },
  },
} satisfies Meta<typeof BBBCheckbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Checkbox label',
  },
};

export const Round: Story = {
  args: {
    label: 'Round Checkbox',
    round: true,
  },
};
