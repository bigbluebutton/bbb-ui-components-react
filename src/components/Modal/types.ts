import React from 'react';

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
}
