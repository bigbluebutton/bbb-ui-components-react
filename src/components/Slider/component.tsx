import React, { JSX, useCallback, useEffect, useId, useMemo, useRef, useState } from 'react';
import { createTheme, ThemeProvider, useTheme } from '@mui/material/styles';
import { SliderProps } from './types';
import * as Styled from './styles';
import { DEFAULT_ANIMATE, DEFAULT_SHOW_MARK_TICKS, DEFAULT_VALUE_LABEL_DISPLAY } from './constants';

/**
 * A horizontal, single-thumb slider for picking a value inside a range.
 *
 * It supports labels (label and helperText), decorative end icons, marks and a value tooltip,
 * and keeps its accessible name and description on the underlying range input.
 *
 */
function Slider ({
  label,
  helperText,
  iconStart,
  iconEnd,
  showMarkTicks = DEFAULT_SHOW_MARK_TICKS,
  animate = DEFAULT_ANIMATE,
  valueLabelDisplay = DEFAULT_VALUE_LABEL_DISPLAY,
  onChange,
  onChangeCommitted,
  id: providedId,
  dataTest,
  ariaLabel,
  ariaLabelledBy,
  ariaDescribedBy,
  slotProps,
  ...rest
}: SliderProps): JSX.Element {
  const generatedUniqueId = useId();
  const id = providedId ?? generatedUniqueId;
  const labelId = label ? `${id}-label` : undefined;
  const helperTextId = helperText ? `${id}-helper` : undefined;

  const wrapperRef = useRef<HTMLDivElement>(null);
  const [isRtl, setIsRtl] = useState(false);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return undefined;

    const readDirection = () => {
      setIsRtl(window.getComputedStyle(wrapper).direction === 'rtl');
    };

    readDirection();
    const observer = new MutationObserver(readDirection);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['dir'] });

    return () => observer.disconnect();
  }, []);

  const outerTheme = useTheme();
  const theme = useMemo(
    () => (isRtl && outerTheme.direction !== 'rtl'
      ? createTheme(outerTheme, { direction: 'rtl' })
      : outerTheme),
    [outerTheme, isRtl],
  );

  const handleChange = useCallback((event: Event, value: number | number[]) => {
    onChange?.(event, Array.isArray(value) ? value[0] : value);
  }, [onChange]);

  const handleChangeCommitted = useCallback((
    event: React.SyntheticEvent | Event,
    value: number | number[],
  ) => {
    onChangeCommitted?.(event, Array.isArray(value) ? value[0] : value);
  }, [onChangeCommitted]);

  return (
    <Styled.SliderWrapper ref={wrapperRef} $valueLabelSpace={valueLabelDisplay !== 'off'}>
      {(label || helperText) && (
        <Styled.TextWrapper htmlFor={id}>
          {label && <Styled.Title id={labelId}>{label}</Styled.Title>}
          {helperText && <Styled.HelperText id={helperTextId}>{helperText}</Styled.HelperText>}
        </Styled.TextWrapper>
      )}
      <Styled.SliderRow $showMarkTicks={showMarkTicks} $animate={animate} $isRtl={isRtl}>
        {iconStart && <Styled.IconWrapper aria-hidden>{iconStart}</Styled.IconWrapper>}
        <ThemeProvider theme={theme}>
          <Styled.MaterialSlider
            {...rest}
            valueLabelDisplay={valueLabelDisplay}
            onChange={handleChange}
            onChangeCommitted={handleChangeCommitted}
            aria-label={ariaLabel}
            aria-labelledby={ariaLabel ? undefined : ariaLabelledBy || labelId}
            data-test={dataTest}
            slotProps={{
              ...slotProps,
              input: {
                id,
                'aria-describedby': ariaDescribedBy || helperTextId,
                ...(dataTest ? { 'data-test': `${dataTest}-input` } : {}),
                ...(typeof slotProps?.input === 'object' ? slotProps.input : {}),
              },
            }}
          />
        </ThemeProvider>
        {iconEnd && <Styled.IconWrapper aria-hidden>{iconEnd}</Styled.IconWrapper>}
      </Styled.SliderRow>
    </Styled.SliderWrapper>
  );
}

export default Slider;
