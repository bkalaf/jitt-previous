import { MRT_ColumnHelper, MRT_RowData } from 'material-react-table';
export declare function colBool<T extends MRT_RowData>(helper: MRT_ColumnHelper<T>): <TKey extends keyof T>(...dependencies: IDependency<T, TKey>[]) => (name: keyof T & string, $header?: string) => import("material-react-table").MRT_ColumnDef<T, boolean | undefined>;
