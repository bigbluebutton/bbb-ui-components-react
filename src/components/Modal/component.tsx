import React from 'react';
import ReactModal from 'react-modal';
import * as Styled from './styles';
import { BBBTypography } from '../Typography';
import { MdClose } from 'react-icons/md';
import { BBBDivider } from '../Divider';
import { ModalProps } from './types';
import { BBButton } from '../..';

/**
 * BBBModal component
 *
 * Displays a customizable modal with optional title, body, and footer.
 * Supports accessibility, dividers, scrollable body, and sticky footer.
 *
 * @param {ModalProps} props The props for the BBBModal component. See {@link ModalProps} for more details.
 * @param {boolean} isOpen - Controls whether the modal is open
 * @param {() => void} onRequestClose - Function called when requesting to close the modal
 * @param {HTMLElement | string} [appElement] - App element for accessibility
 * @param {string} [title] - Modal title
 * @param {string} [contentLabel] - Accessibility label for modal content
 * @param {boolean} [showDividers] - Shows dividers between header, body, and footer
 * @param {boolean} [shouldCloseOnOverlayClick] - Allows closing when clicking outside the modal
 * @param {boolean} [shouldCloseOnEsc] - Allows closing with ESC key
 * @param {boolean} [allowScroll] - Enables scroll in the modal body
 * @param {boolean} [noFooter] - Hides the modal footer
 * @param {React.ReactNode} [footerContent] - Custom content for the footer
 * @param {boolean} [stickyFooter] - Makes the footer sticky
 * @param {React.ReactNode} children - Modal content
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
