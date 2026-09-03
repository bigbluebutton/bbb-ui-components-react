import React, { JSX, useEffect, useState } from 'react';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import * as Styled from './styles';
import { AvatarProps } from './types';
import { DEFAULT_AVATAR_SIZE, AVATAR_FALLBACK_COLORS } from './constants';
import { colorUserYou } from '../../stylesheets/palette';

function getInitials(name: string): string {
  const words = name.trim().split(/\s+/).filter(Boolean);
  if (words.length === 0) return '';
  if (words.length === 1) return words[0].slice(0, 2).toUpperCase();
  return `${words[0][0]}${words[words.length - 1][0]}`.toUpperCase();
}

function getFallbackColor(name: string): string {
  const hash = name.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
  return AVATAR_FALLBACK_COLORS[hash % AVATAR_FALLBACK_COLORS.length];
}

/**
 * A user avatar component.
 *
 * Renders the user's avatar image when available, falling back to their initials on a
 * deterministically-colored background when no image is provided or it fails to load.
 *
 */
function Avatar({
  name,
  avatarUrl,
  color,
  size = DEFAULT_AVATAR_SIZE,
  isModerator = false,
  isYou = false,
  isTalking = false,
  disableTooltip = false,
}: AvatarProps): JSX.Element {
  const [hasImageError, setHasImageError] = useState(false);
  const resolvedColor = color || (isYou ? colorUserYou : getFallbackColor(name));

  useEffect(() => {
    setHasImageError(false);
  }, [avatarUrl]);

  const avatarElement = avatarUrl && !hasImageError ? (
    <Styled.AvatarImage
      src={avatarUrl}
      alt={name}
      $size={size}
      $color={resolvedColor}
      $isModerator={isModerator}
      $isTalking={isTalking}
      onError={() => setHasImageError(true)}
    />
  ) : (
    <Styled.AvatarInitials $size={size} $color={resolvedColor} $isModerator={isModerator} $isTalking={isTalking}>
      {getInitials(name)}
    </Styled.AvatarInitials>
  );

  if (disableTooltip) {
    return avatarElement;
  }

  return (
    <Tippy content={name} placement="top">
      {avatarElement}
    </Tippy>
  );
}

export default Avatar;
