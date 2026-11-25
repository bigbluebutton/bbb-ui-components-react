# 0007. Padding and gap rules follow Figma

- Status: Proposed
- Deciders: BigBlueButton design and development teams

## Context

A token's purpose is one line, so it cannot cover every case. In a test, an agent put 8px between modal footer buttons, where Figma and BBBModal use 16px, because the buttons looked like related items.

## Decision

- The Spacing page says which token to use for the padding of common elements and for the gap between them. The values come from the Figma file.
- When no rule fits, the gap is `spacingMedium`.
- The rules are for what people build with the library. Components keep their own padding.

## Alternatives

- Put the rules in the token purposes: each would become a long list.
- Leave the choice to each screen: the same element gets different spacing on each one.

## Consequences

- Elements in the rules that the library does not have yet, such as menu items and badges, should start from these values.
