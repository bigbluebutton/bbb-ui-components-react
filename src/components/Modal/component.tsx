import React, { useCallback } from 'react';
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
  testId,
  closeButtonDataTest,
  children,
  ...rest
}) => {
  let _closeButtonDataTest = closeButtonDataTest;
  
  if (testId && !closeButtonDataTest) {
    _closeButtonDataTest = `${testId}-close-button`;
  }

  const renderFooter = useCallback((isSticky: boolean) => (
    <>
      {showDividers && <BBBDivider />}
      <Styled.ModalFooter $stickyFooter={isSticky}>
        {footerContent}
      </Styled.ModalFooter>
    </>
  ), [footerContent, showDividers]);

  return (
    <ReactModal
      {...rest}
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel={contentLabel}
      style={Styled.modalStyles}
      shouldCloseOnOverlayClick={shouldCloseOnOverlayClick}
      shouldCloseOnEsc={shouldCloseOnEsc}
      appElement={appElement}
      testId={testId}
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
          {...(_closeButtonDataTest ? { dataTest: _closeButtonDataTest } : {})}
        />
      </Styled.ModalHeader>

      {showDividers && <BBBDivider />}

      <Styled.ModalScrollArea $allowScroll={allowScroll}>
        <Styled.ModalBodyContent>
          {children}
        </Styled.ModalBodyContent>
        {!noFooter && !stickyFooter && renderFooter(stickyFooter)}
        </Styled.ModalScrollArea>
      {!noFooter && stickyFooter && renderFooter(stickyFooter)}
    </ReactModal>
  )
}

export default Modal;
