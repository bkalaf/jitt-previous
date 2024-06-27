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
exports.useFieldArrayControl = void 0;
const react_hook_form_mui_1 = require("react-hook-form-mui");
const useColumns_1 = require("./useColumns");
const useEditColumnMeta_1 = require("./useEditColumnMeta");
const useGetLIComponent_1 = require("./useGetLIComponent");
const useDependencies_1 = require("./useDependencies");
function useFieldArrayControl(column, ...keys) {
    const _a = (0, useEditColumnMeta_1.useEditColumnMeta)({ column }, 'objectType', 'required', 'readonly', 'keyType', 'dependencies', 'columnName', ...keys), { columnName: name, required, readonly, objectType, keyType, dependencies } = _a, rest = __rest(_a, ["columnName", "required", "readonly", "objectType", "keyType", "dependencies"]);
    const label = column.columnDef.header;
    const formContext = (0, react_hook_form_mui_1.useFormContext)();
    if (name == null)
        throw new Error('no name');
    const { fields, append, remove } = (0, react_hook_form_mui_1.useFieldArray)({
        name: name,
        control: formContext.control
    });
    const { error } = formContext.getFieldState(name);
    const { type, message: helperText } = error !== null && error !== void 0 ? error : {};
    if (type != null)
        console.error(`${type}: ${helperText}}`);
    const value = formContext.watch(name);
    if (objectType == null)
        throw new Error('no objectType');
    const cols = (0, useColumns_1.useDirectColumns)(objectType);
    const LiComponent = (0, useGetLIComponent_1.useGetLIComponent)(objectType);
    console.info(`formContext`, formContext.getValues());
    const isDisabled = (0, useDependencies_1.useDependencies)(...(dependencies !== null && dependencies !== void 0 ? dependencies : []));
    return Object.assign({ keyType,
        cols,
        value,
        fields,
        append,
        remove,
        name,
        label,
        helperText, control: formContext.control, objectType,
        LiComponent,
        required,
        isDisabled,
        readonly }, rest);
}
exports.useFieldArrayControl = useFieldArrayControl;
//# sourceMappingURL=useFieldArrayControl.js.map