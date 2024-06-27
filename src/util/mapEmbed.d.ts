import { MRT_ColumnDef, MRT_RowData } from 'material-react-table';
export declare function mapEmbed<T extends MRT_RowData, U extends MRT_RowData, TKey extends keyof T>(columns: MRT_ColumnDef<U>[], accessorKey: string, ...dependencies: IDependency<T, TKey>[]): MRT_ColumnDef<T>[];
