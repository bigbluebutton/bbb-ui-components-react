export const MODAL_PRIORITIES = {
  LOW: 'low',
  MEDIUM: 'medium',
  HIGH: 'high',
} as const;
export const MODAL_PRIORITY_VALUES = Object.values(MODAL_PRIORITIES);
export const MODAL_PRIORITY_Z_INDEX: Record<typeof MODAL_PRIORITY_VALUES[number], number> = {
  low: 1001,
  medium: 1002,
  high: 1003,
};
