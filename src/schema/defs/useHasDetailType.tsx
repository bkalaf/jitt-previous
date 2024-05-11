import { useFormContext } from 'react-hook-form-mui';
import { DetailTypes } from '../../types';
import { useMemo } from 'react';


export function useHasDetailType(name: string, item: DetailTypes) {
    const { watch } = useFormContext();
    return useMemo(() => {
        const value = watch(name);
        return value == null ? true : !value.includes(item);
    }, [item, name, watch]);
}
