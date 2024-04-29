import { useMemo } from 'react';
import { useCollectionName } from './useCollectionRoute';

export function useEffectiveCollection(objectType?: string) {
    const collection = useCollectionName()
    const effectiveCollection = useMemo(() => collection ?? objectType, [collection, objectType]);
    if (effectiveCollection == null) throw new Error('no effective collection');
    return effectiveCollection;
}
