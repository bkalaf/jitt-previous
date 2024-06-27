"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseMenuItem = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const material_1 = require("@mui/material");
function BaseMenuItem(props) {
    const { label, onClick, disabled } = props;
    return ((0, jsx_runtime_1.jsx)(material_1.MenuItem, { disabled: disabled !== null && disabled !== void 0 ? disabled : false, className: 'border border-white bg-black text-white', onClick: onClick, children: label }));
}
exports.BaseMenuItem = BaseMenuItem;
//# sourceMappingURL=BaseMenuItem.js.map