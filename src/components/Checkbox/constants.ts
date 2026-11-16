export const LAYOUTS = {
  RIGHT: 'right',
  LEFT: 'left',
} as const;
export const LAYOUT_VALUES = Object.values(LAYOUTS);
export const DEFAULT_LAYOUT = LAYOUT_VALUES[0];

export const TOOLTIP_PLACEMENTS = {
  TOP: 'top',
  BOTTOM: 'bottom',
  LEFT: 'left',
  RIGHT: 'right',
} as const;
export const TOOLTIP_PLACEMENT_VALUES = Object.values(TOOLTIP_PLACEMENTS);
export const DEFAULT_TOOLTIP_PLACEMENT = TOOLTIP_PLACEMENTS.TOP;
