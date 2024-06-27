"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.colFreeSolo = void 0;
const baseCol_1 = require("./baseCol");
const StringTableCell_1 = require("../../components/table/cells/StringTableCell");
const FreeSoloControl_1 = require("../../components/table/controls/FreeSoloControl");
function colFreeSolo(helper) {
    return function (...dependencies) {
        return function (name, header, comparator, opts) {
            const { required, readonly, multiple } = Object.assign({ multiple: false, required: false, readonly: false }, (opts !== null && opts !== void 0 ? opts : {}));
            return (0, baseCol_1.baseCol)(helper, name, StringTableCell_1.StringTableCell, FreeSoloControl_1.FreeSoloControl, header, required, readonly, {
                formatter: (x) => x !== null && x !== void 0 ? x : '',
                multiple: multiple !== null && multiple !== void 0 ? multiple : false,
                comparator: comparator
            }, undefined, ...dependencies);
            // return helper.accessor(name as any, {
            //     header: header ?? camelToProper(name),
            //     Cell: createStringCell((x?: string) => x ?? '') as MRT_ColumnDef<T, any>['Cell'],
            //     enableEditing: !readonly,
            //     Edit: createFreeSoloControl<T, U>(comparator, required, readonly, multiple)
            // }) as MRT_ColumnDef<T>;
        };
    };
}
exports.colFreeSolo = colFreeSolo;
//# sourceMappingURL=colFreeSolo.js.map