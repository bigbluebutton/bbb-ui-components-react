import styled from 'styled-components';
import {
  colorBorderDefault, colorBrand1, colorBrand2, colorTextDefault, colorTextSecondary, colorWhite,
} from '../../stylesheets/palette';
import { borderRadiusDefault } from '../../stylesheets/sizing';

export const TextAreaInput = styled.textarea`
  flex: 1;
  background: ${colorWhite};
  background-clip: padding-box;
  margin: 0;
  color: ${colorTextDefault};
  padding: calc(.3rem* 2.5) calc(.75rem* 1.25);
  resize: none;
  -webkit-transition: none;
  transition: none;
  border-radius: ${borderRadiusDefault};
  font-size: 1rem;
  line-height: 1;
  min-height: 2.5rem;
  max-height: 10rem;
  border: 1px solid ${colorBorderDefault};
  overflow-y: hidden;
  margin: 0.3em;

  &::placeholder {
    color: ${colorTextSecondary};
  }

  &:focus {
    outline: ${colorBrand1} solid 2px;
    box-shadow: 0 0 0 2px ${colorBrand2} inset 0 0 0 1px ${colorBrand1};
  }
`;
