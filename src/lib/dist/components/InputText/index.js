"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _react=_interopRequireDefault(require("react")),_LoaderBusyWrapper=_interopRequireDefault(require("../_common/LoaderBusyWrapper"));function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}const InputText=a=>{const b=_react.default.useRef();return/*#__PURE__*/_react.default.createElement("div",{className:"app-input-text-container",title:a.tooltip},a.label?(()=>/*#__PURE__*/_react.default.createElement("span",{className:"app-input-label"},a.label))():"",/*#__PURE__*/_react.default.createElement("input",{className:"success"===a.setStatus?"app-input-text success":"danger"===a.setStatus?"app-input-text danger":"app-input-text",style:{width:a.width},type:a.type,ref:b,placeholder:a.placeholder,onChange:a.onChange,disabled:a.disabled,value:a.value}),/*#__PURE__*/_react.default.createElement("div",{className:"app-input-status-container"},"success"===a.setStatus?(()=>/*#__PURE__*/_react.default.createElement("i",{className:"icons10-checkmark color-success font-size-18px"}))():"","danger"===a.setStatus?(()=>/*#__PURE__*/_react.default.createElement("i",{className:"icons10-cross color-danger font-size-18px"}))():"","loading"===a.setStatus?(()=>/*#__PURE__*/_react.default.createElement("div",{className:"app-loader-busy small animate",style:{top:"5px"}},/*#__PURE__*/_react.default.createElement(_LoaderBusyWrapper.default,null)))():"",/*#__PURE__*/_react.default.createElement("button",{className:"unmask",type:"button",onClick:()=>{let a=b.current;a.type="text"===a.type?"password":"text"},style:"password"===a.type?{display:"inline-block"}:{display:"none"}})))};InputText.defaultProps={placeholder:"Input Text",type:"text"};var _default=InputText;exports.default=_default;