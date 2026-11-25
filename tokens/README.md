# Design tokens

`tokens.json` is the source of the library's design tokens, in the [DTCG 2025.10](https://www.designtokens.org/tr/2025.10/format/) format. `npm run tokens` turns it into `src/stylesheets/*.ts`, which the components import, and into the token lists in `src/docs/*.mdx`, which people and agents read. Those files and lists are generated: never edit them by hand.

| Path | What |
|---|---|
| `tokens.json` | Primitives (`palette`), semantic colors (`color`), spacing, radius, shadow, font size and weight |
| `build.mjs` | [Style Dictionary](https://styledictionary.com/) config: names, value transforms, the `var(--name, fallback)` chain |

To change a token, edit `tokens.json`, run `npm run tokens` and commit both. CI runs `npm run tokens:check`, which fails when `src/stylesheets` or `src/docs` does not match `tokens.json`.

- A color carries `components` (required by DTCG) and `hex` (for people); the build fails if they disagree.
- `$description` says when to use the token, and shows in the token lists. Leave it out until a purpose is agreed (see `docs/decisions/0006-*`).
- `$extensions.org.bigbluebutton` keeps what the code needs and a design tool does not: `cssVars` (the CSS variables a host page overrides, in lookup order) and `colorsKey` (the token's place in the grouped `colors` object).
