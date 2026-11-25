---
name: design-propose
description: Turn a design change made in this repo (a token, a component, a story, a docs page) into a pull request to bigbluebutton/bbb-ui-components-react. Use when a designer says "submit this", "open a PR with my changes", "send this to the devs", or asks how to propose a change to the design system.
---

The person is usually a designer: explain each step in plain words, and ask before anything leaves their machine (push, pull request).

## Before you start

- Check `gh auth status`. Without a GitHub login, stop and help them run `gh auth login`.
- The pull request goes from their fork. If there is no fork, `gh repo fork bigbluebutton/bbb-ui-components-react --remote` creates one and points the remotes at it.
- Work on a branch from the upstream `develop`. If they are on `main` or `develop`, `git switch -c design/<short-name>` keeps their changes on a new branch.

## Check the change

1. Keep it to the design system: tokens, components, stories, docs pages, decision records. Anything else (an app screen, tooling) is a separate conversation with the developers.
2. A token change is an edit to `tokens/tokens.json` followed by `npm run tokens`; never edit `src/stylesheets` by hand.
3. If the change makes or reverses a design decision, record it (see `docs/decisions/README.md`).
4. Run `npm run lint` and `npm run build`, and the story tests the way the `test-stories` skill says. Fix what fails before going on.
5. Show the result with the `ui-review` skill, and get the designer's ok on what they see.

## Open the pull request

1. Commit following `CLAUDE.md` (Conventional Commits, component scope), then run `npm run tokens:check`.
2. Show the designer the title and body below, and push only after their ok.
3. `gh pr create --repo bigbluebutton/bbb-ui-components-react --base develop`, with this body:
   - **Intent**: what the designer wanted and why, in their words.
   - **What changed**: tokens, components and docs, one line each.
   - **How to see it**: the story ids from `npx storybook tools stories changed`, and `npm run storybook` to open them.
   - **Decisions**: the records added or changed, if any.
4. Give the designer the link. Later changes go on the same branch: commit and push again.
