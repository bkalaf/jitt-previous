import { MRT_ColumnHelper, MRT_RowData } from 'material-react-table';
import { stringColumnDefinition } from './stringColumnDefinition';
import { textColumnDefinition } from './textColumnDefinition';
import { dateColumnDefinition } from './dateColumnDefinition';
import { boolColumnDefinition } from './boolColumnDefinition';
import { referenceObjectColumnDefinition } from './referenceObjectColumnDefinition';
import { enumColumnDefinition } from './enumColumnDefinition';
import { radioColumnDefinition } from './radioColumnDefinition';
import { dollarColumnDefinition } from './dollarColumnDefinition';
import { percentColumnDefinition } from './percentColumnDefinition';
import { measureColumnDefinition } from './measureColumnDefinition';
import { intMeasureColumnDefinition } from './intMeasureColumnDefinition';
import { intColumnDefinition } from './intColumnDefinition';
import { primaryKeyObjectIdColumnDefinition } from './primaryKeyObjectIdColumnDefinition';
import { realmListColumnDefinition } from './realmListColumnDefinition';
import { flagsColumnDefinition } from './flagsColumnDefinition';
import { clothingCareColumnDefinition } from './clothingCareColumnDefinition';
import { realmDictionaryColumnDefinition } from './realmDictionaryColumnDefinition';
import { realmListOfReferenceObjectsColumnDefinition } from './realmListOfReferenceObjectsColumnDefinition';
import { realmListOfEnumColumnDefinition } from './realmListOfEnumColumnDefinition';
import { freeSoloColumnDefinition } from './freeSoloColumnDefinition';
import { doubleColumnDefinition } from './doubleColumnDefinition';

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

export const col = <T extends MRT_RowData>(helper: MRT_ColumnHelper<T>) => {
    const string = <U extends MRT_RowData, UKey extends keyof U>(...dependencies: IDependency<U, UKey>[]) => stringColumnDefinition(helper)(...(dependencies as any));
    const result = {
        bool: <U extends MRT_RowData, UKey extends keyof U>(...dependencies: IDependency<U, UKey>[]) => boolColumnDefinition(helper)(...(dependencies as any)),
        clothingCare: <U extends MRT_RowData, UKey extends keyof U>(...dependencies: IDependency<U, UKey>[]) => clothingCareColumnDefinition(helper)(...(dependencies as any)),
        date: <U extends MRT_RowData, UKey extends keyof U>(...dependencies: IDependency<U, UKey>[]) => dateColumnDefinition(helper)(...(dependencies as any)),
        dictionary: <U extends MRT_RowData, UKey extends keyof U>(...dependencies: IDependency<U, UKey>[]) => realmDictionaryColumnDefinition(helper)(...(dependencies as any)),
        dollar: <U extends MRT_RowData, UKey extends keyof U>(...dependencies: IDependency<U, UKey>[]) => dollarColumnDefinition(helper)(...(dependencies as any)),
        double: <U extends MRT_RowData, UKey extends keyof U>(...dependencies: IDependency<U, UKey>[]) => doubleColumnDefinition(helper)(...(dependencies as any)),
        enum: <U extends MRT_RowData, UKey extends keyof U>(...dependencies: IDependency<any, UKey>[]) => enumColumnDefinition(helper)(...(dependencies as any)),
        flags: <U extends MRT_RowData, UKey extends keyof U>(...dependencies: IDependency<U, UKey>[]) => flagsColumnDefinition(helper)(...(dependencies as any)),
        freeSolo: <U extends MRT_RowData, UKey extends keyof U>(...dependencies: IDependency<U, UKey>[]) => freeSoloColumnDefinition(helper)(...(dependencies as any)),
        int: <U extends MRT_RowData, UKey extends keyof U>(...dependencies: IDependency<U, UKey>[]) => intColumnDefinition(helper)(...(dependencies as any)),
        intMeasure: <U extends MRT_RowData, UKey extends keyof U>(...dependencies: IDependency<U, UKey>[]) => intMeasureColumnDefinition(helper)(...(dependencies as any)),
        listOfEmbed: <U extends MRT_RowData, UKey extends keyof U>(...dependencies: IDependency<U, UKey>[]) => realmListColumnDefinition(helper)(...(dependencies as any)),
        listOfEnum: <U extends MRT_RowData, UKey extends keyof U>(...dependencies: IDependency<U, UKey>[]) => realmListOfEnumColumnDefinition(helper)(...(dependencies as any)),
        // listOfFreeSolo: <U extends MRT_RowData, UKey extends keyof U>(...dependencies: IDependency<U, UKey>[]) => colDBFreeSolo(helper)(...(dependencies as any)),
        listOfObject: <U extends MRT_RowData, UKey extends keyof U>(...dependencies: IDependency<U, UKey>[]) => realmListOfReferenceObjectsColumnDefinition(helper)(...(dependencies as any)),
        listOfPrimitive: <U extends MRT_RowData, UKey extends keyof U>(...dependencies: IDependency<U, UKey>[]) => realmListColumnDefinition(helper)(...(dependencies as any)),
        lookup: <U extends MRT_RowData, UKey extends keyof U>(...dependencies: IDependency<U, UKey>[]) => referenceObjectColumnDefinition(helper)(...(dependencies as any)),
        measure: <U extends MRT_RowData, UKey extends keyof U>(...dependencies: IDependency<U, UKey>[]) => measureColumnDefinition(helper)(...(dependencies as any)),
        percent: <U extends MRT_RowData, UKey extends keyof U>(...dependencies: IDependency<U, UKey>[]) => percentColumnDefinition(helper)(...(dependencies as any)),
        PK: primaryKeyObjectIdColumnDefinition(helper),
        radio: <U extends MRT_RowData, UKey extends keyof U>(...dependencies: IDependency<U, UKey>[]) => radioColumnDefinition(helper)(...(dependencies as any)),
        string,
        text: <U extends MRT_RowData, UKey extends keyof U>(...dependencies: IDependency<U, UKey>[]) => textColumnDefinition(helper)(...(dependencies as any)),
        year: (...dependencies: IDependency<any, any>[]) => (accessorKey?: string, header?: string) => string(...dependencies)(accessorKey ?? 'year', header ?? 'Year', undefined, { pattern: /^[0-9]{4}$/ })
    };
    return result;
}
