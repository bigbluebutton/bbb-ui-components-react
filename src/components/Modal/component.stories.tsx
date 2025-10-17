import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import BBBModal from './component';
import { BBBTypography } from '../Typography';

const meta = {
  title: 'BBBModal',
  component: BBBModal,
  tags: ['autodocs'],
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

export const Default: Story = {
  args: {
    title: 'Modal Title',
    children: (
      <div style={{ padding: '1rem' }}>
        <BBBTypography>Modal body content</BBBTypography>
      </div>
    ),
    isOpen: true,
    onRequestClose: () => {},
  },
};
