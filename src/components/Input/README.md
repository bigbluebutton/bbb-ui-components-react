# BBBInput

The `BBBInput` component provides a labeled, auto-growing text field with an inline action button. It unifies the recurring "text field + submit button" pattern used across chat, guest messages, breakouts and similar areas, modeled after the core chat text input.

`BBBTextInput` and `BBBTextAreaInput` remain the right choice for standalone fields with no inline action button.

## Usage Example

### Basic usage — text field with a submit icon button
```jsx
import { BBBInput } from 'bbb-ui-components-react';
import { MdSend } from 'react-icons/md';

<BBBInput
  label="Message"
  placeholder="Type your message..."
  buttonIcon={<MdSend />}
  buttonAriaLabel="Send message"
  onSubmit={(value) => handleSend(value)}
/>
```

### With a text button label instead of an icon
```jsx
<BBBInput
  label="Message to guests"
  placeholder="Write something..."
  buttonLabel="Send"
  onSubmit={(value) => sendGuestMessage(value)}
/>
```

### Controlled
```jsx
const [value, setValue] = useState('');

<BBBInput
  label="Message to rooms"
  value={value}
  onChange={setValue}
  buttonIcon={<MdSend />}
  buttonAriaLabel="Send message"
  onSubmit={(submittedValue) => {
    submitMessage(submittedValue);
    setValue('');
  }}
/>
```

### With sent feedback
```jsx
<BBBInput
  label="Message"
  buttonIcon={<MdSend />}
  buttonAriaLabel="Send message"
  showSentFeedback
  onSubmit={(value) => handleSend(value)}
/>
```

### With extra actions around the submit button
```jsx
import { MdEmojiEmotions } from 'react-icons/md';

<BBBInput
  label="Message"
  buttonIcon={<MdSend />}
  buttonAriaLabel="Send message"
  beforeButton={(
    <button type="button" aria-label="Insert emoji" onClick={openEmojiPicker}>
      <MdEmojiEmotions />
    </button>
  )}
  onSubmit={(value) => handleSend(value)}
/>
```

## Props

| Property               | Type                                   | Default          | Description                                                                                          |
| ----------------------- | --------------------------------------- | ----------------- | ------------------------------------------------------------------------------------------------------ |
| `label`                 | `string`                                |                    | Label displayed above the field.                                                                       |
| `placeholder`           | `string`                                |                    | Placeholder text displayed when the field is empty.                                                    |
| `value`                 | `string`                                |                    | Controlled value. Enables controlled mode when provided together with `onChange`.                      |
| `onChange`               | `(value: string) => void`               |                    | Called on every keystroke. Required in controlled mode.                                                |
| `onSubmit`               | `(value: string) => void`               |                    | Called with the trimmed, non-empty value when the field is submitted. **Required.**                    |
| `buttonIcon`             | `React.ReactNode`                       |                    | Icon rendered inside the action button.                                                                |
| `buttonLabel`            | `string`                                |                    | Text label rendered by the action button, instead of (or alongside) `buttonIcon`.                       |
| `buttonAriaLabel`        | `string`                                |                    | Accessible name for the action button. **Required** when only `buttonIcon` is set (no `buttonLabel`).   |
| `buttonVariant`          | `'primary' \| 'secondary' \| 'tertiary' \| 'subtle'` | `'primary'` | Visual variant of the action button (same variants as the shared `Button`).                   |
| `dataTest`               | `string`                                |                    | `data-test` attribute on the underlying `<textarea>` element.                                           |
| `buttonDataTest`         | `string`                                |                    | `data-test` attribute on the action button.                                                             |
| `beforeButton`           | `React.ReactNode`                        |                    | Extra content (icon, button, or any other element) rendered to the left of the action button.          |
| `afterButton`            | `React.ReactNode`                        |                    | Extra content (icon, button, or any other element) rendered to the right of the action button.         |
| `submitOnEnter`          | `boolean`                               | `true`             | When `true`, Enter submits (Shift+Enter inserts a newline). When `false`, only the button submits.      |
| `showSentFeedback`       | `boolean`                               | `false`            | Shows `sentFeedbackContent` in place of `helperText` for `sentFeedbackDuration` after a successful submit. |
| `sentFeedbackContent`    | `React.ReactNode`                       | `'Message sent'`   | Content rendered while the sent feedback is visible — accepts any node, not just plain text.            |
| `sentFeedbackDuration`   | `number`                                | `2000`             | How long, in milliseconds, the sent feedback stays visible.                                             |
| `disabled`               | `boolean`                               | `false`            | Disables the field and the action button.                                                               |
| `error`                  | `boolean`                               | `false`            | Puts the field in an error state.                                                                       |
| `helperText`             | `string`                                |                    | Helper text displayed below the field.                                                                  |
| `minRows`                | `number`                                | `1`                | Minimum number of visible rows.                                                                         |
| `maxRows`                | `number`                                | `3`                | Maximum number of rows before the field scrolls internally.                                             |
| `maxLength`              | `number`                                |                    | Maximum character length, enforced natively by the underlying `<textarea>`.                             |
| `autoFocus`              | `boolean`                               | `false`            | Focuses the field when the component mounts.                                                            |
| `inputRef`               | `React.Ref<HTMLTextAreaElement>`         |                    | Ref forwarded to the underlying `<textarea>` element.                                                   |
| `aria-label`             | `string`                                 |                    | Accessible name for the field, for cases with no visible `label`.                                       |
| `aria-describedby`       | `string`                                 |                    | Extra `aria-describedby` id(s), combined with the helper/feedback text's own id when one is rendered.   |

## Behavior Notes

- **Field type**: the text field is a `<textarea>` that auto-grows from `minRows` to `maxRows` (default `3`) as content is typed, then scrolls internally past `maxRows` — same auto-grow behavior as the reference chat input, with a shorter default cap.
- **Uncontrolled mode** (default): the component manages its own value, clearing and refocusing the field after a successful submit.
- **Controlled mode**: when `value` + `onChange` are both provided, the parent owns the value entirely; clearing it after submit (if desired) is the consumer's responsibility, typically inside `onSubmit`.
- **Empty submits are ignored**: submitting a blank or whitespace-only value is a no-op — the field never sends empty messages.
- **Enter to submit**: with `submitOnEnter` (default `true`), Enter submits and Shift+Enter inserts a newline. With `submitOnEnter={false}`, Enter always inserts a newline and only clicking the button submits.
- **Sent feedback** (`showSentFeedback`, opt-in): a synchronous UI affordance — it fires right after `onSubmit` is called, regardless of whether that call succeeds asynchronously. It's rendered with `role="status"` and `aria-live="polite"`, and accepts any `sentFeedbackContent` (a string, or a custom node).
- **Action button shape**: when only `buttonIcon` is set (no `buttonLabel`), the action button uses `Button`'s `squared` layout — a compact, icon-only button matching the real chat input's send button (squared corners, not round, sized by its own padding rather than a fixed box). When `buttonLabel` is set, it falls back to `Button`'s default layout (`size="sm"`), which is the one that renders a text label.
