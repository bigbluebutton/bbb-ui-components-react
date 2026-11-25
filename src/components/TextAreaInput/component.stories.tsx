import type { Meta, StoryObj } from '@storybook/react-vite';
import BBBTextAreaInput from './component';

const meta = {
  title: 'Components/Form/BBBTextAreaInput',
  id: 'bbbtextareainput',
  component: BBBTextAreaInput,
  tags: ['autodocs'],
  argTypes: {
    value: {
      control: 'text',
      description: 'The text in the field, when the app controls it. Use it together with `onChange`.',
    },
    defaultValue: {
      control: false,
      description: 'The text in the field at first, when the app does not control it.',
    },
    disabled: {
      control: 'boolean',
      description: 'When true, the field cannot be used.',
    },
    id: {
      control: false,
      description: 'Id of the textarea element, to connect a label to it.',
    },
    name: {
      control: false,
      description: 'Name of the field when a form is submitted.',
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text shown when textarea is empty.',
    },
    rows: {
      control: 'number',
      description: 'Initial number of visible text lines.',
    },
    maxLength: {
      control: 'number',
      description: 'Maximum number of characters allowed.',
    },
    autoFocus: {
      control: 'boolean',
      description: 'When true, the textarea is focused on mount.',
    },
    onChange: {
      control: false,
      description: 'Change event handler for the textarea.',
    },
    onKeyDown: {
      control: false,
      description: 'Keyboard event handler for the textarea.',
    },
  },
} satisfies Meta<typeof BBBTextAreaInput>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Renders the textarea with a custom placeholder and a taller initial row count. */
export const Default: Story = { args: { placeholder: 'Write something...', rows: 3 } };

/** Demonstrates capping input length via the `maxLength` prop. */
export const MaxLength: Story = { args: { placeholder: 'Max 100 chars', maxLength: 100 } };
