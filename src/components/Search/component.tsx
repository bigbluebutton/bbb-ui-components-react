import React, { JSX, useState, useEffect, useCallback, useRef } from 'react';
import BBBSpinner from '../Spinner/component';
import * as Styled from './styles';
import { BBBSearchProps } from './types';

/**
 * Search input with debounce, clear action, and optional loading state.
 * It supports both uncontrolled usage and controlled mode via `value` + `onChange`.
 */
function BBBSearch({
  placeholder,
  value,
  onChange,
  onSearch,
  onClear,
  debounce = 500,
  isLoading = false,
  disabled = false,
  autoFocus = false,
  inputRef,
  'aria-label': ariaLabel,
}: BBBSearchProps): JSX.Element {
  const isControlled = value !== undefined;

  const [internalValue, setInternalValue] = useState('');
  const localInputRef = useRef<HTMLInputElement>(null);
  const resolvedRef = (inputRef as React.RefObject<HTMLInputElement>) ?? localInputRef;

  const currentValue = isControlled ? (value ?? '') : internalValue;
  const hasValue = currentValue.length > 0;

  // Debounced onSearch (uncontrolled mode)
  useEffect(() => {
    if (isControlled || !onSearch) return;

    const timeoutId = setTimeout(() => {
      onSearch(internalValue);
    }, debounce);

    return () => clearTimeout(timeoutId);
  }, [internalValue, debounce, onSearch, isControlled]);

  // Handle autoFocus on mount
  useEffect(() => {
    if (autoFocus && resolvedRef.current) {
      resolvedRef.current.focus();
    }
  }, [autoFocus, resolvedRef]);

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const next = e.target.value;
      if (isControlled) {
        onChange?.(next);
      } else {
        setInternalValue(next);
      }
    },
    [isControlled, onChange],
  );

  const handleClear = useCallback(() => {
    if (onClear) {
      onClear();
    } else if (isControlled) {
      onChange?.('');
    } else {
      // Clear is immune to debounce — fire onSearch immediately
      setInternalValue('');
      onSearch?.('');
    }

    resolvedRef.current?.focus();
  }, [onClear, isControlled, onChange, onSearch, resolvedRef]);

  const handleContainerClick = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (e.target === e.currentTarget) {
        resolvedRef.current?.focus();
      }
    },
    [resolvedRef],
  );

  return (
    <Styled.Container $disabled={disabled} onClick={handleContainerClick}>
      <Styled.SearchIconWrapper aria-hidden="true">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          focusable="false"
        >
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
      </Styled.SearchIconWrapper>

      <Styled.StyledInput
        ref={resolvedRef}
        type="search"
        role="searchbox"
        placeholder={placeholder}
        value={currentValue}
        onChange={handleChange}
        disabled={disabled}
        aria-label={ariaLabel ?? placeholder}
      />

      {isLoading && hasValue && (
        <Styled.ActionWrapper>
          <BBBSpinner size={16} strokeWidth={3} />
        </Styled.ActionWrapper>
      )}

      {!isLoading && hasValue && (
        <Styled.ClearButton
          type="button"
          onClick={handleClear}
          aria-label="Clear search"
          tabIndex={0}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            focusable="false"
            aria-hidden="true"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </Styled.ClearButton>
      )}
    </Styled.Container>
  );
}

export default BBBSearch;
