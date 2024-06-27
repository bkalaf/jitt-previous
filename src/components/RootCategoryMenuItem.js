"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RootCategoryMenuItem = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const material_1 = require("@mui/material");
const useAnchorEl_1 = require("../hooks/useAnchorEl");
const react_1 = require("react");
const origins_1 = require("../util/origins");
function RootCategoryMenuItem({ children, direction, header }) {
    const [anchorEl, open, onClick, onClose] = (0, useAnchorEl_1.useAnchorEl)();
    const anchorOrigin = (0, react_1.useMemo)(() => origins_1.origins[direction], [direction]);
    const ref = (0, react_1.useRef)();
    (0, react_1.useEffect)(() => {
        const listener = (ev) => {
            const target = ev.target;
            if (open && target.dataset.inMenu !== 'true')
                onClose();
        };
        document.addEventListener('click', listener);
        return () => document.removeEventListener('click', listener);
    }, [onClose, open]);
    return ((0, jsx_runtime_1.jsxs)(material_1.ListItemButton, { onClick: onClick, className: 'border border-white bg-black text-white', ref: ref, "data-in-menu": true, children: [(0, jsx_runtime_1.jsx)(material_1.ListItemText, { primary: (0, jsx_runtime_1.jsx)("span", { "data-in-menu": true, children: header }), "data-in-menu": true }), (0, jsx_runtime_1.jsx)(material_1.Popover, { onClose: onClose, anchorEl: anchorEl, open: open, disableRestoreFocus: true, anchorOrigin: anchorOrigin, transformOrigin: {
                    vertical: 'top',
                    horizontal: 'left'
                }, children: children })] }));
}
exports.RootCategoryMenuItem = RootCategoryMenuItem;
//# sourceMappingURL=RootCategoryMenuItem.js.map