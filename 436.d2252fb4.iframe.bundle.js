"use strict";(self.webpackChunk_mconf_bbb_ui_components_react=self.webpackChunk_mconf_bbb_ui_components_react||[]).push([[436],{"./src/components/Button/component.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>component});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js"),md=__webpack_require__("./node_modules/react-icons/md/index.mjs"),constants=__webpack_require__("./src/components/Button/constants.ts"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),sizing=__webpack_require__("./src/stylesheets/sizing.ts"),pallete=__webpack_require__("./src/stylesheets/pallete.ts"),typography=__webpack_require__("./src/stylesheets/typography.ts");const commonButtonStyles=styled_components_browser_esm.AH`
  cursor: pointer;
  user-select: none;
  font-weight: 600;
  line-height: normal;
  text-align: center;
  white-space: nowrap;
  text-transform: none;
  position: relative;
  transition: opacity 0.2s ease-in-out;

  ${({$size})=>constants.Cc[$size]?`padding: ${constants.Cc[$size].padding};`:`padding: ${constants.Cc[constants._7].padding};`}

  ${({$color,$variant})=>{const safeColor=$color||constants.OT,safeVariant=$variant||constants.um,{color:contentColor,iconColor,background,border,hoverColor,hoverBackground,hoverBorder,outline}=constants.iE[safeVariant][safeColor];return styled_components_browser_esm.AH`
      & span {
        color: ${contentColor};
      }
      ${iconColor?`color: ${iconColor}`:`color: ${contentColor}`};
      ${background&&`background-color: ${background};`}
      ${border?`border: 1px solid ${border};`:"border: none;"}

      &&:hover:not(:has(> [data-is-aux-icon]:hover)),
      &&:active {
        color: ${hoverColor};
        ${hoverBackground&&`background-color: ${hoverBackground};`}
        ${hoverBorder?`border: 1px solid ${hoverBorder};`:"border: none;"}
      }
      &&:focus {
        border: 1px solid transparent;
        outline: 2px solid ${outline};
      }
    `}}

  ${({$variant})=>$variant===constants.xb.SUBTLE&&"\n    text-decoration: underline;\n  "}

  ${({disabled})=>{if(!disabled)return null;const{color,background,border,outline}=constants.J;return styled_components_browser_esm.AH`
      pointer-events: none;
      cursor: not-allowed;
      & span {
        color: ${color};
      }
      color: ${color};
      ${background?`background-color: ${background}`:"background-color: none"};
      border: ${border?`1px solid ${border}`:"none"};

      &&:hover,
      &&:active {
        color: ${color};
        ${background?`background-color: ${background}`:"background-color: none"};
        border: ${border?`1px solid ${border}`:"none"};
      }
      
      &&:focus {
        outline: 2px solid ${outline};
      }
    `}}
`,stackedLayoutStyles=styled_components_browser_esm.AH`
  width: 4.5rem;
  height: 4.5rem;
  border-radius: ${sizing.IS} !important;
  border: 1px solid ${pallete.hN} !important;
  padding: ${sizing.Pf} !important;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`,circleLayoutStyles=styled_components_browser_esm.AH`
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
  aspect-ratio: 1;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`,defaultLayoutStyles=styled_components_browser_esm.AH`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: ${sizing.Pf};
  border-radius: ${sizing.IS};
`,ButtonWrapper=styled_components_browser_esm.Ay.div`
  ${({$layout})=>$layout===constants.my.STACKED&&`\n    width: 5rem;\n    display: flex;\n    flex-direction: column;\n    gap: ${sizing.Pf};\n    align-items: center;\n  `}
`,Button=styled_components_browser_esm.Ay.button`
  ${commonButtonStyles}

  ${({$layout})=>{switch($layout){case constants.my.STACKED:return stackedLayoutStyles;case constants.my.CIRCLE:return circleLayoutStyles;default:return defaultLayoutStyles}}}
`,HelperIconContainer=styled_components_browser_esm.Ay.div`
  ${({$hover,$variant,$color})=>$hover?styled_components_browser_esm.AH`
      &&:hover,
      &&:active {
        ${constants.iE[$variant][$color].hoverBackground&&`background-color: ${constants.iE[$variant][$color].hoverBackground};`}
      }

      &&:focus {
        outline: 1px solid ${constants.iE[$variant][$color].outline};
      }
    `:null}
  border-radius: 50%;
  padding: 0.2rem;
  position: absolute;
  top: 0.1rem;
  right: 0.1rem;
  & svg {
    font-size: 1.25rem;
  }
`,HelperIcon=styled_components_browser_esm.Ay.div`
  display: flex;
  align-items: center;
  justify-content: center;
`,IconWrapper=styled_components_browser_esm.Ay.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;

  > i {
    font-size: 2rem;
  }
`,ButtonText=styled_components_browser_esm.Ay.div`
  color: ${pallete.eg};
  font-size: ${typography.ms};
  width: 100%;
  text-align: center;
  line-height: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;var tippy_react_esm=__webpack_require__("./node_modules/@tippyjs/react/dist/tippy-react.esm.js");__webpack_require__("./node_modules/tippy.js/dist/tippy.css");function component_Button(props){const{id="",dataTest,label,tooltipLabel,tooltipPlacement=constants.Cb,onClick,onKeyDown,ariaLabel="",ariaLabelledBy="",ariaDescribedBy="",color=constants.OT,variant=constants.um,size=constants._7,layout=constants.zR,disabled=!1,children}=props,accessibilityProps={},generatedId=(0,react.useId)(),defaultLabelId=`${id||generatedId}-label`;accessibilityProps["aria-label"]=ariaLabel||label,accessibilityProps["aria-labelledby"]=ariaLabelledBy||defaultLabelId,ariaDescribedBy&&(accessibilityProps["aria-describedby"]=ariaDescribedBy);const buttonElement=(()=>{if(props.layout===constants.my.CIRCLE){const{icon}=props,testId=dataTest||`button-${id||"default"}`;return(0,jsx_runtime.jsx)(Button,{id,"data-test":testId,onClick,onKeyDown,...accessibilityProps,$color:color,$variant:variant,$size:size,$layout:layout,disabled,children:icon})}if(props.layout===constants.my.STACKED){const{icon,helperIcon=(0,jsx_runtime.jsx)(md.hgV,{fontSize:"small"}),hideHelperIcon=!1,helperOnClick=null}=props,testId=dataTest||`${constants.my.STACKED}-button-${id||label||"default"}`;return(0,jsx_runtime.jsxs)(ButtonWrapper,{"data-test":testId,$layout:layout,children:[(0,jsx_runtime.jsxs)(Button,{id,onClick,onKeyDown,...accessibilityProps,$color:color,$variant:variant,$size:size,$layout:layout,disabled,children:[!hideHelperIcon&&(0,jsx_runtime.jsx)(HelperIconContainer,{...helperOnClick&&{"data-is-aux-icon":!0},...helperOnClick&&{"aria-label":accessibilityProps["aria-label"]+" helper"},...helperOnClick&&{role:"button"},$hover:null!==helperOnClick,$color:color,$variant:variant,onClick:event=>{helperOnClick&&(helperOnClick(event),event.preventDefault(),event.stopPropagation())},children:(0,jsx_runtime.jsx)(HelperIcon,{children:helperIcon})}),icon&&(0,jsx_runtime.jsx)(IconWrapper,{children:icon})]}),(0,jsx_runtime.jsx)(ButtonText,{id:defaultLabelId,children:label})]})}const{iconStart,iconEnd}=props,testId=dataTest||`button-${id||label||"default"}`;return(0,jsx_runtime.jsxs)(Button,{id,"data-test":testId,onClick,onKeyDown,...accessibilityProps,$color:color,$variant:variant,$size:size,$layout:layout,disabled,children:[iconStart&&iconStart,label&&(0,jsx_runtime.jsx)("span",{id:defaultLabelId,children:label}),children,iconEnd&&iconEnd]})})();return tooltipLabel?(0,jsx_runtime.jsx)(tippy_react_esm.Ay,{content:tooltipLabel,placement:tooltipPlacement,children:buttonElement}):buttonElement}const component=component_Button;component_Button.__docgenInfo={description:"A versatile Button component.\n\nThis component provides a configurable button that can be rendered as a default inline\nbutton, a circular icon button, or a stacked button with an icon and label. It is designed\nto be highly customizable and accessible, integrating with Tippy.js for tooltips.",methods:[],displayName:"Button"}},"./src/components/Button/constants.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Cb:()=>DEFAULT_TOOLTIP_PLACEMENT,Cc:()=>CSS_SIZE_PROPERTIES,J:()=>CSS_COLOR_PROPERTIES_DISABLED,OT:()=>DEFAULT_COLOR,P8:()=>TOOLTIP_PLACEMENT_VALUES,Uo:()=>LAYOUT_VALUES,_7:()=>DEFAULT_SIZE,fI:()=>COLOR_VALUES,hY:()=>VARIANT_VALUES,iE:()=>CSS_COLOR_PROPERTIES,my:()=>LAYOUTS,um:()=>DEFAULT_VARIANT,xb:()=>VARIANTS,zR:()=>DEFAULT_LAYOUT,zU:()=>SIZE_VALUES});var _stylesheets_pallete__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/stylesheets/pallete.ts"),_stylesheets_sizing__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/stylesheets/sizing.ts");const VARIANTS={PRIMARY:"primary",SECONDARY:"secondary",TERTIARY:"tertiary",SUBTLE:"subtle"},VARIANT_VALUES=Object.values(VARIANTS),DEFAULT_VARIANT=VARIANT_VALUES[0],COLOR_VALUES=Object.values({DEFAULT:"default",DANGER:"danger",NEUTRAL:"neutral"}),DEFAULT_COLOR=COLOR_VALUES[0],SIZE_VALUES=Object.values({MEDIUM:"md",SMALL:"sm"}),DEFAULT_SIZE=SIZE_VALUES[0],LAYOUTS={DEFAULT:"default",STACKED:"stacked",CIRCLE:"circle"},LAYOUT_VALUES=Object.values(LAYOUTS),DEFAULT_LAYOUT=LAYOUT_VALUES[0],TOOLTIP_PLACEMENTS={TOP:"top",BOTTOM:"bottom",LEFT:"left",RIGHT:"right"},TOOLTIP_PLACEMENT_VALUES=Object.values(TOOLTIP_PLACEMENTS),DEFAULT_TOOLTIP_PLACEMENT=TOOLTIP_PLACEMENTS.TOP,CSS_COLOR_PROPERTIES={primary:{default:{color:_stylesheets_pallete__WEBPACK_IMPORTED_MODULE_0__.bD,background:_stylesheets_pallete__WEBPACK_IMPORTED_MODULE_0__._q,border:_stylesheets_pallete__WEBPACK_IMPORTED_MODULE_0__._q,hoverColor:_stylesheets_pallete__WEBPACK_IMPORTED_MODULE_0__.bD,hoverBackground:_stylesheets_pallete__WEBPACK_IMPORTED_MODULE_0__.GJ,hoverBorder:_stylesheets_pallete__WEBPACK_IMPORTED_MODULE_0__.GJ,outline:_stylesheets_pallete__WEBPACK_IMPORTED_MODULE_0__._q},danger:{color:_stylesheets_pallete__WEBPACK_IMPORTED_MODULE_0__.bD,background:_stylesheets_pallete__WEBPACK_IMPORTED_MODULE_0__._r,border:_stylesheets_pallete__WEBPACK_IMPORTED_MODULE_0__.qO,hoverColor:_stylesheets_pallete__WEBPACK_IMPORTED_MODULE_0__.bD,hoverBackground:_stylesheets_pallete__WEBPACK_IMPORTED_MODULE_0__.Ee,hoverBorder:_stylesheets_pallete__WEBPACK_IMPORTED_MODULE_0__.qO,outline:_stylesheets_pallete__WEBPACK_IMPORTED_MODULE_0__._r},neutral:{color:_stylesheets_pallete__WEBPACK_IMPORTED_MODULE_0__.Xg,background:_stylesheets_pallete__WEBPACK_IMPORTED_MODULE_0__.bD,border:!1,hoverColor:_stylesheets_pallete__WEBPACK_IMPORTED_MODULE_0__.Xg,hoverBackground:_stylesheets_pallete__WEBPACK_IMPORTED_MODULE_0__.xM,hoverBorder:!1,outline:_stylesheets_pallete__WEBPACK_IMPORTED_MODULE_0__._q}},secondary:{default:{color:_stylesheets_pallete__WEBPACK_IMPORTED_MODULE_0__._q,background:_stylesheets_pallete__WEBPACK_IMPORTED_MODULE_0__.bh,border:_stylesheets_pallete__WEBPACK_IMPORTED_MODULE_0__.z2,hoverColor:_stylesheets_pallete__WEBPACK_IMPORTED_MODULE_0__.GJ,hoverBackground:_stylesheets_pallete__WEBPACK_IMPORTED_MODULE_0__.bh,hoverBorder:_stylesheets_pallete__WEBPACK_IMPORTED_MODULE_0__.GJ,outline:_stylesheets_pallete__WEBPACK_IMPORTED_MODULE_0__._q},danger:{color:_stylesheets_pallete__WEBPACK_IMPORTED_MODULE_0__._r,background:_stylesheets_pallete__WEBPACK_IMPORTED_MODULE_0__.bh,border:_stylesheets_pallete__WEBPACK_IMPORTED_MODULE_0__.qO,hoverColor:_stylesheets_pallete__WEBPACK_IMPORTED_MODULE_0__.Ee,hoverBackground:_stylesheets_pallete__WEBPACK_IMPORTED_MODULE_0__.bh,hoverBorder:_stylesheets_pallete__WEBPACK_IMPORTED_MODULE_0__.Ee,outline:_stylesheets_pallete__WEBPACK_IMPORTED_MODULE_0__._r},neutral:{color:_stylesheets_pallete__WEBPACK_IMPORTED_MODULE_0__.Xg,background:_stylesheets_pallete__WEBPACK_IMPORTED_MODULE_0__.bD,border:!1,hoverColor:_stylesheets_pallete__WEBPACK_IMPORTED_MODULE_0__.Xg,hoverBackground:_stylesheets_pallete__WEBPACK_IMPORTED_MODULE_0__.xM,hoverBorder:!1,outline:_stylesheets_pallete__WEBPACK_IMPORTED_MODULE_0__._q}},tertiary:{default:{color:_stylesheets_pallete__WEBPACK_IMPORTED_MODULE_0__._q,background:_stylesheets_pallete__WEBPACK_IMPORTED_MODULE_0__.od,border:!1,hoverColor:_stylesheets_pallete__WEBPACK_IMPORTED_MODULE_0__.GJ,hoverBackground:_stylesheets_pallete__WEBPACK_IMPORTED_MODULE_0__.K5,hoverBorder:!1,outline:_stylesheets_pallete__WEBPACK_IMPORTED_MODULE_0__._q},danger:{color:_stylesheets_pallete__WEBPACK_IMPORTED_MODULE_0__.bD,background:_stylesheets_pallete__WEBPACK_IMPORTED_MODULE_0__.Ee,border:!1,hoverColor:_stylesheets_pallete__WEBPACK_IMPORTED_MODULE_0__.bD,hoverBackground:_stylesheets_pallete__WEBPACK_IMPORTED_MODULE_0__._r,hoverBorder:!1,outline:_stylesheets_pallete__WEBPACK_IMPORTED_MODULE_0__.Ee},neutral:{color:_stylesheets_pallete__WEBPACK_IMPORTED_MODULE_0__.Xg,background:_stylesheets_pallete__WEBPACK_IMPORTED_MODULE_0__.bD,border:!1,hoverColor:_stylesheets_pallete__WEBPACK_IMPORTED_MODULE_0__.Xg,hoverBackground:_stylesheets_pallete__WEBPACK_IMPORTED_MODULE_0__.xM,hoverBorder:!1,outline:_stylesheets_pallete__WEBPACK_IMPORTED_MODULE_0__._q}},subtle:{default:{color:_stylesheets_pallete__WEBPACK_IMPORTED_MODULE_0__.XN,iconColor:_stylesheets_pallete__WEBPACK_IMPORTED_MODULE_0__.kE,background:"transparent",border:!1,hoverColor:_stylesheets_pallete__WEBPACK_IMPORTED_MODULE_0__.XN,hoverBackground:_stylesheets_pallete__WEBPACK_IMPORTED_MODULE_0__.d5,hoverBorder:!1,outline:_stylesheets_pallete__WEBPACK_IMPORTED_MODULE_0__.kE},danger:{color:_stylesheets_pallete__WEBPACK_IMPORTED_MODULE_0__._r,background:!1,border:!1,hoverColor:_stylesheets_pallete__WEBPACK_IMPORTED_MODULE_0__.Ee,hoverBackground:_stylesheets_pallete__WEBPACK_IMPORTED_MODULE_0__.d5,hoverBorder:!1,outline:_stylesheets_pallete__WEBPACK_IMPORTED_MODULE_0__._r},neutral:{color:_stylesheets_pallete__WEBPACK_IMPORTED_MODULE_0__.Xg,background:_stylesheets_pallete__WEBPACK_IMPORTED_MODULE_0__.bD,border:!1,hoverColor:_stylesheets_pallete__WEBPACK_IMPORTED_MODULE_0__.Xg,hoverBackground:_stylesheets_pallete__WEBPACK_IMPORTED_MODULE_0__.xM,hoverBorder:!1,outline:_stylesheets_pallete__WEBPACK_IMPORTED_MODULE_0__._q}}},CSS_COLOR_PROPERTIES_DISABLED={color:_stylesheets_pallete__WEBPACK_IMPORTED_MODULE_0__.qg,background:_stylesheets_pallete__WEBPACK_IMPORTED_MODULE_0__.GW,border:!1,outline:_stylesheets_pallete__WEBPACK_IMPORTED_MODULE_0__.qg},CSS_SIZE_PROPERTIES={sm:{padding:`${_stylesheets_sizing__WEBPACK_IMPORTED_MODULE_1__.Pf} ${_stylesheets_sizing__WEBPACK_IMPORTED_MODULE_1__.Od}`},md:{padding:_stylesheets_sizing__WEBPACK_IMPORTED_MODULE_1__.he}}},"./src/stylesheets/pallete.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{BP:()=>colorDarkGray,Ee:()=>colorErrorDark,GJ:()=>colorHoverDark,GW:()=>colorBackgroundLight,K5:()=>colorHoverLight,XN:()=>colorTextLight,Xg:()=>colorGray,_q:()=>colorBrand1,_r:()=>colorError,bD:()=>colorWhite,bh:()=>colorBackgroundWhite,d5:()=>colorLightGray,eg:()=>colorTextDefault,f$:()=>colorBrand2,hN:()=>colorBorderDefault,kE:()=>colorIconDefault,od:()=>colorBackgroundBlue,qO:()=>colorBorderError,qg:()=>colorNeutral3,xM:()=>colorBrandAux,z2:()=>colorBorderSelected});const colorNeutral3="var(--color-neutral-3, #B0BDC9)",colorWhite="var(--color-neutral-white, #FFFFFF)",colorLightGray="var(--color-light-gray, #F4F6FA)",colorGray="var(--color-gray, #4E5A66)",colorDarkGray="var(--color-dark-gray, #393C48)",colorBrand1_base="var(--color-brand-1, #1D65D4)",colorBrand1=`var(--color-primary, ${colorBrand1_base})`,colorBrand2=`var(--color-brand-2, ${colorBrand1_base})`,colorBrandAux="var(--color-brand-aux, var(--color-brand-light, #E5EFFB))",colorError="var(--color-danger, var(--color-error, #D6232D))",colorErrorDark="var(--color-danger-dark, var(--color-error-dark, #B91C25))",colorBackgroundWhite=`var(--color-background-white, ${colorWhite})`,colorBackgroundLight=`var(--color-background-light, ${colorLightGray})`,colorBackgroundBlue="var(--color-background-blue, var(--color-brand-light, #E5EFFB))",colorBorderSelected=`var(--color-border-selected, ${colorBrand1_base})`,colorBorderError="var(--color-border-error, var(--color-error, #D6232D))",colorBorderDefault=`var(--default-border, ${`var(--color-border-default, ${colorNeutral3})`})`,colorTextDefault=`var(--color-text-default, ${colorDarkGray})`,colorTextLight="var(--color-text-light, var(--color-neutral-2, #717C91))",colorIconDefault="var(--color-icon-default, var(--color-neutral-2, #717C91))",colorHoverDark="var(--color-hover-dark, #1E53AF)",colorHoverLight="var(--color-hover-light, #D4E5FA)"},"./src/stylesheets/sizing.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{IS:()=>borderRadiusDefault,Od:()=>spacingSmallMedium,Pf:()=>spacingSmall,aU:()=>borderRadiusSmall,f5:()=>spacingLarge,he:()=>spacingMedium});const spacingSmall="0.5rem",spacingSmallMedium="0.75rem",spacingMedium="1rem",spacingLarge="1.5rem",borderRadiusDefault="1rem",borderRadiusSmall="0.5rem"},"./src/stylesheets/typography.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{G5:()=>fontSizeDefault,WY:()=>fontWeightLight,cQ:()=>fontSizeXSmall,f3:()=>fontSizeBig,hW:()=>fontWeightHard,ms:()=>fontSizeSmall,n3:()=>fontWeightDefault});const fontSizeXSmall="0.75rem",fontSizeSmall="0.875rem",fontSizeDefault="1rem",fontSizeBig="1.125rem",fontWeightHard="700",fontWeightDefault="600",fontWeightLight="400"}}]);
//# sourceMappingURL=436.d2252fb4.iframe.bundle.js.map