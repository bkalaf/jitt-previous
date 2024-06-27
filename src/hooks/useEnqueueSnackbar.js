"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useEnqueueSnackbar = void 0;
const material_1 = require("@mui/material");
const notistack_1 = require("notistack");
const react_1 = require("react");
function useEnqueueSnackbar(variant) {
    const { enqueueSnackbar } = (0, notistack_1.useSnackbar)();
    return (0, react_1.useCallback)((func) => {
        return (...args) => {
            const msg = func(...args);
            return enqueueSnackbar(msg, { preventDuplicate: true, variant, TransitionComponent: material_1.Slide });
        };
    }, [enqueueSnackbar, variant]);
}
exports.useEnqueueSnackbar = useEnqueueSnackbar;
//# sourceMappingURL=useEnqueueSnackbar.js.map