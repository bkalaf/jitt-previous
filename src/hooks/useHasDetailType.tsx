import { useFormContext } from 'react-hook-form-mui';
import { DetailTypes } from '../types';
import { useMemo } from 'react';

export function useCheckProperty(name: string, value: any) {
    const { watch } = useFormContext();
    return useMemo(() => {
        const current = watch(name);
        console.info(`useCheckProperty`, name, value, current);
        return (
            current == null ? true
            : Array.isArray(value) ? value.includes(current)
            : value === current
        );
    }, [name, value, watch]);
}
export function useHasDetailType(name: string, item: DetailTypes | DetailTypes[]) {
    const { watch } = useFormContext();
    return useMemo(() => {
        const value = watch(name);
        const func = Array.isArray(item) ? ((x: DetailTypes) => !item.includes(x)) : ((x: DetailTypes) => x !== item);
        return value == null ? true : !func(value);
    }, [item, name, watch]);
}
