import { MRT_RowData, MRT_Column, MRT_Cell } from 'material-react-table';
import { useMemo } from 'react';


export function useEditControl<T extends MRT_RowData, TValue>(column: MRT_Column<T>, cell: MRT_Cell<T, ListBack<TValue>>) {
    const { accessorKey, id, header } = column.columnDef;
    const name = accessorKey ?? id;
    if (name == null) throw new Error('no name');
    const list = useMemo(() => cell.getValue() ?? ([] as TValue[]), [cell]);
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
