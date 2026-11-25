import type { Preview } from '@storybook/react-vite'
import { createElement, useLayoutEffect } from 'react';
import type { ReactNode } from 'react';

interface DirectionProps {
  dir: string;
  target: HTMLElement;
  children: ReactNode;
}

// React's own layout effect, so that the direction is set before the story is painted or its `play` function runs.
function Direction({ dir, target, children }: DirectionProps) {
  useLayoutEffect(() => {
    target.setAttribute('dir', dir);
    return () => target.removeAttribute('dir');
  }, [dir, target]);
  return children;
}

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },
  },
  globalTypes: {
    direction: {
      description: 'Reading direction of the components',
      toolbar: {
        title: 'Direction',
        icon: 'transfer',
        items: [
          { value: 'ltr', title: 'Left to right' },
          { value: 'rtl', title: 'Right to left' },
        ],
        dynamicTitle: true,
      },
    },
  },
  initialGlobals: {
    direction: 'ltr',
  },
  decorators: [
    (Story, { globals, viewMode, canvasElement }) => {
      // A story sets it on the whole document, so that what renders outside the story (a modal, a tooltip)
      // follows it too. A docs page sets it on each story only, so that its own text does not move.
      const target = viewMode === 'docs' ? canvasElement : document.documentElement;
      return createElement(Direction, { dir: globals.direction, target, children: createElement(Story) });
    },
  ],
};

export default preview;
