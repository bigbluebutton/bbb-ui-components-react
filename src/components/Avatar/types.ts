import { AVATAR_SIZE_VALUES } from './constants';

export type AvatarSize = typeof AVATAR_SIZE_VALUES[number];

export interface StyledAvatarProps {
  $size: AvatarSize;
  $color: string;
  $isModerator: boolean;
  $isTalking: boolean;
}

export interface AvatarProps {
  /** Full name of the user; used to render initials, to derive a deterministic fallback color, and as the tooltip content. */
  name: string;

  /** URL of the user's avatar image. Falls back to initials when omitted or if the image fails to load. */
  avatarUrl?: string;

  /** Background color behind the initials (and border color on the image). @default a color deterministically derived from `name`, or BBB's "you" color when `isYou` is set */
  color?: string;

  /** Size variant of the avatar. @default 'medium' */
  size?: AvatarSize;

  /** Renders a rounded-square shape instead of a circle, matching BBB's moderator avatar treatment. @default false */
  isModerator?: boolean;

  /** Marks this avatar as belonging to the current user, applying BBB's "you" color in place of the fallback/computed color. Ignored when `color` is set. @default false */
  isYou?: boolean;

  /** Shows a pulsing ring around the avatar, in its own color, matching BBB's talking indicator. @default false */
  isTalking?: boolean;

  /** Disables the tooltip that shows the full `name` on hover. @default false */
  disableTooltip?: boolean;
}
