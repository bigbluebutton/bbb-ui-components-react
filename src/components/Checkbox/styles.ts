import styled from 'styled-components';
import { Checkbox as MuiCheckbox } from '@mui/material';
import { colorTextDefault, colorBrand1, colorNeutral3 } from '../../stylesheets/palette';
import { fontSizeDefault } from '../../stylesheets/typography';
import { borderRadiusSmall, spacingSmall } from '../../stylesheets/sizing';
import { StyledCheckboxProps, StyledLabelProps } from './types';

export const Container = styled.div`
  display: inline-flex;
  align-items: center;
  gap: ${spacingSmall};
`;

export const Label = styled.label<StyledLabelProps>`
  color: ${({ $disabled }) => ($disabled ? colorNeutral3 : colorTextDefault)};
  font-size: ${fontSizeDefault};
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  cursor: ${({ $disabled }) => ($disabled ? 'not-allowed' : 'pointer')};
`;

// The root has no padding, so MUI's focus ripple only tints the inside of the
// box; the outline is what makes keyboard focus visible.
export const StyledCheckbox = styled(MuiCheckbox)<StyledCheckboxProps>`
  &.MuiCheckbox-root {
    padding: 0;
    border-radius: ${({ $round }) => ($round ? '50%' : borderRadiusSmall)};
  }

  &.Mui-checked {
    color: ${colorBrand1};
  }

  &.Mui-focusVisible {
    outline: 2px solid ${colorBrand1};
    outline-offset: 2px;
  }
`;
