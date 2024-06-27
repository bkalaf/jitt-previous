export declare function getEnumSelector<T extends string>(map: Record<T, {
    selector: string;
}>): (key: T) => string;
