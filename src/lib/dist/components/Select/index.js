"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0,require("core-js/modules/web.dom-collections.iterator.js");var _react=_interopRequireWildcard(require("react")),_useOutSideClick=_interopRequireDefault(require("../utils/hooks/useOutSideClick"));function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}function _getRequireWildcardCache(a){if("function"!=typeof WeakMap)return null;var b=new WeakMap,c=new WeakMap;return(_getRequireWildcardCache=function(a){return a?c:b})(a)}function _interopRequireWildcard(a,b){if(!b&&a&&a.__esModule)return a;if(null===a||"object"!=typeof a&&"function"!=typeof a)return{default:a};var c=_getRequireWildcardCache(b);if(c&&c.has(a))return c.get(a);var d={},e=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var f in a)if("default"!=f&&Object.prototype.hasOwnProperty.call(a,f)){var g=e?Object.getOwnPropertyDescriptor(a,f):null;g&&(g.get||g.set)?Object.defineProperty(d,f,g):d[f]=a[f]}return d.default=a,c&&c.set(a,d),d}const Select=a=>{const[b,c]=(0,_react.useState)(!1),[d,e]=(0,_react.useState)("Select"),[f,g]=(0,_react.useState)([]),[h,i]=(0,_react.useState)(0);(0,_react.useEffect)(()=>{//Check if any default value is given
if(a.defaultValue){let b=f.findIndex(b=>b.value===a.defaultValue),c=f.find(b=>b.value===a.defaultValue).label;i(b),e(c)}else e(f[0].label);g(a.data)},[a.data,a.defaultValue,f]),(0,_react.useMemo)(()=>{g(a.data)},[a.data]);const j=b=>{//get index of selecting value
let c=f.findIndex(a=>a.value===b);e(b),i(c),a.onChange(b),k()},k=()=>c(!b),l=(0,_react.useRef)(null);return(0,_useOutSideClick.default)(l,()=>c(!1)),/*#__PURE__*/_react.default.createElement("div",{className:"app-select-styled react",ref:l},/*#__PURE__*/_react.default.createElement("div",{className:"app-select-header",onClick:k},d,/*#__PURE__*/_react.default.createElement("i",{className:"icons10-angle-down"})),/*#__PURE__*/_react.default.createElement("div",{className:"app-select-body ".concat(b&&"open")},f.map((a,b)=>/*#__PURE__*/_react.default.createElement("div",{className:"select-item ".concat(b===h&&"selected"),onClick:()=>j(a.value),key:b},a.label))))};Select.defaultProps={onChange:()=>{}};var _default=Select;exports.default=_default;