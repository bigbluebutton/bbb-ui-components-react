# Design decision records

Why BigBlueButton's design is the way it is, for people and agents changing this repo. A record holds a design decision someone would otherwise undo: what was decided, why, and what was rejected.

## What counts

- How BigBlueButton looks and behaves: tokens, components, usage rules, accessibility, motion.
- How the design system is made, documented and delivered to the people and agents who use it: the source of truth, Storybook, the design and code workflow.

Library and tooling choices that change none of that (a dependency update, a build tweak, a refactor) do not get a record; the pull request and the commit message explain them.

## Where

- **Cross-cutting** (tokens, focus, motion, theming, how the docs are organized): one file in this folder, `NNNN-short-title.md`, numbered in order, started from `template.md`.
- **One component**: a `## Decisions` section in that component's docs page (`src/components/<Name>/*.mdx`, attached with `<Meta of={...} />`). Storybook shows it next to the component and adds it to the component manifest, so agents get it together with the props. Start the page from `docs/templates/component-docs.mdx`.

## Rules

- Record a decision when you make or reverse it, in the same pull request as the change.
- Never rewrite an accepted record: write a new one that supersedes it, and set the old one's status to `Superseded by NNNN`.
- Status is one of `Proposed`, `Accepted`, `Superseded by NNNN`, `Deprecated`.
- A component decision is one bullet: `- **Decision.** Why. Rejected: alternative, because reason.`
