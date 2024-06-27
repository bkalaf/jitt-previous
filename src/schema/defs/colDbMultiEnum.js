"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.colDbMultiEnum = void 0;
const baseCol_1 = require("./baseCol");
const MultiSelectControl_1 = require("../../components/table/controls/MultiSelectControl");
const ListTableCell_1 = require("../../components/table/cells/ListTableCell");
const enums_1 = __importDefault(require("../enums"));
const standardizeOptions_1 = require("./standardizeOptions");
function colDbMultiEnum(helper) {
    return function (...dependencies) {
        return function (name, $header, opts) {
            const { enumKey, required, readonly } = Object.assign({ required: false, readonly: false }, opts);
            return (0, baseCol_1.baseCol)(helper, name, ListTableCell_1.ListTableCell, MultiSelectControl_1.MultiSelectControl, $header, required, readonly, { objectType: 'string', enumInfo: (0, standardizeOptions_1.standardizeOptions)(enums_1.default[enumKey]), multiple: true }, undefined, ...dependencies);
        };
    };
}
exports.colDbMultiEnum = colDbMultiEnum;
//# sourceMappingURL=colDbMultiEnum.js.map