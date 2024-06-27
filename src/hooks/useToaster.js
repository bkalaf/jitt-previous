"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useToaster = void 0;
const useEnqueueSnackbar_1 = require("./useEnqueueSnackbar");
function useToaster(func) {
    const success = (0, useEnqueueSnackbar_1.useEnqueueSnackbar)('success');
    const error = (0, useEnqueueSnackbar_1.useEnqueueSnackbar)('error');
    const warning = (0, useEnqueueSnackbar_1.useEnqueueSnackbar)('warning');
    const info = (0, useEnqueueSnackbar_1.useEnqueueSnackbar)('info');
    const msg = (0, useEnqueueSnackbar_1.useEnqueueSnackbar)('default');
    return {
        success: success(func),
        error: error(func),
        warning: warning(func),
        info: info(func),
        msg: msg(func)
    };
}
exports.useToaster = useToaster;
//# sourceMappingURL=useToaster.js.map