import { useMemo } from 'react';
import { getProperty } from '../../common/object';

export function toGetOptionLabel<T extends Record<string, any>>(labelProperty: string & keyof T) {
    return function (option: T) {
        return (getProperty(labelProperty as any, option) ?? 'n/a') as string;
    };
}
export function toIsOptionEqualToValue<T>(comparator: (left: T, right: T) => boolean) {
    return function (option: T, value: T) {
        return comparator(option, value);
    };
}
export function useAutoComplete<T extends Record<string, any>>(labelProperty: string & keyof T, comparator: (left: T, right: T) => boolean) {
    return useMemo(
        () => ({
            getOptionLabel: toGetOptionLabel(labelProperty),
            isOptionEqualToValue: toIsOptionEqualToValue(comparator)
        }),
        [comparator, labelProperty]
    );
}
