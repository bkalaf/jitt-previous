"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useEditControlBase = void 0;
const react_1 = require("react");
const react_hook_form_mui_1 = require("react-hook-form-mui");
const createRules_1 = require("../components/controls/createRules");
const useEditColumnMeta_1 = require("./useEditColumnMeta");
const useDependencies_1 = require("./useDependencies");
function useEditControlBase(props, ...keys) {
    var _a, _b;
    const _c = (0, useEditColumnMeta_1.useEditColumnMeta)(props, 'columnName', 'min', 'minLength', 'max', 'maxLength', 'onChange', 'dependencies', ...keys), { columnName, validate, min, max, maxLength, minLength, pattern, required, readonly, onChange: $$change, dependencies } = _c, rest = __rest(_c, ["columnName", "validate", "min", "max", "maxLength", "minLength", "pattern", "required", "readonly", "onChange", "dependencies"]);
    const validation = (0, react_1.useMemo)(() => (0, createRules_1.createRules)({ required, min, max, minLength, maxLength, pattern, validate }), [max, maxLength, min, minLength, pattern, required, validate]);
    const { accessorKey, id, header: label } = props.column.columnDef;
    const name = (_b = (_a = columnName !== null && columnName !== void 0 ? columnName : accessorKey) !== null && _a !== void 0 ? _a : id) !== null && _b !== void 0 ? _b : 'n/a';
    const formContext = (0, react_hook_form_mui_1.useFormContext)();
    const { control, getFieldState, setValue, getValues } = formContext;
    const { invalid, error } = getFieldState(name);
    const { type, message: helperText } = error !== null && error !== void 0 ? error : {};
    if (type != null)
        console.error(`${type}: ${helperText}}`);
    const onChange = (0, react_1.useCallback)((ev, newValue) => {
        var _a;
        ev === null || ev === void 0 ? void 0 : ev.preventDefault();
        ev === null || ev === void 0 ? void 0 : ev.stopPropagation();
        if ($$change) {
            $$change(setValue, getValues()[name], newValue);
        }
        setValue(name, newValue !== null && newValue !== void 0 ? newValue : (_a = ev === null || ev === void 0 ? void 0 : ev.target) === null || _a === void 0 ? void 0 : _a.value);
    }, [$$change, getValues, name, setValue]);
    const isDisabled = (0, useDependencies_1.useDependencies)(...(dependencies !== null && dependencies !== void 0 ? dependencies : []));
    return Object.assign({ name,
        readonly,
        required,
        label,
        validation,
        onChange,
        invalid,
        control,
        helperText,
        isDisabled }, rest);
}
exports.useEditControlBase = useEditControlBase;
//# sourceMappingURL=useEditControlBase.js.map