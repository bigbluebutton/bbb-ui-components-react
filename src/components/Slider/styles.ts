import { Slider } from '@mui/material';
import { styled as materialStyled } from '@mui/material/styles';
import styled from 'styled-components';
import {
  colorBrand1,
  colorNeutral3,
  colorWhite,
  colorShadowDefault,
  colorTextDefault,
  colorTextLight,
  colorIconDefault,
  colorBorderFocusRing,
} from '../../stylesheets/palette';
import {
  fontSizeXSmall,
  fontSizeDefault,
  fontSizeBig,
  fontWeightDefault,
  fontWeightLight,
} from '../../stylesheets/typography';
import {
  spacingXSmall,
  spacingSmall,
  spacingXLarge,
  borderRadiusSmall,
} from '../../stylesheets/sizing';
import { StyledSliderRowProps, StyledSliderWrapperProps } from './types';

const THUMB_SIZE = '1rem';
const TRACK_HEIGHT = '0.3125rem';
const MARK_SIZE = '0.25rem';
const ICON_SIZE = '1.5rem';

export const SliderWrapper = styled.div<StyledSliderWrapperProps>`
  display: flex;
  flex-direction: column;
  width: 100%;

  ${({ $valueLabelSpace }) => $valueLabelSpace && `
    gap: ${spacingXLarge};
  `}
`;

export const TextWrapper = styled.label`
  display: flex;
  flex-direction: column;
  cursor: pointer;
`;

export const Title = styled.span`
  color: ${colorTextDefault};
  font-size: ${fontSizeBig};
  font-weight: ${fontWeightLight};
`;

export const HelperText = styled.span`
  color: ${colorTextLight};
  font-size: ${fontSizeDefault};
  font-weight: ${fontWeightLight};
`;

export const SliderRow = styled.div<StyledSliderRowProps>`
  display: flex;
  align-items: center;
  gap: ${spacingSmall};
  width: 100%;

  ${({ $showMarkTicks }) => !$showMarkTicks && `
    & .MuiSlider-mark {
      display: none;
    }
  `}

  ${({ $animate }) => !$animate && `
    & .MuiSlider-thumb,
    & .MuiSlider-track,
    & .MuiSlider-valueLabel {
      transition: none;
    }

    & .MuiSlider-thumb:hover:not(.Mui-focusVisible),
    & .MuiSlider-thumb.Mui-active:not(.Mui-focusVisible) {
      box-shadow: 0 2px 4px 0 ${colorShadowDefault};
    }
  `}

  ${({ $isRtl }) => $isRtl && `
    /* MUI only mirrors right:-anchored positioning under RTL, not the LTR transforms paired
       with it (that half normally comes from stylis-plugin-rtl, which this library can't add) */
    && .MuiSlider-thumb {
      transform: translate(50%, -50%);
    }

    && .MuiSlider-mark {
      transform: translate(1px, -50%);
    }

    && .MuiSlider-markLabel {
      transform: translateX(50%);
    }
  `}
`;

export const IconWrapper = styled.span`
  display: flex;
  align-items: center;
  color: ${colorIconDefault};
  font-size: ${ICON_SIZE};
`;

export const MaterialSlider = materialStyled(Slider)({
  color: colorBrand1,
  height: TRACK_HEIGHT,
  '& .MuiSlider-rail': {
    backgroundColor: 'currentColor',
    opacity: 0.38,
  },
  '& .MuiSlider-track': {
    border: '1px solid currentColor',
    backgroundColor: colorBrand1,
  },
  '& .MuiSlider-thumb': {
    height: THUMB_SIZE,
    width: THUMB_SIZE,
    backgroundColor: 'currentColor',
    boxShadow: `0 2px 4px 0 ${colorShadowDefault}`,
    '&:hover, &.Mui-focusVisible': {
      boxShadow: `0 0 0 0.5rem ${colorBorderFocusRing}`,
    },
    '&.Mui-active': {
      boxShadow: `0 0 0 0.875rem ${colorBorderFocusRing}`,
    },
  },
  '& .MuiSlider-mark': {
    width: MARK_SIZE,
    height: MARK_SIZE,
    borderRadius: '50%',
    backgroundColor: colorNeutral3,
    '&.MuiSlider-markActive': {
      backgroundColor: colorWhite,
    },
  },
  '& .MuiSlider-markLabel': {
    color: colorTextLight,
    fontSize: fontSizeXSmall,
    // RTL: resolve each label's own direction so a leading minus sign doesn't get reordered
    unicodeBidi: 'plaintext',
  },
  '& .MuiSlider-valueLabel': {
    backgroundColor: colorTextDefault,
    color: colorWhite,
    fontSize: fontSizeXSmall,
    fontWeight: fontWeightDefault,
    borderRadius: borderRadiusSmall,
    padding: `${spacingXSmall} ${spacingSmall}`,
    '& .MuiSlider-valueLabelLabel': {
      // RTL: resolve each label's own direction so a leading minus sign doesn't get reordered
      unicodeBidi: 'plaintext',
    },
  },
  '&.Mui-disabled': {
    color: colorNeutral3,
    '& .MuiSlider-track': {
      backgroundColor: colorNeutral3,
    },
  },
});
