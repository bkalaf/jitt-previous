import { MRT_ColumnDef, MRT_ColumnHelper, MRT_RowData } from 'material-react-table';
export declare function colFlags<T extends MRT_RowData>(helper: MRT_ColumnHelper<T>): <TKey extends keyof T>(...dependencies: IDependency<T, TKey>[]) => (name: keyof T & string, header: string, flags: string[], readonly?: boolean) => MRT_ColumnDef<T>;
