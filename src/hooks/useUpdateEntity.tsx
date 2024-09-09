import { useMemo } from 'react';
import { useEffectiveCollection } from './useEffectiveCollection';
import { useCollectionSchema } from './useCollectionSchema';

export function useUpdateEntity(objectType?: string) {
    const route = useEffectiveCollection(objectType);
    const schema = useCollectionSchema(route);
    return useMemo(() => {
        // eslint-disable-next-line no-console
        console.info(`useUpdateEntity`, schema);
        return (schema as any).update;
    }, [schema]);
}
