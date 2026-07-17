// Neutral colors
export const colorNeutral2 = 'var(--color-neutral-2, #717C91)';
export const colorNeutral3 = 'var(--color-neutral-3, #B0BDC9)';
export const colorNeutral4 = 'var(--color-neutral-4, #DCE4EC)';
export const colorWhite = 'var(--color-neutral-white, #FFFFFF)';
export const colorLightGray = 'var(--color-light-gray, #F4F6FA)';
export const colorGray = 'var(--color-gray, #4E5A66)';
export const colorDarkGray = 'var(--color-dark-gray, #393C48)';

// Brand colors
// Last-resort fallbacks mirror bigbluebutton-html5's palette so that a client
// which doesn't override --color-primary renders library components with the
// same brand color as its own (non-library) components.
const colorBrand1_base = 'var(--color-brand-1, #0F70D7)';
const colorBrandLight_base = 'var(--color-brand-light, #E5EFFB)';
export const colorBrand1 = `var(--color-primary, ${colorBrand1_base})`;
export const colorBrand2 = `var(--color-brand-2, ${colorBrand1_base})`;
export const colorBrand3 = `var(--color-brand-3, ${colorBrand1_base})`;
// Mapped to core css vars
export const colorBrandLight = `var(--color-blue-aux, ${colorBrandLight_base})`;
export const colorBrandAux = `var(--color-brand-aux, ${colorBrandLight_base})`;


// Semantic colors
const colorError_base = 'var(--color-error, #DF2721)';
const colorErrorDark_base = 'var(--color-error-dark, #AE1010)';
export const colorSuccess = 'var(--color-success, #2DD36F)';
export const colorWarning = 'var(--color-warning, #F59240)';
// Mapped to core css vars
export const colorError = `var(--color-danger, ${colorError_base})`;
export const colorErrorDark = `var(--color-danger-dark, ${colorErrorDark_base})`;


// Background colors
export const colorBackgroundWhite = `var(--color-background-white, ${colorWhite})`;
export const colorBackgroundLight = `var(--color-background-light, ${colorLightGray})`;
export const colorBackgroundBlue = `var(--color-background-blue, ${colorBrandLight_base})`;


// Border colors
const colorBorderDefault_base = `var(--color-border-default, ${colorNeutral3})`;
export const colorBorderSelected = `var(--color-border-selected, ${colorBrand1_base})`;
export const colorBorderError = `var(--color-border-error, ${colorError_base})`;
// Mapped to core css vars
export const colorBorderDefault = `var(--default-border, ${colorBorderDefault_base})`;


// Text colors
export const colorTextDefault = `var(--color-text-default, ${colorDarkGray})`;
export const colorTextLight = `var(--color-text-light, ${colorNeutral2})`;

//Icon colors
export const colorIconDefault = `var(--color-icon-default, ${colorNeutral2})`;
export const colorIconBlue = `var(--color-icon-blue, ${colorBrand1_base})`;
export const colorIconWhite = `var(--color-icon-white, ${colorWhite})`;

//Hover colors
export const colorHoverDark = 'var(--color-hover-dark, #0C57A7)';
export const colorHoverLight = 'var(--color-hover-light, #D4E5FA)';
export const colorHoverNeutral = `var(--color-hover-neutral, ${colorNeutral4})`;
