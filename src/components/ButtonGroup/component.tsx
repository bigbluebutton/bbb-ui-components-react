import React, {
  JSX, useLayoutEffect, useRef, useState,
} from 'react';
import { BBBDivider } from '../Divider';
import {
  STACKS, DEFAULT_STACK, DEFAULT_FOOTER_STACK, DEFAULT_STACK_BELOW,
} from './constants';
import { ButtonGroupProps, ButtonsLayoutType } from './types';
import * as Styled from './styles';

// Lays the buttons out in one row at their natural width, then checks whether
// the widest one, repeated for every slot, still fits the group.
function measureOverflow(buttons: HTMLElement): boolean {
  buttons.setAttribute('data-measuring', '');
  const widths = Array.from(buttons.children).map((child) => child.getBoundingClientRect().width);
  const gap = parseFloat(getComputedStyle(buttons).columnGap) || 0;
  const available = buttons.getBoundingClientRect().width;
  buttons.removeAttribute('data-measuring');

  if (widths.length < 2) return false;
  const required = Math.max(...widths) * widths.length + gap * (widths.length - 1);
  return required > available + 0.5;
}

/**
 * Lays out a set of buttons in one row of equal-width buttons, stacking them at
 * full width when the group gets too narrow.
 *
 * With `footer`, it renders a divider above the buttons for a side panel footer.
 */
function ButtonGroup(props: ButtonGroupProps): JSX.Element {
  const {
    children,
    footer = false,
    stack = footer ? DEFAULT_FOOTER_STACK : DEFAULT_STACK,
    stackBelow = DEFAULT_STACK_BELOW,
    id,
    dataTest,
    className,
  } = props;

  const buttonsRef = useRef<HTMLDivElement>(null);
  const [overflows, setOverflows] = useState(false);

  useLayoutEffect(() => {
    const buttons = buttonsRef.current;
    if (stack !== STACKS.OVERFLOW || !buttons) {
      setOverflows(false);
      return undefined;
    }

    const check = () => setOverflows(measureOverflow(buttons));
    check();
    if (typeof ResizeObserver === 'undefined') return undefined;
    const observer = new ResizeObserver(check);
    observer.observe(buttons);
    return () => observer.disconnect();
  }, [stack, children]);

  const layout: ButtonsLayoutType = (() => {
    switch (stack) {
      case STACKS.ALWAYS:
        return 'column';
      case STACKS.WIDTH:
        return 'stackBelow';
      case STACKS.OVERFLOW:
        return overflows ? 'column' : 'row';
      default:
        return 'row';
    }
  })();

  return (
    <Styled.ButtonGroup id={id} className={className} data-test={dataTest}>
      {footer && <BBBDivider />}
      <Styled.Buttons ref={buttonsRef} $layout={layout} $stackBelow={stackBelow}>
        {children}
      </Styled.Buttons>
    </Styled.ButtonGroup>
  );
}

export default ButtonGroup;
