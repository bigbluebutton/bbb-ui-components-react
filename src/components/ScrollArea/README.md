# BBBScrollArea

`BBBScrollArea` is a wrapper that applies standardized scrollbar styling to its content — based on the chat's scrollbar style — so that chat, lists, side panels, and any other scrollable content look consistent throughout the application.

## Usage Example

### Basic usage

```jsx
import { BBBScrollArea } from '@bigbluebutton/bbb-ui-components-react';

<BBBScrollArea maxHeight="400px" fadeColor="#FFFFFF">
  <MessageList />
</BBBScrollArea>
```

### Horizontal scroll

```jsx
import { BBBScrollArea } from '@bigbluebutton/bbb-ui-components-react';

<BBBScrollArea verticalScroll={false} horizontalScroll maxWidth="600px" fadeColor="#FFFFFF">
  <CardRow />
</BBBScrollArea>
```

### Without edge fade

```jsx
import { BBBScrollArea } from '@bigbluebutton/bbb-ui-components-react';

<BBBScrollArea maxHeight="400px" fadeEdges={false}>
  <MessageList />
</BBBScrollArea>
```

### With edge padding

```jsx
import { BBBScrollArea } from '@bigbluebutton/bbb-ui-components-react';

<BBBScrollArea maxHeight="400px" fadeColor="#FFFFFF" paddingTop="1rem" paddingBottom="1rem">
  <MessageList />
</BBBScrollArea>
```

## Props

| Property            | Type              | Default | Description                                                                                                   |
| -------------------- | ----------------- | ------- | --------------------------------------------------------------------------------------------------------------- |
| `children`           | `React.ReactNode`  |         | Scrollable content.                                                                                              |
| `verticalScroll`     | `boolean`          | `true`  | Enables vertical scrolling.                                                                                     |
| `horizontalScroll`   | `boolean`          | `false` | Enables horizontal scrolling.                                                                                   |
| `maxHeight`          | `string`           |         | Caps the content height; scrolling kicks in past this value (e.g. `'400px'`, `'50vh'`).                         |
| `maxWidth`           | `string`           |         | Caps the content width; scrolling kicks in past this value (e.g. `'600px'`, `'100%'`).                          |
| `fadeEdges`          | `boolean`          | `true`  | Fades the scrollable edges with a color mask + shadow, matching the chat's scroll style.                        |
| `fadeColor`          | `string`           |         | Background color the fade blends into. Required in practice when `fadeEdges` is `true` — if omitted, the fade is silently skipped. |
| `paddingTop`         | `string`           |         | Space reserved above the content, before the scrollable area's top edge (e.g. `'1rem'`).                        |
| `paddingRight`       | `string`           |         | Space reserved to the right of the content, before the scrollable area's right edge (e.g. `'1rem'`).            |
| `paddingBottom`      | `string`           |         | Space reserved below the content, before the scrollable area's bottom edge (e.g. `'1rem'`).                     |
| `paddingLeft`        | `string`           |         | Space reserved to the left of the content, before the scrollable area's left edge (e.g. `'1rem'`).              |

## Notes

- Without `maxHeight`/`maxWidth`, the area grows with its content — scrolling only kicks in once a parent container or one of these props constrains its size, same as native `overflow: auto`.
- `fadeColor` must match the background behind `BBBScrollArea` (e.g. the surrounding panel color) so the fade blends in seamlessly instead of showing a mismatched edge.
- The fade mask overlays directly on top of the content near each active edge; set the matching `padding*` prop (e.g. `paddingTop`/`paddingBottom` for a vertical area) so the first/last item isn't partially covered by it.
