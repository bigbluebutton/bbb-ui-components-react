import React from 'react';
import { TOAST_VARIANT_VALUES } from './constants';

export type ToastVariant = (typeof TOAST_VARIANT_VALUES)[number];

export interface StyledToastProps {
  $disablePointer: boolean;
  $maxHeight: string;
}

export interface StyledProgressBarProps {
  $variant: ToastVariant;
  $duration: number;
  $paused: boolean;
}

export interface StyledIconBadgeProps {
  $variant: ToastVariant;
  $small: boolean;
}

export interface StyledCardActionProps {
  $visuallyHidden: boolean;
}

export interface StyledTextProps {
  $small: boolean;
}

export interface ToastProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'content'> {
  /** Title of the notification, rendered on its own line; usually plain text, but takes a node for inline i18n markup. */
  message?: React.ReactNode;

  /** Visual variant driving the default icon and the icon badge color. @default 'default' */
  variant?: ToastVariant;

  /** Custom icon replacing the one matched to `variant`, or `false` to hide the icon badge entirely. */
  icon?: React.ReactNode | false;

  /** Description or secondary content (text, links, action buttons) rendered below the title, sharing its left edge. */
  content?: React.ReactNode;

  /** Shows the divider between the title and `content`; only rendered when both are present. @default true */
  showSeparator?: boolean;

  /** Compact variant for space-constrained placements. @default false */
  small?: boolean;

  /** Keeps the default cursor instead of showing a pointer one, so the toast doesn't read as clickable; defaults to `false` when `onClick` is set and `true` otherwise. */
  disablePointer?: boolean;

  /** Click handler for the whole toast (e.g. open a related chat or panel); exposed to assistive technology as a button wrapping `message`. */
  onClick?: React.MouseEventHandler<HTMLDivElement>;

  /** Accessible name for the `onClick` action, overriding the `message` text; needed when `onClick` is set without a `message`, else the `content` text is used. */
  clickAriaLabel?: string;

  /** Label for an optional action button rendered below the content. */
  actionLabel?: string;

  /** Handler for the action button; only used when `actionLabel` is set. */
  onActionClick?: React.MouseEventHandler<HTMLButtonElement>;

  /** Auto-dismiss delay in milliseconds, paused while the toast is hovered or focused, or `false` to persist until dismissed manually. @default 5000 */
  autoClose?: number | false;

  /** Pauses the `autoClose` countdown from outside, on top of the card's own pause on hover and focus (e.g. while a toast engine's stack is hovered). @default false */
  paused?: boolean;

  /** Hides the bar at the bottom of the card that counts down `autoClose`; never shown when `autoClose` is `false`. @default false */
  hideProgressBar?: boolean;

  /** Hides the close (X) button, for toasts that shouldn't be manually dismissed. @default false */
  hideCloseButton?: boolean;

  /** Accessible name for the close button; pass a translated string in localized apps. @default 'Close' */
  closeButtonAriaLabel?: string;

  /** Callback fired when the toast is dismissed, by the close button or by `autoClose`. */
  onRequestClose?: () => void;

  /** Caps the card's height, scrolling its body past that point; any CSS length. @default '70vh' */
  maxHeight?: string;

  /** Value for the `data-test` attribute on the container; also the base for the derived test ids below. */
  dataTest?: string;

  /** Test identifier applied to the message. Defaults to `${dataTest}-message` when `dataTest` is set. */
  messageDataTest?: string;

  /** Test identifier applied to the close button. Defaults to `${dataTest}-close-button` when `dataTest` is set. */
  closeButtonDataTest?: string;

  /** Test identifier applied to the action button. Defaults to `${dataTest}-action-button` when `dataTest` is set. */
  actionButtonDataTest?: string;
}
