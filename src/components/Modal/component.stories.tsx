import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import BBBModal from './component';
import { BBBTypography } from '../Typography';
import { BBButton } from '../Button';
import { BBBAccordion } from '../Accordion';
import { BBBSelect } from '../Select';
import { BBBCheckbox } from '../Checkbox';
import { BBBTextInput } from '../TextInput';
import { BBBHint } from '../Hint';
import MenuItem from '@mui/material/MenuItem';

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
    testId: {
      control: 'text',
      description: 'Test identifier applied to the modal element (native ReactModal prop).',
    },
    closeButtonDataTest: {
      control: 'text',
      description: 'Test identifier applied to the close button. Omitted if empty.',
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
        footerContent={args.footerContent ?? <ModalFooter onClose={() => setIsOpen(false)} />}
        ariaHideApp={false}
      >
        {args.children}
      </BBBModal>
    </>
  );
};

const LOREM = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`;

const ModalFooter = ({ onClose }: { onClose: () => void }) => (
  <>
    <BBButton label="Cancel" variant="subtle" onClick={onClose} ariaLabel="Cancel" />
    <BBButton label="Confirm" variant="primary" onClick={onClose} ariaLabel="Confirm" />
  </>
);

const ModalBody = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
    <BBBTypography variant="header">Profile Settings</BBBTypography>
    <BBBTypography>{LOREM}</BBBTypography>

    <BBBTextInput label="Full name" placeholder="John Doe" />

    <BBBSelect title="Role" value="admin">
      <MenuItem value="admin">Admin</MenuItem>
      <MenuItem value="moderator">Moderator</MenuItem>
      <MenuItem value="viewer">Viewer</MenuItem>
    </BBBSelect>

    <BBBTypography>{LOREM}</BBBTypography>

    <BBBAccordion title="Advanced options" ariaLabel="Advanced options">
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <BBBCheckbox label="Enable notifications" ariaLabel="Enable notifications" />
        <BBBCheckbox label="Allow data sharing" ariaLabel="Allow data sharing" />
        <BBBCheckbox label="Show online status" ariaLabel="Show online status" />
      </div>
    </BBBAccordion>

    <BBBHint label="Changes will take effect on the next session." />

    <BBBTypography>{LOREM}</BBBTypography>

    <BBBSelect title="Language" value="pt">
      <MenuItem value="en">English</MenuItem>
      <MenuItem value="pt">Português</MenuItem>
      <MenuItem value="es">Español</MenuItem>
    </BBBSelect>

    <BBBAccordion title="Danger zone" ariaLabel="Danger zone">
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <BBBTypography>{LOREM}</BBBTypography>
        <BBButton label="Delete account" variant="primary" ariaLabel="Delete account" onClick={() => {}} />
      </div>
    </BBBAccordion>

    <BBBTypography>{LOREM}</BBBTypography>
  </div>
);

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
    children: null,
  },
  render: (args) => <ModalStory {...args}><ModalBody /></ModalStory>,
};
