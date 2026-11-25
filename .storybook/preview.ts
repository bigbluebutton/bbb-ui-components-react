import type { Preview } from '@storybook/react-vite'
import { createElement, useLayoutEffect } from 'react';
import type { ReactNode } from 'react';
import '@fontsource/nunito-sans/400.css';
import '@fontsource/nunito-sans/600.css';
import '@fontsource/nunito-sans/700.css';
import './preview.css';
import { fontFamily } from '../src/stylesheets/typography';

interface StoryRootProps {
  dir: string;
  target: HTMLElement;
  children: ReactNode;
}

// React's own layout effect, so that the direction and the font are set before the story is painted or its `play` function runs.
function StoryRoot({ dir, target, children }: StoryRootProps) {
  useLayoutEffect(() => {
    target.setAttribute('dir', dir);
    // The components take the font from the app, so Storybook sets the design system's.
    target.style.fontFamily = fontFamily;
    return () => {
      target.removeAttribute('dir');
      target.style.fontFamily = '';
    };
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
      // A story sets them on the whole document, so that what renders outside the story (a modal, a tooltip)
      // follows them too. A docs page sets them on each story only, so that its own text does not move.
      const target = viewMode === 'docs' ? canvasElement : document.documentElement;
      return createElement(StoryRoot, { dir: globals.direction, target, children: createElement(Story) });
    },
  ],
};

export default preview;
