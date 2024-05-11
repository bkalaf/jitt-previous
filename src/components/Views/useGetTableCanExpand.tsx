import { useTypes } from '../../hooks/useTypes';
import { useCallback } from 'react';


export function useGetTableCanExpand() {
    const types = useTypes();
    return useCallback((ot: string) => {
        return ot === 'classifier';
        // return Object.keys(types.find(x => x.name === ot)?.properties ?? {}).includes('subRows');
    }, [types]);
}
