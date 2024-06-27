"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.colDBList = void 0;
const baseCol_1 = require("./baseCol");
const ListTableCell_1 = require("../../components/table/cells/ListTableCell");
const DBListControl_1 = require("../../components/table/controls/DBListControl");
function colDBList(helper) {
    return function (...dependencies) {
        return function (name, header, objectType, readonly = false) {
            return (0, baseCol_1.baseCol)(helper, name, ListTableCell_1.ListTableCell, DBListControl_1.DBListControl, header, false, readonly, { objectType }, undefined, ...dependencies);
        };
    };
}
exports.colDBList = colDBList;
//# sourceMappingURL=colDBList.1.js.map