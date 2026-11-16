import type { Plugin } from 'tippy.js';

// WCAG 1.4.13 requires a tooltip to be dismissible without moving the pointer or focus.
export const hideOnEsc: Plugin = {
  name: 'hideOnEsc',
  defaultValue: true,
  fn({ hide }) {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') hide();
    };
    const stopListening = () => document.removeEventListener('keydown', onKeyDown, true);

    return {
      onShow() {
        document.addEventListener('keydown', onKeyDown, true);
      },
      onHide: stopListening,
      onDestroy: stopListening,
    };
  },
};

export const TOOLTIP_PLUGINS = [hideOnEsc];
