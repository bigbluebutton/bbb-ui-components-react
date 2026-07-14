import React from 'react';
import ReactModal from 'react-modal';

export interface StyledModalBodyProps {
  $allowScroll: boolean;
}

export interface StyledModalFooterProps {
  $stickyFooter: boolean;
}

export interface ModalProps extends Omit<ReactModal.Props, 'style'> {
  /** Controls whether the modal is open. @default true */
  isOpen: boolean;

  /** Callback invoked when a request to close the modal occurs (e.g., overlay click, ESC key, or close button). */
  onRequestClose: NonNullable<ReactModal.Props['onRequestClose']>;

  /** Modal title shown in the header. */
  title?: string;

  /** Show dividers between header/body/footer. @default false */
  showDividers?: boolean;

  /** Enable scrolling inside the modal body. @default true */
  allowScroll?: boolean;

  /** Hide the footer section. @default false */
  noFooter?: boolean;

  /** When true, the footer is sticky to the bottom instead of scrolling with the body. @default true */
  stickyFooter?: boolean;

  /** Custom React node to render inside the footer. @default null */
  footerContent?: React.ReactNode;

  /** Test identifier applied to the modal element (native ReactModal prop). Also used to derive `closeButtonDataTest` when that prop is omitted. */
  testId?: string;

  /** Test identifier applied to the close button. Defaults to `${testId}-close-button` when `testId` is set. */
  closeButtonDataTest?: string;

  /** Modal body content. */
  children: React.ReactNode;
}
