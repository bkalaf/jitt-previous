export declare function baseObjectMap<T, U>(func: (x: T) => U, obj: Record<string, T>): {
    [k: string]: U;
};
