import React from 'react';

export interface TextAreaInputProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  /** Initial number of visible text lines. @default 1 */
  rows?: number;

  /** Maximum number of characters allowed. @default 250 */
  maxLength?: number;

  /** Placeholder text shown when the textarea is empty. @default '' */
  placeholder?: string;

  /** When true, the textarea is focused automatically on mount. @default true */
  autoFocus?: boolean;

  /** Ref to the underlying textarea element; accepts either a mutable ref object or a callback ref. */
  inputRef?: React.MutableRefObject<HTMLTextAreaElement | null> | ((ref: HTMLTextAreaElement) => void);

  /** Change event handler for the textarea. */
  onChange?: React.ChangeEventHandler<HTMLTextAreaElement>;

  /** Keyboard event handler for the textarea. */
  onKeyDown?: React.KeyboardEventHandler<HTMLTextAreaElement>;
};
