import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import BBBModal from './component';
import { BBBTypography } from '../Typography';
import { BBButton } from '../Button';

const meta = {
  title: 'BBBModal',
  component: BBBModal,
  tags: ['autodocs'],
  parameters: {
    // Prevent the fixed overlay from covering Storybook's own UI
    layout: 'centered',
  },
  argTypes: {
    isOpen: {
      control: 'boolean',
      description: 'Controls whether the modal is open.',
    },
    onRequestClose: {
      control: false,
      description: 'Callback invoked when a request to close the modal occurs (e.g., overlay click or close button).',
    },
    appElement: {
      control: false,
      description: 'App element for accessibility; forwarded to react-modal.',
    },
    title: {
      control: 'text',
      description: 'Modal title shown in the header.',
    },
    contentLabel: {
      control: 'text',
      description: 'Accessibility label for the modal content.',
    },
    showDividers: {
      control: 'boolean',
      description: 'Show dividers between header/body/footer.',
    },
    shouldCloseOnOverlayClick: {
      control: 'boolean',
      description: 'Allow closing the modal by clicking the overlay.',
    },
    shouldCloseOnEsc: {
      control: 'boolean',
      description: 'Allow closing the modal with the ESC key.',
    },
    allowScroll: {
      control: 'boolean',
      description: 'Enable scrolling inside the modal body.',
    },
    noFooter: {
      control: 'boolean',
      description: 'Hide the footer section.',
    },
    footerContent: {
      control: false,
      description: 'Custom React node to render inside the footer.',
    },
    stickyFooter: {
      control: 'boolean',
      description: 'When true, the footer is sticky to the bottom.',
    },
    children: {
      control: false,
      description: 'Modal body content.',
    },
  },
} satisfies Meta<typeof BBBModal>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Wrapper component so hooks can be used inside Storybook's render function.
 * The modal is controlled via a trigger button, keeping the controls panel
 * accessible. Adjust args and re-open the modal to see the changes.
 */
const ModalStory: React.FC<React.ComponentProps<typeof BBBModal>> = (args) => {
  const [isOpen, setIsOpen] = useState(args.isOpen);

  // Sync with the Storybook "isOpen" control
  React.useEffect(() => {
    setIsOpen(args.isOpen);
  }, [args.isOpen]);

  return (
    <>
      <BBButton
        label="Open Modal"
        onClick={() => setIsOpen(true)}
      />
      <BBBModal
        {...args}
        isOpen={isOpen}
        onRequestClose={() => setIsOpen(false)}
        ariaHideApp={false}
      >
        {args.children}
      </BBBModal>
    </>
  );
};

export const Default: Story = {
  args: {
    title: 'Modal Title',
    isOpen: false,
    onRequestClose: () => {},
    showDividers: false,
    allowScroll: true,
    noFooter: false,
    stickyFooter: true,
    shouldCloseOnOverlayClick: true,
    shouldCloseOnEsc: true,
    children: (
      <BBBTypography>Modal body content</BBBTypography>
    ),
  },
  render: (args) => <ModalStory {...args} />,
};
