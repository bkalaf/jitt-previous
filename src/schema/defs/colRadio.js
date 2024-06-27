"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.colRadio = void 0;
const EnumTableCell_1 = require("../../components/table/cells/EnumTableCell");
const baseCol_1 = require("./baseCol");
const enums_1 = __importDefault(require("../enums"));
const RadioControl_1 = require("../../components/table/controls/RadioControl");
const standardizeOptions_1 = require("./standardizeOptions");
function colRadio(helper) {
    return function (...dependencies) {
        return function (name, $header, opts) {
            const { required, readonly, enumKey } = Object.assign({ readonly: false, required: false }, (opts !== null && opts !== void 0 ? opts : {}));
            return (0, baseCol_1.baseCol)(helper, name, EnumTableCell_1.EnumTableCell, RadioControl_1.RadioControl, $header, required, readonly, { enumInfo: (0, standardizeOptions_1.standardizeOptions)(enums_1.default[enumKey]) }, undefined, ...dependencies);
        };
    };
}
exports.colRadio = colRadio;
//# sourceMappingURL=colRadio.js.map