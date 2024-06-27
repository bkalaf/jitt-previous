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
exports.colString = void 0;
const baseCol_1 = require("./baseCol");
const StringTableCell_1 = require("../../components/table/cells/StringTableCell");
const StringControl_1 = require("../../components/table/controls/StringControl");
function colString(helper) {
    return function (...dependencies) {
        return function (name, $header, formatter, opts) {
            const _a = Object.assign({ readonly: false, required: false }, (opts !== null && opts !== void 0 ? opts : {})), { required, readonly } = _a, rest = __rest(_a, ["required", "readonly"]);
            const $formatter = formatter !== null && formatter !== void 0 ? formatter : ((x) => (x !== null && x !== void 0 ? x : ''));
            // const { maxSize, grow } = opts?.maxLength != null ? { maxSize: calculateSize(opts?.maxLength), grow: false } : { maxSize: calculateSize(250), grow: true };
            // const { minSize } = opts?.minLength != null ? { minSize: calculateSize(opts?.minLength) } : { minSize: calculateSize(5) }
            return (0, baseCol_1.baseCol)(helper, name, StringTableCell_1.StringTableCell, StringControl_1.StringControl, $header, required, readonly, Object.assign(Object.assign({}, rest), { formatter: $formatter }), undefined, ...dependencies);
            // return helper.accessor(name as any, {
            //     ...calculateSizes(header, { maxLength, minLength, ...(opts ?? {}) }),
            //     Cell,
            //     header,
            //     // Header: createStringHeaderCell(),
            //     Edit,
            //     enableEditing: !(opts?.readonly ?? false),
            //     enableClickToCopy: true
            // });
        };
    };
}
exports.colString = colString;
//# sourceMappingURL=colString.js.map