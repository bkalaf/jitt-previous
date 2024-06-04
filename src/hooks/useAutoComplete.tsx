import { useMemo } from 'react';
import { getProperty } from '../common/object';

export function toGetOptionLabel<T extends Record<string, any>>(labelProperty: string & keyof T) {
    return function (option: T) {
        return (getProperty(labelProperty as any, option) ?? 'n/a') as string;
    };
}
export function toIsOptionEqualToValue<T>(comparator: (left: T, right: T) => Compared) {
    return function (option: T, value: T) {
        return comparator(option, value) === 0;
    };
}
export function useAutoComplete<T>(labelProperty?: string & keyof T, comparator?: (left: T, right: T) => Compared) {
    return useMemo(
        () => ({
            getOptionLabel: labelProperty ? toGetOptionLabel(labelProperty) : (option: T) => option?.toString() ?? '',
            isOptionEqualToValue: toIsOptionEqualToValue(comparator ?? ((l: any, r: any) => l < r ? -1 : l > r ? 1 : 0))
        }),
        [comparator, labelProperty]
    );
}
