import styled, { css, keyframes } from 'styled-components';
import { colorWhite } from '../../stylesheets/palette';
import { AVATAR_SIZES } from './constants';
import { StyledAvatarProps } from './types';

const DIMENSIONS = {
  [AVATAR_SIZES.SMALL]: { dimension: '1.625rem', fontSize: '0.625rem', fontWeight: '600' },
  [AVATAR_SIZES.MEDIUM]: { dimension: '3rem', fontSize: '1.125rem', fontWeight: '500' },
  [AVATAR_SIZES.LARGE]: { dimension: '6rem', fontSize: '2.75rem', fontWeight: '400' },
};

// Mirrors BBB's talking indicator (a ring, in the user's own color, that spreads and fades out).
const talkingPulse = (color: string) => keyframes`
  0% { box-shadow: 0 0 0 0 ${color}; }
  100% { box-shadow: 0 0 0 4px transparent; }
`;

const talkingStyles = css<StyledAvatarProps>`
  ${({ $isTalking, $color }) => $isTalking && css`
    animation: ${talkingPulse($color)} 1s infinite ease-in;
  `}
`;

export const AvatarInitials = styled.div<StyledAvatarProps>`
  width: ${({ $size }) => DIMENSIONS[$size].dimension};
  height: ${({ $size }) => DIMENSIONS[$size].dimension};
  border-radius: ${({ $isModerator }) => ($isModerator ? '20%' : '50%')};
  flex-shrink: 0;
  background: ${({ $color }) => $color};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${({ $size }) => DIMENSIONS[$size].fontSize};
  font-weight: ${({ $size }) => DIMENSIONS[$size].fontWeight};
  color: ${colorWhite};
  text-transform: uppercase;
  ${talkingStyles}
`;

export const AvatarImage = styled.img<StyledAvatarProps>`
  width: ${({ $size }) => DIMENSIONS[$size].dimension};
  height: ${({ $size }) => DIMENSIONS[$size].dimension};
  border-radius: ${({ $isModerator }) => ($isModerator ? '20%' : '50%')};
  flex-shrink: 0;
  object-fit: cover;
  border: 2px solid ${({ $color }) => $color};
  ${talkingStyles}
`;
