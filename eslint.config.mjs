// @ts-check

import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import reactRecommended from 'eslint-plugin-react/configs/recommended.js';
import hooksPlugin from 'eslint-plugin-react-hooks';
import importPlugin from 'eslint-plugin-import';
import jsxA11yPlugin from 'eslint-plugin-jsx-a11y';
import jsdocPlugin from 'eslint-plugin-jsdoc';
import globals from 'globals';

export default tseslint.config(
  {
    ignores: [
      'node_modules/',
      'dist/',
      'build/',
      'webpack.config.babel.js',
    ],
  },

  eslint.configs.recommended,

  ...tseslint.configs.recommended,

  {
    ...reactRecommended,
    files: ['**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      ...reactRecommended.languageOptions,
      globals: {
        ...globals.browser,
      },
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },

  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    plugins: {
      'react-hooks': hooksPlugin,
    },
    rules: hooksPlugin.configs.recommended.rules,
  },

  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    plugins: {
      'jsx-a11y': jsxA11yPlugin,
    },
    rules: jsxA11yPlugin.configs.recommended.rules,
  },

  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    plugins: {
      import: importPlugin,
    },
    rules: {
      ...importPlugin.configs.errors.rules,
      ...importPlugin.configs.warnings.rules,
      ...importPlugin.configs.typescript.rules,
    },
    settings: {
      'import/resolver': {
        typescript: true,
        node: true,
      },
    },
  },

  {
    // Prop JSDoc in component `types.ts`/`type.ts` files: single-line blocks only,
    // each preceded by a blank line (but not the first prop right after `{`).
    files: ['src/components/**/types.ts', 'src/components/**/type.ts'],
    plugins: {
      jsdoc: jsdocPlugin,
    },
    rules: {
      'jsdoc/multiline-blocks': ['error', {
        noMultilineBlocks: true,
        allowMultipleTags: false,
      }],
      'jsdoc/lines-before-block': ['error', {
        ignoreSingleLines: false,
      }],
    },
  },
);
