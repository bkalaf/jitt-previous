import { MRT_ColumnHelper, MRT_RowData } from 'material-react-table';
import { colString } from './colString';
import { colText } from './colText';
import { colDate } from './colDate';
import { colBool } from './colBool';
import { colLookup } from './colLookup';
import { colEnum } from './colEnum';
import { colRadio } from './colRadio';
import { colDollar } from './colDollar';
import { colPercent } from './colPercent';
import { colMeasure } from './colMeasure';
import { colIntMeasure } from './colIntMeasure';
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

// export const col = <T extends MRT_RowData>(helper: MRT_ColumnHelper<T>) => ({
//     bool: colBool(helper),
//     clothingCare: colClothingCare(helper),
//     date: colDate(helper),
//     dictionary: dbDictCol(helper),
//     dollar: colDollar(helper),
//     double: colDouble(helper),
//     enum: colEnum(helper),
//     flags: colFlags(helper),
//     freeSolo: colFreeSolo(helper),
//     int: colInt(helper),
//     intMeasure: colIntMeasure(helper),
//     listOfEmbed: colDBList(helper), //listEmbedCol(helper),
//     listofEnum: colDbMultiEnum(helper),
//     listofFreeSolo: colDBFreeSolo(helper),
//     listOfObject: colDBListObject(helper),
//     listOfPrimitive: colDBList(helper), // listPrimitiveCol(helper),
//     lookup: colLookup(helper),
//     measure: colMeasure(helper),
//     percent: colPercent(helper),
//     pk: pk(helper),
//     radio: colRadio(helper),
//     string: colString(helper),
//     text: colText(helper),
// });

export const col = <T extends MRT_RowData>(helper: MRT_ColumnHelper<T>) => ({
    bool: <U, UKey extends keyof U>(...dependencies: IDependency<U, UKey>[]) => colBool(helper)(...(dependencies as any)),
    clothingCare: <U, UKey extends keyof U>(...dependencies: IDependency<U, UKey>[]) => colClothingCare(helper)(...(dependencies as any)),
    date: <U, UKey extends keyof U>(...dependencies: IDependency<U, UKey>[]) => colDate(helper)(...(dependencies as any)),
    dictionary: <U, UKey extends keyof U>(...dependencies: IDependency<U, UKey>[]) => dbDictCol(helper)(...(dependencies as any)),
    dollar: <U, UKey extends keyof U>(...dependencies: IDependency<U, UKey>[]) => colDollar(helper)(...(dependencies as any)),
    double: <U, UKey extends keyof U>(...dependencies: IDependency<U, UKey>[]) => colDouble(helper)(...(dependencies as any)),
    enum: <U, UKey extends keyof U>(...dependencies: IDependency<U, UKey>[]) => colEnum(helper)(...(dependencies as any)),
    flags: <U, UKey extends keyof U>(...dependencies: IDependency<U, UKey>[]) => colFlags(helper)(...(dependencies as any)),
    freeSolo: <U, UKey extends keyof U>(...dependencies: IDependency<U, UKey>[]) => colFreeSolo(helper)(...(dependencies as any)),
    int: <U, UKey extends keyof U>(...dependencies: IDependency<U, UKey>[]) => colInt(helper)(...(dependencies as any)),
    intMeasure: <U, UKey extends keyof U>(...dependencies: IDependency<U, UKey>[]) => colIntMeasure(helper)(...(dependencies as any)),
    listOfEmbed: <U, UKey extends keyof U>(...dependencies: IDependency<U, UKey>[]) => colDBList(helper)(...(dependencies as any)),
    listOfEnum: <U, UKey extends keyof U>(...dependencies: IDependency<U, UKey>[]) => colDbMultiEnum(helper)(...(dependencies as any)),
    listOfFreeSolo: <U, UKey extends keyof U>(...dependencies: IDependency<U, UKey>[]) => colDBFreeSolo(helper)(...(dependencies as any)),
    listOfObject: <U, UKey extends keyof U>(...dependencies: IDependency<U, UKey>[]) => colDBListObject(helper)(...(dependencies as any)),
    listOfPrimitive: <U, UKey extends keyof U>(...dependencies: IDependency<U, UKey>[]) => colDBList(helper)(...(dependencies as any)),
    lookup: <U, UKey extends keyof U>(...dependencies: IDependency<U, UKey>[]) => colLookup(helper)(...(dependencies as any)),
    measure: <U, UKey extends keyof U>(...dependencies: IDependency<U, UKey>[]) => colMeasure(helper)(...(dependencies as any)),
    percent: <U, UKey extends keyof U>(...dependencies: IDependency<U, UKey>[]) => colPercent(helper)(...(dependencies as any)),
    PK: pk(helper),
    radio: <U, UKey extends keyof U>(...dependencies: IDependency<U, UKey>[]) => colRadio(helper)(...(dependencies as any)),
    string: <U, UKey extends keyof U>(...dependencies: IDependency<U, UKey>[]) => colString(helper)(...(dependencies as any)),
    text: <U, UKey extends keyof U>(...dependencies: IDependency<U, UKey>[]) => colText(helper)(...(dependencies as any))
});
