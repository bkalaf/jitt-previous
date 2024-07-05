import { useMemo } from 'react';
import { useCollectionName } from './useCollectionName';

export function useEffectiveCollection(objectType?: string) {
    const collection = useCollectionName();
    const effectiveCollection = useMemo(() => objectType ?? collection ?? 'n/a', [collection, objectType]);
    if (effectiveCollection == null) throw new Error('no effective collection');
    return effectiveCollection;
}
