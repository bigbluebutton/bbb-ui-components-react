import React from 'react';
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

/** Renders text using the default typography variant. */
export const Default: Story = { args: { children: 'Sample text' } };

/** Renders text using the selected variant, a bolder emphasis of the default style. */
export const Selected: Story = { args: { variant: 'selected', children: 'Selected item text' } };

/** Renders text using the text2 variant, a smaller and lighter secondary style. */
export const Text2: Story = { args: { variant: 'text2', children: 'Secondary text' } };

/** Renders text using the text3 variant, the smallest and most subtle style. */
export const Text3: Story = { args: { variant: 'text3', children: 'Tertiary text' } };

/** Renders text using the header variant. */
export const Header: Story = { args: { variant: 'header', children: 'Header text' } };

/** Renders text using the button variant, matching the typography used inside buttons. */
export const ButtonText: Story = { args: { variant: 'button', children: 'Button label text' } };

/** Compares every available variant side by side. */
export const AllVariants: Story = {
  args: { children: 'The quick brown fox jumps over the lazy dog' },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
      {TYPOGRAPHY_VARIANTS.map((variant) => (
        <BBBTypography key={variant} variant={variant}>
          {`${variant}: The quick brown fox jumps over the lazy dog`}
        </BBBTypography>
      ))}
    </div>
  ),
};
