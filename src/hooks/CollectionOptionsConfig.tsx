import { MRT_RowData } from 'material-react-table';

export type CollectionOptionsConfig<T extends MRT_RowData> = Record<string, JITTTableState<T>>;

export function valueForKey<T extends Record<string, unknown>, TKey extends keyof T>(obj: T, key: TKey) {
    return key in obj ? obj[key] : undefined;
}
export function setValueForKey<T extends Record<string, unknown>, TKey extends keyof T>(obj: T, key: TKey, value?: T[TKey]): T {
    const $obj = obj ?? {};
    return { ...$obj, [key]: value };
}
export function setNestedValueForKey<T extends Record<string, unknown>, U extends Record<string, T>, TKey extends keyof T, UKey extends keyof U>(obj: U, key1: UKey, key2: TKey, value?: U[UKey][TKey]) {
    const inner = setValueForKey<T, TKey>(key1 in obj ? obj[key1] : ({} as T), key2, value);
    return setValueForKey(obj, key1, inner as U[UKey] | undefined);
}


