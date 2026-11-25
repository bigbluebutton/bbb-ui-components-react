# 0008. Bring in the Figma tokens that BigBlueButton needs

- Status: Proposed
- Deciders: BigBlueButton design and development teams

## Context

The Figma file has more tokens than this library, so people and agents cannot tell which token in code a design uses. Most are the same token under another name. The rest are missing here, or belong to other products. Renaming was rejected in 0003, because it breaks consumers.

## Decision

- A Figma token with the same role as one in code is that token. Its names in Figma are recorded in `tokens.json` (`figma`) and shown in the token lists.
- A Figma token with no counterpart is added under this library's naming, with its own CSS variable, and unused at first.
- The Mconf product brands (Elos, Tríades) and the tokens marked as Live only are left out.

## Alternatives

- Rename to the Figma names: breaks consumers (see 0003).
- Add every Figma name beside the old one: two tokens with the same role, and no way for an agent to choose.

## Consequences

- Dark values are not included. The client sets them today (issue 87).
- Figma's secondary text color arrives with pull request 137, so `colors.text.light` keeps its value here.
- A change of name in Figma has to be made here by hand.
