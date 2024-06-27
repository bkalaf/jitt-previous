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
exports.TextAreaControl = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_hook_form_mui_1 = require("react-hook-form-mui");
const useWhyDidIUpdate_1 = require("../../../hooks/useWhyDidIUpdate");
const useEditControlBase_1 = require("../../../hooks/useEditControlBase");
function TextAreaControl(props) {
    (0, useWhyDidIUpdate_1.useWhyDidIUpdate)('TextAreaControl', props);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const _a = (0, useEditControlBase_1.useEditControlBase)(props, 'type', 'step'), { invalid, onChange: _, readonly, type, step, isDisabled } = _a, rest = __rest(_a, ["invalid", "onChange", "readonly", "type", "step", "isDisabled"]);
    return (0, jsx_runtime_1.jsx)(react_hook_form_mui_1.TextareaAutosizeElement, Object.assign({ "aria-invalid": invalid, resizeStyle: 'vertical', rows: 10, disabled: isDisabled() }, rest, { className: 'w-full' }));
}
exports.TextAreaControl = TextAreaControl;
//# sourceMappingURL=TextAreaControl.js.map