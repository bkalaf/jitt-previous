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
import { dbFlattenedListCol, dbListCol, flagsCol } from './dbListCol';
import { dbDictCol } from './dbDictCol';
import { dbListObjectCol } from './dbListObjectCol';
import { dbFreeSoloCol } from './dbFreeSoloCol';
import { dbEnumCol } from './dbEnumCol';
import { freeSoloCol } from './freeSoloCol';
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
    listofEnum: dbEnumCol(helper),
    listofFreeSolo: dbFreeSoloCol(helper),
    listOfEmbed: dbListCol(helper), //listEmbedCol(helper),
    listOfObject: dbListObjectCol(helper),
    listOfPrimitive: dbListCol(helper), // listPrimitiveCol(helper),
    double: doubleCol(helper),
    dictionary: dbDictCol(helper),
    clothingCare: dbFlattenedListCol(helper),
    flags: flagsCol(helper)
});
