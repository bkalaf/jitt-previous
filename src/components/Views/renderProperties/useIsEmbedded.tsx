import { useCallback } from 'react';
import { useTypes } from '../../../hooks/useTypes';


export function useIsEmbedded() {
    const types = useTypes();
    return useCallback((objectType: string) => {
        const found = types.find(x => x.name === objectType);
        if (found == null) throw new Error(`objectType not found: ${objectType}`);
        return found.embedded ?? false;
    }, [types]);
}
