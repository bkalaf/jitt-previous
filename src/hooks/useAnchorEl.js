"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useAnchorEl = void 0;
const react_1 = require("react");
function useAnchorEl() {
    const [anchorEl, setAnchorEl] = (0, react_1.useState)(null);
    const open = (0, react_1.useMemo)(() => Boolean(anchorEl), [anchorEl]);
    const onClick = (0, react_1.useCallback)((ev) => {
        setAnchorEl(ev.currentTarget);
    }, []);
    const onClose = (0, react_1.useCallback)(() => setAnchorEl(null), []);
    return [anchorEl, open, onClick, onClose];
}
exports.useAnchorEl = useAnchorEl;
//# sourceMappingURL=useAnchorEl.js.map