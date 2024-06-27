"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BoolControl = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_hook_form_mui_1 = require("react-hook-form-mui");
const useWhyDidIUpdate_1 = require("../../../hooks/useWhyDidIUpdate");
const useEditControlBase_1 = require("../../../hooks/useEditControlBase");
function BoolControl(props) {
    (0, useWhyDidIUpdate_1.useWhyDidIUpdate)('BoolControl', props);
    const { name, label, control, helperText, readonly, required, validation, invalid, isDisabled } = (0, useEditControlBase_1.useEditControlBase)(props);
    return ((0, jsx_runtime_1.jsx)(react_hook_form_mui_1.CheckboxElement, { color: 'primary', name: name, label: label, control: control, required: required, readOnly: readonly, "aria-readonly": readonly, "aria-invalid": invalid, validation: validation, helperText: helperText, disabled: isDisabled() }));
}
exports.BoolControl = BoolControl;
//# sourceMappingURL=BoolControl.js.map