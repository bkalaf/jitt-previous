import { useMemo } from 'react';
import { MRT_ColumnDef, MRT_RowData } from 'material-react-table';
import { useEffectiveCollection } from './useEffectiveCollection';
import { useCollectionSchema } from './useCollectionSchema';



export function useStaticColumns<T extends MRT_RowData>(objectType?: string) {
    const effective = useEffectiveCollection(objectType);
    const schema = useCollectionSchema(effective);
    return useMemo(() => schema.ctor.columns as MRT_ColumnDef<T>[], [schema.ctor.columns]);
}
