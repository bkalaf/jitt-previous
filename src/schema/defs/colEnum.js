"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.colEnum = void 0;
const EnumTableCell_1 = require("../../components/table/cells/EnumTableCell");
const baseCol_1 = require("./baseCol");
const SelectControl_1 = require("../../components/table/controls/SelectControl");
const enums_1 = __importDefault(require("../enums"));
const standardizeOptions_1 = require("./standardizeOptions");
function colEnum(helper) {
    return function (...dependencies) {
        return function (name, $header, opts) {
            var _a;
            const { required, readonly, enumKey, id } = Object.assign({ readonly: false, required: false }, (opts !== null && opts !== void 0 ? opts : {}));
            const enumInfo = (0, standardizeOptions_1.standardizeOptions)((_a = enums_1.default[enumKey]) !== null && _a !== void 0 ? _a : opts.options);
            // const $options = Object.entries(options).map(([k, v]) => ({ key: k, text: typeof v === 'string' ? v : v.text } as { text: string, key: string }));
            return (0, baseCol_1.baseCol)(helper, name, EnumTableCell_1.EnumTableCell, SelectControl_1.SelectControl, $header, required, readonly, { enumInfo, id }, undefined, ...dependencies);
            // return helper.accessor(name as any, { ...calculateSizes(header, { ...(opts ?? {}), options: $options }), header, Cell: createEnumCell(optionLookup), Edit: createSelectControl({ options: $options, required: required }) }) as any;
        };
    };
}
exports.colEnum = colEnum;
//# sourceMappingURL=colEnum.js.map