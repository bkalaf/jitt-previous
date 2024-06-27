"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useHasDetailType = exports.useCheckProperty = exports.useCheckPredicate = void 0;
const react_hook_form_mui_1 = require("react-hook-form-mui");
const react_1 = require("react");
function useCheckPredicate(name, predicate) {
    var _a;
    const { watch } = (0, react_hook_form_mui_1.useFormContext)();
    const current = watch(name);
    const result = (0, react_1.useMemo)(() => {
        console.info(`useCheckProperty`, name, current, predicate(current));
        return predicate(current);
    }, [current, name, predicate]);
    (0, react_1.useDebugValue)(`${name}:whenPredicate(${(_a = current === null || current === void 0 ? void 0 : current.toString()) !== null && _a !== void 0 ? _a : ''}) == ${result === null || result === void 0 ? void 0 : result.toString()}`);
    return result;
}
exports.useCheckPredicate = useCheckPredicate;
function useCheckProperty(name, value) {
    var _a;
    const { watch } = (0, react_hook_form_mui_1.useFormContext)();
    const current = watch(name);
    const result = (0, react_1.useMemo)(() => {
        console.info(`useCheckProperty`, name, value, current);
        return (current == null ? true
            : Array.isArray(value) ? value.includes(current)
                : value === current);
    }, [current, name, value]);
    (0, react_1.useDebugValue)(`${name}:whenPredicate(${(_a = current === null || current === void 0 ? void 0 : current.toString()) !== null && _a !== void 0 ? _a : ''}) == ${result === null || result === void 0 ? void 0 : result.toString()}`);
    return result;
}
exports.useCheckProperty = useCheckProperty;
function useHasDetailType(name, item) {
    const { watch } = (0, react_hook_form_mui_1.useFormContext)();
    return (0, react_1.useMemo)(() => {
        const value = watch(name);
        const func = Array.isArray(item) ? (x) => !item.includes(x) : (x) => x !== item;
        return value == null ? true : !func(value);
    }, [item, name, watch]);
}
exports.useHasDetailType = useHasDetailType;
//# sourceMappingURL=useHasDetailType.js.map