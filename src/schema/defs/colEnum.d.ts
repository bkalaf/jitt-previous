import { MRT_ColumnDef, MRT_ColumnHelper, MRT_RowData } from 'material-react-table';
import $me from '../enums';
export declare function colEnum<T extends MRT_RowData>(helper: MRT_ColumnHelper<T>): <TKey extends keyof T>(...dependencies: IDependency<T, TKey>[]) => (name: keyof T & string, $header: string, opts: {
    id?: string;
    options?: Record<string, string | {
        text: string;
        key: string;
    }>;
    required?: boolean;
    readonly?: boolean;
    enumKey?: keyof typeof $me;
}) => MRT_ColumnDef<T, string | undefined>;
