"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
require("./Modal.css");
var Modal = function Modal(_ref) {
  var visible = _ref.visible,
    onClose = _ref.onClose;
  if (visible === true) {
    return /*#__PURE__*/_react.default.createElement("div", {
      className: "modal"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "modal-content"
    }, /*#__PURE__*/_react.default.createElement("span", {
      className: "modal-close",
      onClick: onClose
    }, "\xD7"), /*#__PURE__*/_react.default.createElement("h2", null, "Employee Created")));
  } else {
    return null;
  }
};
var _default = Modal;
exports.default = _default;