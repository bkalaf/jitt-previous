import { useMemo } from 'react';
import { MRT_RowData } from 'material-react-table';
import { useEffectiveCollection } from './useEffectiveCollection';

export function useColumns<T extends MRT_RowData>(objectType?: string) {
    const collection = useEffectiveCollection(objectType);
    // return useMemo(() => columns[collection as keyof typeof columns] as MRT_ColumnDef<T>[], [collection]);
    const result = window.columns[collection as keyof typeof window.columns];
    if (result == null) throw new Error(`no columns found for: ${objectType}`);
    return useMemo(() => result<T>, [result]);
}
