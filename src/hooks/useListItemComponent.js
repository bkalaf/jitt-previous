"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useListItemComponent = void 0;
const useCollectionSchema_1 = require("./useCollectionSchema");
const react_1 = require("react");
function useListItemComponent(objectType) {
    var _a;
    const ctor = (0, useCollectionSchema_1.useCollectionSchema)(objectType);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const LIComponent = (0, react_1.useMemo)(() => ('liComponent' in ctor.ctor ? ctor.ctor.liComponent : ((_x) => () => null)), [ctor.ctor]);
    if (((_a = ctor.ctor) === null || _a === void 0 ? void 0 : _a.liComponent) == null)
        throw new Error(`could not find list item component for : ${objectType}`);
    return LIComponent;
}
exports.useListItemComponent = useListItemComponent;
//# sourceMappingURL=useListItemComponent.js.map