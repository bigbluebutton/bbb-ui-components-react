import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import BBBSelect from './component';
import MenuItem from '@mui/material/MenuItem';

const meta = {
  title: 'BBBSelect',
  component: BBBSelect,
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: 'text',
      description: 'Label text displayed above the select input.',
    },
    icon: {
      control: false,
      description: 'Optional icon rendered inside the select wrapper.',
    },
    ariaLabel: {
      control: 'text',
      description: 'Accessible name for the select when a visible title is not present.',
    },
    children: {
      control: false,
      description: 'Option elements rendered inside the select.',
    },
  },
} satisfies Meta<typeof BBBSelect>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Choose an option',
    children: (
      <>
        <MenuItem value="1">Option 1</MenuItem>
        <MenuItem value="2">Option 2</MenuItem>
      </>
    ),
  },
};
