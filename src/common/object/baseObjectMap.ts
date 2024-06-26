export function baseObjectMap<T, U>(func: (x: T) => U, obj: Record<string, T>) {
    return Object.fromEntries(Object.entries(obj).map(([k, v]) => [k, func(v)]));
}
