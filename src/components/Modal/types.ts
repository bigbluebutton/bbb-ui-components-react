import React from 'react';
import { MODAL_PRIORITY_VALUES } from './constants';

export type ModalPriority = typeof MODAL_PRIORITY_VALUES[number];


export interface StyledModalBodyProps {
  $allowScroll: boolean;
}

export interface StyledModalFooterProps {
  $stickyFooter: boolean;
}

export interface ModalProps {
  isOpen?: boolean;
  onRequestClose: () => void;
  appElement?: HTMLElement | HTMLElement[] | HTMLCollection | NodeList | undefined;
  title?: string;
  contentLabel?: string;
  showDividers?: boolean;
  shouldCloseOnOverlayClick?: boolean;
  shouldCloseOnEsc?: boolean;
  allowScroll?: boolean;
  noFooter?: boolean;
  stickyFooter?: boolean;
  footerContent?: React.ReactNode;
  children: React.ReactNode;
  /**
   * Controls z-index when multiple modals coexist.
   * - `low`    → z-index 1001
   * - `medium` → z-index 1002
   * - `high`   → z-index 1003
   *
   * When omitted the default overlay z-index (100) is used.
   */
  priority?: ModalPriority;
}
