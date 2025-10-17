import type { Meta, StoryObj } from '@storybook/react';
import BBBTextInput from './component';

const meta = {
  title: 'BBBTextInput',
  component: BBBTextInput,
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
      description: 'Label displayed above the input.',
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text for the input.',
    },
    disabled: {
      control: 'boolean',
      description: 'Disable the input when true.',
    },
    helperText: {
      control: 'text',
      description: 'Helper text shown below the input.',
    },
    error: {
      control: 'boolean',
      description: 'When true, renders the input in an error state.',
    },
  },
} satisfies Meta<typeof BBBTextInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = { args: { label: 'Name', placeholder: 'Your name' } };
export const WithError: Story = { args: { label: 'Email', placeholder: 'you@example.com', error: true, helperText: 'Invalid email' } };
