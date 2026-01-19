"use strict";(self.webpackChunk_mconf_bbb_ui_components_react=self.webpackChunk_mconf_bbb_ui_components_react||[]).push([[865],{"./src/components/Modal/component.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>component_stories});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),lib=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./node_modules/react-modal/lib/index.js")),lib_default=__webpack_require__.n(lib),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),sizing=__webpack_require__("./src/stylesheets/sizing.ts");const modalStyles={overlay:{position:"fixed",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(0, 0, 0, 0.75)",zIndex:100,display:"flex",alignItems:"center",justifyContent:"center"},content:{position:"relative",top:"auto",left:"auto",right:"auto",bottom:"auto",borderRadius:sizing.IS,background:"#fff",overflow:"hidden",WebkitOverflowScrolling:"touch",outline:"none",padding:"0px",minWidth:"300px",maxWidth:"90vw",maxHeight:"90vh",display:"flex",flexDirection:"column"}},ModalHeader=styled_components_browser_esm.Ay.div`
  padding: ${sizing.f5} ${sizing.f5} ${sizing.Od};
  display: flex;
  justify-content: space-between;
  align-items: center;
`,ModalBody=(styled_components_browser_esm.Ay.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0;
  line-height: 1;
`,styled_components_browser_esm.Ay.div`
  flex-grow: 1;
  overflow-y: ${({$allowScroll})=>$allowScroll?"auto":"hidden"};
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  padding: 0 ${sizing.f5} 0;
  margin: ${sizing.Od} 0 ${sizing.Od};
`),ModalFooter=styled_components_browser_esm.Ay.div`
  padding: ${sizing.Od} ${sizing.f5} ${sizing.f5};
  display: flex;
  justify-content: flex-end;
  gap: ${sizing.he};
  
  ${({$stickyFooter})=>$stickyFooter&&"\n      position: sticky;\n      bottom: 0;\n      background-color: #fff;\n    "}
`;var Typography=__webpack_require__("./src/components/Typography/index.ts"),md=__webpack_require__("./node_modules/react-icons/md/index.mjs"),component=__webpack_require__("./src/components/Divider/component.tsx"),Button_component=(__webpack_require__("./src/components/Accordion/component.tsx"),__webpack_require__("./src/components/Button/component.tsx"));__webpack_require__("./src/components/Checkbox/component.tsx"),__webpack_require__("./src/components/Hint/component.tsx"),__webpack_require__("./src/components/Navigation/component.tsx"),__webpack_require__("./src/components/Select/component.tsx"),__webpack_require__("./src/components/Spinner/component.tsx"),__webpack_require__("./src/components/TextAreaInput/component.tsx"),__webpack_require__("./src/components/TextInput/component.tsx"),__webpack_require__("./src/components/Toggle/component.tsx");const Modal=({isOpen=!0,onRequestClose,appElement,title,contentLabel,showDividers=!1,shouldCloseOnOverlayClick=!1,shouldCloseOnEsc=!1,allowScroll=!0,noFooter=!1,footerContent=null,stickyFooter=!0,children})=>(0,jsx_runtime.jsxs)(lib_default(),{isOpen,onRequestClose,contentLabel,style:modalStyles,shouldCloseOnOverlayClick,shouldCloseOnEsc,appElement,children:[(0,jsx_runtime.jsxs)(ModalHeader,{children:[(0,jsx_runtime.jsx)(Typography.O,{variant:"header",children:title}),(0,jsx_runtime.jsx)(Button_component.A,{layout:"circle",icon:(0,jsx_runtime.jsx)(md.m6K,{size:"1.5rem"}),onClick:onRequestClose,variant:"subtle",ariaLabel:"close"})]}),showDividers&&(0,jsx_runtime.jsx)(component.A,{}),(0,jsx_runtime.jsx)(ModalBody,{$allowScroll:allowScroll,children}),(!noFooter||footerContent)&&(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[showDividers&&(0,jsx_runtime.jsx)(component.A,{}),(0,jsx_runtime.jsx)(ModalFooter,{$stickyFooter:stickyFooter,children:footerContent})]})]}),Modal_component=Modal;Modal.__docgenInfo={description:"A versatile BBBModal component\n\nThis component provides a customizable modal with optional title, body, and footer.\nIt supports accessibility, dividers, scrollable body, and sticky footer.",methods:[],displayName:"Modal",props:{isOpen:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},onRequestClose:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},appElement:{required:!1,tsType:{name:"union",raw:"HTMLElement | HTMLElement[] | HTMLCollection | NodeList | undefined",elements:[{name:"HTMLElement"},{name:"Array",elements:[{name:"HTMLElement"}],raw:"HTMLElement[]"},{name:"HTMLCollection"},{name:"NodeList"},{name:"undefined"}]},description:""},title:{required:!1,tsType:{name:"string"},description:""},contentLabel:{required:!1,tsType:{name:"string"},description:""},showDividers:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},shouldCloseOnOverlayClick:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},shouldCloseOnEsc:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},allowScroll:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},noFooter:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},stickyFooter:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},footerContent:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"",defaultValue:{value:"null",computed:!1}},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const component_stories={title:"BBBModal",component:Modal_component,tags:["autodocs"],argTypes:{isOpen:{control:"boolean",description:"Controls whether the modal is open."},onRequestClose:{control:!1,description:"Callback invoked when a request to close the modal occurs (e.g., overlay click or close button)."},appElement:{control:!1,description:"App element for accessibility; forwarded to react-modal."},title:{control:"text",description:"Modal title shown in the header."},contentLabel:{control:"text",description:"Accessibility label for the modal content."},showDividers:{control:"boolean",description:"Show dividers between header/body/footer."},shouldCloseOnOverlayClick:{control:"boolean",description:"Allow closing the modal by clicking the overlay."},shouldCloseOnEsc:{control:"boolean",description:"Allow closing the modal with the ESC key."},allowScroll:{control:"boolean",description:"Enable scrolling inside the modal body."},noFooter:{control:"boolean",description:"Hide the footer section."},footerContent:{control:!1,description:"Custom React node to render inside the footer."},stickyFooter:{control:"boolean",description:"When true, the footer is sticky to the bottom."},children:{control:!1,description:"Modal body content."}}},Default={args:{title:"Modal Title",children:(0,jsx_runtime.jsx)("div",{style:{padding:"1rem"},children:(0,jsx_runtime.jsx)(Typography.O,{children:"Modal body content"})}),isOpen:!0,onRequestClose:()=>{}}},__namedExportsOrder=["Default"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: {\n    title: 'Modal Title',\n    children: <div style={{\n      padding: '1rem'\n    }}>\n        <BBBTypography>Modal body content</BBBTypography>\n      </div>,\n    isOpen: true,\n    onRequestClose: () => {}\n  }\n}",...Default.parameters?.docs?.source}}}},"./src/components/Accordion/component.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>component});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),pallete=__webpack_require__("./src/stylesheets/pallete.ts"),typography=__webpack_require__("./src/stylesheets/typography.ts"),sizing=__webpack_require__("./src/stylesheets/sizing.ts");const ExpandButton=styled_components_browser_esm.Ay.button`
  display: flex;
  align-items: center;
  background: none;
  border: none;
  cursor: pointer;
  padding: ${sizing.Pf};
  background-color: transparent;
  border-radius: ${sizing.IS};

  &:hover {
    background: ${pallete.GW};
  }
`,ButtonContent=styled_components_browser_esm.Ay.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: ${sizing.Pf};
  border-radius: ${sizing.IS};
  gap: ${sizing.he};
`,ExpandIcon=styled_components_browser_esm.Ay.div`
  width: 1.375rem;
  height: 1.375rem;
  aspect-ratio: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: ${({$expanded})=>$expanded?"rotate(180deg)":"rotate(0deg)"};
  transition: all 0.3s ease;
  border-radius: 50%;
  background-color: ${pallete._q};

  svg {
    color: ${pallete.bD};
    font-size: 1.25rem;
    transition: transform 0.3s ease;
  }

  &:hover {
    filter: brightness(0.9);
  }
`,TitleText=styled_components_browser_esm.Ay.span`
  font-size: ${typography.G5};
  font-weight: 400;
  color: ${pallete.eg};
  overflow: hidden;
  text-overflow: ellipsis;
`,AccordionContent=styled_components_browser_esm.Ay.div`
  max-height: ${({$expanded,$scrollHeight})=>$expanded?`${$scrollHeight}px`:"0"};
  overflow: hidden;
  transition: max-height 0.3s ease-in-out;
  padding: 0px 1rem;
`;var md=__webpack_require__("./node_modules/react-icons/md/index.mjs"),tippy_react_esm=__webpack_require__("./node_modules/@tippyjs/react/dist/tippy-react.esm.js"),constants=(__webpack_require__("./node_modules/tippy.js/dist/tippy.css"),__webpack_require__("./src/components/Accordion/constants.ts"));function Accordion({title,tooltipLabel=null,tooltipPlacement=constants.Cb,ariaLabel,ariaLabelledBy,ariaDescribedBy,buttonHeader=null,children}){const[isExpanded,setIsExpanded]=(0,react.useState)(!1),contentRef=(0,react.useRef)(null),expandButton=(0,jsx_runtime.jsx)(ExpandButton,{onClick:()=>setIsExpanded(current=>!current),"aria-label":ariaLabel,"aria-labelledby":ariaLabelledBy,"aria-describedby":ariaDescribedBy,children:(0,jsx_runtime.jsxs)(ButtonContent,{children:[(0,jsx_runtime.jsx)(ExpandIcon,{$expanded:isExpanded,children:(0,jsx_runtime.jsx)(md.j1Q,{})}),(0,jsx_runtime.jsx)(TitleText,{children:title}),buttonHeader]})});return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[tooltipLabel?(0,jsx_runtime.jsx)(tippy_react_esm.Ay,{content:tooltipLabel,placement:tooltipPlacement,children:expandButton}):expandButton,(0,jsx_runtime.jsx)(AccordionContent,{ref:contentRef,$expanded:isExpanded,$scrollHeight:contentRef.current?.scrollHeight||0,children})]})}const component=Accordion;Accordion.__docgenInfo={description:"A customizable Accordion component that allows expanding and collapsing content.\n\nThis component provides a clickable header to toggle the visibility of its children content\nwith a smooth animation. It also supports an optional tooltip on the header.",methods:[],displayName:"Accordion",props:{title:{required:!0,tsType:{name:"string"},description:""},tooltipLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"null",computed:!1}},tooltipPlacement:{required:!1,tsType:{name:"TOOLTIP_PLACEMENT_VALUES[number]",raw:"typeof TOOLTIP_PLACEMENT_VALUES[number]"},description:"",defaultValue:{value:"'top'",computed:!1}},ariaLabel:{required:!1,tsType:{name:"string"},description:""},ariaLabelledBy:{required:!1,tsType:{name:"string"},description:""},ariaDescribedBy:{required:!1,tsType:{name:"string"},description:""},buttonHeader:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"",defaultValue:{value:"null",computed:!1}},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}}},"./src/components/Accordion/constants.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Cb:()=>DEFAULT_TOOLTIP_PLACEMENT,P8:()=>TOOLTIP_PLACEMENT_VALUES});const TOOLTIP_PLACEMENTS={TOP:"top",BOTTOM:"bottom",LEFT:"left",RIGHT:"right"},TOOLTIP_PLACEMENT_VALUES=Object.values(TOOLTIP_PLACEMENTS),DEFAULT_TOOLTIP_PLACEMENT=TOOLTIP_PLACEMENTS.TOP},"./src/components/Checkbox/component.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>component});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),Checkbox=__webpack_require__("./node_modules/@mui/material/esm/Checkbox/Checkbox.js"),pallete=__webpack_require__("./src/stylesheets/pallete.ts"),typography=__webpack_require__("./src/stylesheets/typography.ts"),sizing=__webpack_require__("./src/stylesheets/sizing.ts");const Container=styled_components_browser_esm.Ay.div`
  display: inline-flex;
  align-items: center;
  gap: ${sizing.Pf};
`,Label=styled_components_browser_esm.Ay.label`
  color: ${pallete.eg};
  font-size: ${typography.G5};
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  cursor: pointer;
`,StyledCheckbox=(0,styled_components_browser_esm.Ay)(Checkbox.A)`
  &.MuiCheckbox-root {
    padding: 0;
  }

  &.Mui-checked {
    color: ${pallete._q};
  }
`;var constants=__webpack_require__("./src/components/Checkbox/constants.ts"),RadioButtonUnchecked=__webpack_require__("./node_modules/@mui/icons-material/esm/RadioButtonUnchecked.js"),RadioButtonChecked=__webpack_require__("./node_modules/@mui/icons-material/esm/RadioButtonChecked.js");function component_Checkbox({label,layout=constants.zR,round=!1,ariaLabel,...props}){const id=(0,react.useId)(),checkbox=(0,jsx_runtime.jsx)(StyledCheckbox,{...props,id,"aria-label":ariaLabel,icon:round?(0,jsx_runtime.jsx)(RadioButtonUnchecked.A,{}):void 0,checkedIcon:round?(0,jsx_runtime.jsx)(RadioButtonChecked.A,{}):void 0});return label?(0,jsx_runtime.jsxs)(Container,{children:[layout===constants.my.LEFT&&(0,jsx_runtime.jsx)(Label,{htmlFor:id,children:label}),checkbox,layout===constants.my.RIGHT&&(0,jsx_runtime.jsx)(Label,{htmlFor:id,children:label})]}):checkbox}const component=component_Checkbox;component_Checkbox.__docgenInfo={description:"A customizable Checkbox component.\n\nThis component provides a wrapper around the Material-UI Checkbox with additional features,\nsuch as custom layouts and a round variant. It can be used with a label,\nand clicking the label will toggle the checkbox state.",methods:[],displayName:"Checkbox",props:{label:{required:!1,tsType:{name:"string"},description:""},layout:{required:!1,tsType:{name:"LAYOUTS[union]",raw:"typeof LAYOUTS[keyof typeof LAYOUTS]"},description:"",defaultValue:{value:"LAYOUT_VALUES[0]",computed:!0}},round:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},ariaLabel:{required:!1,tsType:{name:"string"},description:""}},composes:["MuiCheckboxProps"]}},"./src/components/Checkbox/constants.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Uo:()=>LAYOUT_VALUES,my:()=>LAYOUTS,zR:()=>DEFAULT_LAYOUT});const LAYOUTS={RIGHT:"right",LEFT:"left"},LAYOUT_VALUES=Object.values(LAYOUTS),DEFAULT_LAYOUT=LAYOUT_VALUES[0]},"./src/components/Divider/component.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>component});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),styled_components_browser_esm=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js")),pallete=__webpack_require__("./src/stylesheets/pallete.ts");const Divider=styled_components_browser_esm.Ay.hr`
  width: 100%;
  border-top: 0px;
  border-right: 0px;
  border-left: 0px;
  border-image: initial;
  border-bottom: 1px solid ${pallete.hN};
  margin: 0px;
`;function component_Divider(){return(0,jsx_runtime.jsx)(Divider,{})}const component=component_Divider;component_Divider.__docgenInfo={description:"A customizable divider used to separate content areas.\n\nThis component provides a styled divider that supports horizontal/vertical orientation and spacing via styles.",methods:[],displayName:"Divider"}},"./src/components/Hint/component.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>component});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),styled_components_browser_esm=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js")),pallete=__webpack_require__("./src/stylesheets/pallete.ts"),typography=__webpack_require__("./src/stylesheets/typography.ts"),sizing=__webpack_require__("./src/stylesheets/sizing.ts");const Container=styled_components_browser_esm.Ay.div`
  display: flex;
  flex-direction: column;
  gap: ${sizing.Pf};
  padding: ${sizing.he};
  background-color: ${pallete.GW};
`,IconTextWrapper=styled_components_browser_esm.Ay.div`
  display: flex;
  flex-direction: row;
  gap: ${sizing.Od};
`,Header=styled_components_browser_esm.Ay.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`,IconWrapper=styled_components_browser_esm.Ay.div`
  color: ${pallete._q};
  display: flex;
  align-items: center;
`,Title=styled_components_browser_esm.Ay.label`
  color: ${pallete.eg};
  font-size: ${typography.G5}
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`,CloseButton=styled_components_browser_esm.Ay.button`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${pallete.kE};
  background: transparent;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  aspect-ratio: 1;

  &&:hover,
  &&:active {
    background-color: ${pallete.K5};
  }
      
  &&:focus {
    outline: 2px solid ${pallete._q};
  }
`,Label=styled_components_browser_esm.Ay.label`
  color: ${pallete.eg};
  font-size: ${typography.G5};
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  border-radius: ${sizing.aU};
`;var md=__webpack_require__("./node_modules/react-icons/md/index.mjs");function Hint({title,label,icon=(0,jsx_runtime.jsx)(md.MJW,{fontSize:"1rem"}),onRequestClose,children,...rest}){const renderedLabel=(0,jsx_runtime.jsxs)(Label,{children:[label,children]});return(0,jsx_runtime.jsxs)(Container,{role:"status","aria-live":"polite","aria-atomic":"true","aria-label":title||label,...rest,children:[(0,jsx_runtime.jsxs)(Header,{children:[(0,jsx_runtime.jsxs)(IconTextWrapper,{children:[(0,jsx_runtime.jsx)(IconWrapper,{"aria-hidden":"true",children:icon}),title&&(0,jsx_runtime.jsx)(Title,{children:title}),!title&&renderedLabel]}),title&&(0,jsx_runtime.jsx)(CloseButton,{type:"button","aria-label":"Close",onClick:onRequestClose,children:(0,jsx_runtime.jsx)(md.m6K,{fontSize:"1rem"})})]}),title&&renderedLabel]})}const component=Hint;Hint.__docgenInfo={description:"A customizable hint component for displaying informational messages.\n\nThis component provides a small contextual hint used to surface tips, short help text or dismissible messages.\nIt can be displayed with a title, an icon, and a close button.",methods:[],displayName:"Hint",props:{label:{required:!0,tsType:{name:"string"},description:""},title:{required:!1,tsType:{name:"string"},description:""},icon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"",defaultValue:{value:'<MdInfo fontSize="1rem" />',computed:!1}},onRequestClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}}},"./src/components/Navigation/component.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>component});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),styled_components_browser_esm=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js")),sizing=__webpack_require__("./src/stylesheets/sizing.ts"),pallete=__webpack_require__("./src/stylesheets/pallete.ts");const NavigationButton=styled_components_browser_esm.Ay.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background: transparent;
  border: none;
  cursor: pointer;
  margin: 1px; /* Adds margin to prevent outline from being cropped */
  border-radius: ${sizing.aU};

  &:focus {
    outline: 1px solid ${pallete._q};
  }
`,IconTextWrapper=styled_components_browser_esm.Ay.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: ${sizing.he};
`,IconWrapper=styled_components_browser_esm.Ay.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${pallete._q};

  ${({$isCustomIcon})=>!$isCustomIcon&&styled_components_browser_esm.AH`
    transform: rotate(90deg);
    [dir="rtl"] & {
      transform: rotate(-90deg);
    }
  `}
`;var md=__webpack_require__("./node_modules/react-icons/md/index.mjs"),Typography=__webpack_require__("./src/components/Typography/index.ts");function Navigation({label,onClick,onKeyDown,icon,children,ariaLabel,ariaLabelledBy,ariaDescribedBy,dataTest}){const isCustomIcon=!!icon,iconToRender=icon||(0,jsx_runtime.jsx)(md.onE,{size:"1.5rem"});return(0,jsx_runtime.jsxs)(NavigationButton,{onClick,onKeyDown,"aria-label":ariaLabel,"aria-labelledby":ariaLabelledBy,"aria-describedby":ariaDescribedBy,"data-test":dataTest,children:[(0,jsx_runtime.jsxs)(IconTextWrapper,{children:[(0,jsx_runtime.jsx)(IconWrapper,{$isCustomIcon:isCustomIcon,children:iconToRender}),(0,jsx_runtime.jsx)(Typography.O,{variant:"default",children:label})]}),children]})}const component=Navigation;Navigation.__docgenInfo={description:"A customizable Navigation component that acts as a button with an icon and a label.\nIt can be used for navigation actions within an application.",methods:[],displayName:"Navigation",props:{label:{required:!0,tsType:{name:"string"},description:""},onClick:{required:!0,tsType:{name:"ReactMouseEventHandler",raw:"React.MouseEventHandler<HTMLButtonElement>",elements:[{name:"HTMLButtonElement"}]},description:""},onKeyDown:{required:!1,tsType:{name:"ReactKeyboardEventHandler",raw:"React.KeyboardEventHandler<HTMLButtonElement>",elements:[{name:"HTMLButtonElement"}]},description:""},icon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},ariaLabel:{required:!1,tsType:{name:"string"},description:""},ariaLabelledBy:{required:!1,tsType:{name:"string"},description:""},ariaDescribedBy:{required:!1,tsType:{name:"string"},description:""},dataTest:{required:!1,tsType:{name:"string"},description:""}}}},"./src/components/Select/component.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>component});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js"),md=__webpack_require__("./node_modules/react-icons/md/index.mjs"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),sizing=__webpack_require__("./src/stylesheets/sizing.ts"),Select=__webpack_require__("./node_modules/@mui/material/esm/Select/Select.js"),pallete=__webpack_require__("./src/stylesheets/pallete.ts"),typography=__webpack_require__("./src/stylesheets/typography.ts");const SelectContainer=styled_components_browser_esm.Ay.div`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  gap: ${sizing.Pf};
  justify-content: start;
  align-items: center;
`,SelectWrapper=styled_components_browser_esm.Ay.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: ${sizing.he}; 
  padding: 1px;
  width: 100%;
`,Selector=(0,styled_components_browser_esm.Ay)(Select.A)`
  height: 3.5rem;
  flex: 1;
  border-radius: ${sizing.aU} !important;
  overflow: hidden;
  width: 100%;
  border: 1px solid ${pallete.hN};
`,Title=styled_components_browser_esm.Ay.label`
  align-self: flex-start;
  color: ${pallete.BP};
  font-size: ${typography.ms};
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`,SelectorIcon=styled_components_browser_esm.Ay.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  color: ${pallete._q};
`;function component_Select({title=null,icon=null,children,ariaLabel,...props}){const id=(0,react.useId)(),selectId=`select-${id}`,labelId=title?`select-label-${id}`:void 0;return(0,jsx_runtime.jsxs)(SelectContainer,{children:[title&&(0,jsx_runtime.jsx)(Title,{id:labelId,htmlFor:selectId,children:title}),(0,jsx_runtime.jsxs)(SelectWrapper,{children:[icon&&(0,jsx_runtime.jsx)(SelectorIcon,{children:icon}),(0,jsx_runtime.jsx)(Selector,{...props,id:selectId,labelId,"aria-label":ariaLabel,IconComponent:md.j1Q,children})]})]})}const component=component_Select;component_Select.__docgenInfo={description:"A customizable Select component.\n\nThis component provides a styled wrapper around the Material-UI Select and additional styling,\nsuch as a title and an optional icon.",methods:[],displayName:"Select",props:{title:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"null",computed:!1}},icon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"",defaultValue:{value:"null",computed:!1}},ariaLabel:{required:!1,tsType:{name:"string"},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}}},"./src/components/Spinner/component.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>component});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),styled_components_browser_esm=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js")),pallete=__webpack_require__("./src/stylesheets/pallete.ts");const rotate=styled_components_browser_esm.i7`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`,dash=styled_components_browser_esm.i7`
  0%   { stroke-dasharray: 1, 200; stroke-dashoffset: 0; }
  50%  { stroke-dasharray: 100, 200; stroke-dashoffset: -15; }
  100% { stroke-dasharray: 100, 200; stroke-dashoffset: -125; }
`,Wrapper=styled_components_browser_esm.Ay.div`
  width: ${({$size})=>"number"==typeof $size?`${$size}px`:$size};
  height: ${({$size})=>"number"==typeof $size?`${$size}px`:$size};
  display: inline-grid;
  place-items: center;
`,StyledSvg=styled_components_browser_esm.Ay.svg`
  width: 100%;
  height: 100%;
  transform-origin: center;
  overflow: visible;
  ${({$animate})=>$animate&&styled_components_browser_esm.AH`
      animation: ${rotate} 1.4s linear infinite;
    `}
`,Path=styled_components_browser_esm.Ay.circle`
  fill: none;
  stroke: ${pallete._q};
  stroke-width: ${({$strokeWidth})=>$strokeWidth}px;
  stroke-linecap: round;
  ${({$animate})=>$animate&&styled_components_browser_esm.AH`
      animation: ${dash} 1.4s ease-in-out infinite;
    `}

  ${({$animate})=>!$animate&&styled_components_browser_esm.AH`
      stroke-dasharray: 94.2 31.4;
      stroke-dashoffset: 0;
    `}
`,Spinner=({size=48,strokeWidth=4,animate=!0})=>(0,jsx_runtime.jsx)(Wrapper,{$size:size,role:"progressbar","aria-label":"Loading","aria-busy":animate,children:(0,jsx_runtime.jsx)(StyledSvg,{viewBox:"0 0 50 50",$animate:animate,focusable:"false","aria-hidden":"true",children:(0,jsx_runtime.jsx)(Path,{className:"path",cx:"25",cy:"25",r:"20",$animate:animate,$strokeWidth:strokeWidth})})}),component=Spinner;Spinner.__docgenInfo={description:"A customizable spinner component.\n\nThis component provides a small, configurable loading indicator for background activity or loading states.",methods:[],displayName:"Spinner",props:{size:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:"",defaultValue:{value:"48",computed:!1}},strokeWidth:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"4",computed:!1}},animate:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}}}}},"./src/components/TextAreaInput/component.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>component});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),pallete=__webpack_require__("./src/stylesheets/pallete.ts"),sizing=__webpack_require__("./src/stylesheets/sizing.ts");const TextAreaInput=styled_components_browser_esm.Ay.textarea`
  flex: 1;
  background: ${pallete.bD};
  background-clip: padding-box;
  margin: 0;
  color: ${pallete.d5};
  padding: calc(.3rem* 2.5) calc(.75rem* 1.25);
  resize: none;
  -webkit-transition: none;
  transition: none;
  border-radius: ${sizing.IS};
  font-size: 1rem;
  line-height: 1;
  min-height: 2.5rem;
  max-height: 10rem;
  border: 1px solid ${pallete.hN};
  overflow-y: hidden;
  margin: 0.3em;
  &:focus {
    outline: ${pallete._q} solid 2px;
    box-shadow: 0 0 0 2px ${pallete.f$} inset 0 0 0 1px ${pallete._q};
  }
`;function component_TextAreaInput({placeholder="",rows=1,maxLength=250,autoFocus=!0,inputRef,onChange,onKeyDown,...props}){const internalRef=(0,react.useRef)(null);return(0,react.useEffect)(()=>{autoFocus&&internalRef.current&&internalRef.current.focus()},[autoFocus]),(0,jsx_runtime.jsx)(TextAreaInput,{...props,rows,maxLength,ref:ref=>{internalRef.current=ref,"function"==typeof inputRef?inputRef(ref):inputRef&&"current"in inputRef&&(inputRef.current=ref)},placeholder,onChange,onKeyDown})}const component=component_TextAreaInput;component_TextAreaInput.__docgenInfo={description:"A customizable text area input component.\n\nThis component provides a styled, multi-line text input field that automatically\nfocuses on render and supports all standard textarea attributes.",methods:[],displayName:"TextAreaInput",props:{rows:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"1",computed:!1}},maxLength:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"250",computed:!1}},placeholder:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},autoFocus:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},inputRef:{required:!1,tsType:{name:"union",raw:"React.MutableRefObject<HTMLTextAreaElement | null> | ((ref: HTMLTextAreaElement) => void)",elements:[{name:"ReactMutableRefObject",raw:"React.MutableRefObject<HTMLTextAreaElement | null>",elements:[{name:"union",raw:"HTMLTextAreaElement | null",elements:[{name:"HTMLTextAreaElement"},{name:"null"}]}]},{name:"unknown"}]},description:"",defaultValue:{value:"undefined",computed:!0}},onChange:{required:!1,tsType:{name:"ReactChangeEventHandler",raw:"React.ChangeEventHandler<HTMLTextAreaElement>",elements:[{name:"HTMLTextAreaElement"}]},description:""},onKeyDown:{required:!1,tsType:{name:"ReactKeyboardEventHandler",raw:"React.KeyboardEventHandler<HTMLTextAreaElement>",elements:[{name:"HTMLTextAreaElement"}]},description:""}}}},"./src/components/TextInput/component.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>component});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),styled_components_browser_esm=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js")),TextField=__webpack_require__("./node_modules/@mui/material/esm/TextField/TextField.js"),pallete=__webpack_require__("./src/stylesheets/pallete.ts"),typography=__webpack_require__("./src/stylesheets/typography.ts"),sizing=__webpack_require__("./src/stylesheets/sizing.ts");const StyledTextField=(0,styled_components_browser_esm.Ay)(TextField.A)`
  .MuiInputBase-root {
    display: flex;
    padding: ${sizing.he};
    align-items: center;
    gap: ${sizing.Pf};
    align-self: stretch;
    border-radius: ${sizing.IS};
    border: 1px solid ${pallete.hN};
    color: ${pallete.XN};

    &.Mui-focused {
      border-color: ${pallete.z2};
      color: ${pallete.eg};
    }
    
    ${({$error})=>$error&&styled_components_browser_esm.AH`
        border-color: ${pallete.qO};
    `}
  }

  .MuiInputBase-input {
    padding: 0;
    height: auto;
  }

  .MuiOutlinedInput-notchedOutline {
    border: none;
  }
`,Label=styled_components_browser_esm.Ay.div`
  color: ${pallete.eg};
  font-size: ${typography.ms};
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`,HelperText=styled_components_browser_esm.Ay.div`
  color: ${pallete.eg};
  font-size: ${typography.ms};
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  padding: 0 ${sizing.he}; 

  ${({$error})=>$error&&styled_components_browser_esm.AH`
      color: ${pallete._r};
  `}
`,Container=styled_components_browser_esm.Ay.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: ${sizing.Pf};
`;function TextInput({label,helperText,error,placeholder,...props}){return(0,jsx_runtime.jsxs)(Container,{children:[label&&(0,jsx_runtime.jsx)(Label,{children:label}),(0,jsx_runtime.jsx)(StyledTextField,{...props,$error:error,placeholder}),helperText&&(0,jsx_runtime.jsx)(HelperText,{$error:error,children:helperText})]})}const component=TextInput;TextInput.__docgenInfo={description:"A customizable text input component.\n\nThis component provides a styled, single-line text input field that supports\nicons, custom validation, and all standard input attributes.",methods:[],displayName:"TextInput",props:{label:{required:!1,tsType:{name:"string"},description:""},helperText:{required:!1,tsType:{name:"string"},description:""},error:{required:!1,tsType:{name:"boolean"},description:""}},composes:["Omit"]}},"./src/components/Toggle/component.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>component});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js"),Switch=__webpack_require__("./node_modules/@mui/material/esm/Switch/Switch.js"),styled=__webpack_require__("./node_modules/@mui/material/esm/styles/styled.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),pallete=__webpack_require__("./src/stylesheets/pallete.ts"),constants=__webpack_require__("./src/components/Toggle/constants.ts"),typography=__webpack_require__("./src/stylesheets/typography.ts");const ToggleWrapper=styled_components_browser_esm.Ay.div`
  display: flex;
  ${({$textPosition})=>{if($textPosition===constants.TL.TOP||$textPosition===constants.TL.BOTTOM)return styled_components_browser_esm.AH`
        flex-direction: column;
        gap: .1rem;
      `;const horizontalStyles=styled_components_browser_esm.AH`
      flex-direction: row;
      gap: 1rem;
    `;return $textPosition===constants.TL.LEFT?styled_components_browser_esm.AH`
        ${horizontalStyles}
        justify-content: end; 
      `:horizontalStyles}};
`,ToggleSwitchWrapper=styled_components_browser_esm.Ay.div`
  display: flex;
  flex-direction: row;
  align-items: start;
  justify-content: center;
  padding: 0.3rem 0px;
`,TextWrapper=styled_components_browser_esm.Ay.label`
  display: flex;
  flex-direction: column;
  order: ${({$textPosition})=>$textPosition===constants.TL.LEFT||$textPosition===constants.TL.TOP?-1:1};
  cursor: pointer;
  ${({$hasLabel,$hasHelperText})=>(!$hasLabel||!$hasHelperText)&&"justify-content: center;"}
  ${({$textPosition})=>$textPosition===constants.TL.TOP||$textPosition===constants.TL.BOTTOM?styled_components_browser_esm.AH`
        align-items: center;
      `:$textPosition===constants.TL.LEFT?styled_components_browser_esm.AH`align-items: end;`:styled_components_browser_esm.AH`
      align-items: start;
    `};
`,Title=styled_components_browser_esm.Ay.span`
  color: ${pallete.eg};
  font-size: ${typography.f3};
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`,HelperText=styled_components_browser_esm.Ay.span`
  color: ${pallete.XN};
  font-size: ${typography.G5};
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`,MaterialToggle=(0,styled.Ay)(Switch.A)(({theme})=>({width:"2.3rem",height:"1.2rem",padding:0,display:"flex","&:active":{"& .MuiSwitch-switchBase.Mui-checked":{transform:"translateX(1.2rem)"}},"& .MuiSwitch-switchBase":{padding:"0.2rem","&.Mui-checked":{transform:"translateX(1.2rem)",color:pallete.bD,"& + .MuiSwitch-track":{opacity:1,backgroundColor:pallete._q,...theme.applyStyles("dark",{backgroundColor:pallete._q})}}},"& .MuiSwitch-thumb":{boxShadow:"0 2px 4px 0 rgb(0 35 11 / 20%)",width:"0.6rem",height:"0.6rem",borderRadius:"0.5rem",transition:theme.transitions.create(["width"],{duration:200}),transform:"translateY(1px)"},"& .MuiSwitch-track":{borderRadius:"0.6rem",opacity:1,backgroundColor:pallete.kE,boxSizing:"border-box",...theme.applyStyles("dark",{backgroundColor:"rgba(255,255,255,.35)"})}}));function Toggle({label,helperText,textPosition=constants.wA,onChange,ariaLabel,ariaLabelledBy,ariaDescribedBy,...toggleProps}){const id=(0,react.useId)(),labelId=label?`${id}-label`:void 0,helperTextId=helperText?`${id}-helper`:void 0;return(0,jsx_runtime.jsxs)(ToggleWrapper,{$textPosition:textPosition,children:[(label||helperText)&&(0,jsx_runtime.jsxs)(TextWrapper,{$textPosition:textPosition,htmlFor:id,$hasLabel:!!label,$hasHelperText:!!helperText,children:[label&&(0,jsx_runtime.jsx)(Title,{id:labelId,children:label}),helperText&&(0,jsx_runtime.jsx)(HelperText,{id:helperTextId,children:helperText})]}),(0,jsx_runtime.jsx)(ToggleSwitchWrapper,{children:(0,jsx_runtime.jsx)(MaterialToggle,{id,onChange,"aria-label":ariaLabel,"aria-labelledby":ariaLabel?void 0:ariaLabelledBy||labelId,"aria-describedby":ariaDescribedBy||helperTextId,...toggleProps})})]})}const component=Toggle;Toggle.__docgenInfo={description:"A customizable Toggle switch component.\n\nThis component provides a flexible toggle switch that can be used for binary state changes.\nIt supports labels (label and helperText) and various textPosition configurations.",methods:[],displayName:"Toggle",props:{disabled:{required:!1,tsType:{name:"boolean"},description:""},label:{required:!1,tsType:{name:"string"},description:""},helperText:{required:!1,tsType:{name:"string"},description:""},textPosition:{required:!1,tsType:{name:"TEXT_POSITIONS_VALUES[number]",raw:"typeof TEXT_POSITIONS_VALUES[number]"},description:"",defaultValue:{value:"TEXT_POSITIONS_VALUES[0]",computed:!0}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.ChangeEvent<HTMLInputElement>, checked: boolean) => void",signature:{arguments:[{type:{name:"ReactChangeEvent",raw:"React.ChangeEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"event"},{type:{name:"boolean"},name:"checked"}],return:{name:"void"}}},description:""},ariaLabel:{required:!1,tsType:{name:"string"},description:""},ariaLabelledBy:{required:!1,tsType:{name:"string"},description:""},ariaDescribedBy:{required:!1,tsType:{name:"string"},description:""}}}},"./src/components/Toggle/constants.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{TL:()=>TEXT_POSITIONS,gd:()=>TEXT_POSITIONS_VALUES,wA:()=>DEFAULT_TEXT_POSITION});const TEXT_POSITIONS={RIGHT:"right",LEFT:"left",TOP:"top",BOTTOM:"bottom"},TEXT_POSITIONS_VALUES=Object.values(TEXT_POSITIONS),DEFAULT_TEXT_POSITION=TEXT_POSITIONS_VALUES[0]},"./src/components/Typography/component.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>component});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),styled_components_browser_esm=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js")),pallete=__webpack_require__("./src/stylesheets/pallete.ts"),typography=__webpack_require__("./src/stylesheets/typography.ts");const variants={default:styled_components_browser_esm.AH`
    color: ${pallete.eg};
    font-size: ${typography.G5};
    font-style: normal;
    font-weight: ${typography.WY};
    line-height: normal;
  `,selected:styled_components_browser_esm.AH`
    color: ${pallete.eg};
    font-size: ${typography.G5};
    font-style: normal;
    font-weight: ${typography.hW};
    line-height: normal;
  `,text2:styled_components_browser_esm.AH`
    color: ${pallete.XN};
    font-size: ${typography.ms};
    font-style: normal;
    font-weight: ${typography.WY};
    line-height: normal;
  `,text3:styled_components_browser_esm.AH`
    color: ${pallete.XN};
    font-size: ${typography.cQ};
    font-style: normal;
    font-weight: ${typography.WY};
    line-height: normal;
  `,header:styled_components_browser_esm.AH`
    color: ${pallete.eg};
    font-size: ${typography.G5};
    font-style: normal;
    font-weight: ${typography.hW};
    line-height: normal;
    text-transform: uppercase;
  `,button:styled_components_browser_esm.AH`
    color: ${pallete.eg};
    font-size: ${typography.G5};
    font-style: normal;
    font-weight: ${typography.n3};
    line-height: normal;
  `},TypographyStyled=styled_components_browser_esm.Ay.p`
  margin: 0;
  padding: 0;
  ${({$variant})=>variants[$variant]}
`,Typography=({children,variant="default",as,...props})=>(0,jsx_runtime.jsx)(TypographyStyled,{as,$variant:variant,...props,children}),component=Typography;Typography.__docgenInfo={description:"A typography component that standardizes text styles across the app.\n\nThis component provides multiple semantic variants (header, default, label, helper)\nand allows overriding the rendered HTML element via the `as` prop.",methods:[],displayName:"Typography",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},variant:{required:!1,tsType:{name:"unknown[number]",raw:"(typeof TYPOGRAPHY_VARIANTS)[number]"},description:"",defaultValue:{value:"'default'",computed:!1}},as:{required:!1,tsType:{name:"ReactElementType",raw:"React.ElementType"},description:""}}}},"./src/components/Typography/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{O:()=>_component__WEBPACK_IMPORTED_MODULE_0__.A});var _component__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/Typography/component.tsx")}}]);
//# sourceMappingURL=components-Modal-component-stories.40bc8521.iframe.bundle.js.map