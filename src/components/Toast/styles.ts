import styled, { css, keyframes } from 'styled-components';
import {
  colorBackgroundWhite, colorBrand1, colorShadowDefault,
  colorTextDefault, colorTextLight,
} from '../../stylesheets/palette';
import {
  borderRadiusSmall, spacingMediumLarge,
  spacingSmall, spacingSmallMedium,
} from '../../stylesheets/sizing';
import {
  fontSizeBig, fontSizeDefault, fontSizeSmall, fontSizeXSmall,
  fontWeightLight,
} from '../../stylesheets/typography';
import {
  StyledCardActionProps, StyledIconBadgeProps, StyledProgressBarProps, StyledTextProps,
  StyledToastProps,
} from './types';
import { VARIANT_COLORS } from './constants';

// `message` and `content` take arbitrary nodes, so any media a consumer passes is
// capped to the card instead of forcing it wider than its container.
const richContent = css`
  img,
  svg,
  video {
    max-width: 100%;
  }
`;

const visuallyHidden = css`
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
  clip-path: inset(50%);
  white-space: nowrap;
`;

// Unstyled so the message reads as plain text; its focus ring is drawn on the whole card.
export const CardAction = styled.button<StyledCardActionProps>`
  margin: 0;
  padding: 0;
  border: 0;
  background: none;
  color: inherit;
  font: inherit;
  line-height: inherit;
  text-align: start;
  cursor: inherit;

  &:focus {
    outline: none;
  }

  ${({ $visuallyHidden }) => $visuallyHidden && visuallyHidden}
`;

export const Container = styled.div<StyledToastProps>`
  position: relative;
  display: flex;
  /* Fills the slot it is given even when that slot is a flex container, as toast engines'
     wrappers usually are, so every toast in a stack has the same width. */
  width: 100%;
  flex-direction: row;
  align-items: stretch;
  gap: ${spacingSmallMedium};
  padding: ${spacingMediumLarge};
  background-color: ${colorBackgroundWhite};
  border-radius: ${borderRadiusSmall};
  box-shadow: 0 2px 8px ${colorShadowDefault};
  overflow-wrap: break-word;
  /* So maxHeight caps the whole card, padding included, rather than just its content box. */
  box-sizing: border-box;
  max-height: ${({ $maxHeight }) => $maxHeight};
  cursor: ${({ $disablePointer }) => ($disablePointer ? 'auto' : 'pointer')};

  &:has(${CardAction}:focus-visible) {
    outline: 2px solid ${colorBrand1};
  }
`;

// Mirrors the close button's box. The title row is sized by that button rather than by
// the text, so pinning the badge to the top left it riding high by half the difference —
// worse the smaller the badge, which is why it showed up first in the `small` variant.
// Giving the badge and the title row the same band centers them on one line at any size.
const titleRowHeight = '2.375rem';

// The width of BBButton's focus outline, which is drawn outside its box.
const focusRingWidth = '2px';

// The icon owns a full-height section of its own on the left; inside it, the badge is
// centered on the title row so it stays on the title's line as content grows.
export const IconSection = styled.div`
  display: flex;
  align-items: flex-start;
  flex-shrink: 0;
`;

export const IconBand = styled.div`
  display: flex;
  align-items: center;
  min-height: ${titleRowHeight};
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  min-width: 0;
  gap: ${spacingSmall};

  /* min-height lets this flex child shrink below its content so the overflow can scroll. */
  min-height: 0;
  overflow-y: auto;
  overflow-x: hidden;

  /* As a scroll container this clips whatever overflows it, including the focus ring of
     the close button, which spans the full height of the title row. The padding leaves
     room for the ring and the negative margin cancels it out of the layout. */
  padding: ${focusRingWidth};
  margin: -${focusRingWidth};
`;

// The close button shares this row with the title only, so it stays on the title's line
// instead of centering against the content below it.
export const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  min-height: ${titleRowHeight};
  gap: ${spacingSmall};
`;

export const IconBadge = styled.div<StyledIconBadgeProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  border-radius: 50%;
  aspect-ratio: 1;
  width: ${({ $small }) => ($small ? '1.5rem' : '2rem')};
  font-size: ${({ $small }) => ($small ? fontSizeXSmall : fontSizeBig)};
  background-color: ${({ $variant }) => VARIANT_COLORS[$variant].background};
  color: ${({ $variant }) => VARIANT_COLORS[$variant].glyph};
`;

export const Message = styled.div<StyledTextProps>`
  flex: 1;
  min-width: 0;
  color: ${colorTextDefault};
  font-size: ${({ $small }) => ($small ? fontSizeSmall : fontSizeDefault)};
  font-weight: ${fontWeightLight};
  line-height: normal;

  ${richContent}
`;

export const Content = styled.div<StyledTextProps>`
  color: ${colorTextLight};
  font-size: ${({ $small }) => ($small ? fontSizeXSmall : fontSizeSmall)};
  font-weight: ${fontWeightLight};
  line-height: normal;

  ${richContent}
`;

export const ActionWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const CloseButtonWrapper = styled.div`
  display: flex;
  flex-shrink: 0;
  margin-inline-start: auto;
`;

const countdown = keyframes`
  from {
    transform: scaleX(1);
  }

  to {
    transform: scaleX(0);
  }
`;

// Clips the bar to the card's rounded bottom corners without clipping the card's content.
export const ProgressTrack = styled.div`
  position: absolute;
  inset-inline: 0;
  bottom: 0;
  height: 0.25rem;
  overflow: hidden;
  border-end-start-radius: ${borderRadiusSmall};
  border-end-end-radius: ${borderRadiusSmall};
`;

// Pausing the animation together with the timer keeps the two in step: both resume from
// where they stopped instead of restarting.
export const ProgressBar = styled.div<StyledProgressBarProps>`
  height: 100%;
  background-color: ${({ $variant }) => VARIANT_COLORS[$variant].background};
  transform-origin: left;
  animation: ${countdown} ${({ $duration }) => $duration}ms linear forwards;
  animation-play-state: ${({ $paused }) => ($paused ? 'paused' : 'running')};

  [dir='rtl'] & {
    transform-origin: right;
  }
`;
