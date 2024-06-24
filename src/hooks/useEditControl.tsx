import { ColumnMeta } from '@tanstack/react-table';
import { MRT_RowData, MRT_Column } from 'material-react-table';
import { useMemo } from 'react';
import { useFormContext } from 'react-hook-form';

export function useEditControl<T extends MRT_RowData, TValue>(column: MRT_Column<T>) {
    const { accessorKey, id, header } = column.columnDef;
    const name = (column.columnDef.meta as ColumnMeta<any, any>)?.columnName as string | undefined ?? accessorKey ?? id;
    if (name == null) throw new Error('no name');
    const formContext = useFormContext();
    const list = formContext.watch(name) as TValue[];
    console.info(`name: ${name} label: ${header} list:`, list);
    return useMemo(
        () => ({
            name,
            label: header,
            list
        }),
        [header, list, name]
    );
}
