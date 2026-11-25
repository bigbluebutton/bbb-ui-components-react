# 0005. Write the token lists in the source of their pages

- Status: Proposed
- Deciders: BigBlueButton design and development teams

## Context

AI agents build screens with the design system. They read the source of a docs page, not what it renders. The token pages drew their tables with code, so agents got the name of a table and none of its tokens. In a test, six agents built three screens and used `spacingMedium` for nearly all spacing.

## Decision

- The token pages hold each token's name, value and CSS variables in their source, as the rows of the table people see.
- `npm run tokens` writes those rows from `tokens/tokens.json`, and `npm run tokens:check` fails when they differ.

## Alternatives

- Keep tables drawn by code only: agents cannot see the tokens.
- Keep those tables and add a text list: people see every token twice.
- Write the rows by hand: they would drift from the tokens.

## Consequences

- A token change also changes a docs page, in the same commit.
- The rows say what a token is, not when to use it. That still has to be decided and written.
