# 0008. Bring in the Figma tokens that BigBlueButton needs

- Status: Proposed
- Deciders: BigBlueButton design and development teams

## Context

The Figma file has more tokens than this library, so people and agents cannot tell which token in code a design uses. Most are the same token under another name. The rest are missing here, or belong to other products. Renaming was rejected in 0003, because it breaks consumers.

## Decision

- A Figma token with the same role as one in code is that token. Its names in Figma are recorded in `tokens.json` (`figma`) and shown in the token lists.
- A Figma token with no counterpart is added under this library's naming, with its own CSS variable, and unused at first.
- The colors of the Mconf product brands (Elos, Tríades) are left out. Every other foundation token comes in, so that the pages match Figma. A token that Figma marks as Live only is a token like any other here, because new components will need it.
- Figma's text styles are tokens too (`text-style`), exported as `textStyles`, whether or not BBBTypography has a variant for them. They set neither the font nor the color, which come from the app and the color tokens.
- The primitives have Figma's steps, and are listed on the Color page but not exported: a component uses a color with a purpose. The steps used only by the product brands (teal, navy, mint, `yellow/500`, `green/500`, `orange/500`) are left out.
- Figma's component colors (sidebar, notification, avatar, video, user, whiteboard) point to the same color as in Figma, so that they follow a host page's theme.

## Alternatives

- Rename to the Figma names: breaks consumers (see 0003).
- Add every Figma name beside the old one: two tokens with the same role, and no way for an agent to choose.

## Consequences

- Dark values are not included. The client sets them today (issue 87).
- Figma's secondary text color arrives with pull request 137, so `colors.text.light` keeps its value here.
- A change of name in Figma has to be made here by hand.
- `shadowWhiteboard` has no CSS variable of its own. It reads `--tl-shadow-2`, as Figma does, so that it follows tldraw. The tldraw version BigBlueButton uses today calls it `--shadow-2`, so the default value (tldraw's light shadow) applies until it is upgraded.
