# BBBSearch

A search input component with built-in debounce, clear button, and optional loading state. Designed to replace ad-hoc search implementations across the application with a consistent, accessible component.

## Usage

### Uncontrolled (simplest)

```tsx
import { BBBSearch } from 'bbb-ui-components-react';

<BBBSearch
  placeholder="Search participants..."
  onSearch={(term) => filterParticipants(term)}
/>
```

### With custom debounce

```tsx
<BBBSearch
  placeholder="Search messages..."
  debounce={300}
  onSearch={(term) => searchMessages(term)}
/>
```

### Controlled

```tsx
const [query, setQuery] = useState('');

<BBBSearch
  value={query}
  onChange={setQuery}
  onClear={() => setQuery('')}
  placeholder="Filter..."
/>
```

### With loading state

```tsx
<BBBSearch
  placeholder="Search..."
  isLoading={isSearching}
  onSearch={handleSearch}
/>
```

## Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `placeholder` | `string` | — | Placeholder text inside the input |
| `value` | `string` | — | Controlled value (enables controlled mode) |
| `onChange` | `(value: string) => void` | — | Called on every keystroke (required in controlled mode) |
| `onSearch` | `(term: string) => void` | — | Debounced callback fired after the user stops typing |
| `onClear` | `() => void` | — | Called when the clear button is clicked (optional override) |
| `debounce` | `number` | `500` | Debounce delay in ms applied to `onSearch` |
| `isLoading` | `boolean` | `false` | Shows a spinner and hides the clear button |
| `disabled` | `boolean` | `false` | Disables the input |
| `autoFocus` | `boolean` | `false` | Focuses the input on mount |
| `inputRef` | `React.Ref<HTMLInputElement>` | — | Ref forwarded to the `<input>` element |
| `aria-label` | `string` | `placeholder` | Accessible label (falls back to `placeholder`) |

## Behavior Notes

- **Uncontrolled mode**: when `value` is not provided, the component manages its own state and fires `onSearch` after the debounce delay.
- **Controlled mode**: when `value` + `onChange` are both provided, the parent controls the input value entirely.
- **Clear button**: bypasses debounce — calls `onSearch('')` immediately (or `onClear` if provided).
- **Loading state**: `isLoading` hides the clear button and shows a spinner instead. Useful while an async search is in progress.
- The underlying `<input>` uses `type="search"` for better browser and accessibility integration.
