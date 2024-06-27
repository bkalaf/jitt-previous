export declare function getEnumColor<T extends string>(map: Record<T, {
    color: string;
}>): (key: T) => string;
