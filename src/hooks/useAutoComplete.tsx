import { useMemo } from 'react';

export function toGetOptionLabel<T extends Record<string, any>>(labelProperty: string & keyof T) {
    return function (option: T) {
        return typeof option === 'string' ? option : option[labelProperty] ?? 'n/a';
    };
}
export function toIsOptionEqualToValue<T>(comparator: (left: T, right: string) => Compared) {
    return function (option: T, value: string) {
        const compared = comparator(option, value) === 0;
        return compared;
    };
}
export function useAutoComplete<T>(labelProperty?: string & keyof T, comparator?: (left: T, right: string) => Compared) {
    return useMemo(
        () => ({
            getOptionLabel: labelProperty ? toGetOptionLabel(labelProperty) : (option: T) => option?.toString() ?? '',
            isOptionEqualToValue: toIsOptionEqualToValue(
                comparator ??
                    ((l: any, r: any) =>
                        l < r ? -1
                        : l > r ? 1
                        : 0)
            )
        }),
        [comparator, labelProperty]
    );
}
