import type { Meta, StoryObj } from '@storybook/react';
import BBBDivider from './component';

const meta = {
  title: 'BBBDivider',
  component: BBBDivider,
  tags: ['autodocs'],
} satisfies Meta<typeof BBBDivider>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Renders the divider with its default styles and no custom props. */
export const Default: Story = {};
