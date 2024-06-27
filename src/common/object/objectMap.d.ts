export declare const objectMap: <T, U>(func: (x: T) => U) => (obj: Record<string, T>) => {
    [k: string]: U;
};
