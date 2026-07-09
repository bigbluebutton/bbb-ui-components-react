import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { MdSend, MdCheckCircle, MdEmojiEmotions } from 'react-icons/md';
import { VARIANT_VALUES, DEFAULT_VARIANT } from '../Button/constants';
import BBBInput from './component';

const plainIconButtonStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '1.5rem',
  height: '1.5rem',
  padding: 0,
  border: 'none',
  background: 'transparent',
  cursor: 'pointer',
};

const meta = {
  title: 'BBBInput',
  component: BBBInput,
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
      description: 'Label displayed above the field.',
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text displayed when the field is empty.',
    },
    buttonLabel: {
      control: 'text',
      description: 'Text label rendered by the action button.',
    },
    buttonVariant: {
      control: 'select',
      options: VARIANT_VALUES,
      description: `Visual variant of the action button. Allowed values: ${VARIANT_VALUES.join(', ')}.`,
      table: { defaultValue: { summary: `${DEFAULT_VARIANT}` } },
    },
    dataTest: {
      control: 'text',
      description: '`data-test` attribute on the underlying `<textarea>` element.',
    },
    buttonDataTest: {
      control: 'text',
      description: '`data-test` attribute on the action button.',
    },
    submitOnEnter: {
      control: 'boolean',
      description: 'When true, Enter submits (Shift+Enter inserts a newline).',
    },
    showSentFeedback: {
      control: 'boolean',
      description: 'Shows a transient "sent" feedback after a successful submit.',
    },
    disabled: {
      control: 'boolean',
      description: 'Disables the field and the action button.',
    },
    error: {
      control: 'boolean',
      description: 'Puts the field in an error state.',
    },
    helperText: {
      control: 'text',
      description: 'Helper text displayed below the field.',
    },
    minRows: {
      control: { type: 'number', min: 1, max: 5, step: 1 },
      description: 'Minimum number of visible rows.',
    },
    maxRows: {
      control: { type: 'number', min: 1, max: 10, step: 1 },
      description: 'Maximum number of rows before the field scrolls internally.',
    },
  },
} satisfies Meta<typeof BBBInput>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Basic uncontrolled usage — icon-only action button. */
export const Default: Story = {
  args: {
    label: 'Message',
    placeholder: 'Type your message...',
    buttonIcon: <MdSend />,
    buttonAriaLabel: 'Send message',
    dataTest: 'message-input',
    buttonDataTest: 'send-message-button',
    onSubmit: (value: string) => console.log('onSubmit:', value),
  },
};

/** Action button rendered with a text label instead of an icon. */
export const WithButtonLabel: Story = {
  args: {
    label: 'Message to guests',
    placeholder: 'Write something...',
    buttonLabel: 'Send',
    onSubmit: (value: string) => console.log('onSubmit:', value),
  },
};

/** The action button's variant defaults to `primary`, but any `Button` variant can be used. */
export const WithButtonVariant: Story = {
  args: {
    label: 'Message to guests',
    placeholder: 'Write something...',
    buttonLabel: 'Send',
    buttonVariant: 'secondary',
    onSubmit: (value: string) => console.log('onSubmit:', value),
  },
};

/** `beforeButton`/`afterButton` let extra actions (e.g. an emoji picker trigger) sit next to the submit button. */
export const WithBeforeButton: Story = {
  args: {
    label: 'Message',
    placeholder: 'Type your message...',
    buttonIcon: <MdSend />,
    buttonAriaLabel: 'Send message',
    beforeButton: (
      <button
        type="button"
        aria-label="Insert emoji"
        style={plainIconButtonStyle}
        onClick={() => console.log('open emoji picker')}
      >
        <MdEmojiEmotions />
      </button>
    ),
    onSubmit: (value: string) => console.log('onSubmit:', value),
  },
};

const ControlledInput = (args: React.ComponentProps<typeof BBBInput>) => {
  const [value, setValue] = useState('');
  return (
    <BBBInput
      {...args}
      value={value}
      onChange={setValue}
      onSubmit={(submittedValue) => {
        console.log('onSubmit:', submittedValue);
        setValue('');
      }}
    />
  );
};

/** Controlled mode — parent manages the value. */
export const Controlled: Story = {
  render: (args) => <ControlledInput {...args} />,
  args: {
    label: 'Message to rooms',
    placeholder: 'Message...',
    buttonIcon: <MdSend />,
    buttonAriaLabel: 'Send message',
  },
};

/** Shows a transient "Message sent" feedback below the field after submitting. */
export const WithSentFeedback: Story = {
  args: {
    label: 'Message',
    placeholder: 'Type your message...',
    buttonIcon: <MdSend />,
    buttonAriaLabel: 'Send message',
    showSentFeedback: true,
    onSubmit: (value: string) => console.log('onSubmit:', value),
  },
};

/** `sentFeedbackContent` accepts any node, not just plain text. */
export const WithCustomSentFeedbackContent: Story = {
  args: {
    label: 'Message',
    placeholder: 'Type your message...',
    buttonIcon: <MdSend />,
    buttonAriaLabel: 'Send message',
    showSentFeedback: true,
    sentFeedbackContent: (
      <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.25rem' }}>
        <MdCheckCircle /> Delivered to all participants
      </span>
    ),
    onSubmit: (value: string) => console.log('onSubmit:', value),
  },
};

/** Enter always inserts a newline; only the button submits. */
export const SubmitOnEnterDisabled: Story = {
  args: {
    label: 'Message',
    placeholder: 'Press Enter for a new line...',
    buttonIcon: <MdSend />,
    buttonAriaLabel: 'Send message',
    submitOnEnter: false,
    onSubmit: (value: string) => console.log('onSubmit:', value),
  },
};

/** Error state, with helper text. */
export const ErrorState: Story = {
  args: {
    label: 'Message',
    placeholder: 'Type your message...',
    buttonIcon: <MdSend />,
    buttonAriaLabel: 'Send message',
    error: true,
    helperText: 'Message could not be sent. Try again.',
    onSubmit: (value: string) => console.log('onSubmit:', value),
  },
};

/** Disabled state. */
export const Disabled: Story = {
  args: {
    label: 'Message',
    placeholder: 'Message disabled...',
    buttonIcon: <MdSend />,
    buttonAriaLabel: 'Send message',
    disabled: true,
    onSubmit: (value: string) => console.log('onSubmit:', value),
  },
};
