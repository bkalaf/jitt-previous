import { MRT_RowData, MRT_Column, MRT_Cell } from 'material-react-table';
import { useMemo } from 'react';
import { useFormContext } from 'react-hook-form';

export function useControl<T extends MRT_RowData, TValue, U>(column: MRT_Column<T, TValue>, cell: MRT_Cell<T, TValue>, defaultValue: TValue, operator: (x: TValue) => U) {
    const { accessorKey, id, header } = column.columnDef;
    const name = accessorKey ?? id;
    if (name == null) throw new Error('no name');
    const value = useMemo(() => cell.getValue() ?? defaultValue, [cell, defaultValue])
    const data = useMemo(() => operator(value), [operator, value])
    return {
        name,
        label: header,
        value,
        data
    }
}

export function useEditControl<T extends MRT_RowData, TValue>(column: MRT_Column<T>, cell: MRT_Cell<T, ListBack<TValue>>) {
    const { accessorKey, id, header } = column.columnDef;
    const name = column.columnDef.meta?.columnName ?? accessorKey ?? id;
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
