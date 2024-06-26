import { ColumnMeta } from '@tanstack/table-core';
import { MRT_RowData } from 'material-react-table';
import { useMemo } from 'react';

export function useColumnMeta<T extends MRT_RowData, U, TKey extends keyof ColumnMeta<T, U | undefined>>(props: CellFunctionParams<T, U | undefined>, defaultValue: U, ...keys: TKey[]) {
    const {
        cell,
        column: {
            columnDef: { meta }
        }
    } = props;
    if (meta == null) throw new Error('no meta');
    // const { columnName, objectType } = meta;
    // if (columnName == null || objectType == null) throw new Error('no columnName or objectType');
    return useMemo(
        () =>
            ({
                value: (cell.getValue() ?? defaultValue) as Exclude<U, undefined>,
                ...Object.fromEntries(keys.map((k) => [k, (meta as any)[k] as [TKey, ColumnMeta<T, U | undefined>[TKey]]]))
            }) as {
                value: Exclude<U, undefined>;
            } & Record<TKey, ColumnMeta<T, U | undefined>[TKey]>,
        [cell, defaultValue, keys, meta]
    );
}
