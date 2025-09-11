import styled, { css } from 'styled-components';
import { StyledTypography } from './types';
import { colorTextDefault, colorTextLight } from '../../stylesheets/pallete';
import {
  fontSizeDefault, fontSizeSmall,
  fontSizeXSmall, fontWeightDefault,
  fontWeightHard, fontWeightLight,
} from '../../stylesheets/typography';

const variants = {
  default: css`
    color: ${colorTextDefault};
    font-size: ${fontSizeDefault};
    font-style: normal;
    font-weight: ${fontWeightLight};
    line-height: normal;
  `,
  selected: css`
    color: ${colorTextDefault};
    font-size: ${fontSizeDefault};
    font-style: normal;
    font-weight: ${fontWeightHard};
    line-height: normal;
  `,
  text2: css`
    color: ${colorTextLight};
    font-size: ${fontSizeSmall};
    font-style: normal;
    font-weight: ${fontWeightLight};
    line-height: normal;
  `,
  text3: css`
    color: ${colorTextLight};
    font-size: ${fontSizeXSmall};
    font-style: normal;
    font-weight: ${fontWeightLight};
    line-height: normal;
  `,
  header: css`
    color: ${colorTextDefault};
    font-size: ${fontSizeDefault};
    font-style: normal;
    font-weight: ${fontWeightHard};
    line-height: normal;
    text-transform: uppercase;
  `,
  button: css`
    color: ${colorTextDefault};
    font-size: ${fontSizeDefault};
    font-style: normal;
    font-weight: ${fontWeightDefault};
    line-height: normal;
  `,
};

export const TypographyStyled = styled.p<StyledTypography>`
  margin: 0;
  padding: 0;
  ${({ $variant }) => variants[$variant]}
`;
