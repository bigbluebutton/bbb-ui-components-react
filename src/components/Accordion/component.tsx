import React, { JSX, useState, useRef } from 'react';
import { AccordionProps } from './types';
import * as Styled from './styles';
import { MdExpandMore } from 'react-icons/md';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { DEFAULT_TOOLTIP_PLACEMENT } from './constants';

/**
 * A customizable Accordion component that allows expanding and collapsing content.
 *
 * This component provides a clickable header to toggle the visibility of its children content
 * with a smooth animation. It also supports an optional tooltip on the header.
 *
 */
function Accordion({
  title,
  tooltipLabel = null,
  tooltipPlacement = DEFAULT_TOOLTIP_PLACEMENT,
  ariaLabel,
  ariaLabelledBy,
  ariaDescribedBy,
  buttonHeader = null,
  children,
}: AccordionProps): JSX.Element {
  const [isExpanded, setIsExpanded] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  const expandButton = (
    <Styled.ExpandButton
      onClick={() => setIsExpanded((current) => !current)}
      aria-label={ariaLabel}
      aria-labelledby={ariaLabelledBy}
      aria-describedby={ariaDescribedBy}
    >
      <Styled.ButtonContent>
        <Styled.ExpandIcon $expanded={isExpanded}>
          <MdExpandMore />
        </Styled.ExpandIcon>
        <Styled.TitleText>{title}</Styled.TitleText>
        {buttonHeader}
      </Styled.ButtonContent>
    </Styled.ExpandButton>
  );

  return (
    <>
      {tooltipLabel ? (
        <Tippy content={tooltipLabel} placement={tooltipPlacement}>
          {expandButton}
        </Tippy>
      ) : (
        expandButton
      )}
      <Styled.AccordionContent
        ref={contentRef}
        $expanded={isExpanded}
        scrollHeight={contentRef.current?.scrollHeight || 0}
      >
        {children}
      </Styled.AccordionContent>
    </>
  );
}

export default Accordion;
