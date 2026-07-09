import React, {
  JSX, useCallback, useEffect, useId, useRef, useState,
} from 'react';
import Button from '../Button/component';
import { SIZES, LAYOUTS } from '../Button/constants';
import * as Styled from './styles';
import { BBBInputProps } from './types';

/**
 * A labeled, auto-growing text field with an inline action button.
 *
 * Modeled after the core chat text input: unifies the recurring "text field +
 * submit button" pattern used across chat, guest messages and breakouts.
 * It supports both uncontrolled (default) and controlled usage, matching BBBSearch.
 *
 */
function Input({
  label,
  placeholder,
  value,
  onChange,
  onSubmit,
  buttonIcon,
  buttonLabel,
  buttonAriaLabel,
  buttonVariant = 'primary',
  dataTest,
  buttonDataTest,
  beforeButton,
  afterButton,
  submitOnEnter = true,
  showSentFeedback = false,
  sentFeedbackContent = 'Message sent',
  sentFeedbackDuration = 2000,
  disabled = false,
  error = false,
  helperText,
  minRows = 1,
  maxRows = 3,
  maxLength,
  autoFocus = false,
  inputRef,
  id,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
}: BBBInputProps): JSX.Element {
  const isControlled = value !== undefined;
  const [internalValue, setInternalValue] = useState('');
  const currentValue = isControlled ? (value ?? '') : internalValue;

  const generatedId = useId();
  const fieldId = id ?? generatedId;

  const internalRef = useRef<HTMLTextAreaElement | null>(null);
  const feedbackTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [isFeedbackVisible, setFeedbackVisible] = useState(false);

  const setRefs = useCallback((node: HTMLTextAreaElement | null) => {
    internalRef.current = node;
    if (typeof inputRef === 'function') {
      inputRef(node);
    } else if (inputRef && 'current' in inputRef) {
      (inputRef as React.MutableRefObject<HTMLTextAreaElement | null>).current = node;
    }
  }, [inputRef]);

  // Auto-grow the textarea between minRows and maxRows as content changes.
  useEffect(() => {
    const el = internalRef.current;
    if (!el) return;

    el.style.height = 'auto';
    const computedStyle = window.getComputedStyle(el);
    const lineHeight = parseFloat(computedStyle.lineHeight) || 20;
    const verticalExtra = [
      computedStyle.paddingTop,
      computedStyle.paddingBottom,
      computedStyle.borderTopWidth,
      computedStyle.borderBottomWidth,
    ].reduce((sum, cssValue) => sum + (parseFloat(cssValue) || 0), 0);

    const minHeight = lineHeight * minRows + verticalExtra;
    const maxHeight = lineHeight * maxRows + verticalExtra;
    const nextHeight = Math.min(Math.max(el.scrollHeight, minHeight), maxHeight);

    el.style.height = `${nextHeight}px`;
    el.style.overflowY = el.scrollHeight > maxHeight ? 'auto' : 'hidden';
  }, [currentValue, minRows, maxRows]);

  useEffect(() => () => {
    if (feedbackTimeoutRef.current) clearTimeout(feedbackTimeoutRef.current);
  }, []);

  useEffect(() => {
    if (autoFocus && internalRef.current) {
      internalRef.current.focus();
    }
  }, [autoFocus]);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const next = e.target.value;
    if (isControlled) {
      onChange?.(next);
    } else {
      setInternalValue(next);
    }
  }, [isControlled, onChange]);

  const submit = useCallback(() => {
    if (disabled) return;
    const trimmed = currentValue.trim();
    if (!trimmed) return;

    onSubmit(trimmed);

    if (!isControlled) {
      setInternalValue('');
    }
    internalRef.current?.focus();

    if (showSentFeedback) {
      setFeedbackVisible(true);
      if (feedbackTimeoutRef.current) clearTimeout(feedbackTimeoutRef.current);
      feedbackTimeoutRef.current = setTimeout(() => setFeedbackVisible(false), sentFeedbackDuration);
    }
  }, [disabled, currentValue, onSubmit, isControlled, showSentFeedback, sentFeedbackDuration]);

  const handleKeyDown = useCallback((e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey && submitOnEnter) {
      e.preventDefault();
      submit();
    }
  }, [submitOnEnter, submit]);

  const showHelper = Boolean(helperText) || isFeedbackVisible;
  const helperElementId = showHelper ? `${fieldId}-helper` : undefined;
  const describedBy = [ariaDescribedBy, helperElementId].filter(Boolean).join(' ') || undefined;

  // Icon-only submissions (the common case) use Button's `squared` layout — a
  // compact, icon-only button matching the real chat input's send button shape.
  // When a text label is provided instead, fall back to the default layout,
  // which is the one that actually renders a label.
  const button = buttonLabel ? (
    <Button
      onClick={submit}
      disabled={disabled}
      size={SIZES.SMALL}
      variant={buttonVariant}
      dataTest={buttonDataTest}
      label={buttonLabel}
      ariaLabel={buttonAriaLabel}
      iconStart={buttonIcon}
    />
  ) : (
    <Button
      layout={LAYOUTS.SQUARED}
      onClick={submit}
      disabled={disabled}
      variant={buttonVariant}
      dataTest={buttonDataTest}
      icon={buttonIcon}
      ariaLabel={buttonAriaLabel}
    />
  );

  return (
    <Styled.Wrapper>
      {label && <Styled.Label htmlFor={fieldId}>{label}</Styled.Label>}
      <Styled.FieldContainer $disabled={disabled} $error={error}>
        <Styled.TextArea
          ref={setRefs}
          id={fieldId}
          rows={minRows}
          placeholder={placeholder}
          value={currentValue}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          disabled={disabled}
          maxLength={maxLength}
          data-test={dataTest}
          aria-label={ariaLabel}
          aria-describedby={describedBy}
        />
        {beforeButton}
        {button}
        {afterButton}
      </Styled.FieldContainer>
      {showHelper && (
        <Styled.HelperText
          id={helperElementId}
          $success={isFeedbackVisible}
          $error={!isFeedbackVisible && error}
          role={isFeedbackVisible ? 'status' : undefined}
          aria-live={isFeedbackVisible ? 'polite' : undefined}
        >
          {isFeedbackVisible ? sentFeedbackContent : helperText}
        </Styled.HelperText>
      )}
    </Styled.Wrapper>
  );
}

export default Input;
