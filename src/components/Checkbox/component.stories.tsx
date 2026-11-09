import type { Meta, StoryObj } from '@storybook/react';
import BBBCheckbox from './component';
import {
  LAYOUT_VALUES,
  DEFAULT_LAYOUT,
  TOOLTIP_PLACEMENT_VALUES,
  DEFAULT_TOOLTIP_PLACEMENT,
} from './constants';

const meta = {
  title: 'BBBCheckbox',
  component: BBBCheckbox,
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
      description: 'Text label displayed next to the checkbox.',
    },
    layout: {
      control: 'select',
      options: LAYOUT_VALUES,
      description: 'Position of the label relative to the checkbox.',
      table: { defaultValue: { summary: `${DEFAULT_LAYOUT}` } },
    },
    round: {
      control: 'boolean',
      description: 'When true, renders the checkbox as a round radio-style control.',
    },
    disabled: {
      control: 'boolean',
      description: 'When true, disables the checkbox and dims its label.',
      table: { defaultValue: { summary: 'false' } },
    },
    tooltipLabel: {
      control: 'text',
      description: 'Text shown in a tooltip on hover and keyboard focus; when set, a disabled checkbox stays focusable (`aria-disabled`) so the tooltip can be reached.',
    },
    tooltipPlacement: {
      control: 'select',
      options: TOOLTIP_PLACEMENT_VALUES,
      description: 'Placement of the tooltip when `tooltipLabel` is provided.',
      table: { defaultValue: { summary: `${DEFAULT_TOOLTIP_PLACEMENT}` } },
    },
    ariaLabel: {
      control: 'text',
      description: 'Accessible name for the checkbox.',
    },
    dataTest: {
      control: 'text',
      description: '`data-test` attribute on the underlying `<input>` element.',
    },
  },
} satisfies Meta<typeof BBBCheckbox>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Basic checkbox with a label, using the default layout. */
export const Default: Story = {
  args: {
    label: 'Checkbox label',
  },
};

/** Renders the checkbox as a round radio-style control via the `round` prop. */
export const Round: Story = {
  args: {
    label: 'Round Checkbox',
    round: true,
  },
};

/** Disabled checkbox: the box and the label are dimmed and the label shows a not-allowed cursor. */
export const Disabled: Story = {
  args: {
    label: 'Disabled Checkbox',
    disabled: true,
  },
};

/** Shows a tooltip on hover and keyboard focus via `tooltipLabel`. */
export const WithTooltip: Story = {
  args: {
    label: 'Checkbox with tooltip',
    tooltipLabel: 'Extra information about this option',
  },
};

/** Disabled checkbox that stays keyboard-focusable so its tooltip can explain why the option is unavailable. */
export const DisabledWithTooltip: Story = {
  args: {
    label: 'Unavailable option',
    disabled: true,
    tooltipLabel: 'Only moderators can change this option',
  },
};
