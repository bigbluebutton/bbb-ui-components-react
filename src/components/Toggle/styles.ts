import { Switch } from '@mui/material';
import { styled as materialStyled } from '@mui/material/styles';
import styled, { css } from 'styled-components';
import {
  colorBrand1, colorIconDefault, colorTextDefault, colorTextLight, colorWhite,
  colorShadowDefault, colorIconDefaultDark, colorNeutral3,
} from '../../stylesheets/palette';
import { TEXT_POSITIONS } from './constants';
import {
  StyledTextProps, StyledTextWrapperProps, StyledToggleSwitchWrapperProps, StyledToggleWrapperProps,
} from './types';
import { fontSizeBig, fontSizeDefault } from '../../stylesheets/typography';
import { spacingMedium, spacingSmall } from '../../stylesheets/sizing';

export const ToggleWrapper = styled.div<StyledToggleWrapperProps>`
  display: flex;
  ${({ $textPosition }) => {
    if ($textPosition === TEXT_POSITIONS.TOP || $textPosition === TEXT_POSITIONS.BOTTOM) {
      return css`
        flex-direction: column;
        align-items: center;
        gap: ${spacingMedium};
      `;
    }
    const horizontalStyles = css`
      flex-direction: row;
      gap: ${spacingMedium};
    `;
    if ($textPosition === TEXT_POSITIONS.LEFT) {
      return css`
        ${horizontalStyles}
        justify-content: end; 
      `;
    }
    return horizontalStyles;
  }};
  ${({ $fullWidth }) => $fullWidth && css`
    width: 100%;
    justify-content: space-between;
  `}
`;

// The wrapper spans the row and centers the switch in it, as the text wrapper does with the
// text. Beside a label and a helper text, it spans only the label's line instead (`1lh` in
// the label's font size and line height), so the switch follows the label.
export const ToggleSwitchWrapper = styled.div<StyledToggleSwitchWrapperProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  ${({ $alignToLabel }) => $alignToLabel && css`
    align-self: flex-start;
    height: 1lh;
    font-size: ${fontSizeBig};
    line-height: normal;
  `}
`;

// The focus outline goes here, sized to the switch, instead of on the switch root, whose
// disabled opacity would fade it. MUI never sets `Mui-focusVisible` while disabled, so a
// focusable disabled input (one with a tooltip) is matched through `:focus-visible`.
export const SwitchFocusRing = styled.span`
  display: flex;
  border-radius: 0.6rem;

  &:has(.Mui-focusVisible), &:has(.Mui-disabled input:focus-visible) {
    outline: 2px solid ${colorBrand1};
    outline-offset: 2px;
  }
`;

export const TextWrapper = styled.label<StyledTextWrapperProps>`
  display: flex;
  flex-direction: column;
  gap: ${spacingSmall};
  order: ${({ $textPosition }) => {
    if ($textPosition === TEXT_POSITIONS.LEFT || $textPosition === TEXT_POSITIONS.TOP) {
      return -1;
    }
    return 1;
  }};
  justify-content: center;
  cursor: ${({ $disabled }) => ($disabled ? 'not-allowed' : 'pointer')};
  ${({ $textPosition, $fullWidth }) => {
    if ($textPosition === TEXT_POSITIONS.TOP || $textPosition === TEXT_POSITIONS.BOTTOM) {
      return css`
        align-items: center;
      `;
    }
    // A full-width row aligns the text to the container's edge; otherwise it hugs the switch.
    if ($fullWidth && $textPosition === TEXT_POSITIONS.RIGHT) {
      return css`
        align-items: end;
        text-align: end;
      `;
    }
    if ($textPosition === TEXT_POSITIONS.LEFT && !$fullWidth) return css`align-items: end;`;

    return css`
      align-items: start;
    `;
  }};
`;

export const Title = styled.span<StyledTextProps>`
  color: ${({ $disabled }) => ($disabled ? colorNeutral3 : colorTextDefault)};
  font-size: ${fontSizeBig};
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const HelperText = styled.span<StyledTextProps>`
  color: ${({ $disabled }) => ($disabled ? colorNeutral3 : colorTextLight)};
  font-size: ${fontSizeDefault};
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

// A disabled switch fades as a whole, so the track and the thumb keep their enabled colors
// instead of MUI's disabled track opacity and thumb colors.
export const MaterialToggle = materialStyled(Switch)(({ theme }) => ({
  width: '2.3rem',
  height: '1.2rem',
  padding: 0,
  display: 'flex',
  '&:has(.Mui-disabled)': {
    opacity: 0.4,
  },
  '& .MuiSwitch-switchBase': {
    padding: '0.3rem',
    '&:hover, &.Mui-checked:hover': {
      backgroundColor: 'transparent',
    },
    '&.Mui-checked': {
      transform: 'translateX(1.1rem)',
      color: colorWhite,
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: colorBrand1,
        ...theme.applyStyles('dark', {
          backgroundColor: colorBrand1,
        }),
      },
    },
    '&.Mui-disabled, &.Mui-checked.Mui-disabled': {
      color: colorWhite,
      '& + .MuiSwitch-track': {
        opacity: 1,
      },
    },
  },
  '& .MuiSwitch-thumb': {
    boxShadow: `0 2px 4px 0 ${colorShadowDefault}`,
    width: '0.6rem',
    height: '0.6rem',
    borderRadius: '0.5rem',
    transition: theme.transitions.create(['width'], {
      duration: 200,
    }),
  },
  '& .MuiSwitch-track': {
    borderRadius: '0.6rem',
    opacity: 1,
    backgroundColor: colorIconDefault,
    boxSizing: 'border-box',
    ...theme.applyStyles('dark', {
      backgroundColor: colorIconDefaultDark,
    }),
  },
}));
