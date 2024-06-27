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
exports.$className = void 0;
const partitionBy_1 = require("../common/array/partitionBy");
const distinct_1 = require("../common/array/distinct");
const is_1 = require("../common/is");
function $className(props, flags, ...classes) {
    var _a;
    const { className } = props, rest = __rest(props, ["className"]);
    const [trues, falses] = (0, partitionBy_1.partitionBy)((x) => x[1], Object.entries(flags));
    const className1 = is_1.is.nil(className) ? [] : (_a = className === null || className === void 0 ? void 0 : className.split(' ')) !== null && _a !== void 0 ? _a : [];
    const className2 = classes
        .filter(is_1.is.not.nil)
        .map((x) => x.split(' '))
        .reduce((pv, cv) => [...pv, ...cv], []);
    const uniques = (0, distinct_1.distinct)([...className2, ...className1, ...trues.map((x) => x[0])]);
    const cn = uniques.filter((x) => !falses.map((x) => x[0]).includes(x)).join(' ');
    return Object.assign(Object.assign({}, rest), { className: cn.length > 0 ? cn : undefined });
}
exports.$className = $className;
//# sourceMappingURL=$className.js.map