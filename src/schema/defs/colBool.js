"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.colBool = void 0;
const baseCol_1 = require("./baseCol");
const BoolTableCell_1 = require("../../components/table/cells/BoolTableCell");
const BoolControl_1 = require("../../components/table/controls/BoolControl");
function colBool(helper) {
    return function (...dependencies) {
        return function (name, $header) {
            return (0, baseCol_1.baseCol)(helper, name, BoolTableCell_1.BoolTableCell, BoolControl_1.BoolControl, $header, false, false, {}, undefined, ...dependencies);
        };
    };
}
exports.colBool = colBool;
//# sourceMappingURL=colBool.js.map