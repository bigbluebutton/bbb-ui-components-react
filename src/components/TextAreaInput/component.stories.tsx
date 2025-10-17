import type { Meta, StoryObj } from '@storybook/react';
import BBBTextAreaInput from './component';

const meta = {
  title: 'BBBTextAreaInput',
  component: BBBTextAreaInput,
  tags: ['autodocs'],
  argTypes: {
    placeholder: {
      control: 'text',
      description: 'Placeholder text shown when textarea is empty.',
    },
    rows: {
      control: 'number',
      description: 'Initial number of visible text lines.',
    },
    maxLength: {
      control: 'number',
      description: 'Maximum number of characters allowed.',
    },
    autoFocus: {
      control: 'boolean',
      description: 'When true, the textarea is focused on mount.',
    },
    onChange: {
      control: false,
      description: 'Change event handler for the textarea.',
    },
    onKeyDown: {
      control: false,
      description: 'Keyboard event handler for the textarea.',
    },
  },
} satisfies Meta<typeof BBBTextAreaInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = { args: { placeholder: 'Write something...', rows: 3 } };

export const MaxLength: Story = { args: { placeholder: 'Max 100 chars', maxLength: 100 } };
