import { MRT_RowData, MRT_TableInstance } from 'material-react-table';
import { useMemo } from 'react';


export function useAreRowsSelected<T extends MRT_RowData>(table: MRT_TableInstance<T>) {
    return useMemo(() => () => table.getSelectedRowModel().rows.length > 0, [table]);
}
