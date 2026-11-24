# Design tokens

`tokens.json` is the source of the library's design tokens, in the [DTCG 2025.10](https://www.designtokens.org/tr/2025.10/format/) format. `npm run tokens` turns it into `src/stylesheets/*.ts`, which the components import. Those files are generated: never edit them by hand.

| Path | What |
|---|---|
| `tokens.json` | Primitives (`palette`), semantic colors (`color`), spacing, radius, font size and weight |
| `build.mjs` | [Style Dictionary](https://styledictionary.com/) config: names, value transforms, the `var(--name, fallback)` chain |

To change a token, edit `tokens.json`, run `npm run tokens` and commit both. CI runs `npm run tokens:check`, which fails when `src/stylesheets` does not match `tokens.json`.

- A color carries `components` (required by DTCG) and `hex` (for people); the build fails if they disagree.
- `$extensions.org.bigbluebutton` keeps what the code needs and a design tool does not: `cssVars` (the CSS variables a host page overrides, in lookup order) and `colorsKey` (the token's place in the grouped `colors` object).
