import type { Meta, StoryObj } from '@storybook/react';
import BBBHint from './component';

const meta = {
  title: 'BBBHint',
  component: BBBHint,
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
      description: 'Main text content of the hint.',
    },
    title: {
      control: 'text',
      description: 'Optional title; if provided, shows a close button.',
    },
    icon: {
      control: false,
      description: 'Optional icon node displayed next to the title or label.',
    },
    onRequestClose: {
      control: false,
      description: 'Callback fired when the close button is clicked.',
    },
    children: {
      control: false,
      description: 'Optional additional content rendered under the label.',
    },
  },
} satisfies Meta<typeof BBBHint>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Helpful hint',
  },
};
