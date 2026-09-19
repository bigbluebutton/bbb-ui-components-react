import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import BBBAvatar from './component';
import { AVATAR_SIZE_VALUES, DEFAULT_AVATAR_SIZE } from './constants';

const meta = {
  title: 'BBBAvatar',
  component: BBBAvatar,
  tags: ['autodocs'],
  argTypes: {
    name: {
      control: 'text',
      description: 'Full name of the user; used to render initials and to derive a deterministic fallback color.',
    },
    avatarUrl: {
      control: 'text',
      description: "URL of the user's avatar image. Falls back to initials when omitted or if the image fails to load.",
    },
    color: {
      control: 'color',
      description: 'Background color behind the initials (and border color on the image).',
    },
    size: {
      control: 'select',
      options: AVATAR_SIZE_VALUES,
      description: 'Size variant of the avatar.',
      table: { defaultValue: { summary: `${DEFAULT_AVATAR_SIZE}` } },
    },
    isModerator: {
      control: 'boolean',
      description: "Renders a rounded-square shape instead of a circle, matching BBB's moderator avatar treatment.",
      table: { defaultValue: { summary: 'false' } },
    },
    isYou: {
      control: 'boolean',
      description: 'Marks this avatar as belonging to the current user, applying BBB\'s "you" color in place of the fallback/computed color. Ignored when `color` is set.',
      table: { defaultValue: { summary: 'false' } },
    },
    isTalking: {
      control: 'boolean',
      description: "Shows a pulsing ring around the avatar, in its own color, matching BBB's talking indicator.",
      table: { defaultValue: { summary: 'false' } },
    },
    disableTooltip: {
      control: 'boolean',
      description: 'Disables the tooltip that shows the full `name` on hover.',
      table: { defaultValue: { summary: 'false' } },
    },
  },
} satisfies Meta<typeof BBBAvatar>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Falls back to initials when no image is given, next to an avatar rendering a provided image. */
export const Default: Story = {
  render: (args) => (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
      <BBBAvatar {...args} name="Arthur Kaminski" />
      <BBBAvatar {...args} name="Arthur Kaminski" avatarUrl="https://i.pravatar.cc/150?img=60" />
    </div>
  ),
};

/** All size variants rendered side by side. */
export const Sizes: Story = {
  render: (args) => (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-end' }}>
      {AVATAR_SIZE_VALUES.map((size) => (
        <BBBAvatar {...args} key={size} name="Arthur Kaminski" size={size} />
      ))}
    </div>
  ),
};

/** The default circular shape next to the rounded-square shape used for moderators. */
export const Types: Story = {
  render: (args) => (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
      <BBBAvatar {...args} name="Arthur Kaminski" />
      <BBBAvatar {...args} name="Arthur Kaminski" isModerator />
    </div>
  ),
};

/** Different names deriving different colors from the deterministic fallback, next to an explicit custom color override. */
export const Colors: Story = {
  render: (args) => (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
      <BBBAvatar {...args} name="Arthur Kaminski" />
      <BBBAvatar {...args} name="Beatriz Nunes" />
      <BBBAvatar {...args} name="Carlos Eduardo" />
      <BBBAvatar {...args} name="Diana Prince" />
      <BBBAvatar {...args} name="Fernanda Lima" />
      <BBBAvatar {...args} name="Gustavo Rocha" />
      <BBBAvatar {...args} name="Isabela Torres" />
      <BBBAvatar {...args} name="Arthur Kaminski" color="#0F70D7" />
      <BBBAvatar {...args} name="Beatriz Nunes" color="#2DD36F" />
      <BBBAvatar {...args} name="Arthur Kaminski" isYou />
    </div>
  ),
};

/** Not talking next to the pulsing ring shown while the user is speaking. */
export const Talking: Story = {
  render: (args) => (
    <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
      <BBBAvatar {...args} name="Arthur Kaminski" />
      <BBBAvatar {...args} name="Arthur Kaminski" isTalking />
    </div>
  ),
};
