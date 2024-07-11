import { useMemo } from 'react';

export function useGetSchema(objectType: string) {
    // const types = useTypes();
    // return useMemo(() => types.find((x) => x.name === objectType), [objectType, types]);
    return useMemo(() => window.schema[objectType], [objectType]);
}
