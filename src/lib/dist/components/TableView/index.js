"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0,require("core-js/modules/web.dom-collections.iterator.js"),require("core-js/modules/es.array.sort.js");var _react=_interopRequireWildcard(require("react")),_Cell=_interopRequireDefault(require("./Cell"));function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}function _getRequireWildcardCache(a){if("function"!=typeof WeakMap)return null;var b=new WeakMap,c=new WeakMap;return(_getRequireWildcardCache=function(a){return a?c:b})(a)}function _interopRequireWildcard(a,b){if(!b&&a&&a.__esModule)return a;if(null===a||"object"!=typeof a&&"function"!=typeof a)return{default:a};var c=_getRequireWildcardCache(b);if(c&&c.has(a))return c.get(a);var d={},e=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var f in a)if("default"!=f&&Object.prototype.hasOwnProperty.call(a,f)){var g=e?Object.getOwnPropertyDescriptor(a,f):null;g&&(g.get||g.set)?Object.defineProperty(d,f,g):d[f]=a[f]}return d.default=a,c&&c.set(a,d),d}const TableView=a=>{const b=a.rows;(0,_react.useEffect)(()=>{//console.log('rows data state changed from parent');
d(b)},[b]);const[c,d]=(0,_react.useState)(b),[e,f]=(0,_react.useState)(void 0),g=g=>{const h=[].concat(c).sort((c,a)=>c[g]>a[g]?1:-1);e===g?(d(b),f(void 0)):(d(h),f(g))};return/*#__PURE__*/_react.default.createElement("div",{className:"app-table-view-container"},/*#__PURE__*/_react.default.createElement("table",{className:"app-table-view"},/*#__PURE__*/_react.default.createElement("thead",{style:{fontSize:a.headerFontSize}},/*#__PURE__*/_react.default.createElement("tr",{className:"app-table-tr"},a.columns.map((a,b)=>/*#__PURE__*/_react.default.createElement("th",{className:!1===a.sortable?"no-sortable":"",align:"left",key:b,onClick:()=>g(b)},a.title," ",!1===a.showSortIcon?"":e===b?/*#__PURE__*/_react.default.createElement("i",{className:"icons10-arrow-up"}):/*#__PURE__*/_react.default.createElement("i",{className:"icons10-arrow-down"}))))),/*#__PURE__*/_react.default.createElement("tbody",{style:{fontSize:a.rowFontSize}},c.map((a,b)=>/*#__PURE__*/_react.default.createElement(_Cell.default,{rows:a,key:b+a})))))};TableView.defaultProps={rows:[],columns:[],headerFontSize:18,rowFontSize:16};var _default=TableView;exports.default=_default;