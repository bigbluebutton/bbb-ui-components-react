# 0001. Code and Storybook are the source of truth for design

- Status: Accepted
- Deciders: BigBlueButton design and development teams

## Context

BigBlueButton's design lives in design files and reaches code by hand: someone reads the design and rewrites it as components. The two drift apart (colors and names already differ between the design files and this library), and nobody can say which one is right. Agents now write much of the UI code, for developers and for designers, and they need one place that is right and that they can read and change.

## Decision

- This repository, with its Storybook, is the source of truth for how BigBlueButton looks and behaves: components, tokens and their usage rules.
- Design tools (Figma or any other) are where proposals are explored. They are refreshed from this repository, never the other way around.
- The design and development teams own this repository together, each in its domain: design for how BigBlueButton looks and behaves, development for how it is built and released.
- Every change enters through a pull request, from developers and designers alike.
- The scope is the BigBlueButton client. Other products may consume it later.
- How each kind of change (a token, a component, a usage rule) reaches this repository is decided in later records.

## Alternatives

- Design files as the source, code following them: today's model. It keeps the manual handoff and the drift, and approving a design file does not approve what ships.
- A separate design system repository that this library consumes: more moving parts before there is a second consumer. It can come later if the scope grows.

## Consequences

- Designers propose changes as pull requests, helped by their agents. Each team reviews what falls in its domain; development releases.
- Usage rules move from design files to the docs page of each component.
- Design files have to be refreshed from this repository after each release, which needs tooling.
- How the two domains map to files and reviewers is still to be agreed.
