"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useFailureNotification = void 0;
const react_1 = require("react");
const notistack_1 = require("notistack");
const material_1 = require("@mui/material");
function useFailureNotification(messageGenerator) {
    const { enqueueSnackbar } = (0, notistack_1.useSnackbar)();
    return (0, react_1.useCallback)((errors) => {
        enqueueSnackbar(messageGenerator(errors), { preventDuplicate: true, variant: 'error', TransitionComponent: material_1.Slide });
    }, [enqueueSnackbar, messageGenerator]);
}
exports.useFailureNotification = useFailureNotification;
//# sourceMappingURL=useFailureNotification.js.map