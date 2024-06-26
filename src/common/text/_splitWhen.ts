
export function _splitWhen(predicate: Predicate<string>, str: string): string[] {
    function inner(todo: string[], accum: string[][] = [], current: string[] = []): string[][] {
        if (todo.length === 0) return [...accum, current];
        const [head, ...tail] = todo;
        return predicate(head) ? inner(tail, [...accum, current], [head]) : inner(tail, accum, [...current, head]);
    }
    return inner(str.split('')).map((x) => x.join(''));
}
