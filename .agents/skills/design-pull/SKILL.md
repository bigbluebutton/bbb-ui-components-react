---
name: design-pull
description: Bring this repo's design system (tokens, components, usage docs) into a design tool so a designer can prototype with what ships today. Use when a designer says "pull the design system into Claude", "update Figma from the repo", "I want to prototype with the current components", or asks how to get the components into a design tool.
---

This repo is the source of truth (`docs/decisions/0001-*`). Pulling only reads it and writes a copy in the design tool; never change the repo here. Changes made in the design tool come back through the `design-propose` skill.

Ask the designer which tool. Publishing to a tool sends content outside this machine: show what you will publish and get their ok first.

## Claude: a Design System artifact

Done once with a pilot of three components, so the steps are known to work.

1. Needs Claude Code with the Artifact tool and the "Design System" artifact type on the designer's account. If either is missing, stop and say so.
2. Start from the "Design System" type, in its "from code" mode, and follow the type's own instructions for the file formats. If the designer gives the link of an existing one, update it instead of creating another.
3. Feed it from this repo:
   - Tokens from `tokens/tokens.json`: the `hex` of each color and the rem values. The type takes no `var()`, so put each token's CSS variable chain (`$extensions.org.bigbluebutton.cssVars`) in its note.
   - Components from the built library (`npm run build`), bundled as one browser script with React as a global, so the previews run the real code.
   - Usage rules from each component's docs page, `AGENTS.md` and the props in the Storybook manifest (`npx storybook tools docs show --id <component>`).
4. Keep it in code mode (read-only page): it is a copy, regenerated from the repo. After each release, update it the same way (`/design-sync` in Claude Code).
5. Say what the copy lacks: the CSS variable override chain and anything the repo has that the type cannot hold.

## Figma: not set up yet

No one has done this yet. Tell the designer, and offer to try with:
- The Figma MCP server, and Figma's `figma-generate-library` skill, which builds Variables and components from code.
- Tokens from `tokens/tokens.json` as Variables, keeping this repo's names.

When it works, write the steps here, the way the Claude section has them.
