import React, { JSX, useId } from 'react';
import { MdExpandMore } from 'react-icons/md';
import { SelectProps } from './types';
import * as Styled from './styles';

/**
 * A customizable Select component.
 *
 * This component provides a styled wrapper around the Material-UI Select and additional styling,
 * such as a title and an optional icon.
 *
 */
function Select({
  title = null,
  icon = null,
  children,
  ariaLabel,
  ...props
}: SelectProps): JSX.Element {
  const id = useId();
  const selectId = `select-${id}`;
  const labelId = title ? `select-label-${id}` : undefined;

  return (
    <Styled.SelectContainer>
      {title && <Styled.Title id={labelId} htmlFor={selectId}>{title}</Styled.Title>}
      <Styled.SelectWrapper>
        {icon && (
          <Styled.SelectorIcon>
            {icon}
          </Styled.SelectorIcon>
        )}
        <Styled.Selector
          {...props}
          id={selectId}
          labelId={labelId}
          aria-label={ariaLabel}
          IconComponent={MdExpandMore}
        >
          {children}
        </Styled.Selector>
      </Styled.SelectWrapper>
    </Styled.SelectContainer>
  );
}

export default Select;
