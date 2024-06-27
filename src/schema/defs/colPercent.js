"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.colPercent = void 0;
const truncateAuto_1 = require("../../common/number/truncateAuto");
const baseCol_1 = require("./baseCol");
const FloatingPointTableCell_1 = require("../../components/table/cells/FloatingPointTableCell");
const StringControl_1 = require("../../components/table/controls/StringControl");
function colPercent(helper) {
    return function (...dependencies) {
        return function (name, $header, opts) {
            const formatter = (x) => (x == null ? '' : (0, truncateAuto_1.truncateAuto)(x * 100).concat('%'));
            return (0, baseCol_1.baseCol)(helper, name, FloatingPointTableCell_1.FloatingPointTableCell, StringControl_1.StringControl, $header, opts === null || opts === void 0 ? void 0 : opts.required, opts === null || opts === void 0 ? void 0 : opts.readonly, { type: 'number', min: opts === null || opts === void 0 ? void 0 : opts.min, max: opts === null || opts === void 0 ? void 0 : opts.max, formatter }, undefined, ...dependencies);
        };
    };
}
exports.colPercent = colPercent;
//# sourceMappingURL=colPercent.js.map