import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from 'storybook/test';
import BBButton from './component';
import { MdFavorite, MdMoreVert, MdSettings } from 'react-icons/md';
import {
  VARIANT_VALUES,
  SIZE_VALUES,
  LAYOUT_VALUES,
  TOOLTIP_PLACEMENT_VALUES,
  COLOR_VALUES,
  DEFAULT_TOOLTIP_PLACEMENT,
  DEFAULT_COLOR,
  DEFAULT_VARIANT,
  DEFAULT_SIZE,
  DEFAULT_LAYOUT,
} from './constants';

const meta = {
  title: 'BBButton',
  component: BBButton,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
      description: `Button text label. Visible in layouts that show a label (e.g. ${LAYOUT_VALUES.join(', ')}).`,
      table: { defaultValue: { summary: "''" } },
    },
    tooltipLabel: {
      control: 'text',
      description: 'Text shown inside a tooltip. Tooltip appears only when this prop is provided.',
      table: { defaultValue: { summary: "''" } },
    },
    tooltipPlacement: {
      control: 'select',
      options: TOOLTIP_PLACEMENT_VALUES,
      description: `Tooltip placement. Allowed values: ${TOOLTIP_PLACEMENT_VALUES.join(', ')}. Only used when \`tooltipLabel\` is provided.`,
      table: { defaultValue: { summary: `${DEFAULT_TOOLTIP_PLACEMENT}` } },
    },
    color: {
      control: 'select',
      options: COLOR_VALUES,
      description: `Color theme for the button. Allowed values: ${COLOR_VALUES.join(', ')}. Affects background/border/text colors depending on \`variant\`.`,
      table: { defaultValue: { summary: `${DEFAULT_COLOR}` } },
    },
    variant: {
      control: 'select',
      options: VARIANT_VALUES,
      description: `Visual variant of the button. Allowed values: ${VARIANT_VALUES.join(', ')} (changes emphasis and background/border styles).`,
      table: { defaultValue: { summary: `${DEFAULT_VARIANT}` } },
    },
    size: {
      control: 'select',
      options: SIZE_VALUES,
      description: `Button size. Allowed values: ${SIZE_VALUES.join(', ')}. Note: size affects padding and, for \`circle\` layout, the overall diameter.`,
      table: { defaultValue: { summary: `${DEFAULT_SIZE}` } },
    },
    layout: {
      control: 'select',
      options: LAYOUT_VALUES,
      description: `Layout mode for the button. Allowed values: ${LAYOUT_VALUES.join(', ')}. Some props are layout-specific (see icon, iconStart/iconEnd, helperIcon).`,
      table: { defaultValue: { summary: `${DEFAULT_LAYOUT}` } },
    },
    disabled: {
      control: 'boolean',
      description: 'Disables interaction and applies disabled visuals. Works across all layouts.',
      table: { defaultValue: { summary: 'false' } },
    },
    icon: {
      control: false,
      description: `Main icon for the button. Commonly used for icon-only buttons (layout 'circle') or in 'stacked' layout. When using a label, prefer \`iconStart\` or \`iconEnd\` in the 'default' layout.`,
      table: { defaultValue: { summary: 'null' } },
    },
    iconStart: {
      control: false,
      description: `Icon displayed before the label (left side). Effective when a label is present (e.g. layout 'default').`,
      table: { defaultValue: { summary: 'null' } },
    },
    iconEnd: {
      control: false,
      description: `Icon displayed after the label (right side). Effective when a label is present (e.g. layout 'default').`,
      table: { defaultValue: { summary: 'null' } },
    },
    helperIcon: {
      control: false,
      description: `Auxiliary icon for secondary actions (e.g. menu or more options). Typically used with the 'stacked' layout alongside a main action; may be clickable via \`helperOnClick\`. Default: MdSettings.`,
      table: { defaultValue: { summary: 'MdSettings' } },
    },
    helperOnClick: {
      control: false,
      description: `Click handler for the helper/auxiliary icon (\`helperIcon\`). Only relevant when in 'stacked' layout to trigger secondary actions.`,
      table: { defaultValue: { summary: 'null' } },
    },
    onClick: {
      control: false,
      description: `Main click handler for the button. Called when the primary area is activated (click or Enter/Space). Works across all layouts; for 'stacked' layout this is the main action, separate from \`helperOnClick\`.`,
      table: { defaultValue: { summary: 'null' } },
    },
    onKeyDown: {
      control: false,
      description: `Keyboard keydown event handler. Useful to handle custom keyboard interactions; receives the native keyboard event. Works across all layouts.`,
      table: { defaultValue: { summary: 'null' } },
    },
  },

  args: {
    onClick: fn(),
    onKeyDown: fn(),
    helperOnClick: fn(),
    helperIcon: <MdSettings fontSize="small" />,
  },
} satisfies Meta<typeof BBButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  name: 'Primary',
  args: {
    variant: 'primary',
  },
  render: (args) => (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
      {COLOR_VALUES.map((color) => (
        <BBButton
          {...args}
          key={color}
          color={color}
          label={`Primary ${color.charAt(0).toUpperCase() + color.slice(1)}`}
        />
      ))}
    </div>
  ),
};

export const Secondary: Story = {
  name: 'Secondary',
  args: {
    variant: 'secondary',
  },
  render: (args) => (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
      {COLOR_VALUES.map((color) => (
        <BBButton
          {...args}
          key={color}
          color={color}
          label={`Secondary ${color.charAt(0).toUpperCase() + color.slice(1)}`}
        />
      ))}
    </div>
  ),
};

export const Tertiary: Story = {
  name: 'Tertiary',
  args: {
    variant: 'tertiary',
  },
  render: (args) => (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
      {COLOR_VALUES.map((color) => (
        <BBButton
          {...args}
          key={color}
          color={color}
          label={`Tertiary ${color.charAt(0).toUpperCase() + color.slice(1)}`}
        />
      ))}
    </div>
  ),
};

export const Subtle: Story = {
  name: 'Subtle',
  args: {
    variant: 'subtle',
  },
  render: (args) => (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
      {COLOR_VALUES.map((color) => (
        <BBButton
          {...args}
          key={color}
          color={color}
          label={`Subtle ${color.charAt(0).toUpperCase() + color.slice(1)}`}
        />
      ))}
    </div>
  ),
};

export const Stacked: Story = {
  name: 'Stacked',
  args: {
    variant: 'primary',
    layout: 'stacked',
    icon: <MdFavorite size="1.5rem" />,
  },
  render: (args) => (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
      {COLOR_VALUES.map((color) => (
        <BBButton
          {...args}
          key={color}
          color={color}
          label={`Stacked ${color.charAt(0).toUpperCase() + color.slice(1)}`}
        />
      ))}
    </div>
  ),
};

export const StackedWithHelperClick: Story = {
  name: 'Stacked with Helper Click',
  args: {
    layout: 'stacked',
    variant: 'primary',
    label: 'Main Action',
    icon: <MdFavorite size="1.5rem" />,
    helperIcon: <MdMoreVert fontSize="small" />,
    helperOnClick: fn(),
    onClick: fn(),
  },
};

export const Circle: Story = {
  name: 'Circle',
  args: {
    tooltipPlacement: 'top',
    variant: 'primary',
    layout: 'circle',
    icon: <MdFavorite size="1.5rem" />,
  },
  render: (args) => (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
      {COLOR_VALUES.map((color) => (
        <BBButton
          {...args}
          key={color}
          color={color}
          tooltipLabel={`Circle ${color.charAt(0).toUpperCase() + color.slice(1)}`}
        />
      ))}
    </div>
  ),
};

export const WithIcon: Story = {
  args: {
    label: 'Like',
    variant: 'primary',
    iconStart: <MdFavorite size="1.5rem" />,
  },
};

export const AllSizes: Story = {
  name: 'All Sizes',
  args: {
    variant: 'primary',
  },
  render: (args) => (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
      {SIZE_VALUES.map((size) => (
        <BBButton
          {...args}
          key={size}
          size={size}
          label={`Size ${size.toUpperCase()}`}
        />
      ))}
    </div>
  ),
};

export const Disabled: Story = {
  args: {
    label: 'Disabled Button',
    variant: 'primary',
    disabled: true,
  },
};

export const WithTooltip: Story = {
  name: 'With Tooltip (All Placements)',
  args: {
    label: 'Hover me',
    variant: 'primary',
  },
  render: (args) => (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', padding: '4rem' }}>
      {TOOLTIP_PLACEMENT_VALUES.map((placement) => (
        <BBButton
          {...args}
          key={placement}
          tooltipPlacement={placement}
          tooltipLabel={`Tooltip on the ${placement}`}
        />
      ))}
    </div>
  ),
};

export const WithStartAndEndIcons: Story = {
  name: 'With Start and End Icons',
  args: {
    variant: 'primary',
  },
  render: (args) => (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
      <BBButton
        {...args}
        label="Icon Start"
        layout="default"
        iconStart={<MdFavorite size="1.5rem" />}
      />
      <BBButton
        {...args}
        label="Icon End"
        layout="default"
        iconEnd={<MdFavorite size="1.5rem" />}
      />
      <BBButton
        {...args}
        label="Both Icons"
        layout="default"
        iconStart={<MdFavorite size="1.5rem" />}
        iconEnd={<MdFavorite size="1.5rem" />}
      />
    </div>
  ),
};
