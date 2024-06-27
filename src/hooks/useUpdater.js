"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useUpdater = void 0;
const react_1 = require("react");
const useEffectiveCollection_1 = require("./useEffectiveCollection");
const useTypes_1 = require("./useTypes");
function useUpdater(objectType) {
    var _a, _b;
    const route = (0, useEffectiveCollection_1.useEffectiveCollection)(objectType);
    const types = (0, useTypes_1.useTypes)();
    const schema = (0, react_1.useMemo)(() => types.find((x) => x.name === route), [route, types]);
    console.log('ctor', schema === null || schema === void 0 ? void 0 : schema.ctor);
    console.info(`useUpdater`, schema);
    const func = (0, react_1.useMemo)(() => { var _a, _b; return (_b = (_a = schema === null || schema === void 0 ? void 0 : schema.ctor) === null || _a === void 0 ? void 0 : _a.update) !== null && _b !== void 0 ? _b : ((obj) => obj); }, [(_a = schema === null || schema === void 0 ? void 0 : schema.ctor) === null || _a === void 0 ? void 0 : _a.update]);
    console.info(`useUpdater`, route, func);
    return [((_b = schema === null || schema === void 0 ? void 0 : schema.ctor) === null || _b === void 0 ? void 0 : _b.update) != null, func];
}
exports.useUpdater = useUpdater;
//# sourceMappingURL=useUpdater.js.map