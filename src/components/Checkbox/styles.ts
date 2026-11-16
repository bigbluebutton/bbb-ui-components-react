import styled from 'styled-components';
import { Checkbox as MuiCheckbox } from '@mui/material';
import {
  colorTextDefault, colorTextLight, colorBrand1, colorNeutral3,
} from '../../stylesheets/palette';
import { fontSizeDefault, fontSizeSmall } from '../../stylesheets/typography';
import { borderRadiusSmall, spacingSmall } from '../../stylesheets/sizing';
import { LAYOUTS } from './constants';
import { StyledCheckboxProps, StyledContainerProps, StyledLabelProps } from './types';

const getGridTemplateAreas = ({ $layout, $hasLabel, $hasHelperText }: StyledContainerProps) => {
  const textArea = $hasLabel ? 'label' : 'helper';
  const rows = $hasLabel || $hasHelperText ? [['box', textArea]] : [['box']];
  if ($hasLabel && $hasHelperText) rows.push(['.', 'helper']);
  const orderedRows = $layout === LAYOUTS.LEFT ? rows.map((row) => [...row].reverse()) : rows;
  return orderedRows.map((row) => `"${row.join(' ')}"`).join(' ');
};

// A grid rather than a flex row so the box stays centered on the label's line
// while the helper text sits below the label, not below the box.
export const Container = styled.div<StyledContainerProps>`
  display: inline-grid;
  grid-template-areas: ${getGridTemplateAreas};
  column-gap: ${spacingSmall};
  align-items: center;
  text-align: ${({ $layout }) => ($layout === LAYOUTS.LEFT ? 'end' : 'start')};

  & > .MuiCheckbox-root {
    grid-area: box;
  }
`;

export const Label = styled.label<StyledLabelProps>`
  color: ${({ $disabled }) => ($disabled ? colorNeutral3 : colorTextDefault)};
  font-size: ${fontSizeDefault};
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  cursor: ${({ $disabled }) => ($disabled ? 'not-allowed' : 'pointer')};
  grid-area: label;
`;

export const HelperText = styled.label<StyledLabelProps>`
  color: ${({ $disabled }) => ($disabled ? colorNeutral3 : colorTextLight)};
  font-size: ${fontSizeSmall};
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  cursor: ${({ $disabled }) => ($disabled ? 'not-allowed' : 'pointer')};
  grid-area: helper;
`;

// The root has no padding, so MUI's focus ripple only tints the inside of the
// box; the outline is what makes keyboard focus visible. MUI never sets
// `Mui-focusVisible` while disabled, so a focusable disabled input (one with a
// tooltip) is matched through `:has` instead.
// MUI's own checked/indeterminate color rule is as specific as `&.Mui-checked`
// and can be injected after it (it is in BigBlueButton), so the brand color
// doubles the class to win either way. A disabled box keeps MUI's disabled color.
export const StyledCheckbox = styled(MuiCheckbox)<StyledCheckboxProps>`
  &.MuiCheckbox-root {
    padding: 0;
    border-radius: ${({ $round }) => ($round ? '50%' : borderRadiusSmall)};
  }

  &&.Mui-checked:not(.Mui-disabled),
  &&.MuiCheckbox-indeterminate:not(.Mui-disabled) {
    color: ${colorBrand1};
  }

  &.Mui-focusVisible,
  &.Mui-disabled:has(input:focus-visible) {
    outline: 2px solid ${colorBrand1};
    outline-offset: 2px;
  }
`;
