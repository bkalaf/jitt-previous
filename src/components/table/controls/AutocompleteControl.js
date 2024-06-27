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
exports.AutocompleteControl = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_hook_form_mui_1 = require("react-hook-form-mui");
const react_query_1 = require("@tanstack/react-query");
const useWhyDidIUpdate_1 = require("../../../hooks/useWhyDidIUpdate");
const useLocalRealm_1 = require("../../../hooks/useLocalRealm");
const useAutoComplete_1 = require("../../../hooks/useAutoComplete");
const react_1 = require("react");
const material_1 = require("@mui/material");
const useEditControlBase_1 = require("../../../hooks/useEditControlBase");
const useGetLabelProperty_1 = require("../../../hooks/useGetLabelProperty");
function AutocompleteControl(props) {
    var _a;
    (0, useWhyDidIUpdate_1.useWhyDidIUpdate)('AutocompleteControl', props);
    const _b = (0, useEditControlBase_1.useEditControlBase)(props, 'objectType', 'multiple', 'freeSolo'), { invalid, freeSolo, readonly, validation, helperText, objectType, multiple, onChange, isDisabled } = _b, rest = __rest(_b, ["invalid", "freeSolo", "readonly", "validation", "helperText", "objectType", "multiple", "onChange", "isDisabled"]);
    if (objectType == null)
        throw new Error('no objectType for lookup');
    const labelProperty = (0, useGetLabelProperty_1.useGetLabelProperty)(objectType);
    if (labelProperty == null)
        throw new Error(`no labelProperty for ${objectType} for lookup`);
    const db = (0, useLocalRealm_1.useLocalRealm)();
    const { data, isLoading } = (0, react_query_1.useQuery)({
        queryKey: [objectType, labelProperty],
        queryFn: () => {
            if (db == null)
                throw new Error('no db');
            return Promise.resolve(db.objects(objectType).sorted(labelProperty));
        }
    });
    const { isOptionEqualToValue } = (0, useAutoComplete_1.useAutoComplete)(labelProperty, ((x, y) => {
        const idA = typeof x._id === 'string' ? x : x._id.toHexString();
        const idB = typeof y._id === 'string' ? y : y._id.toHexString();
        return idA === idB;
    }));
    // const filterOptions = useCallback((options: any[], { inputValue }: { inputValue: string }) => {
    //     return matchSorter(options, inputValue, { keys: [labelProperty]});
    // }, [])
    const filterOptions = (0, react_1.useMemo)(() => (0, material_1.createFilterOptions)({
        ignoreAccents: true,
        ignoreCase: true,
        limit: 400,
        trim: true,
        matchFrom: 'start',
        stringify: (option) => option[labelProperty]
    }), [labelProperty]);
    return ((0, jsx_runtime_1.jsx)(react_hook_form_mui_1.AutocompleteElement, Object.assign({ options: (_a = Array.from(data !== null && data !== void 0 ? data : [])) !== null && _a !== void 0 ? _a : [], multiple: multiple, loading: isLoading, rules: validation, autocompleteProps: {
            freeSolo,
            autoHighlight: true,
            isOptionEqualToValue,
            getOptionLabel: (option) => option[labelProperty],
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
exports.AutocompleteControl = AutocompleteControl;
//# sourceMappingURL=AutocompleteControl.js.map