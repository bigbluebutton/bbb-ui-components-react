import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import BBBAccordion from './component';
import { TOOLTIP_PLACEMENT_VALUES, DEFAULT_TOOLTIP_PLACEMENT } from './constants';
import Typography from '../Typography/component';

const meta = {
  title: 'BBBAccordion',
  component: BBBAccordion,
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: 'text',
      description: 'The text to be displayed in the accordion header.',
    },
    tooltipLabel: {
      control: 'text',
      description: 'Optional label for a tooltip that appears when hovering the header.',
      table: {
        defaultValue: { summary: "''" },
      },
    },
    tooltipPlacement: {
      control: 'select',
      options: TOOLTIP_PLACEMENT_VALUES,
      description: 'Placement of the tooltip when `tooltipLabel` is provided.',
      table: {
        defaultValue: { summary: `${DEFAULT_TOOLTIP_PLACEMENT}` },
      },
    },
    ariaLabel: {
      control: 'text',
      description: 'Accessible name for the expand button.',
    },
    ariaLabelledBy: {
      control: 'text',
      description: 'ID of the element that labels the expand button.',
    },
    ariaDescribedBy: {
      control: 'text',
      description: 'ID of the element that describes the expand button.',
    },
    buttonHeader: {
      control: false,
      description: 'Optional React node rendered inside the button header.',
    },
    children: {
      control: false,
      description: 'Content shown when the accordion is expanded.',
    },
  },
} satisfies Meta<typeof BBBAccordion>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Accordion Title',
    children: (
      <div style={{ padding: '1rem' }}>
        <Typography>Accordion content goes here.</Typography>
      </div>
    ),
  },
};

export const WithTooltip: Story = {
  args: {
    title: 'With Tooltip',
    tooltipLabel: 'Helpful info',
    tooltipPlacement: DEFAULT_TOOLTIP_PLACEMENT,
    children: (
      <div style={{ padding: '1rem' }}>
        <Typography>Content with tooltip.</Typography>
      </div>
    ),
  },
};
