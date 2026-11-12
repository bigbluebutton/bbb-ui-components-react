import styled, { css } from 'styled-components';
import { spacingSmallMedium } from '../../stylesheets/sizing';
import { StyledButtonsProps } from './types';

export const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacingSmallMedium};
  width: 100%;
`;

const rowStyles = css`
  flex-direction: row;

  & > * {
    flex: 1 1 0;
  }
`;

const columnStyles = css`
  flex-direction: column;

  & > * {
    flex: 0 0 auto;
  }
`;

// The basis is negative (clamped to 0) while the group is wider than the threshold,
// so the buttons share one row equally, and larger than the group below it, so each
// button wraps onto its own line. A container query would be simpler, but
// styled-components 5 drops the selector of a nested @container rule.
const stackBelowStyles = css<StyledButtonsProps>`
  flex-wrap: wrap;

  & > * {
    flex: 1 1 calc((${({ $stackBelow }) => $stackBelow} - 100%) * 999);
  }
`;

export const Buttons = styled.div<StyledButtonsProps>`
  display: flex;
  gap: ${spacingSmallMedium};
  width: 100%;

  ${({ $layout }) => {
    switch ($layout) {
      case 'column':
        return columnStyles;
      case 'stackBelow':
        return stackBelowStyles;
      default:
        return rowStyles;
    }
  }}

  &[data-measuring] {
    flex-direction: row;
    flex-wrap: nowrap;
  }

  &[data-measuring] > * {
    flex: 0 0 auto;
    width: max-content;
  }
`;
