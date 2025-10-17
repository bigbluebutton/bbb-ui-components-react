import React, { JSX } from 'react';
import * as Styled from './styles';
import { HintProps } from './types';
import { MdClose, MdInfo } from 'react-icons/md';

/**
 * A customizable hint component for displaying informational messages.
 *
 * This component provides a small contextual hint used to surface tips, short help text or dismissible messages.
 * It can be displayed with a title, an icon, and a close button.
 *
 */
function Hint({
  title,
  label,
  icon = <MdInfo fontSize="1rem" />,
  onRequestClose,
  children,
  ...rest
}: HintProps): JSX.Element {
  const renderedLabel = <Styled.Label>{label}{children}</Styled.Label>;
  return (
    <Styled.Container
      role="status"
      aria-live="polite"
      aria-atomic="true"
      aria-label={title || label}
      {...rest}
    >
      <Styled.Header>
        <Styled.IconTextWrapper>
          <Styled.IconWrapper aria-hidden="true">
            {icon}
          </Styled.IconWrapper>
          {title && <Styled.Title>{title}</Styled.Title>}
          {!title && renderedLabel}
        </Styled.IconTextWrapper>
        {title && (
          <Styled.CloseButton
            type="button"
            aria-label="Close"
            onClick={onRequestClose}
          >
            <MdClose fontSize="1rem" />
          </Styled.CloseButton>
        )}
      </Styled.Header>
      {title && renderedLabel}
    </Styled.Container>
  );
}

export default Hint;
