# 0002. Storybook 11 with Vite

- Status: Accepted
- Deciders: BigBlueButton development team

## Context

Storybook 8.6 with webpack documented the components for people only. Storybook 11 adds what agents need: a component manifest with props and docs pages, an MCP server and agent skills. Its story tests run through Vitest, which needs the Vite builder. It is a design decision because Storybook is how people and agents read the design system.

## Decision

- Move from 8.6 straight to 11, pinned to the beta until the stable release.
- Use the Vite builder in Storybook only. The library build stays on webpack.

## Alternatives

- Storybook 10, the stable line at the time: the same agent features with more setup, and a second migration to 11 soon after.
- Keep webpack in Storybook: no story tests, since Storybook 11 removed the test runner that worked without Vite.
- Move the library build to Vite as well: no gain for consumers now. It can be its own decision.

## Consequences

- Beta dependencies until the stable release; moving to the stable version is a follow-up.
- Storybook and the library are built by different tools, so a module resolution problem can show up in only one of them.
