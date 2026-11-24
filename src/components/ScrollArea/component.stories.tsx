import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import BBBScrollArea from './component';
import { colorWhite } from '../../stylesheets/palette';

const meta = {
  title: 'BBBScrollArea',
  component: BBBScrollArea,
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: false,
      description: 'Scrollable content.',
    },
    verticalScroll: {
      control: 'boolean',
      description: 'Enables vertical scrolling.',
      table: { defaultValue: { summary: 'true' } },
    },
    horizontalScroll: {
      control: 'boolean',
      description: 'Enables horizontal scrolling.',
      table: { defaultValue: { summary: 'false' } },
    },
    maxHeight: {
      control: 'text',
      description: 'Caps the content height; scrolling kicks in past this value.',
    },
    maxWidth: {
      control: 'text',
      description: 'Caps the content width; scrolling kicks in past this value.',
    },
    fadeEdges: {
      control: 'boolean',
      description: "Fades the scrollable edges with a color mask + shadow, matching the chat's scroll style.",
      table: { defaultValue: { summary: 'true' } },
    },
    fadeColor: {
      control: 'color',
      description: 'Background color the fade blends into. Required in practice when fadeEdges is true.',
    },
    paddingTop: {
      control: 'text',
      description: "Space reserved above the content, before the scrollable area's top edge.",
    },
    paddingRight: {
      control: 'text',
      description: "Space reserved to the right of the content, before the scrollable area's right edge.",
    },
    paddingBottom: {
      control: 'text',
      description: "Space reserved below the content, before the scrollable area's bottom edge.",
    },
    paddingLeft: {
      control: 'text',
      description: "Space reserved to the left of the content, before the scrollable area's left edge.",
    },
  },
} satisfies Meta<typeof BBBScrollArea>;

export default meta;
type Story = StoryObj<typeof meta>;

const VERTICAL_ITEMS = Array.from({ length: 20 }, (_, index) => `Message ${index + 1}`);
const HORIZONTAL_ITEMS = Array.from({ length: 12 }, (_, index) => `Card ${index + 1}`);

const VerticalList = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
    {VERTICAL_ITEMS.map((item) => (
      <div key={item} style={{ padding: '0.5rem 0.75rem', background: '#F4F6FA', borderRadius: '0.5rem' }}>
        {item}
      </div>
    ))}
  </div>
);

const HorizontalList = () => (
  <div style={{ display: 'flex', gap: '0.5rem', width: 'max-content' }}>
    {HORIZONTAL_ITEMS.map((item) => (
      <div
        key={item}
        style={{
          padding: '1rem', background: '#F4F6FA', borderRadius: '0.5rem', minWidth: '120px', textAlign: 'center',
        }}
      >
        {item}
      </div>
    ))}
  </div>
);

/** Default vertical scroll area with the chat-style scrollbar and top/bottom edge fade. */
export const Default: Story = {
  args: {
    maxHeight: '250px',
    fadeColor: colorWhite,
    children: <VerticalList />,
  },
};

/** Vertical list with top/bottom padding, so the fade blends over empty space instead of the first/last item. */
export const WithEdgePadding: Story = {
  args: {
    maxHeight: '250px',
    fadeColor: colorWhite,
    paddingTop: '1rem',
    paddingBottom: '1rem',
    children: <VerticalList />,
  },
};

/** Same vertical list with `fadeEdges` off — only the scrollbar styling remains. */
export const NoFade: Story = {
  args: {
    maxHeight: '250px',
    fadeEdges: false,
    children: <VerticalList />,
  },
};

/** Horizontal scroll area with left/right edge fade instead of top/bottom. */
export const Horizontal: Story = {
  args: {
    verticalScroll: false,
    horizontalScroll: true,
    maxWidth: '400px',
    fadeColor: colorWhite,
    children: <HorizontalList />,
  },
};
