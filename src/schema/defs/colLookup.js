"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.colLookup = void 0;
const baseCol_1 = require("./baseCol");
const LookupTableCell_1 = require("../../components/table/cells/LookupTableCell");
const AutocompleteControl_1 = require("../../components/table/controls/AutocompleteControl");
function colLookup(helper) {
    return function (...dependencies) {
        return function (name, header, opts) {
            return (0, baseCol_1.baseCol)(helper, name, LookupTableCell_1.LookupTableCell, AutocompleteControl_1.AutocompleteControl, header, false, false, { multiple: false, objectType: opts === null || opts === void 0 ? void 0 : opts.objectType }, opts.onChange, ...dependencies);
        };
    };
}
exports.colLookup = colLookup;
//# sourceMappingURL=colLookup.js.map