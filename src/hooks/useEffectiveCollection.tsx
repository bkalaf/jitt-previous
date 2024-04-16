import { useMemo } from 'react';
import { useOptionalCollectionRoute } from './useOptionalCollectionRoute';

export function useEffectiveCollection(objectType?: string) {
    const collection = useOptionalCollectionRoute();
    const effectiveCollection = useMemo(() => collection ?? objectType, [collection, objectType]);
    if (effectiveCollection == null) throw new Error('no effective collection');
    return effectiveCollection;
}
