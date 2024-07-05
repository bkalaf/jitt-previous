import { useMemo } from 'react';
import { useTypes } from './useTypes';

export function useGetSchema(objectType: string) {
    const types = useTypes();
    return useMemo(() => types.find((x) => x.name === objectType), [objectType, types]);
}
