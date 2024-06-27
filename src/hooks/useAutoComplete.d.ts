export declare function toGetOptionLabel<T extends Record<string, any>>(labelProperty: string & keyof T): (option: T) => "n/a" | NonNullable<T[string & keyof T]>;
export declare function toIsOptionEqualToValue<T>(comparator: (left: T, right: string) => Compared): (option: T, value: string) => boolean;
export declare function useAutoComplete<T>(labelProperty?: string & keyof T, comparator?: (left: T, right: string) => Compared): {
    getOptionLabel: ((option: Record<string, any>) => any) | ((option: T) => string);
    isOptionEqualToValue: (option: T, value: string) => boolean;
};
