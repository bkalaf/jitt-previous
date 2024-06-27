"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.colDollar = void 0;
const baseCol_1 = require("./baseCol");
const FloatingPointTableCell_1 = require("../../components/table/cells/FloatingPointTableCell");
const StringControl_1 = require("../../components/table/controls/StringControl");
function colDollar(helper) {
    return function (...dependencies) {
        return function (name, $header, opts) {
            return (0, baseCol_1.baseCol)(helper, name, FloatingPointTableCell_1.FloatingPointTableCell, StringControl_1.StringControl, $header, opts === null || opts === void 0 ? void 0 : opts.required, opts === null || opts === void 0 ? void 0 : opts.readonly, {
                type: 'number',
                formatter: (value) => [
                    '$',
                    (value == null ? 0
                        : typeof value === 'string' ? parseFloat(value)
                            : value).toFixed(2)
                ].join('')
            }, undefined, ...dependencies);
            // return helper.accessor(name as any, {
            //     ...calculateSizes(header, { minLength: 4, maxLength: 10, ...(opts ?? {}) }),
            //     header,
            //     Cell: createDollarCell<T>() as any,
            //     Edit: createStringControl<T, number>({ type: 'number', readonly: false, ...(opts ?? {}) })
            // }) as MRT_ColumnDef<T, number>;
        };
    };
}
exports.colDollar = colDollar;
//# sourceMappingURL=colDollar.js.map