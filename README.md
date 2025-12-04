# BBB UI Components React

This repository contains a library of reusable React components extracted from the main [**BigBlueButton (BBB)**](https://github.com/bigbluebutton/bigbluebutton) project. These components provide a consistent and customizable interface that can be reused in other projects, allowing them to easily adopt the BBB visual identity.

## Available Components

Below is a list of the components available in this library. Each component has its own detailed documentation with usage examples and a complete list of props.

- [BBBAccordion](./src/components/Accordion/README.md)
- [BBButton](./src/components/Button/README.md)
- [BBBCheckbox](./src/components/Checkbox/README.md)
- [BBBDivider](./src/components/Divider/README.md)
- [BBBHint](./src/components/Hint/README.md)
- [BBBModal](./src/components/Modal//README.md)
- [BBBNavigation](./src/components/Navigation/README.md)
- [BBBSelect](./src/components/Select/README.md)
- [BBBSpinner](./src/components/Spinner//README.md)
- [BBBTextAreaInput](./src/components/TextAreaInput/README.md)
- [BBBTextInput](./src/components/TextInput/README.md)
- [BBBToggle](./src/components/Toggle/README.md)
- [BBBTypography](./src/components/Typography/README.md)

## Installation

This library is under active development and has not yet been published on npm. For now, you can clone the repository and install it locally.

### Building the bundle

```
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

## Peer Dependencies

This library requires the following peer dependencies to be installed in your project:

```
react >=18.0.0
react-dom >=18.0.0
styled-components >=5.3.0
react-modal >=3.16.1
@emotion/react ^11.14.0
@emotion/styled ^11.14.1
@mui/material ^7.3.1
@mui/styles ^6.4.8
prop-types ^15.8.1
react-icons ^5.5.0
```

Make sure to install these dependencies to avoid runtime errors and ensure compatibility.

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
| `--color-brand-1`          | No                         | #1D65D4      |
| `--color-brand-2`          | No                         | #1D65D4      |
| `--color-brand-3`          | No                         | #1D65D4      |
| `--color-brand-light`      | Yes (`--color-blue-aux`)   | #E5EFFB      |
| `--color-brand-aux`        | Yes (`--color-brand-aux`)  | #E5EFFB      |
| `--color-success`          | No                         | #2DD36F      |
| `--color-warning`          | No                         | #F59240      |
| `--color-error`            | Yes (`--color-danger`)     | #D6232D      |
| `--color-error-dark`       | Yes (`--color-danger-dark`)| #B91C25      |
| `--color-background-white` | No                         | #FFFFFF      |
| `--color-background-light` | No                         | #F4F6FA      |
| `--color-background-blue`  | No                         | #E5EFFB      |
| `--color-border-default`   | No                         | #B0BDC9      |
| `--color-border-selected`  | No                         | #1D65D4      |
| `--color-border-error`     | No                         | #D6232D      |
| `--color-border-default`   | Yes (`--default-border`)   | #B0BDC9      |
| `--color-text-default`     | No                         | #393C48      |
| `--color-text-light`       | No                         | #717C91      |
| `--color-icon-default`     | No                         | #717C91      |
| `--color-icon-blue`        | No                         | #1D65D4      |
| `--color-icon-white`       | No                         | #FFFFFF      |
| `--color-hover-dark`       | No                         | #1E53AF      |
| `--color-hover-light`      | No                         | #D4E5FA      |
| `--color-hover-neutral`    | No                         | #DCE4EC      |

**Example Usage**:
```css
:root {
  --color-primary: #ff5733; /* Override primary brand color to a custom orange */
  --color-text-default: #333333; /* Darker text for better contrast */
}
```

If you need to override colors for specific components or add new variables, refer to the component's `styles.ts` file for implementation details.
