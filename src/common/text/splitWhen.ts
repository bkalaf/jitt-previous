export function _splitWhen<T>(func: (x: T) => boolean, arr: T[]) {
    function inner(todo: T[], accum: T[][] = [], current: T[] = []): T[][] {
        if (todo.length === 0) return [...accum, current];
        const [head, ...tail] = todo;
        if (func(head)) return inner(tail, [...accum, current], [head]);
        return inner(tail, accum, [...current, head]);
    }
    return inner(arr);
}

export const splitWhen = function _splitWhen<T>(func: (x: T) => boolean, includeMatch = true) {
    function inner(todo: T[], accum: T[][] = [], current: T[] = []): T[][] {
        if (todo.length === 0) return [...accum, current];
        const [head, ...tail] = todo;
        if (func(head)) return inner(tail, [...accum, current], includeMatch ? [head] : []);
        return inner(tail, accum, [...current, head]);
    }
    return (arr: T[]) => inner(arr);
};
