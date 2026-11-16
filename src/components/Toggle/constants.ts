export const TEXT_POSITIONS = {
  RIGHT: 'right',
  LEFT: 'left',
  TOP: 'top',
  BOTTOM: 'bottom',
} as const;

export const TEXT_POSITIONS_VALUES = Object.values(TEXT_POSITIONS);
export const DEFAULT_TEXT_POSITION = TEXT_POSITIONS_VALUES[0];

export const TOOLTIP_PLACEMENTS = {
  TOP: 'top',
  BOTTOM: 'bottom',
  LEFT: 'left',
  RIGHT: 'right',
} as const;
export const TOOLTIP_PLACEMENT_VALUES = Object.values(TOOLTIP_PLACEMENTS);
export const DEFAULT_TOOLTIP_PLACEMENT = TOOLTIP_PLACEMENTS.TOP;
