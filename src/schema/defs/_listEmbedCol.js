// import { MRT_ColumnDef, MRT_ColumnHelper, MRT_RowData } from 'material-react-table';
// import { camelToProper } from '../../common/text';
// import { createListControl } from '../../components/controls/createListControl';
// import { createListCell } from '../../components/Cells/createListCell';
// export function listEmbedCol<T extends MRT_RowData>(helper: MRT_ColumnHelper<T>) {
//     return function <U extends MRT_RowData>(name: keyof T & string, header: string | undefined, objectType: string, RowCell: IRowCell<U>, columns: MRT_ColumnDef<U>[], readonly = false) {
//         return helper.accessor(name as any, { header: header ?? camelToProper(name), enableEditing: !readonly, Cell: createListCell(RowCell), Edit: createListControl<T, U>(objectType, columns, RowCell) }) as MRT_ColumnDef<T, any>;
//     };
// }
//# sourceMappingURL=_listEmbedCol.js.map