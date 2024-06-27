import { MRT_ColumnDef, MRT_RowData } from 'material-react-table';
export declare function spreadPredicate<T extends MRT_RowData, U>(name: string, predicate: (x?: any) => boolean, isNegative?: boolean, ...cols: MRT_ColumnDef<T, U>[]): MRT_ColumnDef<T, U>[];
