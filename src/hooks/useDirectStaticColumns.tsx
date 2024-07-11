import { useMemo } from 'react';
import { MRT_ColumnDef, MRT_RowData } from 'material-react-table';
import { useCollectionSchema } from './useCollectionSchema';



export function useDirectStaticColumns<T extends MRT_RowData>(objectType?: string) {
    const schema = useCollectionSchema(objectType);
    return useMemo(() => schema.columns as MRT_ColumnDef<T>[], [schema.columns]);
}
