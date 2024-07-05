import { MRT_RowData } from 'material-react-table';
import { useMemo } from 'react';
import { useEffectiveCollection } from './useEffectiveCollection';
import { useCollectionSchema } from './useCollectionSchema';


export function useUpdateEntity<T extends MRT_RowData>(objectType?: string) {
    const route = useEffectiveCollection(objectType);
    const schema = useCollectionSchema(route);
    return useMemo(() => (schema.ctor as MyClass<T>).update, [schema.ctor]);
}
