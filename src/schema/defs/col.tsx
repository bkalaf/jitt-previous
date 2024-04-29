import { MRT_ColumnHelper, MRT_RowData } from 'material-react-table';
import { stringCol } from './stringCol';
import { dateCol } from './dateCol';
import { boolCol } from './boolCol';
import { lookupCol } from './lookupCol';
import { enumCol } from './enumCol';
import { dollarCol } from './dollarCol';
import { percentCol } from './percentCol';
import { measureCol } from './measureCol';
import { intCol } from './intCol';
import { pk } from './pk';
import { dbListCol } from './dbListCol';
import { freeSoloCol } from './freeSoloCol';
import { listObjectCol } from './listObjectCol';
import { doubleCol } from './doubleCol';

export const col = <T extends MRT_RowData>(helper: MRT_ColumnHelper<T>) => ({
    string: stringCol(helper),
    date: dateCol(helper),
    bool: boolCol(helper),
    lookup: lookupCol(helper),
    enum: enumCol(helper),
    dollar: dollarCol(helper),
    percent: percentCol(helper),
    int: intCol(helper),
    pk: pk(helper),
    // list: listCol(helper),
    measure: measureCol(helper),
    freeSolo: freeSoloCol(helper),
    listOfEmbed: dbListCol(helper), //listEmbedCol(helper),
    listOfObject: listObjectCol(helper),
    listOfPrimitive: dbListCol(helper), // listPrimitiveCol(helper),
    double: doubleCol(helper)
    // $list: function <TValue>(name: keyof T & string, header: string, objectType: string, RowCell: IRowCell<TValue>, columns: MRT_ColumnDef<TValue & MRT_RowData>[], labelProperty?: string, readonly = false) {
    //     return dsCol(helper)(name, header, 'list', objectType, RowCell, columns as MRT_ColumnDef<any>[], labelProperty, readonly);
    // },
    // $dictionary: function <TValue>(name: keyof T & string, header: string, objectType: string, RowCell: IRowCell<TValue>, columns: MRT_ColumnDef<TValue & MRT_RowData>[], labelProperty?: string, readonly = false) {
    //     return dsCol(helper)(name, header, 'dictionary', objectType, RowCell, columns as MRT_ColumnDef<any>[], labelProperty, readonly);
    // },
    // $set: function <TValue>(name: keyof T & string, header: string, objectType: string, RowCell: IRowCell<TValue>, columns: MRT_ColumnDef<TValue & MRT_RowData>[], labelProperty?: string, readonly = false) {
    //     return dsCol(helper)(name, header, 'set', objectType, RowCell, columns as MRT_ColumnDef<any>[], labelProperty, readonly);
});
