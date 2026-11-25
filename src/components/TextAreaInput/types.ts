import React from 'react';

export interface TextAreaInputProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  /** The text in the field, when the app controls it. Use it together with `onChange`. */
  value?: string | readonly string[] | number;

  /** The text in the field at first, when the app does not control it. */
  defaultValue?: string | readonly string[] | number;

  /** When true, the field cannot be used. @default false */
  disabled?: boolean;

  /** Id of the textarea element, to connect a label to it. */
  id?: string;

  /** Name of the field when a form is submitted. */
  name?: string;

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
