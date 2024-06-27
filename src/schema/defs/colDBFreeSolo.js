"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.colDBFreeSolo = void 0;
const baseCol_1 = require("./baseCol");
const FreeSoloControl_1 = require("../../components/table/controls/FreeSoloControl");
const ListTableCell_1 = require("../../components/table/cells/ListTableCell");
function colDBFreeSolo(helper) {
    return function (...dependencies) {
        return function (name, header, objectType, comparator, readonly = false) {
            return (0, baseCol_1.baseCol)(helper, name, ListTableCell_1.ListTableCell, (FreeSoloControl_1.FreeSoloControl), header, false, readonly, { objectType, multiple: true, comparator: comparator }, undefined, ...dependencies);
            // return helper.accessor(name as any, {
            //     header: header ?? camelToProper(name),
            //     enableEditing: !readonly,
            //     Cell: createListCell(objectType),
            //     Edit: readonly ? NullCell : createFreeSoloControl(comparator, false, readonly, true)
            // }) as any;
        };
    };
}
exports.colDBFreeSolo = colDBFreeSolo;
//# sourceMappingURL=colDBFreeSolo.js.map