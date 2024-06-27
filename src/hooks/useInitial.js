"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useInitial = void 0;
const react_1 = require("react");
const useTypes_1 = require("./useTypes");
const cnvrt_1 = require("../schema/conversion/cnvrt");
const initialValue_1 = require("../initialValue");
// const v: MRT_TableOptions<any>[''];
function useInitial(objectType) {
    const types = (0, useTypes_1.useTypes)();
    return (0, react_1.useMemo)(() => {
        if ((0, cnvrt_1.isPrimitive)(objectType))
            return initialValue_1.initialValue[objectType];
        const schema = types.find((x) => x.name === objectType);
        if (schema == null)
            throw new Error(`schema not found for ${objectType}`);
        return schema.ctor.init;
    }, [objectType, types]);
}
exports.useInitial = useInitial;
//# sourceMappingURL=useInitial.js.map