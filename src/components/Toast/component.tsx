import React, {
  JSX, useEffect, useId, useRef, useState,
} from 'react';
import { MdClose } from 'react-icons/md';
import * as Styled from './styles';
import { BBBDivider } from '../Divider';
import { BBButton } from '../Button';
import { ToastProps } from './types';
import {
  DEFAULT_AUTO_CLOSE, DEFAULT_CLOSE_BUTTON_ARIA_LABEL, DEFAULT_ICONS,
  DEFAULT_MAX_HEIGHT, DEFAULT_TOAST_VARIANT, INTERACTIVE_SELECTOR, TOAST_VARIANTS,
} from './constants';

/**
 * A notification card for transient messages.
 *
 * This component renders the presentational part of a toast notification: an icon badge
 * matched to `variant`, the message, optional secondary content and an optional action button.
 *
 * It never hides itself. Both the close button and the `autoClose` timer call `onRequestClose`,
 * leaving removal to whoever owns the toast stack, so the card can live inside an external
 * toast engine without leaving an empty slot behind.
 */
function Toast({
  message,
  variant = DEFAULT_TOAST_VARIANT,
  icon,
  content,
  showSeparator = true,
  small = false,
  disablePointer,
  onClick,
  clickAriaLabel,
  actionLabel,
  onActionClick,
  autoClose = DEFAULT_AUTO_CLOSE,
  paused = false,
  hideProgressBar = false,
  hideCloseButton = false,
  closeButtonAriaLabel = DEFAULT_CLOSE_BUTTON_ARIA_LABEL,
  onRequestClose,
  maxHeight = DEFAULT_MAX_HEIGHT,
  dataTest,
  messageDataTest,
  closeButtonDataTest,
  actionButtonDataTest,
  onMouseEnter,
  onMouseLeave,
  onFocus,
  onBlur,
  ...rest
}: ToastProps): JSX.Element {
  // Without an explicit value BBButton derives its own from the label, which is
  // translated at every call site — so the derived ids below are what keep test
  // selectors stable across locales.
  const derive = (explicit: string | undefined, suffix: string): string | undefined =>
    explicit ?? (dataTest ? `${dataTest}-${suffix}` : undefined);

  const testIds = {
    message: derive(messageDataTest, 'message'),
    closeButton: derive(closeButtonDataTest, 'close-button'),
    actionButton: derive(actionButtonDataTest, 'action-button'),
  };

  // Held in a ref so an inline `onRequestClose` doesn't restart the timer on every
  // render, which would keep the toast alive forever.
  const onRequestCloseRef = useRef(onRequestClose);

  useEffect(() => {
    onRequestCloseRef.current = onRequestClose;
  }, [onRequestClose]);

  // Paused while hovered or focused so the toast doesn't vanish under a user who is
  // reading it or about to press one of its buttons (WCAG 2.2.1, Timing Adjustable).
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const isPaused = paused || isHovered || isFocused;
  const remainingRef = useRef(autoClose === false ? 0 : autoClose);

  useEffect(() => {
    if (autoClose !== false) remainingRef.current = autoClose;
  }, [autoClose]);

  useEffect(() => {
    if (autoClose === false || isPaused) return undefined;

    const startedAt = Date.now();
    const delay = remainingRef.current;
    const timeout = setTimeout(() => onRequestCloseRef.current?.(), delay);
    return () => {
      clearTimeout(timeout);
      remainingRef.current = Math.max(0, delay - (Date.now() - startedAt));
    };
  }, [autoClose, isPaused]);

  const handleMouseEnter: React.MouseEventHandler<HTMLDivElement> = (event) => {
    setIsHovered(true);
    onMouseEnter?.(event);
  };

  const handleMouseLeave: React.MouseEventHandler<HTMLDivElement> = (event) => {
    setIsHovered(false);
    onMouseLeave?.(event);
  };

  const handleFocus: React.FocusEventHandler<HTMLDivElement> = (event) => {
    setIsFocused(true);
    onFocus?.(event);
  };

  const handleBlur: React.FocusEventHandler<HTMLDivElement> = (event) => {
    if (!event.currentTarget.contains(event.relatedTarget)) setIsFocused(false);
    onBlur?.(event);
  };

  const isAssertive = variant === TOAST_VARIANTS.WARNING || variant === TOAST_VARIANTS.ERROR;

  const contentId = useId();
  const cardActionRef = useRef<HTMLButtonElement>(null);

  // Every click on the card lands here, including the card action's own (keyboard
  // activation of a button dispatches a click too). Clicks on other interactive
  // elements passed through `message` or `content` belong to those elements.
  const handleCardClick: React.MouseEventHandler<HTMLDivElement> = (event) => {
    if (!onClick) return;

    const interactive = (event.target as Element).closest(INTERACTIVE_SELECTOR);
    const isOwnedElsewhere = interactive
      && interactive !== cardActionRef.current
      && event.currentTarget.contains(interactive);
    if (isOwnedElsewhere) return;

    onClick(event);
  };

  const handleCloseClick: React.MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();
    onRequestClose?.();
  };

  const handleActionClick: React.MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();
    onActionClick?.(event);
  };

  const renderIconSection = (): JSX.Element | null => {
    if (icon === false) return null;

    const DefaultIcon = DEFAULT_ICONS[variant];
    return (
      <Styled.IconSection>
        <Styled.IconBand>
          <Styled.IconBadge $variant={variant} $small={small} aria-hidden="true">
            {icon ?? <DefaultIcon />}
          </Styled.IconBadge>
        </Styled.IconBand>
      </Styled.IconSection>
    );
  };

  return (
    <Styled.Container
      // The live-region role can't be swapped for `role="button"`, and the card holds
      // buttons of its own, so the click is exposed through a real button wrapping the
      // message (`Styled.CardAction`) rather than on the container itself.
      role={isAssertive ? 'alert' : 'status'}
      aria-live={isAssertive ? 'assertive' : 'polite'}
      aria-atomic="true"
      // Spread after the live-region defaults so a consumer whose toast engine already
      // wraps the card in a live region can turn this one off, but before the handlers
      // and test id the component relies on.
      {...rest}
      $disablePointer={disablePointer ?? !onClick}
      $maxHeight={maxHeight}
      onClick={onClick ? handleCardClick : undefined}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onFocus={handleFocus}
      onBlur={handleBlur}
      {...(dataTest ? { 'data-test': dataTest } : {})}
    >
      {renderIconSection()}

      {onClick && !message && (
        <Styled.CardAction
          ref={cardActionRef}
          type="button"
          $visuallyHidden
          aria-label={clickAriaLabel}
          aria-labelledby={clickAriaLabel ? undefined : contentId}
        />
      )}

      <Styled.Body>
        {(message || !hideCloseButton) && (
          <Styled.Header>
            {message && (
              <Styled.Message
                $small={small}
                {...(testIds.message ? { 'data-test': testIds.message } : {})}
              >
                {onClick ? (
                  <Styled.CardAction
                    ref={cardActionRef}
                    type="button"
                    $visuallyHidden={false}
                    aria-label={clickAriaLabel}
                  >
                    {message}
                  </Styled.CardAction>
                ) : message}
              </Styled.Message>
            )}

            {!hideCloseButton && (
              <Styled.CloseButtonWrapper>
                <BBButton
                  layout="squared"
                  variant="subtle"
                  size="sm"
                  icon={<MdClose size="1.25rem" />}
                  ariaLabel={closeButtonAriaLabel}
                  onClick={handleCloseClick}
                  {...(testIds.closeButton ? { dataTest: testIds.closeButton } : {})}
                />
              </Styled.CloseButtonWrapper>
            )}
          </Styled.Header>
        )}

        {content && (
          <>
            {showSeparator && message && <BBBDivider />}
            <Styled.Content id={onClick ? contentId : undefined} $small={small}>{content}</Styled.Content>
          </>
        )}

        {actionLabel && (
          <Styled.ActionWrapper>
            <BBButton
              label={actionLabel}
              variant="tertiary"
              size="sm"
              onClick={handleActionClick}
              {...(testIds.actionButton ? { dataTest: testIds.actionButton } : {})}
            />
          </Styled.ActionWrapper>
        )}
      </Styled.Body>

      {autoClose !== false && !hideProgressBar && (
        <Styled.ProgressTrack aria-hidden="true">
          <Styled.ProgressBar
            // A new duration restarts the countdown, so the bar restarts with it.
            key={autoClose}
            $variant={variant}
            $duration={autoClose}
            $paused={isPaused}
          />
        </Styled.ProgressTrack>
      )}
    </Styled.Container>
  );
}

export default Toast;
