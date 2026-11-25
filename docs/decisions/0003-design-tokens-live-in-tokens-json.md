# 0003. Design tokens live in tokens.json

- Status: Accepted
- Deciders: BigBlueButton design and development teams

## Context

The design tokens (colors, spacing, radius, type) were TypeScript constants written by hand in `src/stylesheets`. Design tools cannot read or write them, and every token change meant editing code. Since 0001 makes this repository the source of truth, the tokens need a home that designers, their agents and design tools can share.

## Decision

- `tokens/tokens.json` is the source of the design tokens, in the DTCG 2025.10 format, the W3C community group standard that design tools and Style Dictionary read.
- `src/stylesheets/*.ts` is generated from it by Style Dictionary (`npm run tokens`) and never edited by hand. CI fails when the two disagree.
- Token names and values stay as they are in the library. Design files catch up with this repository, not the other way around.
- What only the code needs (the CSS variables a host page overrides, the grouping of `colors`) lives in `$extensions.org.bigbluebutton`.

## Alternatives

- Keep the hand-written TypeScript: no design tool can read or write it.
- Rename the tokens to match the design files: breaks every consumer, and 0001 makes this repository, not the design files, the reference.
- Figma Variables as the source, exported to code: contradicts 0001.

## Consequences

- A token change is one edit in `tokens.json` plus `npm run tokens`: something a designer's agent can do and a reviewer can read.
- Design tools that read DTCG can import the tokens; keeping them in sync is a later step.
- The generated files carry no hand-written comments.
