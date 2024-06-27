import { MRT_ColumnDef, MRT_ColumnHelper, MRT_RowData } from 'material-react-table';
export declare function colFreeSolo<T extends MRT_RowData, U extends string>(helper: MRT_ColumnHelper<T>): <TKey extends keyof T>(...dependencies: IDependency<T, TKey>[]) => (name: keyof T & string, header: string, comparator: (x?: U, y?: U) => Compared, opts?: {
    required?: boolean;
    readonly?: boolean;
    multiple?: boolean;
}) => MRT_ColumnDef<T, U | undefined>;
