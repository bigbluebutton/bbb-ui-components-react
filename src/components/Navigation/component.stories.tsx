import type { Meta, StoryObj } from '@storybook/react';
import BBBNavigation from './component';

const meta = {
  title: 'BBBNavigation',
  component: BBBNavigation,
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
      description: 'Text label displayed inside the navigation button.',
    },
    onClick: {
      control: false,
      description: 'Click handler fired when the navigation button is activated.',
    },
    onKeyDown: {
      control: false,
      description: 'Keyboard keydown handler for the navigation button.',
    },
    icon: {
      control: false,
      description: 'Optional custom icon node. If omitted a default icon is displayed.',
    },
    children: {
      control: false,
      description: 'Optional children (e.g., sub-menus) rendered within the button.',
    },
    ariaLabel: {
      control: 'text',
      description: 'Accessible name for the navigation button.',
    },
    ariaLabelledBy: {
      control: 'text',
      description: 'ID of the element that labels the navigation button.',
    },
    ariaDescribedBy: {
      control: 'text',
      description: 'ID of the element that describes the navigation button.',
    },
    dataTest: {
      control: 'text',
      description: 'Test id used for automated tests.',
    },
  },
} satisfies Meta<typeof BBBNavigation>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Navigate',
    onClick: () => {},
  },
};
