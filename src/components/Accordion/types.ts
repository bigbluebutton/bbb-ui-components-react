import { TOOLTIP_PLACEMENT_VALUES } from './constants';
import * as React from 'react';

export interface StyledExpandIcon {
  $expanded: boolean;
}

export interface StyledAccordionContent {
  $expanded: boolean;
  $scrollHeight: number;
}

type TooltipPlacementType = typeof TOOLTIP_PLACEMENT_VALUES[number];

export interface AccordionProps {
  /** The text to be displayed in the accordion header. */
  title: string;

  /** Optional label for a tooltip that appears when hovering the header; no tooltip is shown when omitted. */
  tooltipLabel?: string;

  /** Placement of the tooltip when `tooltipLabel` is provided. @default 'top' */
  tooltipPlacement?: TooltipPlacementType;

  /** Accessible name for the expand button. */
  ariaLabel?: string;

  /** ID of the element that labels the expand button. */
  ariaLabelledBy?: string;

  /** ID of the element that describes the expand button. */
  ariaDescribedBy?: string;

  /** Optional React node rendered inside the button header, alongside the title. @default null */
  buttonHeader?: React.ReactNode;

  /** Content shown when the accordion is expanded. */
  children?: React.ReactNode;
};
