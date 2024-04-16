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
import { listCol } from './listCol';
import { freeSoloCol } from './freeSoloCol';

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
    list: listCol(helper),
    measure: measureCol(helper),
    freeSolo: freeSoloCol(helper)
});
