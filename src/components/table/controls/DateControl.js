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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DateControl = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const react_hook_form_mui_1 = require("react-hook-form-mui");
const useWhyDidIUpdate_1 = require("../../../hooks/useWhyDidIUpdate");
const dayjs_1 = __importDefault(require("dayjs"));
const useEditControlBase_1 = require("../../../hooks/useEditControlBase");
function DateControl(props) {
    (0, useWhyDidIUpdate_1.useWhyDidIUpdate)('DateControl', props);
    const _a = (0, useEditControlBase_1.useEditControlBase)(props, 'dateType'), { onChange: $onChange, dateType, readonly, invalid, isDisabled } = _a, rest = __rest(_a, ["onChange", "dateType", "readonly", "invalid", "isDisabled"]);
    const formContext = (0, react_hook_form_mui_1.useFormContext)();
    const value = (0, react_1.useMemo)(() => (0, dayjs_1.default)(formContext.watch(rest.name)), [formContext, rest.name]);
    const onChange = (0, react_1.useCallback)((newValue, context) => {
        console.log(`newValue`, newValue);
        console.log('context', context);
        $onChange(undefined, dayjs_1.default.isDayjs(newValue) ? newValue : (0, dayjs_1.default)(newValue));
    }, [$onChange]);
    const disablePast = dateType === 'past';
    const disableFuture = dateType === 'future';
    console.log('DatePickerElement', value, formContext.watch(rest.name));
    return (0, jsx_runtime_1.jsx)(react_hook_form_mui_1.DatePickerElement, Object.assign({ disableFuture: disableFuture, disablePast: disablePast, onChange: onChange, formatDensity: 'dense', readOnly: readonly, "aria-readonly": readonly, "aria-invalid": invalid, disabled: isDisabled() }, rest));
}
exports.DateControl = DateControl;
//# sourceMappingURL=DateControl.js.map