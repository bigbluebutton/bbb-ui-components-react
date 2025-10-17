import React from 'react';
import ReactModal from 'react-modal';
import * as Styled from './styles';
import { BBBTypography } from '../Typography';
import { MdClose } from 'react-icons/md';
import { BBBDivider } from '../Divider';
import { ModalProps } from './types';
import { BBButton } from '../..';

/**
 * A versatile BBBModal component
 *
 * This component provides a customizable modal with optional title, body, and footer.
 * It supports accessibility, dividers, scrollable body, and sticky footer.
 *
 */
const Modal: React.FC<ModalProps> = ({
  isOpen = true,
  onRequestClose,
  appElement,
  title,
  contentLabel,
  showDividers = false,
  shouldCloseOnOverlayClick = false,
  shouldCloseOnEsc = false,
  allowScroll = true,
  noFooter = false,
  footerContent = null,
  stickyFooter = true,
  children,
}) => {

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel={contentLabel}
      style={Styled.modalStyles}
      shouldCloseOnOverlayClick={shouldCloseOnOverlayClick}
      shouldCloseOnEsc={shouldCloseOnEsc}
      appElement={appElement}
    >
      <Styled.ModalHeader>
        <BBBTypography
          variant="header"
        >
          {title}
        </BBBTypography>
        <BBButton
          layout="circle"
          icon={<MdClose size="1.5rem" />}
          onClick={onRequestClose}
          variant="subtle"
          ariaLabel="close"
        />
      </Styled.ModalHeader>

      {showDividers && <BBBDivider />}

      <Styled.ModalBody
        $allowScroll={allowScroll}
      >
        {children}
      </Styled.ModalBody>
      {(!noFooter || footerContent) && (
        <>
          {showDividers && (<BBBDivider />)}

          <Styled.ModalFooter
            $stickyFooter={stickyFooter}
          >
            {footerContent}
          </Styled.ModalFooter>
        </>
      )}
    </ReactModal>
  )
}

export default Modal;
