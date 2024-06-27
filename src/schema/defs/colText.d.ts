import { MRT_ColumnDef, MRT_ColumnHelper, MRT_RowData } from 'material-react-table';
import { ColumnMeta } from '@tanstack/table-core';
export declare function colText<T extends MRT_RowData, U>(helper: MRT_ColumnHelper<T>): <TKey extends keyof T>(...dependencies: IDependency<T, TKey>[]) => (name: keyof T & string, $header?: string, formatter?: (x?: U) => string, opts?: Pick<Exclude<ColumnMeta<T, U | undefined>, undefined>, 'max' | 'min' | 'minLength' | 'maxLength' | 'pattern' | 'type' | 'step' | 'required' | 'validate' | 'readonly'>) => MRT_ColumnDef<T, U | undefined>;
