"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useAutoComplete = exports.toIsOptionEqualToValue = exports.toGetOptionLabel = void 0;
const react_1 = require("react");
function toGetOptionLabel(labelProperty) {
    return function (option) {
        var _a;
        return typeof option === 'string' ? option : (_a = option[labelProperty]) !== null && _a !== void 0 ? _a : 'n/a';
    };
}
exports.toGetOptionLabel = toGetOptionLabel;
function toIsOptionEqualToValue(comparator) {
    return function (option, value) {
        const compared = comparator(option, value) === 0;
        return compared;
    };
}
exports.toIsOptionEqualToValue = toIsOptionEqualToValue;
function useAutoComplete(labelProperty, comparator) {
    return (0, react_1.useMemo)(() => ({
        getOptionLabel: labelProperty ? toGetOptionLabel(labelProperty) : (option) => { var _a; return (_a = option === null || option === void 0 ? void 0 : option.toString()) !== null && _a !== void 0 ? _a : ''; },
        isOptionEqualToValue: toIsOptionEqualToValue(comparator !== null && comparator !== void 0 ? comparator : ((l, r) => l < r ? -1
            : l > r ? 1
                : 0))
    }), [comparator, labelProperty]);
}
exports.useAutoComplete = useAutoComplete;
//# sourceMappingURL=useAutoComplete.js.map