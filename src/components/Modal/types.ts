import React from 'react';
import ReactModal from 'react-modal';

export interface StyledModalBodyProps {
  $allowScroll: boolean;
}

export interface StyledModalFooterProps {
  $stickyFooter: boolean;
}

export interface ModalProps extends Omit<ReactModal.Props, 'style'> {
  isOpen: boolean;
  onRequestClose: NonNullable<ReactModal.Props['onRequestClose']>;
  title?: string;
  showDividers?: boolean;
  allowScroll?: boolean;
  noFooter?: boolean;
  stickyFooter?: boolean;
  footerContent?: React.ReactNode;
  children: React.ReactNode;
}
