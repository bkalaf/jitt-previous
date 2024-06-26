export function partitionBy<T>(predicate: (x: T) => boolean, arr: T[]) {
    function inner(todo: T[], trues: T[] = [], falses: T[] = []): [T[], T[]] {
        if (todo.length === 0) return [trues, falses];
        const [head, ...tail] = todo;
        return predicate(head) ? inner(tail, [...trues, head], falses) : inner(tail, trues, [...falses, head]);
    }
    return inner(arr);
}
