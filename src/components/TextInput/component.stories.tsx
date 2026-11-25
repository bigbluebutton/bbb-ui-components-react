import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect } from 'storybook/test';
import BBBTextInput from './component';

const meta = {
  title: 'Components/Form/BBBTextInput',
  id: 'bbbtextinput',
  component: BBBTextInput,
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
      description: 'Label displayed above the input.',
    },
    placeholder: {
      control: 'text',
      description: 'Example shown while the field is empty.',
    },
    disabled: {
      control: 'boolean',
      description: 'When true, the field cannot be used.',
    },
    helperText: {
      control: 'text',
      description: 'Helper text shown below the input.',
    },
    error: {
      control: 'boolean',
      description: 'When true, renders the input in an error state.',
    },
    value: {
      control: 'text',
      description: 'The text in the field, when the app controls it. Use it together with `onChange`.',
    },
    defaultValue: {
      control: false,
      description: 'The text in the field at first, when the app does not control it.',
    },
    onChange: {
      control: false,
      description: 'Called when the text changes. The new text is in `event.target.value`.',
    },
    type: {
      control: 'text',
      description: 'Type of the input element, such as `email` or `password`.',
    },
    id: {
      control: false,
      description: 'Id of the input element.',
    },
    name: {
      control: false,
      description: 'Name of the field when a form is submitted.',
    },
    inputRef: {
      control: false,
      description: 'Ref to the input element.',
    },
  },
} satisfies Meta<typeof BBBTextInput>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Basic text input with a label and placeholder, and no error state. */
export const Default: Story = { args: { label: 'Name', placeholder: 'Your name' } };
/** Renders the input in an error state with helper text explaining the validation failure. */
export const WithError: Story = { args: { label: 'Email', placeholder: 'you@example.com', error: true, helperText: 'Invalid email' } };
/** The app keeps the text with `value` and `onChange`, and `event.target.value` is the new text. */
export const Controlled: Story = {
  render: function ControlledTextInput() {
    const [name, setName] = useState('');
    return (
      <BBBTextInput
        label="Name"
        placeholder="Your name"
        value={name}
        onChange={(event) => setName(event.target.value)}
        slotProps={{ htmlInput: { 'aria-label': 'Name' } }}
      />
    );
  },
  play: async ({ canvas, userEvent }) => {
    const field = canvas.getByRole('textbox', { name: 'Name' });
    await userEvent.type(field, 'Ada');
    await expect(field).toHaveValue('Ada');
  },
};
/** The field cannot be used. */
export const Disabled: Story = {
  args: { label: 'Name', value: 'Ada', disabled: true, slotProps: { htmlInput: { 'aria-label': 'Name' } } },
  play: async ({ canvas }) => {
    await expect(canvas.getByRole('textbox', { name: 'Name' })).toBeDisabled();
  },
};
