import { MRT_ColumnHelper, MRT_RowData } from 'material-react-table';
import { colString, colText } from './colString';
import { colDate } from './colDate';
import { colBool } from './colBool';
import { colLookup } from './colLookup';
import { colEnum, colRadio } from './colEnum';
import { colDollar } from './colDollar';
import { colPercent } from './colPercent';
import { colIntMeasure, colMeasure } from './colMeasure';
import { colInt } from './colInt';
import { pk } from './pk';
import { colDBList } from './colDBList.1';
import { colFlags } from './colFlags';
import { colClothingCare } from './colClothingCare';
import { dbDictCol } from './dbDictCol';
import { colDBListObject } from './colDBListObject';
import { colDBFreeSolo } from './colDBFreeSolo';
import { colDbMultiEnum } from './colDbMultiEnum';
import { colFreeSolo } from './colFreeSolo';
import { colDouble } from './colDouble';

export const col = <T extends MRT_RowData>(helper: MRT_ColumnHelper<T>) => ({
    string: colString(helper),
    date: colDate(helper),
    bool: colBool(helper), 
    lookup: colLookup(helper),
    enum: colEnum(helper),
    dollar: colDollar(helper),
    percent: colPercent(helper),
    int: colInt(helper),
    pk: pk(helper),
    // list: listCol(helper),
    measure: colMeasure(helper),
    intMeasure: colIntMeasure(helper),
    freeSolo: colFreeSolo(helper),
    listofEnum: colDbMultiEnum(helper),
    listofFreeSolo: colDBFreeSolo(helper),
    listOfEmbed: colDBList(helper), //listEmbedCol(helper),
    listOfObject: colDBListObject(helper),
    listOfPrimitive: colDBList(helper), // listPrimitiveCol(helper),
    double: colDouble(helper),
    dictionary: dbDictCol(helper),
    clothingCare: colClothingCare(helper),
    flags: colFlags(helper),
    radio: colRadio(helper),
    text: colText(helper)
});
