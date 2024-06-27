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
exports.FreeSoloControl = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_hook_form_mui_1 = require("react-hook-form-mui");
const useWhyDidIUpdate_1 = require("../../../hooks/useWhyDidIUpdate");
const useAutoComplete_1 = require("../../../hooks/useAutoComplete");
const react_1 = require("react");
const material_1 = require("@mui/material");
const useCreateOptionsFromUniqueFacetedValues_1 = require("../../../hooks/useCreateOptionsFromUniqueFacetedValues");
const useEditControlBase_1 = require("../../../hooks/useEditControlBase");
function FreeSoloControl(props) {
    var _a;
    (0, useWhyDidIUpdate_1.useWhyDidIUpdate)('AutocompleteControl', props);
    const _b = (0, useEditControlBase_1.useEditControlBase)(props, 'objectType', 'multiple', 'freeSolo', 'comparator'), { invalid, freeSolo, readonly, comparator, validation, helperText, multiple, onChange, isDisabled } = _b, rest = __rest(_b, ["invalid", "freeSolo", "readonly", "comparator", "validation", "helperText", "multiple", "onChange", "isDisabled"]);
    const options = (0, useCreateOptionsFromUniqueFacetedValues_1.useCreateOptionsFromUniqueFacetedValues)(props.column, multiple);
    const { getOptionLabel, isOptionEqualToValue } = (0, useAutoComplete_1.useAutoComplete)(undefined, (_a = comparator) !== null && _a !== void 0 ? _a : ((x, y) => x.localeCompare(y)));
    const filterOptions = (0, react_1.useMemo)(() => (0, material_1.createFilterOptions)({
        ignoreAccents: true,
        ignoreCase: true,
        limit: 400,
        trim: true,
        matchFrom: 'start'
    }), []);
    return ((0, jsx_runtime_1.jsx)(react_hook_form_mui_1.AutocompleteElement, Object.assign({ options: options !== null && options !== void 0 ? options : [], multiple: multiple, rules: validation, autocompleteProps: {
            freeSolo,
            isOptionEqualToValue,
            getOptionLabel,
            onChange: onChange,
            filterOptions: filterOptions,
            selectOnFocus: true,
            clearOnBlur: true,
            handleHomeEndKeys: true,
            readOnly: readonly,
            disabled: isDisabled()
        }, textFieldProps: {
            helperText: helperText
        }, "aria-readonly": readonly, "aria-invalid": invalid }, rest)));
}
exports.FreeSoloControl = FreeSoloControl;
//# sourceMappingURL=FreeSoloControl.js.map