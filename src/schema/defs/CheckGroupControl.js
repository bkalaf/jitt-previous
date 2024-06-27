"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CheckGroupControl = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const useWhyDidIUpdate_1 = require("../../hooks/useWhyDidIUpdate");
const react_hook_form_mui_1 = require("react-hook-form-mui");
const react_1 = require("react");
const camelToProper_1 = require("../../common/text/camelToProper");
const useEditControlBase_1 = require("../../hooks/useEditControlBase");
function CheckGroupControl(props) {
    (0, useWhyDidIUpdate_1.useWhyDidIUpdate)('CheckGroupControl', props);
    const { name, label, control, onChange, required, validation, helperText, flags } = (0, useEditControlBase_1.useEditControlBase)(props, 'flags');
    const options = (0, react_1.useMemo)(() => (flags !== null && flags !== void 0 ? flags : []).map((x) => ({ id: x, label: (0, camelToProper_1.camelToProper)(x) })), [flags]);
    const $onChange = (0, react_1.useCallback)((newValue) => {
        onChange(undefined, newValue);
    }, [onChange]);
    return (0, jsx_runtime_1.jsx)(react_hook_form_mui_1.CheckboxButtonGroup, { name: name, control: control, checkboxColor: 'default', helperText: helperText, row: true, onChange: $onChange, options: options, rules: validation, label: label, required: required });
}
exports.CheckGroupControl = CheckGroupControl;
//# sourceMappingURL=CheckGroupControl.js.map