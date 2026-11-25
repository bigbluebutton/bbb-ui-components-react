import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import BBBHint from './component';
import { BBButton } from '../Button';

const meta = {
  title: 'Components/Feedback/BBBHint',
  id: 'bbbhint',
  component: BBBHint,
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
      description: 'Main text content of the hint.',
    },
    title: {
      control: 'text',
      description: 'Optional title shown in the header; when set, label renders as a separate line below instead of inline.',
    },
    icon: {
      control: false,
      description: 'Optional icon node displayed next to the title or label.',
    },
    open: {
      control: 'boolean',
      description: 'Whether the hint is visible. Omit to let the hint manage its own visibility, closing itself when the close button is clicked; pass a boolean to control visibility externally.',
    },
    onRequestClose: {
      control: false,
      description: 'Callback fired when the close button is clicked, in both controlled and uncontrolled mode.',
    },
    hideCloseButton: {
      control: 'boolean',
      description: "Hides the close (X) button, for hints that shouldn't be manually dismissed.",
    },
    children: {
      control: false,
      description: 'Optional additional content rendered under the label.',
    },
  },
} satisfies Meta<typeof BBBHint>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Wrapper component so hooks can be used inside Storybook's render function,
 * demonstrating the `open` prop driving visibility from outside the hint.
 */
const ControlledHintStory: React.FC<React.ComponentProps<typeof BBBHint>> = (args) => {
  const [open, setOpen] = useState(true);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', alignItems: 'flex-start' }}>
      <BBButton label="Reopen hint" onClick={() => setOpen(true)} />
      <BBBHint
        {...args}
        open={open}
        onRequestClose={() => setOpen(false)}
      />
    </div>
  );
};

/** Basic hint rendering with only a label and the default info icon. */
export const Default: Story = {
  args: {
    label: 'Helpful hint',
  },
};

/** Uncontrolled hint (no `open` prop): it manages its own visibility and closes itself when dismissed. */
export const Uncontrolled: Story = {
  args: {
    title: 'Uncontrolled',
    label: 'This hint manages its own visibility and closes itself when the close button is clicked.',
  },
};

/** Controlled hint: visibility is driven by the `open` prop, so the parent decides when it reappears. */
export const Controlled: Story = {
  args: {
    title: 'Controlled',
    label: "This hint's visibility is controlled externally via the open prop.",
  },
  render: (args) => <ControlledHintStory {...args} />,
};

/** Hint with `hideCloseButton`: no close (X) button, for hints that shouldn't be manually dismissed. */
export const WithoutCloseButton: Story = {
  args: {
    title: 'No close button',
    label: 'This hint cannot be manually dismissed.',
    hideCloseButton: true,
  },
};
