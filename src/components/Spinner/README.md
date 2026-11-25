# BBBSpinner

A loading spinner component for indicating background activity or loading states.

![Demo](assets/example.gif)

## Usage Example

```jsx
import { BBBSpinner } from '@bigbluebutton/bbb-ui-components-react';

<BBBSpinner />
<BBBSpinner size={32} />
<BBBSpinner size="2rem" />
<BBBSpinner strokeWidth={2} />
<BBBSpinner animate={false} />
```

## Props

| Prop         | Type             | Default | Description                                              |
|--------------|------------------|---------|----------------------------------------------------------|
| `size`       | number \| string | 48      | The width and height of the spinner (px or CSS string).  |
| `strokeWidth`| number           | 4       | The thickness of the spinner stroke.                     |
| `animate`   | boolean          | true   | If false, disables the animation.                         |

## Accessibility

- Uses `role="progressbar"` and `aria-busy` for accessibility.
- The spinner is hidden from assistive tech when `animate`.

