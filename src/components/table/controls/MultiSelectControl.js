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
exports.MultiSelectControl = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_hook_form_mui_1 = require("react-hook-form-mui");
const react_1 = require("react");
const material_1 = require("@mui/material");
const useWhyDidIUpdate_1 = require("../../../hooks/useWhyDidIUpdate");
const useAutoComplete_1 = require("../../../hooks/useAutoComplete");
const useEditControlBase_1 = require("../../../hooks/useEditControlBase");
function MultiSelectControl(props) {
    (0, useWhyDidIUpdate_1.useWhyDidIUpdate)('MultiSelectControl', props);
    const _a = (0, useEditControlBase_1.useEditControlBase)(props, 'enumInfo', 'multiple'), { invalid, multiple, helperText, onChange, validation, readonly, enumInfo, isDisabled } = _a, rest = __rest(_a, ["invalid", "multiple", "helperText", "onChange", "validation", "readonly", "enumInfo", "isDisabled"]);
    if (enumInfo == null)
        throw new Error('no enuminfo in MultiSelectControl');
    const filterOptions = (0, react_1.useMemo)(() => (0, material_1.createFilterOptions)({
        ignoreAccents: true,
        ignoreCase: true,
        limit: 400,
        trim: true,
        matchFrom: 'start'
    }), []);
    const $onChange = (0, react_1.useCallback)((ev, newValue) => {
        console.log('onchange newvalue', newValue);
        onChange(undefined, Array.isArray(newValue) ? newValue.map((x) => x.key) : newValue.key);
    }, [onChange]);
    const { getOptionLabel, isOptionEqualToValue } = (0, useAutoComplete_1.useAutoComplete)('text', (l, r) => { var _a; return ((l === null || l === void 0 ? void 0 : l.key) != null && r != null ? l.key.localeCompare(r) : ((_a = l === null || l === void 0 ? void 0 : l.key) !== null && _a !== void 0 ? _a : '').localeCompare(r !== null && r !== void 0 ? r : '')); });
    return ((0, jsx_runtime_1.jsx)(react_hook_form_mui_1.AutocompleteElement, Object.assign({ options: enumInfo.asArray, multiple: multiple, rules: validation, showCheckbox: true, autocompleteProps: {
            isOptionEqualToValue,
            getOptionLabel,
            filterOptions: filterOptions,
            onChange: $onChange,
            selectOnFocus: true,
            clearOnBlur: true,
            handleHomeEndKeys: true,
            readOnly: readonly,
            disabled: isDisabled()
        }, textFieldProps: {
            helperText: helperText
        }, "aria-readonly": readonly, "aria-invalid": invalid }, rest)));
}
exports.MultiSelectControl = MultiSelectControl;
//# sourceMappingURL=MultiSelectControl.js.map