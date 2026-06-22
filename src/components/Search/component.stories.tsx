import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import BBBSearch from './component';

const meta = {
  title: 'BBBSearch',
  component: BBBSearch,
  tags: ['autodocs'],
  argTypes: {
    placeholder: {
      control: 'text',
      description: 'Placeholder text displayed inside the input.',
    },
    debounce: {
      control: { type: 'number', min: 0, max: 2000, step: 100 },
      description: 'Debounce delay in milliseconds applied to `onSearch`.',
    },
    isLoading: {
      control: 'boolean',
      description: 'Shows a spinner and hides the clear button when true.',
    },
    disabled: {
      control: 'boolean',
      description: 'Disables the input.',
    },
    autoFocus: {
      control: 'boolean',
      description: 'Focuses the input on mount.',
    },
  },
} satisfies Meta<typeof BBBSearch>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Basic uncontrolled usage — simplest way to use BBBSearch. */
export const Default: Story = {
  args: {
    placeholder: 'Search participants...',
    debounce: 500,
    onSearch: (term: string) => console.log('onSearch:', term),
  },
};

/** Shows the loading spinner while a search is in progress. */
export const WithLoading: Story = {
  args: {
    placeholder: 'Search messages...',
    isLoading: true,
    value: 'hello',
  },
};

const ControlledSearch = (args: React.ComponentProps<typeof BBBSearch>) => {
  const [value, setValue] = useState('');
  return (
    <BBBSearch
      {...args}
      value={value}
      onChange={setValue}
      onClear={() => setValue('')}
      placeholder="Filter results..."
    />
  );
};

/** Controlled mode — parent manages the value. */
export const Controlled: Story = {
  render: (args) => <ControlledSearch {...args} />,
};

/** Disabled state. */
export const Disabled: Story = {
  args: {
    placeholder: 'Search disabled...',
    disabled: true,
  },
};

/** Fast debounce for instant-search scenarios. */
export const WithFastDebounce: Story = {
  args: {
    placeholder: 'Search (100ms debounce)...',
    debounce: 100,
    onSearch: (term: string) => console.log('onSearch:', term),
  },
};
