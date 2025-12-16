import { Switch } from '@mui/material';
import { styled as materialStyled } from '@mui/material/styles';
import styled, { css } from 'styled-components';
import { colorBrand1, colorIconDefault, colorTextDefault, colorTextLight, colorWhite } from '../../stylesheets/pallete';
import { TEXT_POSITIONS } from './constants';
import { StyledTextWrapperProps, StyledToggleWrapperProps } from './types';
import { fontSizeBig, fontSizeDefault } from '../../stylesheets/typography';

export const ToggleWrapper = styled.div<StyledToggleWrapperProps>`
  display: flex;
  ${({ $textPosition }) => {
    if ($textPosition === TEXT_POSITIONS.TOP || $textPosition === TEXT_POSITIONS.BOTTOM) {
      return css`
        flex-direction: column;
        gap: .1rem;
      `;
    }
    const horizontalStyles = css`
      flex-direction: row;
      gap: 1rem;
    `;
    if ($textPosition === TEXT_POSITIONS.LEFT) {
      return css`
        ${horizontalStyles}
        justify-content: end; 
      `;
    }
    return horizontalStyles;
  }};
`;

export const ToggleSwitchWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: start;
  justify-content: center;
  padding: 0.3rem 0px;
`;

export const TextWrapper = styled.label<StyledTextWrapperProps>`
  display: flex;
  flex-direction: column;
  order: ${({ $textPosition }) => {
    if ($textPosition === TEXT_POSITIONS.LEFT || $textPosition === TEXT_POSITIONS.TOP) {
      return -1;
    }
    return 1;
  }};
  cursor: pointer;
  ${({ $hasLabel, $hasHelperText }) => (!$hasLabel || !$hasHelperText) && `justify-content: center;`}
  ${({ $textPosition }) => {
    if ($textPosition === TEXT_POSITIONS.TOP || $textPosition === TEXT_POSITIONS.BOTTOM) {
      return css`
        align-items: center;
      `;
    }
    if ($textPosition === TEXT_POSITIONS.LEFT) return css`align-items: end;`;

    return css`
      align-items: start;
    `;
  }};
`;

export const Title = styled.span`
  color: ${colorTextDefault};
  font-size: ${fontSizeBig};
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const HelperText = styled.span`
  color: ${colorTextLight};
  font-size: ${fontSizeDefault};
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const MaterialToggle = materialStyled(Switch)(({ theme }) => ({
  width: '2.3rem',
  height: '1.2rem',
  padding: 0,
  display: 'flex',
  '&:active': {
    '& .MuiSwitch-switchBase.Mui-checked': {
      transform: 'translateX(1.2rem)',
    },
  },
  '& .MuiSwitch-switchBase': {
    padding: '0.2rem',
    '&.Mui-checked': {
      transform: 'translateX(1.2rem)',
      color: colorWhite,
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: colorBrand1,
        ...theme.applyStyles('dark', {
          backgroundColor: colorBrand1,
        }),
      },
    },
  },
  '& .MuiSwitch-thumb': {
    boxShadow: '0 2px 4px 0 rgb(0 35 11 / 20%)',
    width: '0.6rem',
    height: '0.6rem',
    borderRadius: '0.5rem',
    transition: theme.transitions.create(['width'], {
      duration: 200,
    }),
    transform: 'translateY(1px)',
  },
  '& .MuiSwitch-track': {
    borderRadius: '0.6rem',
    opacity: 1,
    backgroundColor: colorIconDefault,
    boxSizing: 'border-box',
    ...theme.applyStyles('dark', {
      backgroundColor: 'rgba(255,255,255,.35)',
    }),
  },
}));