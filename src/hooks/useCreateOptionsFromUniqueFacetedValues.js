"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useCreateOptionsFromUniqueFacetedValues = void 0;
const react_1 = require("react");
const distinct_1 = require("../common/array/distinct");
function useCreateOptionsFromUniqueFacetedValues(column, multiple = false) {
    return (0, react_1.useMemo)(() => {
        console.log(`column.getFacetedUniqueValues`, column.getFacetedUniqueValues());
        const keys = Array.from(column.getFacetedUniqueValues().keys());
        const reduced = multiple ?
            (0, distinct_1.distinctBy)((x, y) => { var _a; return ((_a = x === null || x === void 0 ? void 0 : x.localeCompare(y !== null && y !== void 0 ? y : '')) !== null && _a !== void 0 ? _a : 1) === 0; }, keys.reduce((pv, cv) => [...pv, ...cv], []))
            : keys;
        return reduced.map((x) => ({ key: x, text: x })).sort((x, y) => { var _a, _b, _c; return (_c = (_a = x.text) === null || _a === void 0 ? void 0 : _a.localeCompare((_b = y.text) !== null && _b !== void 0 ? _b : '')) !== null && _c !== void 0 ? _c : 0; });
    }, [column, multiple]);
}
exports.useCreateOptionsFromUniqueFacetedValues = useCreateOptionsFromUniqueFacetedValues;
//# sourceMappingURL=useCreateOptionsFromUniqueFacetedValues.js.map