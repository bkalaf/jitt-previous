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
exports.StringControl = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_hook_form_mui_1 = require("react-hook-form-mui");
const useWhyDidIUpdate_1 = require("../../../hooks/useWhyDidIUpdate");
const is_1 = require("../../../common/is");
const useEditControlBase_1 = require("../../../hooks/useEditControlBase");
function StringControl(props) {
    (0, useWhyDidIUpdate_1.useWhyDidIUpdate)('StringControl', props);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const _a = (0, useEditControlBase_1.useEditControlBase)(props, 'type', 'step'), { invalid, onChange: _, readonly, type, step, name, isDisabled } = _a, rest = __rest(_a, ["invalid", "onChange", "readonly", "type", "step", "name", "isDisabled"]);
    const inputType = type !== null && type !== void 0 ? type : 'text';
    const formContext = (0, react_hook_form_mui_1.useFormContext)();
    const value = formContext.watch(name);
    return ((0, jsx_runtime_1.jsx)(react_hook_form_mui_1.TextFieldElement, Object.assign({ classes: {
            root: 'w-full'
        }, className: 'flex w-full', "data-novalue": is_1.is.nil(value), name: name, "aria-invalid": invalid, "aria-readonly": readonly, type: inputType, disabled: isDisabled() }, rest, { inputProps: { step } })));
}
exports.StringControl = StringControl;
//# sourceMappingURL=StringControl.js.map