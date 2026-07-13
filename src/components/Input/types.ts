import React from 'react';
import { VARIANT_VALUES } from '../Button/constants';

export type BBBInputButtonVariant = typeof VARIANT_VALUES[number];

export interface BBBInputProps {
  /** Label displayed above the field. */
  label?: string;

  /** Placeholder text displayed inside the field when it's empty. */
  placeholder?: string;

  /** Controlled value. When provided together with `onChange`, the component is fully controlled. */
  value?: string;

  /** Called on every keystroke. Required when using controlled mode (`value` prop). */
  onChange?: (value: string) => void;

  /** Called with the trimmed, non-empty value when the field is submitted. */
  onSubmit: (value: string) => void;

  /** Icon rendered inside the action button. */
  buttonIcon?: React.ReactNode;

  /** Text label rendered by the action button, instead of (or alongside) `buttonIcon`. */
  buttonLabel?: string;

  /**
   * Accessible name for the action button. Falls back to `buttonLabel` when set.
   * Required for the button to be accessible when only `buttonIcon` is provided.
   */
  buttonAriaLabel?: string;

  /** Visual variant of the action button (same variants as the shared `Button`). @default 'primary' */
  buttonVariant?: BBBInputButtonVariant;

  /** `data-test` attribute on the underlying `<textarea>` element. */
  dataTest?: string;

  /** `data-test` attribute on the action button. */
  buttonDataTest?: string;

  /** Extra content (icon, button, or any other element) rendered to the left of the action button. */
  beforeButton?: React.ReactNode;

  /** Extra content (icon, button, or any other element) rendered to the right of the action button. */
  afterButton?: React.ReactNode;

  /**
   * When `true`, pressing Enter submits the field (Shift+Enter still inserts a newline).
   * When `false`, Enter always inserts a newline and only the button submits.
   * @default true
   */
  submitOnEnter?: boolean;

  /**
   * When `true`, shows `sentFeedbackContent` in place of `helperText` for `sentFeedbackDuration`
   * after a successful submit.
   * @default false
   */
  showSentFeedback?: boolean;

  /** Content rendered while the sent feedback is visible. @default 'Message sent' */
  sentFeedbackContent?: React.ReactNode;

  /** How long, in milliseconds, the sent feedback stays visible. @default 2000 */
  sentFeedbackDuration?: number;

  /** Disables the field and the action button. */
  disabled?: boolean;

  /** Puts the field in an error state. */
  error?: boolean;

  /** Helper text displayed below the field. */
  helperText?: string;

  /** Minimum number of visible rows. @default 1 */
  minRows?: number;

  /** Maximum number of rows before the field scrolls internally. @default 3 */
  maxRows?: number;

  /** Maximum character length, enforced natively by the underlying `<textarea>`. */
  maxLength?: number;

  /** Focuses the field when the component mounts. */
  autoFocus?: boolean;

  /** Ref forwarded to the underlying `<textarea>` element. */
  inputRef?: React.Ref<HTMLTextAreaElement>;

  id?: string;

  'aria-label'?: string;

  'aria-describedby'?: string;
}

export interface StyledContainerProps {
  $disabled?: boolean;
  $error?: boolean;
}

export interface StyledHelperTextProps {
  $error?: boolean;
  $success?: boolean;
}
