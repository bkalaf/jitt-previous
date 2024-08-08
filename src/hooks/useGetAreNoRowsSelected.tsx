import { MRT_RowData, MRT_TableInstance } from 'material-react-table';
import { useCallback } from 'react';


export function useGetAreNoRowsSelected<T extends MRT_RowData>(table: MRT_TableInstance<T>) {
    return useCallback(() => {
        return table.getSelectedRowModel().rows.length === 0;
    }, [table]);
}
