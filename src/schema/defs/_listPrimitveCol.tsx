// import { MRT_ColumnDef, MRT_ColumnHelper, MRT_RowData } from 'material-react-table';
// import { camelToProper } from '../../common/text';
// import { createListControl } from '../../components/controls/createListControl';
// import { createListCell } from '../../components/Cells/createListCell';


// export function listPrimitiveCol<T extends MRT_RowData>(helper: MRT_ColumnHelper<T>) {
//     return function <U extends JSPrimitives>(
//         name: keyof T & string,
//         header: string | undefined,
//         objectType: RealmPrimitives,
//         RowCell: IRowCell<PrimitiveRecord<U>>,
//         columns: MRT_ColumnDef<{ value: U; }>[],
//         // labelProperty?: string,
//         readonly = false
//     ) {
//         return helper.accessor(name as any, { header: header ?? camelToProper(name), enableEditing: !readonly, Cell: createListCell(RowCell), Edit: createListControl<T, PrimitiveRecord<U>>(objectType, columns, RowCell) }) as MRT_ColumnDef<T, any>;
//     };
// }

// // export function dictionaryPrimitiveCol<T extends MRT_RowData>(helper: MRT_ColumnHelper<T>) {
// //     return function <U extends JSPrimitives>(name: keyof T & string,
// //         header: string | undefined, objectType: RealmPrimitives, RowCell: IRowCell<U>, readonly = false) {
// //         return helper.accessor(name as any, { header: header ?? camelToProper(name), enableEditing: !readonly, Cell: createDictionaryCell<T, U>(RowCell)}), Edit: 
// //     }
// // }