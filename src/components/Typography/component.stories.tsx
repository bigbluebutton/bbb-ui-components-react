import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import BBBTypography from './component';
import { TYPOGRAPHY_VARIANTS } from './constants';

const meta = {
  title: 'Foundation/BBBTypography',
  id: 'bbbtypography',
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
      description: 'Typography variant (e.g., header, default) controlling the applied text style.',
    },
    as: {
      control: 'text',
      description: 'HTML element to render as (e.g., h1, p, span), in place of `p`.',
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

/** Renders the heading of a group inside a panel or modal. */
export const Section: Story = { args: { variant: 'section', as: 'h3', children: 'Notifications' } };

/** Renders a highlight title, such as the one of an empty state. Use one per screen. */
export const Highlight: Story = { args: { variant: 'highlight', as: 'h2', children: 'No shared notes yet' } };

/** Renders a large number, such as a timer. Not for text. */
export const Display: Story = { args: { variant: 'display', children: '05:00' } };

/** Renders the text of a large menu. */
export const Large: Story = { args: { variant: 'large', children: 'Large menu item' } };

/** Renders a small label, such as a badge or a counter. */
export const SmallLabel: Story = { args: { variant: 'smallLabel', as: 'span', children: '12 users' } };

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
