import styled from 'styled-components';
import { Styles } from 'react-modal';
import * as React from 'react';
import { spacingLarge, spacingMedium, spacingSmallMedium, borderRadiusDefault } from '../../stylesheets/sizing';
import { StyledModalBodyProps, StyledModalFooterProps } from './types';

export const modalStyles: Styles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
    zIndex: 100,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    position: 'relative',
    top: 'auto',
    left: 'auto',
    right: 'auto',
    bottom: 'auto',
    borderRadius: borderRadiusDefault,
    background: '#fff',
    overflow: 'hidden',
    WebkitOverflowScrolling: 'touch',
    outline: 'none',
    padding: '0px',
    minWidth: '300px',
    maxWidth: '90vw',
    maxHeight: '90vh',
    display: 'flex',
    flexDirection: 'column' as React.CSSProperties['flexDirection'],
  },
};

export const ModalHeader = styled.div`
  padding: ${spacingLarge} ${spacingLarge} ${spacingSmallMedium};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0;
  line-height: 1;
`;

export const ModalBody = styled.div<StyledModalBodyProps>`
  flex-grow: 1;
  overflow-y: ${({ $allowScroll }) => $allowScroll ? 'auto' : 'hidden'};
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  padding: 0 ${spacingLarge} 0;
  margin: ${spacingSmallMedium} 0 ${spacingSmallMedium};
`;

export const ModalFooter = styled.div<StyledModalFooterProps>`
  padding: ${spacingSmallMedium} ${spacingLarge} ${spacingLarge};
  display: flex;
  justify-content: flex-end;
  gap: ${spacingMedium};
  
  ${({ $stickyFooter }) =>
    $stickyFooter &&
    `
      position: sticky;
      bottom: 0;
      background-color: #fff;
    `}
`;
