import type { Meta, StoryObj } from '@storybook/react';
import BBBTypography from './component';
import { TYPOGRAPHY_VARIANTS } from './constants';

const meta = {
  title: 'BBBTypography',
  component: BBBTypography,
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: 'text',
      description: 'Text content to render.',
    },
    variant: {
      control: 'select',
      options: TYPOGRAPHY_VARIANTS,
      description: 'Typography variant (e.g., header, default). Use values from component constants if available.',
    },
    as: {
      control: 'text',
      description: 'HTML element to render as (e.g., h1, p, span).',
    },
  },
} satisfies Meta<typeof BBBTypography>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = { args: { children: 'Sample text' } };
export const Header: Story = { args: { variant: 'header', children: 'Header text' } };
