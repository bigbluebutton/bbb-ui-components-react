import styled from 'styled-components';
import { colorBackgroundLight, colorBrand1, colorTextDefault, colorWhite } from '../../stylesheets/pallete';
import { fontSizeDefault } from '../../stylesheets/typography';
import { borderRadiusDefault, spacingMedium, spacingSmall } from '../../stylesheets/sizing';
import { StyledAccordionContent, StyledExpandIcon } from './types';

export const ExpandButton = styled.button`
  display: flex;
  align-items: center;
  background: none;
  border: none;
  cursor: pointer;
  padding: ${spacingSmall};
  background-color: transparent;
  border-radius: ${borderRadiusDefault};

  &:hover {
    background: ${colorBackgroundLight};
  }
`;

export const ButtonContent = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: ${spacingSmall};
  border-radius: ${borderRadiusDefault};
  gap: ${spacingMedium};
`;

export const ExpandIcon = styled.div<StyledExpandIcon>`
  width: 1.375rem;
  height: 1.375rem;
  aspect-ratio: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: ${({ $expanded }) => ($expanded ? 'rotate(180deg)' : 'rotate(0deg)')};
  transition: all 0.3s ease;
  border-radius: 50%;
  background-color: ${colorBrand1};

  svg {
    color: ${colorWhite};
    font-size: 1.25rem;
    transition: transform 0.3s ease;
  }

  &:hover {
    filter: brightness(0.9);
  }
`;

export const TitleText = styled.span`
  font-size: ${fontSizeDefault};
  font-weight: 400;
  color: ${colorTextDefault};
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const AccordionContent = styled.div<StyledAccordionContent>`
  max-height: ${({ $expanded, $scrollHeight }) =>
    $expanded ? `${$scrollHeight}px` : '0'};
  overflow: hidden;
  transition: max-height 0.3s ease-in-out;
  padding: 0px 1rem;
`;
