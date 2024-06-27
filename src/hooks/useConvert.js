"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useConvert = void 0;
const react_1 = require("react");
const cnvrt_1 = require("../schema/conversion/cnvrt");
const useTypes_1 = require("./useTypes");
function useConvert(type, objectType) {
    const types = (0, useTypes_1.useTypes)();
    const convert = (0, react_1.useMemo)(() => (0, cnvrt_1.convert)(types, objectType), [objectType, types]);
    return (0, react_1.useCallback)((values) => {
        console.info(`attempting convert: ${type} ${objectType}`);
        if (type === 'list' || type === 'set') {
            if (objectType == null)
                throw new Error(`no objectType: ${type}`);
            if ((0, cnvrt_1.isPrimitive)(objectType)) {
                return convert(values.value);
            }
            return convert(values.value);
        }
        if (type === 'dictionary') {
            if (objectType == null)
                throw new Error(`no objectType: ${type}`);
            return { key: values.key, value: convert(values.value) };
        }
        if (type === 'object') {
            return convert(values);
        }
        return convert(values);
    }, [convert, objectType, type]);
}
exports.useConvert = useConvert;
//# sourceMappingURL=useConvert.js.map