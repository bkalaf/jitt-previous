"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useEffectiveCollection = void 0;
const react_1 = require("react");
const useCollectionRoute_1 = require("./useCollectionRoute");
function useEffectiveCollection(objectType) {
    const collection = (0, useCollectionRoute_1.useCollectionName)();
    const effectiveCollection = (0, react_1.useMemo)(() => collection !== null && collection !== void 0 ? collection : objectType, [collection, objectType]);
    if (effectiveCollection == null)
        throw new Error('no effective collection');
    return effectiveCollection;
}
exports.useEffectiveCollection = useEffectiveCollection;
//# sourceMappingURL=useEffectiveCollection.js.map