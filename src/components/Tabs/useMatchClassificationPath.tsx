import { useMemo } from 'react';
import { $$pathNodes } from '../../taxonomy/graph';
import { deepEqual } from '../../common/deepEqual';


export function useMatchClassificationPath(path: string[]) {
    return useMemo(() => {
        return (
            $$pathNodes.find((x) => deepEqual(x.path, path)) ?? {
                attributes: [],
                flags: [],
                options: [],
                path: []
            }
        );
    }, [path]);
}
