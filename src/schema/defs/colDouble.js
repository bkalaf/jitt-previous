"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.colDouble = void 0;
const baseCol_1 = require("./baseCol");
const FloatingPointTableCell_1 = require("../../components/table/cells/FloatingPointTableCell");
const StringControl_1 = require("../../components/table/controls/StringControl");
function colDouble(helper) {
    return function (...dependencies) {
        return function (name, $header, opts) {
            return (0, baseCol_1.baseCol)(helper, name, FloatingPointTableCell_1.FloatingPointTableCell, StringControl_1.StringControl, $header, opts === null || opts === void 0 ? void 0 : opts.required, opts === null || opts === void 0 ? void 0 : opts.readonly, {
                formatter: (x) => { var _a; return (_a = x === null || x === void 0 ? void 0 : x.toString()) !== null && _a !== void 0 ? _a : ''; },
                type: 'number',
                min: opts === null || opts === void 0 ? void 0 : opts.min,
                max: opts === null || opts === void 0 ? void 0 : opts.max
            }, undefined, ...dependencies);
            // return helper.accessor(name as any, {
            //     ...calculateSizes(header, { maxLength: 10, ...(opts ?? {}) }),
            //     header,
            //     Cell: createDoubleCell<T>((x) => x?.toString() ?? '') as any,
            //     Edit: createStringControl<T, number>({ type: 'number', readonly: false, ...(opts ?? {}) })
            //     // ...calculateBodySize({ maxLength: 10, ...(opts ?? {}) })
            // }) as any as MRT_ColumnDef<T>;
        };
    };
}
exports.colDouble = colDouble;
//# sourceMappingURL=colDouble.js.map