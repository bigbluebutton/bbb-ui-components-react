import styled, { css } from 'styled-components';
import { TextField } from '@mui/material';
import {
  colorBorderDefault, colorBorderSelected,
  colorTextDefault, colorTextLight,
} from '../../stylesheets/pallete';
import { fontSizeSmall } from '../../stylesheets/typography';
import { colorBorderError, colorError } from '../../stylesheets/pallete';
import { borderRadiusDefault, spacingMedium, spacingSmall } from '../../stylesheets/sizing';
import { StyledTextProps } from './types';


export const StyledTextField = styled(TextField)<StyledTextProps>`
  .MuiInputBase-root {
    display: flex;
    padding: ${spacingMedium};
    align-items: center;
    gap: ${spacingSmall};
    align-self: stretch;
    border-radius: ${borderRadiusDefault};
    border: 1px solid ${colorBorderDefault};
    color: ${colorTextLight};

    &.Mui-focused {
      border-color: ${colorBorderSelected};
      color: ${colorTextDefault};
    }
    
    ${({ $error }) =>
      $error &&
      css`
        border-color: ${colorBorderError};
    `}
  }

  .MuiInputBase-input {
    padding: 0;
    height: auto;
  }

  .MuiOutlinedInput-notchedOutline {
    border: none;
  }
`;

export const Label = styled.div`
  color: ${colorTextDefault};
  font-size: ${fontSizeSmall};
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const HelperText = styled.div<StyledTextProps>`
  color: ${colorTextDefault};
  font-size: ${fontSizeSmall};
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  padding: 0 ${spacingMedium}; 

  ${({ $error }) =>
    $error &&
    css`
      color: ${colorError};
  `}
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: ${spacingSmall};
`;
