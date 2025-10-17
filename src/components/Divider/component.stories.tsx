import type { Meta, StoryObj } from '@storybook/react';
import BBBDivider from './component';

const meta = {
  title: 'BBBDivider',
  component: BBBDivider,
  tags: ['autodocs'],
} satisfies Meta<typeof BBBDivider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
