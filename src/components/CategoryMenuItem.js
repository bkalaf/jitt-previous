"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryMenuItem = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const material_1 = require("@mui/material");
const useAnchorEl_1 = require("../hooks/useAnchorEl");
const react_1 = require("react");
const origins_1 = require("../util/origins");
function CategoryMenuItem({ Component, children, direction, label }) {
    const [anchorEl, open, onClick, onClose] = (0, useAnchorEl_1.useAnchorEl)();
    const anchorOrigin = (0, react_1.useMemo)(() => origins_1.origins[direction], [direction]);
    return ((0, jsx_runtime_1.jsxs)(Component, { "data-in-menu": true, onClick: onClick, className: 'border border-white bg-black text-white', children: [label, (0, jsx_runtime_1.jsx)(material_1.Popover, { onClose: onClose, anchorEl: anchorEl, open: open, disableRestoreFocus: true, anchorOrigin: anchorOrigin, transformOrigin: {
                    vertical: 'top',
                    horizontal: 'left'
                }, children: children })] }));
}
exports.CategoryMenuItem = CategoryMenuItem;
//# sourceMappingURL=CategoryMenuItem.js.map