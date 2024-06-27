import { MRT_ColumnDef, MRT_ColumnHelper, MRT_RowData } from 'material-react-table';
export declare function colIntMeasure<T extends MRT_RowData>(helper: MRT_ColumnHelper<T>): <TKey extends keyof T>(...dependencies: IDependency<T, TKey>[]) => (name: keyof T & string, $header: string, uom: string, opts: {
    min?: number;
    max?: number;
    required?: boolean;
    readonly?: boolean;
}) => MRT_ColumnDef<T, number | undefined>;
