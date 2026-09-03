# BBB UI Components React

This repository contains a library of reusable React components extracted from the main [**BigBlueButton (BBB)**](https://github.com/bigbluebutton/bigbluebutton) project. These components provide a consistent and customizable interface that can be reused in other projects, allowing them to easily adopt the BBB visual identity.

## Available Components

Below is a list of the components available in this library. Each component has its own detailed documentation with usage examples and a complete list of props.

- [BBBAccordion](./src/components/Accordion/README.md)
- [BBBAvatar](./src/components/Avatar/README.md)
- [BBButton](./src/components/Button/README.md)
- [BBBCheckbox](./src/components/Checkbox/README.md)
- [BBBDivider](./src/components/Divider/README.md)
- [BBBHint](./src/components/Hint/README.md)
- [BBBInput](./src/components/Input/README.md)
- [BBBModal](./src/components/Modal//README.md)
- [BBBNavigation](./src/components/Navigation/README.md)
- [BBBScrollArea](./src/components/ScrollArea/README.md)
- [BBBSearch](./src/components/Search/README.md)
- [BBBSelect](./src/components/Select/README.md)
- [BBBSpinner](./src/components/Spinner//README.md)
- [BBBTextAreaInput](./src/components/TextAreaInput/README.md)
- [BBBTextInput](./src/components/TextInput/README.md)
- [BBBToggle](./src/components/Toggle/README.md)
- [BBBTypography](./src/components/Typography/README.md)

## Peer Dependencies

This library requires the following peer dependencies to be installed in your project:

```
react ^18.2.0
react-dom ^18.2.0
styled-components >=5.3.0
react-modal >=3.16.1
@emotion/react ^11.13.0
@emotion/styled ^11.13.0
@mui/material ^6.1.4 || ^7.0.0
@mui/icons-material ^6.1.4 || ^7.0.0
prop-types ^15.8.1
react-icons ^5.5.0
```

Make sure to install these dependencies to avoid runtime errors and ensure compatibility.

You can install all of them with the following command:

```bash
npm install react react-dom styled-components react-modal @emotion/react @emotion/styled @mui/material @mui/icons-material prop-types react-icons
```

**Note**: `@tippyjs/react` and `tippy.js` (used internally by the Tooltip) ship as regular dependencies of this library, so they're installed automatically — no need to add them yourself.

## Color Customization with CSS Variables

This library supports overriding component colors using CSS custom properties (variables). You can define these variables in your project's global CSS or stylesheets to customize the appearance of components without modifying the library code. This is particularly useful for theming and maintaining consistency with your application's design system.

To use this feature:
1. Define the CSS variables in your project's root styles (e.g., in a global CSS file or via styled-components' `createGlobalStyle`).
2. The library's components will automatically pick up these variables if they are set on the `:root` element or a parent container.

**Note**: These variables are optional. If not defined, the components will fall back to their default styled-components theme values, which are derived from the project's `src/stylesheets/palette.ts` file.

### Available CSS Variables

The following table lists the supported CSS variables for color overriding, extracted from `src/stylesheets/palette.ts`. Each variable corresponds to a specific color aspect used in the components (e.g., neutrals, brands, semantics). The "Maps to BBB Core Variable" column indicates if the variable aligns with a standard BBB core color (based on the file's comments). The "Default Value" column shows the fallback color used if the variable is not set.

| Variable Name              | Maps to BBB Core Variable  | Default Value |
|----------------------------|----------------------------|---------------|
| `--color-neutral-2`        | No                         | #717C91      |
| `--color-neutral-3`        | No                         | #B0BDC9      |
| `--color-neutral-4`        | No                         | #DCE4EC      |
| `--color-neutral-white`    | No                         | #FFFFFF      |
| `--color-light-gray`       | No                         | #F4F6FA      |
| `--color-gray`             | No                         | #4E5A66      |
| `--color-dark-gray`        | No                         | #393C48      |
| `--color-brand-1`          | No                         | #0F70D7      |
| `--color-brand-2`          | No                         | #0F70D7      |
| `--color-brand-3`          | No                         | #0F70D7      |
| `--color-brand-light`      | Yes (`--color-blue-aux`)   | #E5EFFB      |
| `--color-brand-aux`        | Yes (`--color-brand-aux`)  | #E5EFFB      |
| `--color-success`          | No                         | #2DD36F      |
| `--color-warning`          | No                         | #F59240      |
| `--color-error`            | Yes (`--color-danger`)     | #DF2721      |
| `--color-error-dark`       | Yes (`--color-danger-dark`)| #AE1010      |
| `--color-background-white` | No                         | #FFFFFF      |
| `--color-background-light` | No                         | #F4F6FA      |
| `--color-background-blue`  | No                         | #E5EFFB      |
| `--color-border-default`   | No                         | #B0BDC9      |
| `--color-border-selected`  | No                         | #0F70D7      |
| `--color-border-error`     | No                         | #DF2721      |
| `--color-border-default`   | Yes (`--default-border`)   | #B0BDC9      |
| `--color-text-default`     | No                         | #393C48      |
| `--color-text-light`       | No                         | #717C91      |
| `--color-icon-default`     | No                         | #717C91      |
| `--color-icon-blue`        | No                         | #0F70D7      |
| `--color-icon-white`       | No                         | #FFFFFF      |
| `--color-hover-dark`       | No                         | #0C57A7      |
| `--color-hover-light`      | No                         | #D4E5FA      |
| `--color-hover-neutral`    | No                         | #DCE4EC      |
| `--color-border-focus-ring`| No                         | rgba(29, 101, 212, 0.15) |
| `--color-icon-default-dark`| No                         | rgba(255, 255, 255, 0.35) |
| `--color-overlay`          | No                         | rgba(0, 0, 0, 0.75) |
| `--color-shadow-default`   | No                         | rgb(0 35 11 / 20%) |
| `--color-user-you`         | No                         | #19237C      |

**Example Usage**:
```css
:root {
  --color-primary: #ff5733; /* Override primary brand color to a custom orange */
  --color-text-default: #333333; /* Darker text for better contrast */
}
```

If you need to override colors for specific components or add new variables, refer to the component's `styles.ts` file for implementation details.

### Importing Color Tokens in JS

In addition to CSS variables, the same color tokens used internally by every component are also
exported as a nested `colors` object, for use directly in JS/TS (e.g. in your own
styled-components):

```jsx
// From the package root
import { colors } from '@bigbluebutton/bbb-ui-components-react';

// Or from the dedicated, tree-shakeable subpath
import { colors } from '@bigbluebutton/bbb-ui-components-react/colors';

const StyledDiv = styled.div`
  color: ${colors.text.default};
  background: ${colors.background.white};
`;
```

`colors` is grouped the same way as the table above: `neutral`, `brand`, `semantic`, `background`,
`border`, `text`, `icon`, `hover`, `overlay`, `shadow`, `user`.

## Installation

You can install the library directly from npm:

```bash
npm install @bigbluebutton/bbb-ui-components-react
```

## Local Development

If you want to build the library locally or contribute:

### Building the bundle

```
nvm use
npm install
npm run build
```

### Using npm link

When developing and testing locally with `npm link`, you may need to adjust your Webpack configuration to ensure compatibility with `styled-components` and `react`, which do not handle multiple instances well. Add the following alias configuration to the project that uses this library:

```json
resolve: {
  alias: {
    'styled-components': path.resolve('./node_modules/styled-components'),
    react: path.resolve('./node_modules/react'),
    'react-dom': path.resolve('./node_modules/react-dom'),
  },
}
```
