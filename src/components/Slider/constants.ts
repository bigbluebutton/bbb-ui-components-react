export const VALUE_LABEL_DISPLAYS = {
  AUTO: 'auto',
  ON: 'on',
  OFF: 'off',
} as const;

export const VALUE_LABEL_DISPLAY_VALUES = Object.values(VALUE_LABEL_DISPLAYS);
export const DEFAULT_VALUE_LABEL_DISPLAY = VALUE_LABEL_DISPLAYS.AUTO;
export const DEFAULT_SHOW_MARK_TICKS = true;
export const DEFAULT_ANIMATE = true;
