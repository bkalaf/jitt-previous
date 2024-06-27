"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useSuccessNotification = void 0;
const react_1 = require("react");
const useInvalidateCollection_1 = require("./useInvalidateCollection");
const useToaster_1 = require("./useToaster");
function useSuccessNotification(messageGenerator, objectType) {
    const { success } = (0, useToaster_1.useToaster)(messageGenerator);
    const invalidator = (0, useInvalidateCollection_1.useInvalidateCollection)(objectType);
    return (0, react_1.useCallback)((result) => {
        success(result);
        invalidator();
    }, [invalidator, success]);
}
exports.useSuccessNotification = useSuccessNotification;
//# sourceMappingURL=useSuccessNotification.js.map