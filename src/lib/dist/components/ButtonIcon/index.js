"use strict";var _react=_interopRequireDefault(require("react"));Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}const ButtonIcon=a=>/*#__PURE__*/_react.default.createElement("button",{className:"app-button-icon",disabled:a.disabled,onClick:a.onClick,title:a.tooltip,style:{width:a.width,height:a.height,fontSize:a.iconSize}},a.icon);ButtonIcon.defaultProps={disabled:!1};var _default=ButtonIcon;exports.default=_default;