import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import BBBButtonGroup from './component';
import { BBButton } from '../Button';
import { STACK_VALUES, DEFAULT_STACK_BELOW } from './constants';

const PANEL_STYLE: React.CSSProperties = {
  resize: 'horizontal',
  overflow: 'auto',
  border: '1px dashed #ccc',
  padding: '1rem',
  boxSizing: 'border-box',
};

function Panel({ width, children }: { width: string; children: React.ReactNode }) {
  return (
    <div style={{ ...PANEL_STYLE, width }}>
      <code style={{ fontSize: '0.75rem' }}>{width}</code>
      {children}
    </div>
  );
}

const meta = {
  title: 'BBBButtonGroup',
  component: BBBButtonGroup,
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: false,
      description: 'Buttons to lay out, usually `BBButton`s; each one becomes a slot of the group.',
    },
    stack: {
      control: 'select',
      options: STACK_VALUES,
      description: `When the buttons leave their single row of equal-width buttons for a stack of full-width ones: \`never\`, \`always\`, \`width\` once the group is narrower than \`stackBelow\`, or \`overflow\` once any button no longer fits its share of the row. Allowed values: ${STACK_VALUES.join(', ')}.`,
      table: { defaultValue: { summary: "'never', or 'width' when `footer` is set" } },
    },
    stackBelow: {
      control: 'text',
      description: 'Group width, as a CSS length, below which `stack="width"` stacks the buttons.',
      table: { defaultValue: { summary: DEFAULT_STACK_BELOW } },
    },
    footer: {
      control: 'boolean',
      description: 'Renders a divider above the buttons, for the footer of a side panel.',
      table: { defaultValue: { summary: 'false' } },
    },
    id: {
      control: 'text',
      description: 'HTML `id` for the group element.',
    },
    dataTest: {
      control: 'text',
      description: 'Value for the group\'s `data-test` attribute.',
    },
    className: {
      control: false,
      description: 'Class name forwarded to the group element, so `styled(BBBButtonGroup)` works.',
    },
  },
  args: {
    children: [
      <BBButton key="cancel" variant="secondary" label="Cancel" onClick={fn()} />,
      <BBButton key="start" label="Start poll" onClick={fn()} />,
    ],
  },
  render: (args) => (
    <Panel width="24rem">
      <BBBButtonGroup {...args} />
    </Panel>
  ),
} satisfies Meta<typeof BBBButtonGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Two buttons sharing one row at equal width; drag the panel's corner to resize it. */
export const Default: Story = {};

/** A side panel footer: a divider above the buttons, which stack once the panel is narrower than `stackBelow`. */
export const Footer: Story = {
  args: {
    footer: true,
    children: [
      <BBButton key="message" variant="secondary" label="Send message" onClick={fn()} />,
      <BBButton key="finish" color="danger" label="Finish" onClick={fn()} />,
    ],
  },
  render: (args) => (
    <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
      <Panel width="24rem">
        <BBBButtonGroup {...args} />
      </Panel>
      <Panel width="18rem">
        <BBBButtonGroup {...args} />
      </Panel>
    </div>
  ),
};

/** `stack="overflow"` stacks the buttons only when a label doesn't fit its share of the row, whatever the panel width. */
export const StackOnOverflow: Story = {
  name: 'Stack on Overflow',
  args: {
    stack: 'overflow',
  },
  render: (args) => (
    <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
      <Panel width="18rem">
        <BBBButtonGroup {...args} />
      </Panel>
      <Panel width="18rem">
        <BBBButtonGroup {...args}>
          <BBButton variant="secondary" label="Cancel" onClick={fn()} />
          <BBButton label="Finish all breakout rooms" onClick={fn()} />
        </BBBButtonGroup>
      </Panel>
    </div>
  ),
};

/** `stack="always"` keeps the buttons stacked at full width. */
export const AlwaysStacked: Story = {
  name: 'Always Stacked',
  args: {
    stack: 'always',
  },
};
