"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useCollectionSchema = void 0;
const react_1 = require("react");
const useEffectiveCollection_1 = require("./useEffectiveCollection");
const useTypes_1 = require("./useTypes");
function useCollectionSchema(objectType) {
    const route = (0, useEffectiveCollection_1.useEffectiveCollection)(objectType);
    const types = (0, useTypes_1.useTypes)();
    console.info(`types`, types, 'effectiveCollection', route);
    const objSchema = (0, react_1.useMemo)(() => types.find((x) => x.name === route), [route, types]);
    if (objSchema == null)
        throw new Error(`no object schema: objectType: ${objectType} route: ${route}`);
    return objSchema;
}
exports.useCollectionSchema = useCollectionSchema;
//# sourceMappingURL=useCollectionSchema.js.map