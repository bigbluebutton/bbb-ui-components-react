# 0004. Group the Storybook sidebar by purpose

- Status: Proposed
- Deciders: BigBlueButton design and development teams

## Context

The sidebar listed all 19 components in one flat, alphabetical list. It did not show which components serve the same need, and gave token and layout pages no place of their own.

## Decision

- Two top-level sections: Foundation and Components, after an Introduction page that explains them.
- Foundation holds Divider and Typography, and later the token and layout pages.
- Components are grouped by purpose: Action, Form, Display, Feedback, Navigation and Overlay.
- Each component sets an explicit story `id`, its export name in lowercase, so moving it between groups never changes its links.

## Alternatives

- Keep the flat list: gets harder to scan as components are added.
- Group by build level (basic part, composed component): describes how a component is made, not when to use it.
- Let Storybook derive the ids from the grouped titles: breaks existing links, and changes the ids agents use.

## Consequences

- A new component has to choose a group and set its `id`.
- A component that fits more than one group is listed in only one.
