// composeR(fromEnum(enumKey, getter), squareBrackets);

export function fmap<T, U>(f: (x: T) => U) {
    return (dbList?: DBList<T>) => (dbList ?? []).map(f);
}
