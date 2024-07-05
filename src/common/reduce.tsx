
export function reduce<T>(f: (x: T, y: T) => T, initial: T) {
    return (dbList?: DBList<T> | T[]) => (dbList ?? []).reduce(f, initial);
}
