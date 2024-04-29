import { useMemo } from 'react';
import { useRealm } from '../hooks/useRealm';
import { useEffectiveCollection } from '../hooks/useEffectiveCollection';

export function useCollectionSchema(objectType?: string) {
    const route = useEffectiveCollection(objectType);
    const { types } = useRealm();
    console.info(`types`, types);
    const objSchema = useMemo(() => types.find((x) => x.name === route), [route, types]);
    if (objSchema == null) throw new Error(`no object schema: objectType: ${objectType} route: ${route}`);
    return objSchema;
}
