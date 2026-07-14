# CLAUDE.md

Guidance for Claude Code when working in this repository.

## Project overview

`@mconf/bbb-ui-components-react` is a library of reusable React components extracted from BigBlueButton (BBB), published to npm. Each component lives in its own folder under `src/components/<Name>/` and is built/exported independently (tree-shakeable per-component entry points).

`CHANGELOG.md` and the package version are generated automatically on release by `TriPSs/conventional-changelog-action` (see `.github/workflows/tag_and_release.yml`), using the `conventionalcommits` preset. This is why **correct commit type and scope matter**: they directly drive the changelog content and the version bump (see "Commit conventions" below).

## Adding a new component

Component folder/file names are **raw** PascalCase (`Button`, `Input`, `Navigation`...), but the **exported** component name is prefixed: `BBB<Name>` (e.g. `Toggle` folder → `BBBToggle` export). The one known exception is `Button` → `BBButton` (only one extra `B`, since `BBBButton` reads badly) — check `src/components/index.ts` for how similarly-named components were prefixed before deciding, but default to the full `BBB<Name>` form.

### Files to create in `src/components/<Name>/`

| File | Required? | Purpose |
|---|---|---|
| `component.tsx` | always | Component implementation. |
| `styles.ts` | always | styled-components, using `$`-prefixed transient props (internal, not part of the public API). |
| `index.ts` | always | `export { default as BBB<Name> } from './component';` |
| `component.stories.tsx` | always | Storybook stories: `title: 'BBB<Name>'`, `tags: ['autodocs']`, an `argTypes` entry with a `description` per public prop, and a one-line JSDoc comment above every named story export describing what that story demonstrates. |
| `README.md` | always | Usage examples + a Props table (`Property \| Type \| Default \| Description`). |
| `assets/example.png` | conventional | Demo screenshot referenced by the README as `![Demo](assets/example.png)`. Most components have one; add it when you can. |
| `types.ts` | if the component takes props | The public `<Name>Props` type/interface. Document every field with a single-line JSDoc comment (see "Prop JSDoc conventions" below). Internal styled-components prop interfaces (`Styled*Props`, `$`-prefixed fields) don't need JSDoc — they aren't public API. |
| `constants.ts` | if the component has variant/size/layout-style enums or shared defaults | Exported `*_VALUES` arrays and `DEFAULT_*` constants, reused by `types.ts`, `component.tsx`, and `component.stories.tsx`. |

### References to update elsewhere

- `src/components/index.ts` — add `export { BBB<Name> } from './<Name>';` (keep alphabetical by folder name).
- Root `README.md` — add `- [BBB<Name>](./src/components/<Name>/README.md)` to the "Available Components" list (keep alphabetical).
- `webpack.config.babel.js` — add `<Name>: './src/components/<Name>/index.ts',` to the `entry` map.
- `package.json` `exports` — add a `"./<Name>"` block, mirroring an existing one (e.g. copy the `"./Toggle"` block and replace `Toggle` with `<Name>` throughout). This is what makes `import { BBB<Name> } from '@mconf/bbb-ui-components-react/<Name>'` tree-shakeable.
- `src/index.ts` needs **no** change — it already does `export * from './components'`, which picks up new components automatically.

## Adding a new prop to an existing component

1. `types.ts`/`type.ts` — add the field to the public props type, with a single-line JSDoc comment directly above it (blank line before the comment; add an `@default` tag if the prop has a default value). This is enforced by the `jsdoc/multiline-blocks` and `jsdoc/lines-before-block` rules in `eslint.config.mjs`, scoped to `types.ts`/`type.ts`.
2. `component.tsx` — destructure the prop (with its default value, if any) and wire up the logic/rendering.
3. `styles.ts` — if the prop affects styling, thread it through as a `$`-prefixed transient prop on the relevant styled-component; it doesn't need JSDoc.
4. `component.stories.tsx` — add an `argTypes.<prop>` entry with a `description` (keep the wording in sync with the `types.ts` JSDoc), and add a new named story if the prop introduces a visually distinct state worth its own example, with a one-line JSDoc comment describing what it demonstrates.
5. `README.md` (component-level) — add a row to the Props table.

A new prop does **not** require changes to the root `README.md`, `package.json` `exports`, or `webpack.config.babel.js` — those only change when adding a whole new component.

## Commit conventions

Commits follow Conventional Commits: `type(scope): subject`.

- **Type**: `feat` (new component or new prop), `fix` (bug fix), `docs` (README/Storybook/JSDoc-only changes), `chore` (tooling/config), or `refactor`/`style`/`test`/`build`/`ci` as appropriate. `feat`/`fix` drive the automatic version bump, so getting the type right matters.
- **Scope**: the component's **exported** name — e.g. `BBButton`, `BBBInput`, `BBBModal`, `BBBTypography` — not the raw folder name. Some older commits in this repo used the raw lowercase name instead (e.g. `fix(toggle)`, `fix(spinner)`); that's the inconsistency to avoid, not a pattern to follow.
- Changes spanning multiple components (tooling, lint config, cross-cutting docs) can omit the scope, e.g. `chore(ci): ...`, `docs: ...`.

Examples: `feat(BBBToggle): add indeterminate state`, `fix(BBButton): ...`, `docs(BBBTypography): add stories for every typography variant`.
