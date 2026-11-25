import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-a11y",
    "@storybook/addon-docs",
    "@storybook/addon-mcp",
    "@storybook/addon-vitest"
  ],
  storySorts: [
    {
      order: [
        'Introduction',
        'Foundation',
        ['Color', 'Spacing', 'Radius', 'Shadow', 'Type'],
        'Components',
        ['Action', 'Form', 'Display', 'Feedback', 'Navigation', 'Overlay'],
      ],
    },
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
};
export default config;
