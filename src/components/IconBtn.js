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
exports.IconBtn = exports.merge = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const material_1 = require("@mui/material");
const react_fontawesome_1 = require("@fortawesome/react-fontawesome");
const _className_1 = require("../util/$className");
const useWhyDidIUpdate_1 = require("../hooks/useWhyDidIUpdate");
const expandButtonHW_1 = require("./Views/expandButtonHW");
function merge(rest, propName, value) {
    if (propName in rest) {
        const _a = rest, _b = propName, current = _a[_b], remaining = __rest(_a, [typeof _b === "symbol" ? _b : _b + ""]);
        const merged = Object.assign(Object.assign({}, current), value);
        return Object.assign(Object.assign({}, remaining), { [propName]: merged });
    }
    return rest;
}
exports.merge = merge;
function IconBtn(props) {
    var _a, _b, _c, _d;
    (0, useWhyDidIUpdate_1.useWhyDidIUpdate)('IconBtn', props);
    const _e = Object.assign({ innerDim: expandButtonHW_1.iconSVGDim, outerDim: expandButtonHW_1.iconButtonDim }, props), { icon, tooltip, disabled, onClick, className, color, text, iconSize, outerDim, innerDim, classes } = _e, remain = __rest(_e, ["icon", "tooltip", "disabled", "onClick", "className", "color", "text", "iconSize", "outerDim", "innerDim", "classes"]);
    const { className: faClassName } = (0, _className_1.$className)({ className: 'block object-cover' }, {}, (_a = classes === null || classes === void 0 ? void 0 : classes.fontAwesomeIcon) !== null && _a !== void 0 ? _a : '');
    const _f = (0, _className_1.$className)(Object.assign({ className }, remain), {
        'text-inherit': (_b = className === null || className === void 0 ? void 0 : className.includes('text-')) !== null && _b !== void 0 ? _b : false,
        'text-black': (_c = className === null || className === void 0 ? void 0 : className.includes('text-')) !== null && _c !== void 0 ? _c : true
    }, 'hover:bg-fuchsia-500 p-0 flex text-center mx-auto bg-slate-500 rounded-lg', (_d = classes === null || classes === void 0 ? void 0 : classes.iconButton) !== null && _d !== void 0 ? _d : ''), { className: cn } = _f, rest = __rest(_f, ["className"]);
    return ((0, jsx_runtime_1.jsx)(material_1.Tooltip, { title: tooltip, placement: 'bottom', TransitionComponent: material_1.Zoom, children: (0, jsx_runtime_1.jsxs)(material_1.IconButton, Object.assign({ color: color, size: iconSize === 'sm' ? 'small'
                : iconSize === 'lg' ?
                    'large'
                    : 'medium', disabled: disabled !== null && disabled !== void 0 ? disabled : false, onClick: onClick, className: cn, sx: {
                height: outerDim,
                width: outerDim
            } }, rest, { children: [(0, jsx_runtime_1.jsx)(react_fontawesome_1.FontAwesomeIcon, { icon: icon, size: iconSize, className: faClassName, style: {
                        height: innerDim,
                        width: innerDim
                    } }), text == null ? null : (0, jsx_runtime_1.jsx)("span", { className: 'block object-cover text-base font-bold', children: text })] })) }));
}
exports.IconBtn = IconBtn;
//# sourceMappingURL=IconBtn.js.map