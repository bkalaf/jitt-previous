import { useCallback } from 'react';


export function useGetTableCanExpand() {
    return useCallback((ot: string) => {
        return ot === 'classifier';
        // return Object.keys(types.find(x => x.name === ot)?.properties ?? {}).includes('subRows');
    }, []);
}
