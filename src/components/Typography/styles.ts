import styled, { css } from 'styled-components';
import { StyledTypography } from './types';
import { colorTextDefault, colorTextSecondary } from '../../stylesheets/palette';
import { textStyles } from '../../stylesheets/textStyles';

const variants = {
  default: css`
    color: ${colorTextDefault};
    ${textStyles.body.default}
  `,
  selected: css`
    color: ${colorTextDefault};
    ${textStyles.body.selected}
  `,
  text2: css`
    color: ${colorTextSecondary};
    ${textStyles.body.text2}
  `,
  text3: css`
    color: ${colorTextSecondary};
    ${textStyles.body.text3}
  `,
  header: css`
    color: ${colorTextDefault};
    ${textStyles.heading.panel}
  `,
  button: css`
    color: ${colorTextDefault};
    ${textStyles.label.button}
  `,
};

export const TypographyStyled = styled.p<StyledTypography>`
  margin: 0;
  padding: 0;
  font-style: normal;
  ${({ $variant }) => variants[$variant]}
`;
