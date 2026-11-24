const STACKS = {
  NEVER: 'never',
  ALWAYS: 'always',
  WIDTH: 'width',
  OVERFLOW: 'overflow',
} as const;
const STACK_VALUES = Object.values(STACKS);
const DEFAULT_STACK = STACKS.NEVER;
const DEFAULT_FOOTER_STACK = STACKS.WIDTH;

const DEFAULT_STACK_BELOW = '20.75rem';

export {
  STACKS,
  STACK_VALUES,
  DEFAULT_STACK,
  DEFAULT_FOOTER_STACK,
  DEFAULT_STACK_BELOW,
};
