import { MRT_RowData } from 'material-react-table';
import { useMemo } from 'react';
import { ColumnMeta } from '@tanstack/react-table';

export function useEditColumnMeta<T extends MRT_RowData, U, TKey extends keyof ColumnMeta<T, U>>(props: EditFunctionParams<T, U | undefined>, ...keys: TKey[]) {
    const {
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
                ...Object.fromEntries(keys.map((k) => [k, (meta as any)[k]]))
            }) as {
                [P in TKey]: ColumnMeta<T, U>[P];
            },
        [keys, meta]
    );
}
