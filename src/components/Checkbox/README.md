# BBBCheckbox

The `BBBCheckbox` component is a customizable checkbox that wraps the Material-UI Checkbox and provides additional features, such as custom layouts and a round variant.

![Demo](assets/example.png)

## Usage Example

```jsx
import { BBBCheckbox } from 'bbb-ui-components';

<BBBCheckbox label="I accept the terms" />
```

### Round Checkbox

```jsx
import { BBBCheckbox } from 'bbb-ui-components';

<BBBCheckbox label="Round Selection" round />
```

### Checkbox with Tooltip

Useful to explain why a disabled checkbox can't be changed. The tooltip shows on hover and keyboard focus, and its text is also exposed to screen readers as the input's description; when there is no `label` or `ariaLabel`, it names the checkbox instead.

A disabled checkbox with a `tooltipLabel` stays in the tab order so keyboard users can reach the tooltip: the input gets `aria-disabled="true"` instead of the native `disabled` attribute, and clicks, label clicks and Space are ignored. Like a natively disabled input, it is left out of form submission and validation: its `name` and `required` are dropped while it is disabled.

```jsx
import { BBBCheckbox } from 'bbb-ui-components';

<BBBCheckbox label="Share webcam" disabled tooltipLabel="Webcams are locked by a moderator" />
```

## Props

| Property   | Type                   | Default   | Description                                                                 |
| ---------- | ---------------------- | --------- | --------------------------------------------------------------------------- |
| `label`    | `string`               |           | The text to be displayed as the label for the checkbox.                     |
| `layout`   | `keyof typeof LAYOUTS` | `'right'` | The position of the label relative to the checkbox.                         |
| `round`      | `boolean`              | `false`   | If `true`, the checkbox will be rendered as a round radio-style button.     |
| `ariaLabel`| `string`               |           | The accessible name for the checkbox.                                       |
| `dataTest` | `string`               |           | The `data-test` attribute on the underlying `<input>` element.              |
| `disabled` | `boolean`              | `false`   | If `true`, disables the checkbox and dims its label.                        |
| `tooltipLabel` | `string`           |           | Text shown in a tooltip on hover and keyboard focus. When set, a disabled checkbox stays focusable (`aria-disabled`) so the tooltip can be reached. |
| `tooltipPlacement` | `keyof typeof TOOLTIP_PLACEMENTS` | `'top'` | The placement of the tooltip relative to the checkbox.               |
| `...props` | `Omit<CheckboxProps, 'inputProps'>` |  | Any other props will be passed down to the underlying Material-UI Checkbox component. Use `slotProps.input` to set attributes on the `<input>`. |
