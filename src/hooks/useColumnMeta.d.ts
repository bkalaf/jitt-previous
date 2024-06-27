import { ColumnMeta } from '@tanstack/table-core';
import { MRT_RowData } from 'material-react-table';
export declare function useColumnMeta<T extends MRT_RowData, U, TKey extends keyof ColumnMeta<T, U | undefined>>(props: CellFunctionParams<T, U | undefined>, defaultValue: U, ...keys: TKey[]): {
    value: Exclude<U, undefined>;
} & Record<TKey, ColumnMeta<T, U | undefined>[TKey]>;
