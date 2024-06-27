"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dbDictCol = void 0;
const baseCol_1 = require("./baseCol");
const DictionaryTableCell_1 = require("../../components/table/cells/DictionaryTableCell");
const DBDictionaryControl_1 = require("../../components/table/controls/DBDictionaryControl");
function dbDictCol(helper) {
    return function (...dependencies) {
        return function (name, header, objectType, opts) {
            const { readonly, faceted, enumKey } = Object.assign({ readonly: false, faceted: false, enumKey: undefined }, (opts !== null && opts !== void 0 ? opts : {}));
            // const Edit = createDBDictionaryControl(objectType, faceted, enumMap) as MRT_ColumnDef<T, DictionaryBack<any>>['Edit'];
            return (0, baseCol_1.baseCol)(helper, name, DictionaryTableCell_1.DictionaryTableCell, DBDictionaryControl_1.DBDictionaryControl, header, false, readonly, {
                objectType,
                keyType: faceted ? 'faceted' : enumKey !== null && enumKey !== void 0 ? enumKey : 'string'
            }, undefined, ...dependencies);
            // return helper.accessor(name as any, {
            //     header: header ?? camelToProper(name),
            //     enableEditing: !readonly,
            //     Cell: createDictionaryCell(objectType),
            //     Edit: (readonly ? NullCell : createDBDictionaryControl(objectType, faceted, enumMap)) as any
            // }) as any;
        };
    };
}
exports.dbDictCol = dbDictCol;
//# sourceMappingURL=dbDictCol.js.map