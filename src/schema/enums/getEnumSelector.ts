export function getEnumSelector<T extends string>(map: Record<T, { selector: string; }>) {
    return function (key: T) {
        return map[key].selector;
    };
}
