
export function merge<T extends Record<string, any>>(rest: T, propName: string, value: any) {
    if (propName in rest) {
        const { [propName]: current, ...remaining } = rest;
        const merged = { ...current, ...value };
        return { ...remaining, [propName]: merged };
    }
    return rest;
}
