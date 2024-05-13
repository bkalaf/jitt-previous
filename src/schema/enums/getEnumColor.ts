
export function getEnumColor<T extends string>(map: Record<T, { color: string; }>) {
    return function (key: T) {
        return map[key].color;
    };
}
