"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useConvertListItem = void 0;
const react_1 = require("react");
const cnvrt_1 = require("../schema/conversion/cnvrt");
const useTypes_1 = require("./useTypes");
function useConvertListItem(objectType) {
    const types = (0, useTypes_1.useTypes)();
    const convert = (0, react_1.useCallback)((objectType) => (0, cnvrt_1.convert)(types, objectType), [types]);
    const prim = (0, cnvrt_1.isPrimitive)(objectType);
    const convertValue = (0, react_1.useMemo)(() => (prim ? ({ value }) => (0, cnvrt_1.cnvrtPrimitives)()[objectType](value) : convert(objectType)), [convert, objectType, prim]);
    return convertValue;
}
exports.useConvertListItem = useConvertListItem;
//# sourceMappingURL=useConvertListItem.js.map