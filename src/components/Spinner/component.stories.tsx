import type { Meta, StoryObj } from '@storybook/react';
import BBBSpinner from './component';

const meta = {
  title: 'BBBSpinner',
  component: BBBSpinner,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'text',
      description: "Width/height of the spinner (number in px or CSS string, e.g. '2rem').",
    },
    strokeWidth: {
      control: 'number',
      description: 'Thickness of the spinner stroke.',
    },
    animate: {
      control: 'boolean',
      description: 'When false, disables the rotation animation.',
      table: { defaultValue: { summary: 'true' } },
    },
  },
} satisfies Meta<typeof BBBSpinner>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Renders the spinner with its default size, stroke width, and animation. */
export const Default: Story = {};

/** Renders the spinner at a smaller size by overriding the `size` prop. */
export const Small: Story = { args: { size: 24 } };
