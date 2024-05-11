import { useMemo } from 'react';
import { useEffectiveCollection } from './useEffectiveCollection';
import { useTypes } from './useTypes';

export function useCollectionSchema(objectType?: string) {
    const route = useEffectiveCollection(objectType);
    const types = useTypes();
    console.info(`types`, types);
    const objSchema = useMemo(() => types.find((x) => x.name === route), [route, types]);
    if (objSchema == null) throw new Error(`no object schema: objectType: ${objectType} route: ${route}`);
    return objSchema;
}
