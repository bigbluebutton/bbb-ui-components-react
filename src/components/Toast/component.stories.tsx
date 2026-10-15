import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { MdCampaign } from 'react-icons/md';
import BBBToast from './component';
import { BBButton } from '../Button';
import { TOAST_VARIANT_VALUES } from './constants';

const meta = {
  title: 'BBBToast',
  component: BBBToast,
  tags: ['autodocs'],
  argTypes: {
    message: {
      control: 'text',
      description: 'Title of the notification, rendered on its own line; usually plain text, but takes a node for inline i18n markup.',
    },
    variant: {
      control: 'select',
      options: TOAST_VARIANT_VALUES,
      description: 'Visual variant driving the default icon and the icon badge color.',
    },
    icon: {
      control: false,
      description: 'Custom icon replacing the one matched to variant, or false to hide the icon badge entirely.',
    },
    content: {
      control: false,
      description: 'Description or secondary content (text, links, action buttons) rendered below the title, sharing its left edge.',
    },
    showSeparator: {
      control: 'boolean',
      description: 'Shows the divider between the title and content; only rendered when both are present.',
    },
    small: {
      control: 'boolean',
      description: 'Compact variant for space-constrained placements.',
    },
    disablePointer: {
      control: 'boolean',
      description: "Keeps the default cursor instead of showing a pointer one, so the toast doesn't read as clickable; defaults to false when onClick is set and true otherwise.",
    },
    onClick: {
      control: false,
      description: 'Click handler for the whole toast (e.g. open a related chat or panel); exposed to assistive technology as a button wrapping message.',
    },
    clickAriaLabel: {
      control: 'text',
      description: 'Accessible name for the onClick action, overriding the message text; needed when onClick is set without a message, else the content text is used.',
    },
    actionLabel: {
      control: 'text',
      description: 'Label for an optional action button rendered below the content.',
    },
    onActionClick: {
      control: false,
      description: 'Handler for the action button; only used when actionLabel is set.',
    },
    autoClose: {
      control: 'number',
      description: 'Auto-dismiss delay in milliseconds, paused while the toast is hovered or focused, or false to persist until dismissed manually.',
    },
    paused: {
      control: 'boolean',
      description: "Pauses the `autoClose` countdown from outside, on top of the card's own pause on hover and focus (e.g. while a toast engine's stack is hovered).",
    },
    hideProgressBar: {
      control: 'boolean',
      description: 'Hides the bar at the bottom of the card that counts down `autoClose`; never shown when `autoClose` is `false`.',
    },
    hideCloseButton: {
      control: 'boolean',
      description: "Hides the close (X) button, for toasts that shouldn't be manually dismissed.",
    },
    closeButtonAriaLabel: {
      control: 'text',
      description: 'Accessible name for the close button; pass a translated string in localized apps.',
    },
    onRequestClose: {
      control: false,
      description: 'Callback fired when the toast is dismissed, by the close button or by autoClose.',
    },
    maxHeight: {
      control: 'text',
      description: "Caps the card's height, scrolling its body past that point; any CSS length.",
    },
    dataTest: {
      control: 'text',
      description: 'Value for the data-test attribute on the container; also the base for the derived test ids below.',
    },
    messageDataTest: {
      control: 'text',
      description: 'Test identifier applied to the message. Defaults to `${dataTest}-message` when dataTest is set.',
    },
    closeButtonDataTest: {
      control: 'text',
      description: 'Test identifier applied to the close button. Defaults to `${dataTest}-close-button` when dataTest is set.',
    },
    actionButtonDataTest: {
      control: 'text',
      description: 'Test identifier applied to the action button. Defaults to `${dataTest}-action-button` when dataTest is set.',
    },
  },
  decorators: [
    // The library inherits its font from the consuming app; without this the stories
    // fall back to the browser's default serif, which misrepresents how the toast
    // reads in BBB. 20rem matches the width BBB gives its toast container.
    (Story) => (
      <div style={{ maxWidth: '20rem', fontFamily: "'Source Sans Pro', Arial, sans-serif" }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof BBBToast>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Wrapper component so hooks can be used inside Storybook's render function,
 * showing that the card leaves removal to its owner: both the close button and the
 * `autoClose` timer only call `onRequestClose`.
 */
const DismissibleToastStory: React.FC<React.ComponentProps<typeof BBBToast>> = (args) => {
  const [visible, setVisible] = useState(true);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', alignItems: 'flex-start' }}>
      {!visible && <BBButton label="Show toast again" onClick={() => setVisible(true)} />}
      {visible && <BBBToast {...args} onRequestClose={() => setVisible(false)} />}
    </div>
  );
};

/** Basic toast with only a message, the default variant and its matching icon. */
export const Default: Story = {
  args: {
    message: 'You are muted',
  },
};

/** Toast with secondary `content` below the message, separated by the default divider. */
export const WithContent: Story = {
  args: {
    message: 'Recording started',
    content: 'This session is being recorded and will be available after the meeting ends.',
  },
};

/** Every `variant`, showing the icon and badge color each one applies. */
export const Variants: Story = {
  args: {
    message: 'Notification',
  },
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
      {TOAST_VARIANT_VALUES.map((variant) => (
        <BBBToast
          {...args}
          key={variant}
          variant={variant}
          message={`This is a ${variant} notification`}
        />
      ))}
    </div>
  ),
};

/** The compact `small` variant, for space-constrained placements like chat push alerts. */
export const Small: Story = {
  args: {
    message: 'New message from Arthur',
    content: 'Are we still on for the 3pm call?',
    small: true,
  },
};

/** Toast with `icon={false}`, dropping the badge for messages that carry their own visual. */
export const WithoutIcon: Story = {
  args: {
    message: 'Start recording?',
    content: 'Participants will be notified that the session is being recorded.',
    icon: false,
  },
};

/** Toast with a custom `icon` node replacing the one matched to `variant`. */
export const CustomIcon: Story = {
  args: {
    message: 'Presenter changed',
    content: 'Arthur is now presenting.',
    icon: <MdCampaign />,
  },
};

/** Toast with `showSeparator={false}`, for content that reads as one block with the message. */
export const WithoutSeparator: Story = {
  args: {
    message: 'Connection unstable',
    content: 'Your audio may be affected.',
    variant: 'warning',
    showSeparator: false,
  },
};

/** Toast with an action button, rendered from `actionLabel` and wired to `onActionClick`. */
export const WithAction: Story = {
  args: {
    message: 'Screenshare failed',
    content: 'Your browser blocked the screen sharing request.',
    variant: 'error',
    actionLabel: 'Learn more',
    onActionClick: () => window.alert('Action clicked'),
  },
};

/** Test identifiers: `dataTest` seeds the container and derives the message, close and action ids. */
export const WithDataTest: Story = {
  args: {
    message: 'Reload required',
    content: 'Inspect the DOM to see the derived data-test attributes.',
    actionLabel: 'Reload',
    onActionClick: () => {},
    dataTest: 'notificationBanner',
    actionButtonDataTest: 'notificationBannerReloadButton',
  },
};

/** Titleless card: with no `message`, the content carries the notification on its own. */
export const WithoutMessage: Story = {
  args: {
    content: 'presentation.pdf — upload complete',
  },
};

/** Tall content scrolls inside the card instead of being clipped, capped by `maxHeight`. */
export const ScrollingContent: Story = {
  args: {
    message: 'Uploading presentations',
    maxHeight: '12rem',
    autoClose: false,
    content: (
      <>
        {Array.from({ length: 12 }, (_, i) => (
          <p key={i} style={{ margin: '0 0 0.5rem' }}>{`slide-deck-${i + 1}.pdf — processing`}</p>
        ))}
      </>
    ),
  },
};

/** Clickable toast: `onClick` on the whole card, announced as a button and shown with a pointer cursor. */
export const Clickable: Story = {
  args: {
    message: 'New message in Public Chat',
    content: 'Click to open the chat panel.',
    variant: 'info',
    small: true,
    onClick: () => window.alert('Toast clicked'),
  },
};

/** Toast with `autoClose={false}` and `hideCloseButton`, persisting until its owner removes it. */
export const Persistent: Story = {
  args: {
    message: 'You are listening to a breakout room',
    variant: 'info',
    autoClose: false,
    hideCloseButton: true,
  },
};

/** Rich `content` (links, buttons, inline media), as in BBB's two-button confirmation toasts. */
export const RichContent: Story = {
  args: {
    message: 'Start recording?',
    icon: false,
    autoClose: false,
    showSeparator: false,
    content: (
      <>
        <p style={{ margin: 0 }}>
          Participants will be notified. See the{' '}
          <a href="https://docs.bigbluebutton.org" target="_blank" rel="noreferrer">
            recording docs
          </a>{' '}
          for details.
        </p>
        <div style={{ display: 'flex', gap: '0.5rem', marginTop: '0.75rem' }}>
          <BBButton label="Cancel" variant="secondary" size="sm" onClick={() => {}} />
          <BBButton label="Start" variant="primary" size="sm" onClick={() => {}} />
        </div>
      </>
    ),
  },
};

/** Dismissal in practice: the close button and the `autoClose` timer (paused on hover) both ask the owner to remove the card. */
export const Dismissible: Story = {
  args: {
    message: 'This toast asks to be closed after 4 seconds',
    content: 'Its owner is what actually removes it.',
    autoClose: 4000,
  },
  render: (args) => <DismissibleToastStory {...args} />,
};
