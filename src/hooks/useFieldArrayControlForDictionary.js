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
exports.useFieldArrayControlForDictionary = void 0;
const react_hook_form_mui_1 = require("react-hook-form-mui");
const useColumns_1 = require("./useColumns");
const useEditColumnMeta_1 = require("./useEditColumnMeta");
const useGetLIComponent_1 = require("./useGetLIComponent");
const react_1 = require("react");
const StringControl_1 = require("../components/table/controls/StringControl");
const SelectControl_1 = require("../components/table/controls/SelectControl");
const useDependencies_1 = require("./useDependencies");
function useFieldArrayControlForDictionary(column, ...keys) {
    const _a = (0, useEditColumnMeta_1.useEditColumnMeta)({ column }, 'objectType', 'required', 'readonly', 'keyType', 'dependencies', 'columnName', ...keys), { columnName: name, required, readonly, objectType, keyType, dependencies } = _a, rest = __rest(_a, ["columnName", "required", "readonly", "objectType", "keyType", "dependencies"]);
    const label = column.columnDef.header;
    const formContext = (0, react_hook_form_mui_1.useFormContext)();
    if (name == null)
        throw new Error('no name');
    const append = (0, react_1.useCallback)(({ key, value }) => {
        const current = formContext.getValues()[name];
        formContext.setValue(name, Object.assign(Object.assign({}, current), { [key]: value }));
    }, [formContext, name]);
    const remove = (0, react_1.useCallback)((key) => {
        const current = formContext.getValues()[name];
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _a = current, _b = key, _ = _a[_b], remain = __rest(_a, [typeof _b === "symbol" ? _b : _b + ""]);
        formContext.setValue(name, remain);
    }, [formContext, name]);
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
    const enumType = keyType === 'string' ? undefined
        : keyType != null ? keyType
            : undefined;
    const KeyControl = keyType === 'string' ? StringControl_1.StringControl
        : keyType != null ? SelectControl_1.SelectControl
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            : ((props) => null);
    // const [KeyControl, enumType]: [React.FunctionComponent<EditFunctionParams<T>>, string | undefined] =
    //     keyType === 'string' ? [StringControl]
    //     : keyType != null ? [SelectControl, keyType]
    //     : [(props: EditFunctionParams<T>) => null];
    const isDisabled = (0, useDependencies_1.useDependencies)(...(dependencies !== null && dependencies !== void 0 ? dependencies : []));
    return Object.assign({ KeyControl,
        keyType,
        enumType,
        cols,
        value,
        append,
        remove,
        name,
        label,
        helperText, control: formContext.control, objectType,
        LiComponent,
        required,
        readonly,
        isDisabled }, rest);
}
exports.useFieldArrayControlForDictionary = useFieldArrayControlForDictionary;
//# sourceMappingURL=useFieldArrayControlForDictionary.js.map