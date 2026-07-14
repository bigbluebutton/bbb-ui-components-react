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
