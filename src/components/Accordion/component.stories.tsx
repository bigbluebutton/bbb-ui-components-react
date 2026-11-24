import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import BBBAccordion from './component';
import {
  TOOLTIP_PLACEMENT_VALUES,
  DEFAULT_TOOLTIP_PLACEMENT,
  BUTTON_HEADER_POSITIONS,
  BUTTON_HEADER_POSITION_VALUES,
  DEFAULT_BUTTON_HEADER_POSITION,
} from './constants';
import { MdEdit } from 'react-icons/md';
import Typography from '../Typography/component';

const meta = {
  title: 'Components/Display/BBBAccordion',
  id: 'bbbaccordion',
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
    buttonHeaderPosition: {
      control: 'select',
      options: BUTTON_HEADER_POSITION_VALUES,
      description: 'Position of `buttonHeader` within the header row.',
      table: {
        defaultValue: { summary: `${DEFAULT_BUTTON_HEADER_POSITION}` },
      },
    },
    children: {
      control: false,
      description: 'Content shown when the accordion is expanded.',
    },
  },
} satisfies Meta<typeof BBBAccordion>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Basic accordion with a title and simple content, expanded/collapsed via the header. */
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

/** Shows the header tooltip enabled via `tooltipLabel` and `tooltipPlacement`. */
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

/** Shows `buttonHeaderPosition="right"` pushing the button header to the far edge of the header row. */
export const WithRightAlignedButtonHeader: Story = {
  args: {
    title: 'Right-aligned Button Header',
    buttonHeader: <MdEdit aria-label="Edit" />,
    buttonHeaderPosition: BUTTON_HEADER_POSITIONS.RIGHT,
    children: (
      <div style={{ padding: '1rem' }}>
        <Typography>Accordion content goes here.</Typography>
      </div>
    ),
  },
};
