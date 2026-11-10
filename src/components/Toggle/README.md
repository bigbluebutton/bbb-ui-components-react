# BBBToggle

The `BBBToggle` component provides a flexible toggle switch that can be used for binary state changes. It supports labels (`label` and `helperText`) and various textPosition configurations.

![Demo](assets/example.png)

## Usage Example

### Toggle with label
```jsx
import { BBBToggle } from 'bbb-ui-components-react';

<BBBToggle label="Enable Notifications" />
```

### Toggle with label and helper text
```jsx
import { BBBToggle } from 'bbb-ui-components-react';

<BBBToggle label="Enable Notifications" helperText="This is a toggle to enable the notifications." />
```

### Toggle with label and helper text on the left
```jsx
import { BBBToggle } from 'bbb-ui-components-react';

<BBBToggle label="Enable Notifications" helperText="This is a toggle to enable the notifications." textPosition="left" />
```

### Full-width toggle with the label at the start and the switch at the end
```jsx
import { BBBToggle } from 'bbb-ui-components-react';

<BBBToggle label="Join muted" helperText="Joining users are muted by default" textPosition="left" fullWidth />
```

### Toggle with label and helper text on the top
```jsx
import { BBBToggle } from 'bbb-ui-components-react';

<BBBToggle label="Enable Notifications" helperText="This is a toggle to enable the notifications." textPosition="top" />
```

### Toggle with Tooltip

Useful to explain why a disabled toggle can't be changed. The tooltip shows on hover and keyboard focus, and its text is also exposed to screen readers as part of the toggle's description; when there is no `label`, `ariaLabel`, `ariaLabelledBy` or `helperText`, it names the toggle instead.

A disabled toggle with a `tooltipLabel` stays in the tab order so keyboard users can reach the tooltip: the input gets `aria-disabled="true"` instead of the native `disabled` attribute, and clicks, label clicks and Space are ignored. Like a natively disabled input, it is left out of form submission and validation: its `name` and `required` are dropped while it is disabled.

```jsx
import { BBBToggle } from 'bbb-ui-components-react';

<BBBToggle label="Share webcam" disabled tooltipLabel="Webcams are locked by a moderator" />
```

## Props

| Property       | Type                                                                | Default   | Description                                                                    |
| -------------- | ------------------------------------------------------------------- | --------- | ------------------------------------------------------------------------------ |
| `label`        | `string`                                                            |           | The main label text displayed next to the toggle.                              |
| `helperText`   | `string`                                                            |           | The helper text displayed below the label.                                     |
| `textPosition`      | `keyof typeof TEXT_POSITIONS`                                       | `'right'` | The position of the text labels relative to the toggle switch.                 |
| `fullWidth`         | `boolean`                                                           | `false`   | If `true`, the toggle stretches to its container, putting the text and the switch at opposite ends. Only used with `textPosition` `'left'` (text at the start) or `'right'` (text at the end). |
| `disabled`          | `boolean`                                                           | `false`   | If `true`, the toggle is disabled and unresponsive, and its label and helper text are dimmed. |
| `onChange`          | `(event: React.ChangeEvent<HTMLInputElement>, checked: boolean) => void` |           | Callback function that is fired when the toggle state changes.                 |
| `ariaLabel`         | `string`                                                            |           | The accessible name for the toggle.                                            |
| `ariaLabelledBy`    | `string`                                                            |           | The ID of the element that labels the toggle.                                  |
| `ariaDescribedBy`   | `string`                                                            |           | The ID of the element that describes the toggle.                               |
| `tooltipLabel`      | `string`                                                            |           | Text shown in a tooltip on hover and keyboard focus. When set, a disabled toggle stays focusable (`aria-disabled`) so the tooltip can be reached. |
| `tooltipPlacement`  | `keyof typeof TOOLTIP_PLACEMENTS`                                   | `'top'`   | The placement of the tooltip relative to the toggle.                           |
| `...props`          | `Omit<SwitchProps, 'inputProps'>`                                   |           | Any other props will be passed down to the underlying Material-UI Switch component. Use `slotProps.input` to set attributes on the `<input>`. |
