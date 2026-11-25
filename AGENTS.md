# AGENTS.md

How to use `@bigbluebutton/bbb-ui-components-react` when building a BigBlueButton plugin or client screen. To contribute to the library itself, read `CLAUDE.md`.

Props, defaults and examples are generated from the code: read them with `npx storybook tools docs show --id <component>` (for example `bbbutton`), or from the published Storybook's `manifests/components.json`. Do not rely on the component READMEs for props; some are out of date.

## Package and imports

- The package is `@bigbluebutton/bbb-ui-components-react`. Never import from `bbb-ui-components-react` or the deprecated `@mconf/bbb-ui-components-react`.
- Import per component for smaller bundles: `import { BBButton } from '@bigbluebutton/bbb-ui-components-react/Button'`. The subpath is the folder name; the export is `BBB<Name>`, except the button: `BBButton`, two B's.
- No provider and no global CSS. The ESM build imports `tippy.js/dist/tippy.css`, so the bundler needs a CSS loader.
- React, react-dom and styled-components must resolve to a single copy in the app (alias them in a plugin's webpack config).

## Tokens

- Never hard-code a color. Use the exported tokens (`colors.text.default`, `colors.brand.brand1`, `spacingMedium`, `borderRadiusSmall`…).
- Token values are CSS strings (`var(--color-brand-1, #0F70D7)`), so the host page can re-theme them. They do not work where JavaScript parses a color (canvas, chart libraries); read the computed CSS variable there.
- They are generated from `tokens/tokens.json` into `src/stylesheets/`.

## Common mistakes

1. `BBBButton` instead of `BBButton`.
2. `color="primary"`, `size="medium"`, `variant="danger"`. Valid: `color` default/danger/neutral, `size` md/sm, `variant` primary/secondary/tertiary/subtle.
3. Omitting `onClick` on `BBButton`; it is required, even with `type="submit"`.
4. Expecting `BBBModal` to close on Escape or overlay click by default, or to name itself from `title` (pass `contentLabel`).
5. Expecting `BBBSearch` to call `onSearch` in controlled mode.
6. Leaving `BBBTextAreaInput` with its defaults `autoFocus` true and `maxLength` 250.
7. Using `inputProps` on `BBBToggle` or `BBBCheckbox`; use `slotProps.input`.
8. Expecting `BBBToast` or a controlled `BBBHint` to hide itself; remove it in `onRequestClose`.

<!-- BEGIN:storybook-skills -->
<!-- Storybook updates this section on upgrade. Remove both markers to keep your own edits. -->

## Storybook

For every change to how the UI looks (you create, change, or delete a component, story, style, theme, or design token), follow these steps in order. Each step has a Storybook skill. First invoke the skills of all the steps, before you edit any file. Then follow each skill at its step.

1. `component-docs`: look up the components to reuse, with their props and usage examples, before you edit any file. Also when the user asks about a component's props, API, or usage.
2. `write-stories`: every component you create or change gets stories.
3. `test-stories`: run the story tests after every change, the way this skill says, never with a `package.json` test script, and fix what fails. Also when the user asks to run or fix story tests.
4. `ui-review`: publish a review that shows the user what changed, as your last step. Also when the user asks to see components or stories.

<!-- END:storybook-skills -->
