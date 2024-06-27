"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.colIntMeasure = void 0;
const truncateAuto_1 = require("../../common/number/truncateAuto");
const baseCol_1 = require("./baseCol");
const FloatingPointTableCell_1 = require("../../components/table/cells/FloatingPointTableCell");
const StringControl_1 = require("../../components/table/controls/StringControl");
function colIntMeasure(helper) {
    return function (...dependencies) {
        return function (name, $header, uom, opts) {
            var _a;
            const formatter = (x) => (x == null ? '' : (0, truncateAuto_1.truncateAuto)(x).concat(' ').concat(uom));
            return (0, baseCol_1.baseCol)(helper, name, FloatingPointTableCell_1.FloatingPointTableCell, StringControl_1.StringControl, $header, opts === null || opts === void 0 ? void 0 : opts.required, opts === null || opts === void 0 ? void 0 : opts.readonly, { type: 'number', min: (_a = opts === null || opts === void 0 ? void 0 : opts.min) !== null && _a !== void 0 ? _a : 0, max: opts === null || opts === void 0 ? void 0 : opts.max, formatter, step: 1 }, undefined, ...dependencies);
        };
    };
}
exports.colIntMeasure = colIntMeasure;
//# sourceMappingURL=colIntMeasure.js.map