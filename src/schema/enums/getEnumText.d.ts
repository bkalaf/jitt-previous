export declare function getEnumText<T extends string>(map: Record<T, {
    text: string;
} | string>): (key: T) => string;
