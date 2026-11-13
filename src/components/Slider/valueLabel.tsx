import React, { JSX, useEffect, useState } from 'react';
import { SliderValueLabel, SliderValueLabelProps } from '@mui/material';
import { ValueLabelDisplay } from './types';
import { VALUE_LABEL_DISPLAYS } from './constants';

// WCAG 1.4.13 requires a tooltip to be dismissible without moving the pointer or focus, and
// MUI keeps the label's open state internal with no Escape handling. A label that is always
// shown ('on') is not hover content, so it stays.
function DismissibleValueLabel({
  open,
  ...props
}: SliderValueLabelProps & { valueLabelDisplay?: ValueLabelDisplay }): JSX.Element {
  const [dismissed, setDismissed] = useState(false);
  const dismissible = open && props.valueLabelDisplay !== VALUE_LABEL_DISPLAYS.ON;

  useEffect(() => {
    if (!dismissible) {
      setDismissed(false);
      return undefined;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setDismissed(true);
    };
    document.addEventListener('keydown', onKeyDown, true);

    return () => document.removeEventListener('keydown', onKeyDown, true);
  }, [dismissible]);

  return <SliderValueLabel {...props} open={open && !dismissed} />;
}

export default DismissibleValueLabel;
