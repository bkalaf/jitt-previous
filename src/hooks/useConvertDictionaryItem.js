"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useConvertDictionaryItem = void 0;
const react_1 = require("react");
const cnvrt_1 = require("../schema/conversion/cnvrt");
const useTypes_1 = require("./useTypes");
function useConvertDictionaryItem(objectType, append) {
    const types = (0, useTypes_1.useTypes)();
    const convert = (0, react_1.useCallback)((objectType) => (0, cnvrt_1.convert)(types, objectType), [types]);
    const prim = (0, cnvrt_1.isPrimitive)(objectType);
    const convertValue = (0, react_1.useMemo)(() => (prim ? (0, cnvrt_1.cnvrtPrimitives)()[objectType] : convert(objectType)), [convert, objectType, prim]);
    return (0, react_1.useCallback)(({ key, value }) => {
        const interim = {
            key: (0, cnvrt_1.cnvrtPrimitives)()['string'](key),
            value: convertValue(value)
        };
        console.info(`interim`, interim);
        return append(interim);
    }, [append, convertValue]);
}
exports.useConvertDictionaryItem = useConvertDictionaryItem;
//# sourceMappingURL=useConvertDictionaryItem.js.map