"use strict";var _react=_interopRequireDefault(require("react"));Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}const ProgressBar=a=>/*#__PURE__*/_react.default.createElement("div",{className:"app-progress-container",title:a.tooltip},/*#__PURE__*/_react.default.createElement("div",{style:a.showIcon?{display:"block"}:{display:"none"}},a.icon),/*#__PURE__*/_react.default.createElement("div",{style:a.showIcon?{marginLeft:"15px"}:{marginLeft:""}},/*#__PURE__*/_react.default.createElement("span",{className:"title"},a.title),/*#__PURE__*/_react.default.createElement("div",{className:a.showIcon?"app-progress withIcon":"app-progress",style:{height:a.height}},/*#__PURE__*/_react.default.createElement("span",{style:{width:a.setProgress+"%",backgroundColor:a.color}})),/*#__PURE__*/_react.default.createElement("span",{className:"subtitle"},a.subtitle)));ProgressBar.defaultProps={showIcon:!1,setProgress:0};var _default=ProgressBar;exports.default=_default;