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
  title: string;
  tooltipLabel?: string;
  tooltipPlacement?: TooltipPlacementType;
  ariaLabel?: string;
  ariaLabelledBy?: string;
  ariaDescribedBy?: string;
  buttonHeader?: React.ReactNode;
  children?: React.ReactNode;
};
