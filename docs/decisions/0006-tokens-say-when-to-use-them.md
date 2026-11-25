# 0006. Tokens say when to use them

- Status: Proposed
- Deciders: BigBlueButton design and development teams

## Context

The token lists gave each token's name and value, not its purpose. People and AI agents had to choose by name or by looks, and several tokens share a value. The Figma file already states a purpose for most of its tokens, but code did not.

## Decision

- A token's purpose is its `$description` in `tokens/tokens.json`. `npm run tokens` writes it into the token lists.
- The first purposes come from the Figma file, reworded for this library. Values and names do not change.
- A token without an agreed purpose has no `$description`, and the lists show that.

## Alternatives

- Write the purposes by hand in the docs pages: they would drift from the tokens.
- Guess a purpose for every token: agents would follow a guess as a rule.
- Keep them only in Figma: agents and developers working in code do not see them.

## Consequences

- Some components do not follow the purposes yet. They change one at a time, if the teams agree.
- A new token needs a purpose, or a reason not to have one.
