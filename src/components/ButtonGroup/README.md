# BBBButtonGroup

The `BBBButtonGroup` component lays out a set of buttons in one row of equal-width buttons, and stacks them at full width when the group gets too narrow. With `footer`, it renders a divider above the buttons, which is the arrangement of a side panel's footer.

It only handles the spacing and arrangement inside the group: where the group sits in the panel, such as being pushed to the bottom, is up to the panel.

![Demo](assets/example.png)

## Usage Examples

### Side panel footer

`footer` adds the divider and stacks the buttons once the group is narrower than `stackBelow`.

```jsx
import { BBBButtonGroup, BBButton } from 'bbb-ui-components-react';

<BBBButtonGroup footer>
  <BBButton variant="secondary" label="Send message" onClick={handleSendMessage} />
  <BBButton color="danger" label="Finish" onClick={handleFinish} />
</BBBButtonGroup>
```

### Stacking when a label doesn't fit

```jsx
import { BBBButtonGroup, BBButton } from 'bbb-ui-components-react';

<BBBButtonGroup stack="overflow">
  <BBButton variant="secondary" label="Cancel" onClick={handleCancel} />
  <BBButton label="Finish all breakout rooms" onClick={handleFinish} />
</BBBButtonGroup>
```

## Stacking

`stack` decides when the buttons leave their row. Stacking is all or nothing: the group never splits the buttons across rows.

- `never`: the buttons always share one row. A button whose label doesn't fit grows wider than its share.
- `always`: the buttons are always stacked at full width.
- `width`: the buttons stack once the group is narrower than `stackBelow`. This is pure CSS.
- `overflow`: the buttons stack once the widest button no longer fits its share of the row. The group measures its buttons again when it resizes or when their labels change, so it follows translated labels without a hand-tuned width.

## Props

| Property     | Type                                            | Default                                   | Description |
| ------------ | ----------------------------------------------- | ----------------------------------------- | ----------- |
| `children`   | `React.ReactNode`                               |                                           | Buttons to lay out, usually `BBButton`s; each one becomes a slot of the group. |
| `stack`      | `'never' \| 'always' \| 'width' \| 'overflow'` | `'never'`, or `'width'` when `footer` is set | When the buttons leave their single row of equal-width buttons for a stack of full-width ones: `never`, `always`, `width` once the group is narrower than `stackBelow`, or `overflow` once any button no longer fits its share of the row. |
| `stackBelow` | `string`                                        | `'20.75rem'`                              | Group width, as a CSS length, below which `stack="width"` stacks the buttons. |
| `footer`     | `boolean`                                       | `false`                                   | Renders a divider above the buttons, for the footer of a side panel. |
| `id`         | `string`                                        |                                           | HTML `id` for the group element. |
| `dataTest`   | `string`                                        |                                           | Value for the group's `data-test` attribute. |
| `className`  | `string`                                        |                                           | Class name forwarded to the group element, so `styled(BBBButtonGroup)` works. |
