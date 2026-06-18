export interface BBBSearchProps {
  /** Placeholder text displayed inside the input field. */
  placeholder?: string;

  /**
   * Controlled value for the search input.
   * When provided together with `onChange`, the component operates in controlled mode.
   */
  value?: string;

  /**
   * Called on every keystroke with the current input value.
   * Required when using controlled mode (`value` prop).
   */
  onChange?: (value: string) => void;

  /**
   * Debounced callback fired after the user stops typing.
   * Receives the current search term as argument.
   */
  onSearch?: (term: string) => void;

  /**
   * Called when the clear button is clicked.
   * If not provided, the component clears the internal state and calls `onSearch('')`.
   */
  onClear?: () => void;

  /**
   * Debounce delay in milliseconds applied to `onSearch`.
   * @default 500
   */
  debounce?: number;

  /**
   * When `true` and the input has a value, a loading spinner replaces the clear button.
   * @default false
   */
  isLoading?: boolean;

  /** Disables the search input. */
  disabled?: boolean;

  /** Focuses the input when the component mounts. */
  autoFocus?: boolean;

  /** Ref forwarded to the underlying `<input>` element. */
  inputRef?: React.Ref<HTMLInputElement>;

  /** Accessible label for the search input (used as `aria-label`). */
  'aria-label'?: string;
}
