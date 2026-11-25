# BBBTextAreaInput

The `BBBTextAreaInput` component provides a styled, multi-line text input field that automatically focuses on render and supports all standard `textarea` attributes.

## Usage Example

```jsx
import { BBBTextAreaInput } from '@bigbluebutton/bbb-ui-components-react';

<BBBTextAreaInput placeholder="Type your text here..." />
```

## Props

| Property        | Type                                                              | Default | Description                                                              |
| --------------- | ----------------------------------------------------------------- | ------- | ---------------------------------------------------------------------- |
| `placeholder`   | `string`                                                          | `''`    | The placeholder text to be displayed when the textarea is empty.       |
| `rows`          | `number`                                                          | `1`     | The initial number of visible text lines.                              |
| `maxLength`     | `number`                                                          | `250`   | The maximum number of characters allowed in the textarea.              |
| `autoFocus`     | `boolean`                                                         | `true`  | If `true`, the textarea will be focused on mount.                      |
| `inputRef`      | `React.Ref<HTMLTextAreaElement>`                                  |         | A ref to be forwarded to the underlying `textarea` element.            |
| `onChange`      | `(event: React.ChangeEvent<HTMLTextAreaElement>) => void`         |         | Callback fired when the value is changed.                              |
| `onKeyDown`     | `(event: React.KeyboardEvent<HTMLTextAreaElement>) => void`       |         | Callback fired when a key is pressed.                                  |
| `value` | `string \| readonly string[] \| number` |  | The text in the field, when the app controls it. Use it together with `onChange`. |
| `defaultValue` | `string \| readonly string[] \| number` |  | The text in the field at first, when the app does not control it. |
| `disabled` | `boolean` | `false` | When true, the field cannot be used. |
| `id` | `string` |  | Id of the textarea element, to connect a label to it. |
| `name` | `string` |  | Name of the field when a form is submitted. |
| `...props`      | `any`                                                             |         | Any other props will be passed down to the underlying `textarea` element. |
