"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.colDBListObject = void 0;
const baseCol_1 = require("./baseCol");
const ListTableCell_1 = require("../../components/table/cells/ListTableCell");
const AutocompleteControl_1 = require("../../components/table/controls/AutocompleteControl");
function colDBListObject(helper) {
    return function (...dependencies) {
        return function (name, header, objectType, readonly = false) {
            return (0, baseCol_1.baseCol)(helper, name, ListTableCell_1.ListTableCell, AutocompleteControl_1.AutocompleteControl, header, false, readonly, { objectType, multiple: true }, undefined, ...dependencies);
        };
    };
}
exports.colDBListObject = colDBListObject;
//# sourceMappingURL=colDBListObject.js.map