// import { MRT_ColumnHelper, MRT_RowData } from 'material-react-table';
// import { ListTableCell } from '../../components/table/cells/ListTableCell';
// import { baseCol } from './baseCol';
// import { AutocompleteControl } from '../../components/table/controls/AutocompleteControl';
// import { BSON } from 'realm';
// export function colListOfObjects<T extends MRT_RowData>(helper: MRT_ColumnHelper<T>) {
//     return function <TKey extends keyof T>(...dependencies: IDependency<T, TKey>[]) {
//         return function ListObjectControl<U extends MRT_RowData & { _id: BSON.ObjectId }>(name: keyof T & string, header: string | undefined, objectType: string, readonly = false) {
//             return baseCol<T, ListBack<U> | undefined>(helper, name, ListTableCell, AutocompleteControl<T, U, true>, header, false, readonly, { objectType, multiple: true }, undefined, ...dependencies);
//         };
//     };
// }
//# sourceMappingURL=_colListOfObjects.js.map