"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.colInt = void 0;
const baseCol_1 = require("./baseCol");
const StringTableCell_1 = require("../../components/table/cells/StringTableCell");
const StringControl_1 = require("../../components/table/controls/StringControl");
function colInt(helper) {
    return function (...dependencies) {
        return function (name, $header, opts) {
            return (0, baseCol_1.baseCol)(helper, name, StringTableCell_1.StringTableCell, StringControl_1.StringControl, $header, opts === null || opts === void 0 ? void 0 : opts.required, opts === null || opts === void 0 ? void 0 : opts.readonly, {
                type: 'number',
                step: 1,
                min: opts === null || opts === void 0 ? void 0 : opts.min,
                max: opts === null || opts === void 0 ? void 0 : opts.max,
                formatter: (value) => { var _a; return (_a = value === null || value === void 0 ? void 0 : value.toFixed(0)) !== null && _a !== void 0 ? _a : ''; }
            }, undefined, ...dependencies);
        };
    };
}
exports.colInt = colInt;
//# sourceMappingURL=colInt.js.map