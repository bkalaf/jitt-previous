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
exports.Item = exports.Grid = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const _className_1 = require("../util/$className");
function Grid(props) {
    const { columns, children, gap } = props, rest = __rest(props, ["columns", "children", "gap"]);
    const spread = (0, _className_1.$className)(rest, {
        'grid grid-cols-1': columns === 1,
        'grid grid-cols-2': columns === 2,
        'grid grid-cols-3': columns === 3,
        'grid grid-cols-4': columns === 4,
        'grid grid-cols-5': columns === 5,
        'grid grid-cols-6': columns === 6,
        'grid grid-cols-7': columns === 7,
        'grid grid-cols-8': columns === 8,
        'grid grid-cols-9': columns === 9,
        'grid grid-cols-10': columns === 10,
        'grid grid-cols-11': columns === 11,
        'grid grid-cols-12': columns === 12,
        'gap-1': gap === 1,
        'gap-2': gap === 2,
        'gap-3': gap === 3,
        'gap-4': gap === 4,
        'gap-5': gap === 5
    }, '');
    return (0, jsx_runtime_1.jsx)("div", Object.assign({}, spread, { children: children }));
}
exports.Grid = Grid;
function Item(props) {
    return (0, jsx_runtime_1.jsx)("div", { className: props.className, children: props.children });
}
exports.Item = Item;
//# sourceMappingURL=Grid.js.map